"use client";
import { motion } from "framer-motion";

export default function Treasures() {
  return (
    <section style={{ padding: "4rem 2rem 8rem", position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ display: "flex", gap: "0.8rem", alignItems: "center", marginBottom: "3rem" }}>
        <span style={{ color: "rgba(212,138,32,0.8)", fontSize: "0.8rem" }}>✦</span>
        <span style={{ color: "rgba(212,138,32,0.8)", fontSize: "1rem" }}>✦</span>
        <span style={{ color: "rgba(212,138,32,0.8)", fontSize: "0.8rem" }}>✦</span>
      </div>

      <h2 style={{
        fontFamily: "var(--font-heading)",
        fontSize: "clamp(2.5rem, 5vw, 4rem)",
        fontWeight: 700,
        color: "#d48a20",
        marginBottom: "1rem",
        textAlign: "center",
      }}>
        Treasures of the Victors
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
        SPOILS WORTHY OF THE MOST CUNNING ENCHANTERS
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        justifyContent: "center",
        alignItems: "stretch",
        gap: "2rem",
        width: "100%",
        maxWidth: "1000px"
      }}>
        {/* 1st Place */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          style={{
            background: "rgba(10, 5, 20, 0.6)",
            border: "1px solid rgba(212, 138, 32, 0.3)",
            borderRadius: "16px",
            padding: "3rem 2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            backdropFilter: "blur(10px)",
            boxShadow: "0 0 40px rgba(212, 138, 32, 0.1)",
            position: "relative",
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem", WebkitFilter: "drop-shadow(0 0 10px rgba(255,215,0,0.5))", filter: "drop-shadow(0 0 10px rgba(255,215,0,0.5))" }}>🥇</div>
          <h3 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.2rem",
            color: "#d4aa50",
            fontWeight: 700,
          }}>
            1st Place
          </h3>
          <div style={{
            fontFamily: "var(--font-decorative)",
            fontSize: "1.1rem",
            color: "#d48a20",
            fontStyle: "italic",
            marginBottom: "1rem"
          }}>
            Grand Archmage
          </div>
          <div style={{
            fontFamily: "var(--font-heading)",
            fontSize: "2.5rem",
            fontWeight: 800,
            color: "#d48a20",
          }}>
            ₹5,000
          </div>
          <div style={{
            fontSize: "0.8rem",
            color: "rgba(212, 138, 32, 0.5)",
            marginTop: "0.5rem"
          }}>
            + Certificates & Gifts
          </div>
        </motion.div>

        {/* 2nd Place */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            background: "rgba(10, 5, 20, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            borderRadius: "16px",
            padding: "3rem 2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            backdropFilter: "blur(10px)",
            transition: "all 0.3s ease",
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🥈</div>
          <h3 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.2rem",
            color: "#e0e0e0",
            fontWeight: 700,
          }}>
            2nd Place
          </h3>
          <div style={{
            fontFamily: "var(--font-decorative)",
            fontSize: "1.1rem",
            color: "#a68a56",
            fontStyle: "italic",
            marginBottom: "1rem"
          }}>
            Master Sorcerer
          </div>
          <div style={{
            fontFamily: "var(--font-heading)",
            fontSize: "2.5rem",
            fontWeight: 800,
            color: "#e0e0e0",
          }}>
            ₹3,000
          </div>
          <div style={{
            fontSize: "0.8rem",
            color: "rgba(212, 138, 32, 0.5)",
            marginTop: "0.5rem"
          }}>
            + Certificates & Gifts
          </div>
        </motion.div>

        {/* 3rd Place */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            background: "rgba(10, 5, 20, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            borderRadius: "16px",
            padding: "3rem 2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            backdropFilter: "blur(10px)",
            transition: "all 0.3s ease",
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🥉</div>
          <h3 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.2rem",
            color: "#cd7f32",
            fontWeight: 700,
          }}>
            3rd Place
          </h3>
          <div style={{
            fontFamily: "var(--font-decorative)",
            fontSize: "1.1rem",
            color: "#cd7f32",
            fontStyle: "italic",
            marginBottom: "1rem"
          }}>
            Apprentice Mage
          </div>
          <div style={{
            fontFamily: "var(--font-heading)",
            fontSize: "2.5rem",
            fontWeight: 800,
            color: "#d48a20",
          }}>
            ₹1,500
          </div>
          <div style={{
            fontSize: "0.8rem",
            color: "rgba(212, 138, 32, 0.5)",
            marginTop: "0.5rem"
          }}>
            + Certificates & Gifts
          </div>
        </motion.div>
      </div>
    </section>
  );
}
