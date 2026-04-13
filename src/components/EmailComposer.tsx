"use client";

import { useState } from "react";
import { Mail, FileText, Edit3, Send, Copy, Check, X } from "lucide-react";
import type { GeneratedEmail } from "@/lib/ai";

interface EmailComposerProps {
  email: GeneratedEmail;
  onClose: () => void;
}

export default function EmailComposer({ email, onClose }: EmailComposerProps) {
  const [subject, setSubject] = useState(email.subject);
  const [body, setBody] = useState(email.body);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  if (sent) {
    return (
      <div
        style={{
          background: "linear-gradient(135deg,#F0FDF4,#DCFCE7)",
          border: "1px solid #BBF7D0",
          borderRadius: 16,
          padding: 24,
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 14,
            background: "#22c55e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 12px",
          }}
        >
          <Check size={24} color="#fff" />
        </div>
        <div style={{ fontSize: 16, fontWeight: 700, color: "#166534", marginBottom: 4 }}>
          Email Sent!
        </div>
        <div style={{ fontSize: 13, color: "#4ade80" }}>
          Your message has been sent to {email.to}
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "var(--card)",
        border: "1px solid var(--bdr)",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
          background: "var(--bg)",
          borderBottom: "1px solid var(--bdr)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <FileText size={15} color="var(--ac)" />
          <span style={{ fontSize: 13, fontWeight: 650, color: "var(--t1)" }}>
            Compose Email
          </span>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <button
            onClick={() => {
              const full = `To: ${email.to}\nSubject: ${subject}\n\n${body}`;
              navigator.clipboard?.writeText(full);
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
            style={{
              background: "var(--card)",
              border: "1px solid var(--bdr)",
              borderRadius: 8,
              padding: "5px 12px",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 600,
              color: "var(--t3)",
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            {copied ? <Check size={12} color="#16a34a" /> : <Copy size={12} />}
            {copied ? "Copied" : "Copy All"}
          </button>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--t4)",
              padding: 2,
            }}
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Fields */}
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "var(--t4)",
              width: 50,
              flexShrink: 0,
            }}
          >
            To:
          </span>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "var(--ac-lt)",
              borderRadius: 8,
              padding: "7px 10px",
              border: "1px solid var(--ac-bdr)",
            }}
          >
            <Mail size={13} color="var(--ac)" />
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ac)" }}>
              {email.to}
            </span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "var(--t4)",
              width: 50,
              flexShrink: 0,
            }}
          >
            Subject:
          </span>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={{
              flex: 1,
              background: "var(--bg)",
              border: "1px solid var(--bdr)",
              borderRadius: 8,
              padding: "8px 10px",
              fontSize: 13,
              color: "var(--t1)",
              outline: "none",
              fontFamily: "var(--sans)",
            }}
          />
        </div>

        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 6,
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--t4)" }}>
              Message:
            </span>
            <span
              style={{
                fontSize: 11,
                color: "var(--t5)",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Edit3 size={11} /> Click to edit
            </span>
          </div>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={8}
            style={{
              width: "100%",
              background: "var(--bg)",
              border: "1px solid var(--bdr)",
              borderRadius: 10,
              padding: "10px 12px",
              fontSize: 13,
              color: "var(--t2)",
              lineHeight: 1.65,
              outline: "none",
              resize: "vertical",
              fontFamily: "var(--sans)",
            }}
          />
        </div>
      </div>

      {/* Actions */}
      <div
        style={{
          display: "flex",
          gap: 8,
          padding: "0 16px 16px",
          justifyContent: "flex-end",
        }}
      >
        <button
          onClick={onClose}
          style={{
            background: "var(--bg2)",
            border: "1px solid var(--bdr)",
            borderRadius: 10,
            padding: "9px 18px",
            cursor: "pointer",
            fontSize: 13,
            fontWeight: 600,
            color: "var(--t3)",
          }}
        >
          Cancel
        </button>
        <button
          onClick={() => setSent(true)}
          style={{
            background: "linear-gradient(135deg,var(--ac),#FF8A65)",
            border: "none",
            borderRadius: 10,
            padding: "9px 22px",
            cursor: "pointer",
            fontSize: 13,
            fontWeight: 650,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            gap: 6,
            boxShadow: "0 2px 10px rgba(230,57,70,0.25)",
          }}
        >
          <Send size={14} /> Send Email
        </button>
      </div>
    </div>
  );
}
