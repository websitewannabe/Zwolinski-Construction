import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { SYSTEM_PROMPT } from "@/lib/chatbot/system-prompt";

const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 500;

export async function POST(request: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Chat is not configured." },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const { messages } = body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages are required." },
        { status: 400 }
      );
    }

    // Validate and truncate messages
    const sanitized = messages.slice(-MAX_MESSAGES).map(
      (msg: { role: string; content: string }) => ({
        role: (msg.role === "user" ? "user" : "assistant") as "user" | "assistant",
        content: String(msg.content).slice(0, MAX_MESSAGE_LENGTH),
      })
    );

    // Ensure conversation starts with a user message
    if (sanitized[0]?.role !== "user") {
      return NextResponse.json(
        { error: "Conversation must start with a user message." },
        { status: 400 }
      );
    }

    const anthropic = new Anthropic({ apiKey });

    const response = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 200,
      system: SYSTEM_PROMPT,
      messages: sanitized,
    });

    const text =
      response.content[0]?.type === "text" ? response.content[0].text : "";

    return NextResponse.json({ message: text });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
