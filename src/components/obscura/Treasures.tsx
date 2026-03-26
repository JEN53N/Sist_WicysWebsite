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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxWidth: "600px"
      }}>
        {/* Prize Pool Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.05, 
            borderColor: "rgba(212, 138, 32, 0.6)",
            boxShadow: "0 10px 40px rgba(212, 138, 32, 0.2)"
          }}
          whileTap={{ scale: 0.98 }}
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
            width: "100%",
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem", WebkitFilter: "drop-shadow(0 0 10px rgba(255,215,0,0.5))", filter: "drop-shadow(0 0 10px rgba(255,215,0,0.5))" }}>🏆</div>
          <h3 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.5rem",
            color: "#d4aa50",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}>
            Prize Pool
          </h3>
          <div style={{
            fontFamily: "var(--font-heading)",
            fontSize: "3rem",
            fontWeight: 800,
            color: "#d48a20",
            margin: "1rem 0",
          }}>
            ₹10,000
          </div>
          <div style={{
            fontSize: "1rem",
            color: "rgba(212, 138, 32, 0.7)",
            textAlign: "center",
            lineHeight: 1.6,
          }}>
            + Certificates & Vouchers for all participants
          </div>
        </motion.div>
      </div>
    </section>
  );
}
