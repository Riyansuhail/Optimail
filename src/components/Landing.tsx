"use client";

import { useState, useEffect } from "react";
import {
  Search, Lock, Sparkles, KeyRound, Shield, Zap, Globe, Building2,
  Check, ArrowRight, ChevronRight, Bot, User,
} from "lucide-react";
import Logo from "./Logo";
import Reveal from "./ScrollReveal";

interface LandingProps {
  onSignIn: () => void;
}

export default function Landing({ onSignIn }: LandingProps) {
  // Animated product demo
  const [demoQuery, setDemoQuery] = useState("");
  const [demoResults, setDemoResults] = useState<{ n: string; em: string }[]>([]);
  const [demoOk, setDemoOk] = useState(false);

  useEffect(() => {
    let mounted = true;
    const run = () => {
      const words = "financial aid";
      let i = 0;
      if (mounted) { setDemoQuery(""); setDemoResults([]); setDemoOk(false); }
      const timer = setInterval(() => {
        if (!mounted) { clearInterval(timer); return; }
        if (i <= words.length) { setDemoQuery(words.slice(0, i)); i++; }
        else {
          clearInterval(timer);
          setDemoResults([
            { n: "Financial Aid", em: "finaid@northeastern.edu" },
            { n: "Admissions", em: "admissions@northeastern.edu" },
          ]);
          setTimeout(() => mounted && setDemoOk(true), 800);
        }
      }, 120);
    };
    run();
    const loop = setInterval(run, 9000);
    return () => { mounted = false; clearInterval(loop); };
  }, []);

  return (
    <div style={{ fontFamily: "var(--sans)" }}>
      {/* ──── HERO ──── */}
      <section
        style={{
          background: "linear-gradient(165deg, var(--ink) 0%, var(--ink2) 50%, var(--ink3) 100%)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          padding: "0 28px",
        }}
      >
        {/* Ambient orbs */}
        <div style={{ position: "absolute", top: "5%", left: "10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(230,57,70,0.1) 0%, transparent 65%)", filter: "blur(50px)", animation: "float 10s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,138,101,0.07) 0%, transparent 65%)", filter: "blur(40px)", animation: "float 12s ease-in-out infinite reverse" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.02, backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

        <div className="om-hero-grid" style={{ maxWidth: 1140, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", position: "relative", zIndex: 2, paddingTop: 80 }}>
          {/* Left copy */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "5px 14px", borderRadius: 100, background: "rgba(230,57,70,0.12)", border: "1px solid rgba(230,57,70,0.2)", marginBottom: 28 }}>
              <Sparkles size={13} color="#FF8A65" />
              <span style={{ fontSize: 12.5, color: "#FCA5A5", fontWeight: 600 }}>AI-Powered Internal Directory</span>
            </div>

            <h1 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: "clamp(38px, 5vw, 60px)", color: "#fff", lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.02em" }}>
              Find the right person.
              <br />
              <span className="gradient-text" style={{ fontStyle: "italic" }}>Skip the runaround.</span>
            </h1>

            <p style={{ fontSize: 16.5, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: 420, marginBottom: 36 }}>
              OptiMail helps your university&apos;s students, faculty, and staff find the right contact instantly. Describe your issue, get the right email, and send a message in seconds.
            </p>

            <button
              onClick={onSignIn}
              style={{ background: "linear-gradient(135deg, var(--ac), #FF8A65)", border: "none", borderRadius: 12, padding: "13px 28px", cursor: "pointer", color: "#fff", fontSize: 15, fontWeight: 650, display: "flex", alignItems: "center", gap: 8, boxShadow: "0 4px 20px rgba(230,57,70,0.3)", transition: "transform 0.15s", marginBottom: 32 }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
            >
              <KeyRound size={16} /> Sign in with University SSO
            </button>

            <div style={{ display: "flex", gap: 20, color: "rgba(255,255,255,0.25)", fontSize: 12.5 }}>
              <span style={{ display: "flex", alignItems: "center", gap: 5 }}><Shield size={13} /> FERPA Compliant</span>
              <span style={{ display: "flex", alignItems: "center", gap: 5 }}><Lock size={13} /> University credentials only</span>
            </div>
          </div>

          {/* Right product demo */}
          <div style={{ position: "relative" }} className="om-demo-col">
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 3, boxShadow: "0 40px 80px rgba(0,0,0,0.3)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 14px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FEBC2E" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }} />
                <div style={{ flex: 1, textAlign: "center", fontSize: 11, color: "rgba(255,255,255,0.25)" }}>optimail.app</div>
              </div>
              <div style={{ padding: "24px 20px", minHeight: 300 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                  <Logo size={22} />
                  <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>OptiMail</span>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginLeft: "auto" }}>student@neu.edu</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "8px 12px", marginBottom: 16 }}>
                  <Search size={14} color="rgba(255,255,255,0.3)" />
                  <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, fontFamily: "monospace" }}>
                    {demoQuery}<span style={{ animation: "blink 1s infinite", color: "var(--ac)" }}>|</span>
                  </span>
                </div>
                {demoResults.map((r, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: demoOk && i === 0 ? "rgba(230,57,70,0.1)" : "rgba(255,255,255,0.03)", border: `1px solid ${demoOk && i === 0 ? "rgba(230,57,70,0.25)" : "rgba(255,255,255,0.05)"}`, borderRadius: 10, marginBottom: 8, transition: "0.4s" }}>
                    <div style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(230,57,70,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}><Building2 size={14} color="var(--ac)" /></div>
                    <div><div style={{ color: "#fff", fontSize: 12.5, fontWeight: 600 }}>{r.n}</div><div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>{r.em}</div></div>
                  </div>
                ))}
                {demoOk && (
                  <div style={{ marginTop: 12, padding: "10px 12px", background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 10, display: "flex", alignItems: "center", gap: 8 }}>
                    <Check size={14} color="#22c55e" />
                    <span style={{ color: "#86efac", fontSize: 12, fontWeight: 500 }}>Email drafted and ready to send</span>
                  </div>
                )}
              </div>
            </div>
            <div style={{ position: "absolute", bottom: -16, right: -16, background: "var(--card)", borderRadius: 12, padding: "10px 16px", boxShadow: "0 8px 30px rgba(0,0,0,0.15)", display: "flex", alignItems: "center", gap: 8, border: "1px solid var(--bdr)" }}>
              <Zap size={16} color="var(--ac)" />
              <div><div style={{ fontSize: 13, fontWeight: 700, color: "var(--t1)" }}>Instant results</div><div style={{ fontSize: 11, color: "var(--t4)" }}>AI-powered matching</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── STATS ──── */}
      <section style={{ padding: "52px 28px", borderBottom: "1px solid var(--bdr)" }}>
        <Reveal>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
            {[
              { v: "14+", l: "Departments indexed", icon: Building2 },
              { v: "<2s", l: "Average search time", icon: Zap },
              { v: "FERPA", l: "Compliant and secure", icon: Shield },
              { v: "Multi-campus", l: "Ready to scale", icon: Globe },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, flex: "1 1 200px" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--ac-lt)", border: "1px solid var(--ac-bdr)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <s.icon size={20} color="var(--ac)" />
                </div>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "var(--t1)", letterSpacing: "-0.03em" }}>{s.v}</div>
                  <div style={{ fontSize: 12.5, color: "var(--t4)" }}>{s.l}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ──── HOW IT WORKS ──── */}
      <section style={{ padding: "80px 28px", maxWidth: 1000, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 15, color: "var(--ac)", display: "block", marginBottom: 8 }}>How it works</span>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, color: "var(--t1)", lineHeight: 1.15 }}>
              Describe your issue.<br />Get the right contact and a ready-to-send email.
            </h2>
          </div>
        </Reveal>

        {/* Step 1: Search */}
        <Reveal delay={0.1}>
          <div className="om-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", marginBottom: 72 }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: 10, background: "var(--ac)", color: "#fff", fontWeight: 800, fontSize: 15, marginBottom: 20 }}>1</div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: 28, color: "var(--t1)", marginBottom: 12, fontWeight: 400 }}>Search by topic</h3>
              <p style={{ color: "var(--t3)", fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>
                Type what you need help with instead of guessing department names. &quot;I need scholarship info&quot; works just as well as &quot;Financial Aid.&quot;
              </p>
              <button onClick={onSignIn} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--ac)", fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                Sign in to try it <ArrowRight size={15} />
              </button>
            </div>
            <div style={{ background: "linear-gradient(145deg, var(--ac-lt), #FFF7ED)", borderRadius: 20, padding: 32, border: "1px solid var(--ac-bdr)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, background: "var(--card)", borderRadius: 10, padding: "10px 14px", border: "1px solid var(--bdr)", marginBottom: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                <Search size={15} color="var(--t4)" /><span style={{ color: "var(--t2)", fontSize: 13.5 }}>scholarship help</span>
              </div>
              {["Financial Aid Office", "Admissions", "Graduate Engineering"].map((n, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", background: i === 0 ? "rgba(230,57,70,0.08)" : "var(--card)", borderRadius: 9, marginBottom: 6, border: i === 0 ? "1px solid var(--ac-bdr)" : "1px solid var(--bdr)", opacity: 1 - i * 0.25 }}>
                  <Building2 size={14} color={i === 0 ? "var(--ac)" : "var(--t4)"} />
                  <span style={{ fontSize: 12.5, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? "var(--ac)" : "var(--t3)" }}>{n}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Step 2: AI drafts email */}
        <Reveal delay={0.1}>
          <div className="om-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", marginBottom: 72 }}>
            <div style={{ background: "linear-gradient(145deg, #F5F3FF, #FDF4FF)", borderRadius: 20, padding: 24, border: "1px solid #DDD6FE", order: 0 }} className="om-split-visual">
              <div style={{ display: "flex", gap: 8, alignItems: "flex-end", marginBottom: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "#EDE9FE", display: "flex", alignItems: "center", justifyContent: "center" }}><Bot size={14} color="#7C3AED" /></div>
                <div style={{ background: "var(--card)", borderRadius: "12px 12px 12px 3px", padding: "10px 14px", border: "1px solid var(--bdr)", fontSize: 12.5, color: "var(--t2)", lineHeight: 1.6, maxWidth: "80%" }}>
                  I found the right contact! Here&apos;s a <strong style={{ color: "#7C3AED" }}>draft email</strong> you can send or edit:
                </div>
              </div>
              <div style={{ background: "var(--card)", borderRadius: 10, padding: 12, border: "1px solid var(--bdr)", marginLeft: 36, fontSize: 11.5, color: "var(--t3)", lineHeight: 1.6 }}>
                <div style={{ color: "var(--t4)", marginBottom: 2 }}>To: <span style={{ color: "var(--ac)", fontWeight: 600 }}>issi@northeastern.edu</span></div>
                <div style={{ color: "var(--t4)", marginBottom: 6 }}>Subject: <span style={{ color: "var(--t2)" }}>Visa and Immigration Support</span></div>
                <div style={{ color: "var(--t3)" }}>Dear ISSI Team, I am reaching out because I need help with my OPT application...</div>
              </div>
            </div>
            <div className="om-split-text" style={{ order: 1 }}>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: 10, background: "#7C3AED", color: "#fff", fontWeight: 800, fontSize: 15, marginBottom: 20 }}>2</div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: 28, color: "var(--t1)", marginBottom: 12, fontWeight: 400 }}>AI drafts your email</h3>
              <p style={{ color: "var(--t3)", fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>
                Tell the AI assistant your situation in plain English. It finds the right department and drafts a professional email you can edit and send directly.
              </p>
              <button onClick={onSignIn} style={{ background: "none", border: "none", cursor: "pointer", color: "#7C3AED", fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                Sign in to try <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Step 3: Browse directory */}
        <Reveal delay={0.1}>
          <div className="om-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: 10, background: "#2563EB", color: "#fff", fontWeight: 800, fontSize: 15, marginBottom: 20 }}>3</div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: 28, color: "var(--t1)", marginBottom: 12, fontWeight: 400 }}>Browse the full directory</h3>
              <p style={{ color: "var(--t3)", fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>
                Explore every department and faculty member within your university. Filter by category, copy emails with one click, and see office hours at a glance.
              </p>
              <button onClick={onSignIn} style={{ background: "none", border: "none", cursor: "pointer", color: "#2563EB", fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                Sign in to browse <ArrowRight size={15} />
              </button>
            </div>
            <div style={{ background: "linear-gradient(145deg, #EFF6FF, #F0F9FF)", borderRadius: 20, padding: 32, border: "1px solid #BFDBFE" }}>
              {[
                { n: "Khoury College of CS", t: "Academic" },
                { n: "IT Services", t: "Support" },
                { n: "Career Design", t: "Career" },
              ].map((d, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 14px", background: "var(--card)", borderRadius: 10, marginBottom: 8, border: "1px solid var(--bdr)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: ["#EFF6FF", "#F3E8FF", "#FFF7ED"][i], display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Building2 size={14} color={["#2563EB", "#7C3AED", "#D97706"][i]} />
                    </div>
                    <div>
                      <div style={{ fontSize: 12.5, fontWeight: 600, color: "var(--t1)" }}>{d.n}</div>
                      <div style={{ fontSize: 11, color: "var(--t4)" }}>{d.t}</div>
                    </div>
                  </div>
                  <ChevronRight size={14} color="var(--t5)" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ──── CTA ──── */}
      <Reveal>
        <section style={{ margin: "0 28px 60px", background: "linear-gradient(135deg, var(--ink), var(--ink3))", borderRadius: 24, padding: "56px 40px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "-30%", left: "50%", transform: "translateX(-50%)", width: "80%", height: "60%", background: "radial-gradient(circle, rgba(230,57,70,0.12) 0%, transparent 60%)", filter: "blur(40px)" }} />
          <div style={{ position: "relative", zIndex: 2 }}>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(24px, 3.5vw, 36px)", color: "#fff", marginBottom: 14, fontWeight: 400 }}>
              Ready to find the <span style={{ fontStyle: "italic" }} className="gradient-text">right contact?</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 15, marginBottom: 28, maxWidth: 400, margin: "0 auto 28px" }}>
              Sign in with your university credentials and stop emailing the wrong department.
            </p>
            <button onClick={onSignIn} style={{ background: "linear-gradient(135deg, var(--ac), #FF8A65)", border: "none", borderRadius: 12, padding: "13px 32px", cursor: "pointer", color: "#fff", fontSize: 15, fontWeight: 650, boxShadow: "0 4px 20px rgba(230,57,70,0.3)", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <KeyRound size={16} /> Sign In to Get Started
            </button>
          </div>
        </section>
      </Reveal>

      <style>{`
        @media (max-width: 768px) {
          .om-hero-grid { grid-template-columns: 1fr !important; text-align: center; padding-top: 120px !important; }
          .om-demo-col { display: none !important; }
          .om-split { grid-template-columns: 1fr !important; }
          .om-split-visual { order: 1 !important; }
          .om-split-text { order: 0 !important; }
        }
      `}</style>
    </div>
  );
}
