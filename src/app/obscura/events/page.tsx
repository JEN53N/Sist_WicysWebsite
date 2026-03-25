"use client";
import Navbar from "@/components/ctf/Navbar";
import Footer from "@/components/ctf/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Events() {
  return (
    <main>
      <Navbar />
      
      <section className="section-container" style={{ minHeight: "100vh", paddingTop: "120px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start" }}>
        
        {/* Back button */}
        <div style={{ width: "100%", maxWidth: 1200, display: "flex", justifyContent: "flex-start", marginBottom: "3rem" }}>
          <Link href="/obscura" style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "var(--color-gold)",
            fontFamily: "var(--font-heading)",
            fontSize: "0.8rem",
            letterSpacing: "0.2em",
            textDecoration: "none",
            textTransform: "uppercase"
          }}>
            ← BACK
          </Link>
        </div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <h1 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 900,
            letterSpacing: "0.05em",
            lineHeight: 1,
            background: "linear-gradient(to right, #f5e6c8, #ff8c00, #4a1942)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            marginBottom: "1rem"
          }}>
            EVENTS
          </h1>
          <p style={{
            fontFamily: "var(--font-heading)",
            fontSize: "0.8rem",
            color: "var(--color-text-muted)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "2rem"
          }}>
            CHOOSE YOUR JOURNEY — CULTURAL OR TECHNICAL
          </p>
          
          <button className="btn-primary btn-outline" style={{ borderRadius: "30px", fontSize: "0.75rem", padding: "0.5rem 1.5rem" }}>
            EXPLORE THE SCHEDULE DAYWISE →
          </button>
        </motion.div>

        {/* Category Cards */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            width: "100%",
            maxWidth: 1000,
          }}
        >
          {["CULTURAL", "TECHNICAL"].map((cat, i) => (
            <motion.div
              key={cat}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
              }}
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
                aspectRatio: "1/1",
                cursor: "pointer",
                border: "2px solid transparent",
                transition: "all 0.4s ease",
              }}
              whileHover={{ scale: 1.05, borderColor: "rgba(255, 140, 0, 0.8)", boxShadow: "0 0 30px rgba(255,140,0,0.4)" }}
            >
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: `url('/ctf/images/hero-bg.png') center/cover`,
                filter: i === 0 ? "hue-rotate(-30deg) sepia(50%)" : "hue-rotate(240deg) brightness(0.8)",
                opacity: 0.7,
              }} />
              
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                padding: "2rem",
                background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)",
              }}>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "#fff",
                  letterSpacing: "0.1em"
                }}>
                  {cat}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
