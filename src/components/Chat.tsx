"use client";

import { useState, useEffect, useRef } from "react";
import { Send, Bot, User, Mail, ArrowRight } from "lucide-react";
import { getAIResponse, GeneratedEmail } from "@/lib/ai";
import EmailComposer from "./EmailComposer";

interface Message {
  role: "ai" | "user";
  text: string;
  email: GeneratedEmail | null;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "Hey! I'm OptiMail's assistant. Tell me what you need help with and I'll find the right contact and draft an email for you.\n\nJust describe your situation in plain English.",
      email: null,
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [activeEmail, setActiveEmail] = useState<GeneratedEmail | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = () => {
    if (!input.trim()) return;
    const msg = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: msg, email: null }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const response = getAIResponse(msg);
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: response.text, email: response.email },
      ]);
      setTyping(false);
    }, 600 + Math.random() * 500);
  };

  const renderMarkdown = (text: string) =>
    text
      .replace(
        /\*\*(.*?)\*\*/g,
        '<strong style="color:var(--t1);font-weight:660">$1</strong>'
      )
      .replace(/\n\n/g, "<br/><br/>")
      .replace(
        /› /g,
        '<span style="color:var(--ac);font-weight:700;margin-right:4px">›</span>'
      );

  const suggestions = [
    "I need help with financial aid",
    "My OPT application has questions",
    "Wi-Fi isn't working in my dorm",
    "Co-op career advice",
    "How do I get my transcript?",
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        maxWidth: 700,
        margin: "0 auto",
        padding: "72px 16px 0",
        fontFamily: "var(--sans)",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "16px 8px 14px",
          borderBottom: "1px solid var(--bdr)",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            background: "linear-gradient(135deg, var(--ac), #FF8A65)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 10px rgba(230,57,70,0.2)",
          }}
        >
          <Bot size={19} color="#fff" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ color: "var(--t1)", fontSize: 15.5, fontWeight: 660 }}>
            OptiMail Assistant
          </div>
          <div
            style={{
              color: "var(--t4)",
              fontSize: 12,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#22c55e",
                display: "inline-block",
                boxShadow: "0 0 6px rgba(34,197,94,0.4)",
              }}
            />
            Finds contacts and drafts emails
          </div>
        </div>
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px 4px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        {messages.map((m, i) => (
          <div key={i}>
            <div
              style={{
                display: "flex",
                justifyContent: m.role === "user" ? "flex-end" : "flex-start",
                gap: 9,
                alignItems: "flex-end",
              }}
            >
              {m.role === "ai" && (
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 9,
                    background: "var(--ac-lt)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    border: "1px solid var(--ac-bdr)",
                  }}
                >
                  <Bot size={14} color="var(--ac)" />
                </div>
              )}
              <div
                style={{
                  maxWidth: "80%",
                  padding: "13px 17px",
                  borderRadius:
                    m.role === "user"
                      ? "18px 18px 4px 18px"
                      : "18px 18px 18px 4px",
                  background:
                    m.role === "user"
                      ? "linear-gradient(135deg, var(--ac), var(--ac-dk))"
                      : "var(--card)",
                  border:
                    m.role === "user" ? "none" : "1px solid var(--bdr)",
                  boxShadow:
                    m.role === "user"
                      ? "0 2px 12px rgba(230,57,70,0.2)"
                      : "0 1px 4px rgba(0,0,0,0.03)",
                }}
              >
                <div
                  style={{
                    color: m.role === "user" ? "#fff" : "var(--t3)",
                    fontSize: 13.5,
                    lineHeight: 1.7,
                  }}
                  dangerouslySetInnerHTML={{
                    __html: renderMarkdown(m.text),
                  }}
                />
              </div>
              {m.role === "user" && (
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 9,
                    background: "var(--bg2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    border: "1px solid var(--bdr)",
                  }}
                >
                  <User size={14} color="var(--t4)" />
                </div>
              )}
            </div>

            {/* Email composer trigger */}
            {m.email && activeEmail !== m.email && (
              <div style={{ marginLeft: 39, marginTop: 8 }}>
                <button
                  onClick={() => setActiveEmail(m.email)}
                  style={{
                    background:
                      "linear-gradient(135deg, var(--ac-lt), #FFF7ED)",
                    border: "1px solid var(--ac-bdr)",
                    borderRadius: 12,
                    padding: "12px 16px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    width: "100%",
                    textAlign: "left",
                    transition: "0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 4px 16px rgba(230,57,70,0.08)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow = "none")
                  }
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: "var(--ac)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Mail size={16} color="#fff" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 650,
                        color: "var(--t1)",
                      }}
                    >
                      Draft email ready
                    </div>
                    <div style={{ fontSize: 12, color: "var(--t4)" }}>
                      To: {m.email.to} — Click to review and send
                    </div>
                  </div>
                  <ArrowRight size={16} color="var(--ac)" />
                </button>
              </div>
            )}

            {/* Active email composer */}
            {m.email && activeEmail === m.email && (
              <div style={{ marginLeft: 39, marginTop: 8 }}>
                <EmailComposer
                  email={m.email}
                  onClose={() => setActiveEmail(null)}
                />
              </div>
            )}
          </div>
        ))}

        {/* Typing indicator */}
        {typing && (
          <div
            style={{
              display: "flex",
              gap: 9,
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 9,
                background: "var(--ac-lt)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid var(--ac-bdr)",
              }}
            >
              <Bot size={14} color="var(--ac)" />
            </div>
            <div
              style={{
                background: "var(--card)",
                borderRadius: "18px 18px 18px 4px",
                padding: "15px 20px",
                border: "1px solid var(--bdr)",
              }}
            >
              <div style={{ display: "flex", gap: 5 }}>
                {[0, 1, 2].map((j) => (
                  <div
                    key={j}
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--t5)",
                      animation: `dotBounce 1.2s infinite ${j * 0.2}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Suggestions */}
      {messages.length <= 1 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 7,
            padding: "0 4px 12px",
          }}
        >
          {suggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => setInput(s)}
              style={{
                background: "var(--card)",
                border: "1px solid var(--bdr)",
                borderRadius: 100,
                padding: "8px 16px",
                cursor: "pointer",
                color: "var(--t3)",
                fontSize: 12.5,
                fontWeight: 520,
                transition: "0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--ac)";
                e.currentTarget.style.color = "var(--ac)";
                e.currentTarget.style.background = "var(--ac-lt)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--bdr)";
                e.currentTarget.style.color = "var(--t3)";
                e.currentTarget.style.background = "var(--card)";
              }}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div
        style={{
          display: "flex",
          gap: 10,
          padding: "14px 4px 24px",
          borderTop: "1px solid var(--bdr)",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            background: "var(--card)",
            border: "1.5px solid var(--bdr)",
            borderRadius: 14,
            padding: "0 16px",
            transition: "0.2s",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "var(--ac)";
            e.currentTarget.style.boxShadow =
              "0 0 0 3px rgba(230,57,70,0.06)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "var(--bdr)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Describe your issue..."
            style={{
              flex: 1,
              background: "none",
              border: "none",
              outline: "none",
              color: "var(--t1)",
              fontSize: 14,
              padding: "13px 0",
            }}
          />
        </div>
        <button
          onClick={send}
          disabled={!input.trim()}
          style={{
            width: 48,
            height: 48,
            borderRadius: 14,
            border: "none",
            cursor: input.trim() ? "pointer" : "default",
            background: input.trim()
              ? "linear-gradient(135deg, var(--ac), #FF8A65)"
              : "var(--bg2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.25s",
            boxShadow: input.trim()
              ? "0 2px 12px rgba(230,57,70,0.25)"
              : "none",
            transform: input.trim() ? "scale(1)" : "scale(0.92)",
          }}
        >
          <Send size={17} color={input.trim() ? "#fff" : "var(--t5)"} />
        </button>
      </div>
    </div>
  );
}
