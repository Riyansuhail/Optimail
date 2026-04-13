"use client";

import { useState } from "react";
import { Search, Building2, GraduationCap, BookOpen, Mail, Phone, MapPin, Clock, ChevronDown } from "lucide-react";
import { DEPARTMENTS, FACULTY, CATEGORIES, AVATAR_COLORS } from "@/data/university";
import CopyButton from "./CopyButton";
import Reveal from "./ScrollReveal";

export default function Directory() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<number | null>(null);
  const [tab, setTab] = useState("departments");

  const filteredDepts = DEPARTMENTS.filter(
    (d) => (category === "All" || d.category === category) && (d.name.toLowerCase().includes(search.toLowerCase()) || d.description.toLowerCase().includes(search.toLowerCase()))
  );

  const filteredFaculty = FACULTY.filter(
    (f) => f.name.toLowerCase().includes(search.toLowerCase()) || f.department.toLowerCase().includes(search.toLowerCase()) || f.research.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ minHeight: "100vh", padding: "84px 28px 60px", maxWidth: 900, margin: "0 auto", fontFamily: "var(--sans)" }}>
      <Reveal>
        <div style={{ marginBottom: 28 }}>
          <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 14, color: "var(--ac)" }}>Directory</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: 30, color: "var(--t1)", marginTop: 4, fontWeight: 400 }}>Browse all contacts</h2>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div style={{ display: "flex", gap: 10, marginBottom: 18, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 220, display: "flex", alignItems: "center", gap: 10, background: "var(--card)", border: "1.5px solid var(--bdr)", borderRadius: 12, padding: "0 14px" }}>
            <Search size={15} color="var(--t4)" />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Filter..." style={{ flex: 1, background: "none", border: "none", outline: "none", color: "var(--t1)", fontSize: 14, padding: "11px 0" }} />
          </div>
          <div style={{ display: "flex", background: "var(--bg2)", borderRadius: 11, padding: 3, border: "1px solid var(--bdr)" }}>
            {["departments", "faculty"].map((t) => (
              <button key={t} onClick={() => setTab(t)} style={{ background: tab === t ? "var(--card)" : "transparent", border: "none", borderRadius: 9, padding: "8px 18px", cursor: "pointer", color: tab === t ? "var(--t1)" : "var(--t4)", fontSize: 13, fontWeight: 580, boxShadow: tab === t ? "0 1px 4px rgba(0,0,0,0.06)" : "none", textTransform: "capitalize" }}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {tab === "departments" && (
        <Reveal delay={0.08}>
          <div style={{ display: "flex", gap: 6, marginBottom: 18, flexWrap: "wrap" }}>
            {CATEGORIES.map((c) => (
              <button key={c} onClick={() => setCategory(c)} style={{ background: category === c ? "var(--t1)" : "var(--card)", border: `1px solid ${category === c ? "var(--t1)" : "var(--bdr)"}`, borderRadius: 100, padding: "5px 15px", cursor: "pointer", color: category === c ? "#fff" : "var(--t3)", fontSize: 12.5, fontWeight: 560 }}>
                {c}
              </button>
            ))}
          </div>
        </Reveal>
      )}

      {tab === "departments" && (
        <div style={{ display: "grid", gap: 8 }}>
          {filteredDepts.map((dept, i) => (
            <Reveal key={dept.id} delay={Math.min(i * 0.03, 0.2)}>
              <div
                style={{ background: "var(--card)", border: "1px solid var(--bdr)", borderRadius: 14, overflow: "hidden", transition: "0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.04)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <button
                  onClick={() => setExpanded(expanded === dept.id ? null : dept.id)}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "15px 20px", cursor: "pointer", display: "flex", alignItems: "center", gap: 14 }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 11, background: "var(--ac-lt)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid var(--ac-bdr)" }}>
                    <Building2 size={18} color="var(--ac)" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: "var(--t1)", fontSize: 14.5, fontWeight: 640 }}>{dept.name}</div>
                    <div style={{ color: "var(--t4)", fontSize: 12.5, marginTop: 2 }}>{dept.description}</div>
                  </div>
                  <span style={{ color: "var(--t4)", fontSize: 11, background: "var(--bg2)", padding: "3px 10px", borderRadius: 6, fontWeight: 550, flexShrink: 0 }}>{dept.category}</span>
                  <ChevronDown size={16} color="var(--t4)" style={{ transform: expanded === dept.id ? "rotate(180deg)" : "none", transition: "0.3s cubic-bezier(0.16,1,0.3,1)", flexShrink: 0 }} />
                </button>

                {expanded === dept.id && (
                  <div style={{ padding: "4px 20px 18px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 8 }}>
                    {[
                      { icon: Mail, label: "Email", value: dept.email, highlight: true },
                      { icon: Phone, label: "Phone", value: dept.phone, highlight: false },
                      { icon: MapPin, label: "Location", value: dept.location, highlight: false },
                      { icon: Clock, label: "Hours", value: dept.hours, highlight: false },
                    ].map((info, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "center", gap: 10, background: info.highlight ? "var(--ac-lt)" : "var(--bg)", borderRadius: 10, padding: "11px 13px", border: `1px solid ${info.highlight ? "var(--ac-bdr)" : "var(--bdr)"}` }}>
                        <info.icon size={14} color={info.highlight ? "var(--ac)" : "var(--t4)"} />
                        <div style={{ flex: 1 }}>
                          <div style={{ color: "var(--t4)", fontSize: 10, fontWeight: 650, textTransform: "uppercase", letterSpacing: "0.06em" }}>{info.label}</div>
                          <div style={{ color: info.highlight ? "var(--ac)" : "var(--t1)", fontSize: 12.5, fontWeight: 560 }}>{info.value}</div>
                        </div>
                        {info.highlight && <CopyButton text={info.value} />}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      )}

      {tab === "faculty" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 12 }}>
          {filteredFaculty.map((fac, i) => (
            <Reveal key={fac.id} delay={Math.min(i * 0.05, 0.2)}>
              <div
                style={{ background: "var(--card)", border: "1px solid var(--bdr)", borderRadius: 14, padding: "22px", transition: "0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.04)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 16 }}>
                  <div style={{ width: 46, height: 46, borderRadius: 13, background: AVATAR_COLORS[i % AVATAR_COLORS.length], display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "#fff", fontSize: 15, fontWeight: 700 }}>{fac.initials}</span>
                  </div>
                  <div>
                    <div style={{ color: "var(--t1)", fontSize: 14.5, fontWeight: 640 }}>{fac.name}</div>
                    <div style={{ color: "var(--t4)", fontSize: 12 }}>{fac.title}</div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, background: "var(--ac-lt)", borderRadius: 8, padding: "8px 10px", border: "1px solid var(--ac-bdr)" }}>
                    <Mail size={13} color="var(--ac)" />
                    <span style={{ color: "var(--ac)", fontSize: 12.5, fontWeight: 580, flex: 1 }}>{fac.email}</span>
                    <CopyButton text={fac.email} />
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <BookOpen size={12} color="var(--t4)" />
                    <span style={{ color: "var(--t3)", fontSize: 12.5 }}>{fac.research}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <MapPin size={12} color="var(--t4)" />
                    <span style={{ color: "var(--t3)", fontSize: 12.5 }}>{fac.office}, {fac.hours}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
