"use client";

import { useState, useEffect } from "react";
import { Search, MessageSquare, Users, LogIn, LogOut, X, Menu } from "lucide-react";
import Logo from "./Logo";

interface NavProps {
  page: string;
  setPage: (p: string) => void;
  auth: boolean;
  onSignIn: () => void;
  onSignOut: () => void;
}

export default function Nav({ page, setPage, auth, onSignIn, onSignOut }: NavProps) {
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const dark = !auth && !scrolled;
  const items = auth
    ? [
        { id: "search", icon: Search, label: "Search" },
        { id: "directory", icon: Users, label: "Directory" },
        { id: "chat", icon: MessageSquare, label: "Assistant" },
      ]
    : [];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled || auth ? "rgba(255,255,255,0.85)" : "transparent",
        backdropFilter: scrolled || auth ? "blur(20px) saturate(180%)" : "none",
        borderBottom: scrolled || auth ? "1px solid var(--bdr)" : "1px solid transparent",
        transition: "all 0.4s",
      }}
    >
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "0 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 60,
        }}
      >
        {/* Logo */}
        <button
          onClick={() => setPage(auth ? "search" : "landing")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Logo size={30} />
          <span
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 800,
              fontSize: 19,
              color: dark ? "#fff" : "var(--t1)",
              letterSpacing: "-0.04em",
              transition: "color 0.3s",
            }}
          >
            OptiMail
          </span>
        </button>

        {/* Desktop nav items */}
        {auth && (
          <div className="om-desktop-nav" style={{ display: "flex", gap: 2 }}>
            {items.map((n) => (
              <button
                key={n.id}
                onClick={() => setPage(n.id)}
                style={{
                  background: page === n.id ? "var(--ac-lt)" : "transparent",
                  border: "none",
                  borderRadius: 9,
                  padding: "7px 16px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  color: page === n.id ? "var(--ac)" : "var(--t3)",
                  fontWeight: page === n.id ? 620 : 500,
                  fontSize: 13.5,
                  transition: "0.2s",
                }}
              >
                <n.icon size={15} />
                {n.label}
              </button>
            ))}
          </div>
        )}

        {/* Right side */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {auth && (
            <span style={{ fontSize: 12.5, color: "var(--t4)", marginRight: 4 }}>
              student@northeastern.edu
            </span>
          )}
          <button
            onClick={auth ? onSignOut : onSignIn}
            style={{
              background: auth ? "var(--ac-lt)" : "var(--ac)",
              border: auth ? "1.5px solid var(--ac)" : "1.5px solid transparent",
              borderRadius: 9,
              padding: "7px 18px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 7,
              color: auth ? "var(--ac)" : "#fff",
              fontWeight: 650,
              fontSize: 13,
              transition: "0.2s",
            }}
          >
            {auth ? <LogOut size={14} /> : <LogIn size={14} />}
            {auth ? "Sign Out" : "Sign In"}
          </button>
          {auth && (
            <button
              className="om-mobile-btn"
              onClick={() => setMobile(!mobile)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "none",
                color: "var(--t2)",
              }}
            >
              {mobile ? <X size={22} /> : <Menu size={22} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {mobile && auth && (
        <div
          className="om-mobile-menu"
          style={{
            padding: "8px 24px 16px",
            background: "var(--card)",
            borderTop: "1px solid var(--bdr)",
          }}
        >
          {items.map((n) => (
            <button
              key={n.id}
              onClick={() => {
                setPage(n.id);
                setMobile(false);
              }}
              style={{
                width: "100%",
                textAlign: "left",
                background: page === n.id ? "var(--ac-lt)" : "transparent",
                border: "none",
                borderRadius: 9,
                padding: "12px 16px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: page === n.id ? "var(--ac)" : "var(--t3)",
                fontWeight: 500,
                fontSize: 14.5,
              }}
            >
              <n.icon size={17} />
              {n.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 680px) {
          .om-desktop-nav { display: none !important; }
          .om-mobile-btn { display: block !important; }
        }
        @media (min-width: 681px) {
          .om-mobile-menu { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
