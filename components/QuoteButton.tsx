"use client";

import { useQuoteModal } from "@/components/QuoteModal";
import { ArrowRight } from "lucide-react";

interface QuoteButtonProps {
  text?: string;
  className?: string;
  showArrow?: boolean;
}

export default function QuoteButton({
  text = "Get a Free Quote",
  className = "btn-primary",
  showArrow = true,
}: QuoteButtonProps) {
  const { openQuoteModal } = useQuoteModal();

  return (
    <button onClick={openQuoteModal} className={className}>
      {text}
      {showArrow && <ArrowRight className="ml-2 h-4 w-4" />}
    </button>
  );
}
