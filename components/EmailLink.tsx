"use client";

import { useEffect, useState } from "react";

interface EmailLinkProps {
  user: string;
  domain: string;
  className?: string;
  showIcon?: boolean;
}

/**
 * Client-side only email link component.
 * Prevents Cloudflare email obfuscation from rewriting the email
 * into a broken /cdn-cgi/l/email-protection link.
 * The email is only assembled after hydration, so it never appears
 * in the server-rendered HTML.
 */
export default function EmailLink({
  user,
  domain,
  className = "",
  showIcon = false,
}: EmailLinkProps) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    setEmail(`${user}@${domain}`);
  }, [user, domain]);

  if (!email) {
    return (
      <span className={className}>
        {showIcon ? "Email Us" : "Loading..."}
      </span>
    );
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  );
}
