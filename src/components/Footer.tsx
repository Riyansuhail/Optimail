import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "32px 28px 28px",
        borderTop: "1px solid var(--bdr)",
        fontFamily: "var(--sans)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          marginBottom: 10,
        }}
      >
        <Logo size={22} />
        <span
          style={{
            fontWeight: 800,
            fontSize: 15,
            color: "var(--t1)",
            letterSpacing: "-0.03em",
          }}
        >
          OptiMail
        </span>
      </div>
      <p style={{ color: "var(--t4)", fontSize: 12.5 }}>
        AI-Powered Internal University Email Directory
      </p>
      <p style={{ color: "var(--t5)", fontSize: 11.5, marginTop: 4 }}>
        Built at Northeastern University. © {new Date().getFullYear()} OptiMail
      </p>
    </footer>
  );
}
