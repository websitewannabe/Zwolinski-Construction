"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, Phone } from "lucide-react";
import { useQuoteModal } from "@/components/QuoteModal";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hello! I'm the Zwolinski Quality Construction assistant. Whether you have questions about kitchen, bathroom, or basement remodeling, I'm here to help. How can I assist you today?",
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { openQuoteModal } = useQuoteModal();

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = { role: "user", content: trimmed };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      // Only send user/assistant messages (skip the initial greeting for API)
      const apiMessages = updatedMessages
        .filter((_, i) => i > 0 || updatedMessages[0].role === "user")
        .map((m) => ({ role: m.role, content: m.content }));

      // If conversation started with assistant greeting, only send from first user message
      const firstUserIdx = updatedMessages.findIndex(
        (m) => m.role === "user"
      );
      const messagesForApi = updatedMessages
        .slice(firstUserIdx)
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: messagesForApi }),
      });

      if (!res.ok) {
        throw new Error("Failed to get response");
      }

      const data = await res.json();
      let assistantText: string = data.message;

      // Check for quote modal trigger
      if (assistantText.includes("[OPEN_QUOTE_MODAL]")) {
        assistantText = assistantText.replace("[OPEN_QUOTE_MODAL]", "").trim();
        setTimeout(() => openQuoteModal(), 500);
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: assistantText },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm sorry, I'm having trouble connecting right now. Please call us at (267) 471-6120 or try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Stop all key events from bubbling to parent elements (e.g., toggle button)
    e.stopPropagation();
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-[90] w-[calc(100vw-2rem)] sm:w-96 animate-slideUp">
          <div className="bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl shadow-black/50 flex flex-col h-[480px] sm:h-[520px] overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between shrink-0">
              <div>
                <p className="text-primary text-[10px] uppercase tracking-[0.3em] mb-0.5">
                  Virtual Assistant
                </p>
                <h3 className="font-serif text-lg text-white leading-tight">
                  Chat with Us
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="tel:+12674716120"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800 text-zinc-400 hover:text-accent hover:bg-zinc-700 transition-all"
                  aria-label="Call us at (267) 471-6120"
                >
                  <Phone className="h-3.5 w-3.5" />
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-accent/20 border border-accent/30 text-white rounded-br-sm"
                        : "bg-zinc-800/50 border border-zinc-700 text-zinc-300 rounded-bl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl rounded-bl-sm px-4 py-3">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce [animation-delay:0ms]" />
                      <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce [animation-delay:150ms]" />
                      <div className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-zinc-800 shrink-0">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about our services..."
                  aria-label="Type your message"
                  maxLength={500}
                  disabled={isLoading}
                  className="flex-1 px-3.5 py-2.5 bg-zinc-800/50 border border-zinc-700 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all disabled:opacity-50"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  aria-label="Send message"
                  className="px-3.5 py-2.5 bg-gradient-to-r from-zinc-400 via-accent to-zinc-400 bg-[length:200%_100%] bg-left hover:bg-right text-white rounded-lg transition-all duration-500 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="text-zinc-400 text-[10px] text-center mt-1.5">
                AI assistant &middot; For urgent needs call{" "}
                <a
                  href="tel:+12674716120"
                  className="text-zinc-300 hover:text-accent transition-colors"
                >
                  (267) 471-6120
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[89]">
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#A3A3A3] to-[#147FBB] p-[2px]">
            <div className="w-full h-full rounded-full bg-white" />
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-14 h-14 rounded-full shadow-lg shadow-black/40 flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer ${
            isOpen
              ? "bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white"
              : "bg-transparent text-[#147FBB]"
          }`}
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
        </button>
      </div>
    </>
  );
}
