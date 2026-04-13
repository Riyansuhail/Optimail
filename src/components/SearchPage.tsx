"use client";

import { useState, useCallback } from "react";
import { Search, Building2, GraduationCap, Bot, ArrowUpRight } from "lucide-react";
import { DEPARTMENTS, FACULTY } from "@/data/university";
import CopyButton from "./CopyButton";
import Reveal from "./ScrollReveal";

interface SearchPageProps {
  setPage: (p: string) => void;
}

export default function SearchPage({ setPage }: SearchPageProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);

  const search = useCallback((value: string) => {
    setQuery(value);
    if (value.length < 2) { setResults([]); setShowResults(false); return; }
    const l = value.toLowerCase();
    const deptResults = DEPARTMENTS
      .filter((x) => x.name.toLowerCase().includes(l) || x.description.toLowerCase().includes(l) || x.tags.some((t) => t.includes(l)))
      .map((x) => ({ ...x, type: "dept" }));
    const facResults = FACULTY
      .filter((x) => x.name.toLowerCase().includes(l) || x.department.toLowerCase().includes(l) || x.research.toLowerCase().includes(l))
      .map((x) => ({ ...x, type: "faculty" }));
    setResults([...deptResults, ...facResults].slice(0, 10));
    setShowResults(true);
  }, []);

  return (
    <div style={{ minHeight: "100vh", padding: "84px 28px 60px", maxWidth: 700, margin: "0 auto", fontFamily: "var(--sans)" }}>
      <Reveal>
        <div style={{ marginBottom: 32 }}>
          <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 14, color: "var(--ac)" }}>Search</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: 30, color: "var(--t1)", marginTop: 4, fontWeight: 400 }}>Find the right contact</h2>
          <p style={{ color: "var(--t3)", fontSize: 14, marginTop: 4 }}>Search by name, department, role, or describe what you need</p>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div style={{ position: "relative", zIndex: 10 }}>
          <div
            style={{ display: "flex", alignItems: "center", gap: 10, background: "var(--card)", border: "1.5px solid var(--bdr)", borderRadius: 14, padding: "5px 5px 5px 18px", boxShadow: "0 2px 16px rgba(0,0,0,0.04)", transition: "0.3s" }}
            onFocus={(e) => { e.currentTarget.style.borderColor = "var(--ac)"; e.currentTarget.style.boxShadow = "0 2px 16px rgba(230,57,70,0.06), 0 0 0 3px rgba(230,57,70,0.04)"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "var(--bdr)"; e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.04)"; }}
          >
            <Search size={18} color="var(--t4)" />
            <input
              type="text" value={query} onChange={(e) => search(e.target.value)}
              placeholder="Try 'visa support' or 'financial aid'..."
              style={{ flex: 1, background: "none", border: "none", outline: "none", color: "var(--t1)", fontSize: 15, padding: "12px 0" }}
            />
            <button onClick={() => search(query)} style={{ background: "var(--ac)", border: "none", borderRadius: 10, padding: "10px 20px", cursor: "pointer", color: "#fff", fontSize: 13.5, fontWeight: 650 }}>
              Search
            </button>
          </div>

          {showResults && results.length > 0 && (
            <div style={{ marginTop: 12, background: "var(--card)", border: "1px solid var(--bdr)", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <div style={{ padding: "10px 16px 6px", fontSize: 11, fontWeight: 600, color: "var(--t4)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {results.length} result{results.length > 1 ? "s" : ""}
              </div>
              {results.map((r, i) => (
                <div
                  key={i}
                  style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", borderBottom: i < results.length - 1 ? "1px solid var(--bg2)" : "none", cursor: "pointer", transition: "0.1s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
                  onClick={() => setPage("directory")}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 11, background: r.type === "dept" ? "var(--ac-lt)" : "#FFF7ED", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {r.type === "dept" ? <Building2 size={17} color="var(--ac)" /> : <GraduationCap size={17} color="#D97706" />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: "var(--t1)", fontSize: 14, fontWeight: 620 }}>{r.type === "dept" ? r.name : r.name}</div>
                    <div style={{ color: "var(--t4)", fontSize: 12.5, marginTop: 1 }}>{r.type === "dept" ? r.description : `${r.title} at ${r.department}`}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ color: "var(--ac)", fontSize: 12, fontWeight: 550 }}>{r.email}</span>
                    <CopyButton text={r.email} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {showResults && query.length >= 2 && results.length === 0 && (
            <div style={{ marginTop: 12, background: "var(--card)", border: "1px solid var(--bdr)", borderRadius: 16, padding: "28px", textAlign: "center" }}>
              <Bot size={28} color="var(--t5)" style={{ marginBottom: 8 }} />
              <p style={{ color: "var(--t3)", fontSize: 14, marginBottom: 12 }}>No results for &quot;{query}&quot;</p>
              <button onClick={() => setPage("chat")} style={{ background: "var(--ac)", border: "none", borderRadius: 10, padding: "9px 20px", cursor: "pointer", color: "#fff", fontSize: 13, fontWeight: 620 }}>
                Ask AI Assistant
              </button>
            </div>
          )}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}>
          {["Financial Aid", "Registration", "IT Help", "Co-op", "Housing", "Visa", "Health", "Library"].map((tag) => (
            <button
              key={tag}
              onClick={() => search(tag.split(" ")[0])}
              style={{ background: "var(--card)", border: "1px solid var(--bdr)", borderRadius: 100, padding: "7px 16px", cursor: "pointer", color: "var(--t3)", fontSize: 13, fontWeight: 500, transition: "0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--ac)"; e.currentTarget.style.color = "var(--ac)"; e.currentTarget.style.background = "var(--ac-lt)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--bdr)"; e.currentTarget.style.color = "var(--t3)"; e.currentTarget.style.background = "var(--card)"; }}
            >
              {tag}
            </button>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
