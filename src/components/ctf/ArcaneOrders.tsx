"use client";
import { motion } from "framer-motion";

const orders = [
  {
    title: "House Umbra",
    subtitle: "SHADOW & STEGANOGRAPHY",
    icon: "🌑",
    color: "#b19cd9",
    tag: "Beginner",
    pts: "100–300 pts",
    desc: "Masters of concealment. Hide messages within images, audio files, and corrupted data streams that only the truly perceptive can decode.",
  },
  {
    title: "House Crypta",
    subtitle: "CRYPTOGRAPHY & CIPHERS",
    icon: "🔮",
    color: "#9370db",
    tag: "Intermediate",
    pts: "300–600 pts",
    desc: "Wielders of ancient codes. Caesar ciphers, RSA vulnerabilities, hash collisions, and arcane mathematical puzzles await the cunning.",
  },
  {
    title: "House Vulnus",
    subtitle: "WEB EXPLOITATION",
    icon: "⚡",
    color: "#ffb6b6",
    tag: "Advanced",
    pts: "600–1000 pts",
    desc: "Seekers of cracks in fortresses. SQL injections, XSS enchantments, SSRF portals, and authentication bypasses for the bold.",
  },
  {
    title: "House Inversus",
    subtitle: "REVERSE ENGINEERING",
    icon: "🧿",
    color: "#fce883",
    tag: "Expert",
    pts: "1000–1500 pts",
    desc: "Unravelers of forbidden machines. Disassemble binaries, defeat obfuscation spells, and extract secrets from enchanted executables.",
  }
];

export default function ArcaneOrders() {
  return (
    <section style={{ padding: "8rem 2rem", position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2 style={{
        fontFamily: "var(--font-heading)",
        fontSize: "clamp(2.5rem, 5vw, 4rem)",
        fontWeight: 700,
        color: "#d48a20",
        marginBottom: "0.5rem",
        textAlign: "center",
      }}>
        The Four Arcane Orders
      </h2>
      <div style={{
        fontFamily: "var(--font-heading)",
        fontSize: "0.8rem",
        color: "rgba(212, 138, 32, 0.6)",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        marginBottom: "4rem",
        textAlign: "center",
      }}>
        CHOOSE YOUR REALM — OR CONQUER THEM ALL
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "2rem",
        width: "100%",
        maxWidth: "1000px"
      }}>
        {orders.map((order, i) => (
          <motion.div
            key={order.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            style={{
              background: "rgba(10, 5, 20, 0.6)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "12px",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              backdropFilter: "blur(10px)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(212, 138, 32, 0.3)";
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
              <div style={{ fontSize: "2rem", lineHeight: 1 }}>{order.icon}</div>
              <div>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.6rem",
                  color: order.color,
                  fontWeight: 700,
                  marginBottom: "0.3rem"
                }}>
                  {order.title}
                </h3>
                <div style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.75rem",
                  color: "rgba(212, 138, 32, 0.7)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase"
                }}>
                  {order.subtitle}
                </div>
              </div>
            </div>

            <p style={{
              fontFamily: "var(--font-decorative)",
              fontSize: "1.15rem",
              lineHeight: 1.6,
              color: "#a68a56",
              flexGrow: 1
            }}>
              {order.desc}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "auto" }}>
              <span style={{
                padding: "0.4rem 1rem",
                borderRadius: "30px",
                border: "1px solid rgba(212, 138, 32, 0.3)",
                color: "#d48a20",
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em"
              }}>
                {order.tag}
              </span>
              <span style={{
                color: "rgba(212, 138, 32, 0.4)",
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
              }}>
                {order.pts}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
