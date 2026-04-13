"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      style={{
        background: copied ? "#DCFCE7" : "var(--bg2)",
        border: "none",
        borderRadius: 7,
        width: 28,
        height: 28,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "0.2s",
        flexShrink: 0,
      }}
    >
      {copied ? (
        <Check size={13} color="#16a34a" />
      ) : (
        <Copy size={13} color="var(--t4)" />
      )}
    </button>
  );
}
