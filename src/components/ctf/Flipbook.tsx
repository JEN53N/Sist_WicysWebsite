"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Flipbook() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 18;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      style={{ maxWidth: 900, margin: "0 auto", padding: "0 2rem" }}
    >
      <div className="flipbook-container">
        <div className="flipbook-header">
          <span>Rule Book • Page {currentPage} / {totalPages}</span>
          <div className="flipbook-controls">
            <a
              href="/Samgatha_Vashisht_Brochure.pdf"
              className="flipbook-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              ↓ PDF
            </a>
            <button
              className="flipbook-btn"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <button
              className="flipbook-btn"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
        <div className="flipbook-page">
          <div style={{ textAlign: "center" }}>
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              gap: "1rem", marginBottom: "1rem",
            }}>
              <div style={{
                width: 50, height: 50, borderRadius: "50%",
                background: "radial-gradient(circle, #f5e6c8 30%, #d4a853 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.5rem", fontWeight: 700, color: "#3A0A0D",
                fontFamily: "var(--font-heading)",
              }}>
                S
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", fontWeight: 700, color: "#fff" }}>
                  SATHYABAMA
                </div>
                <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.5)", whiteSpace: "nowrap" }}>
                  INSTITUTE OF SCIENCE AND TECHNOLOGY
                </div>
              </div>
            </div>
            <div style={{
              fontFamily: "var(--font-heading)",
              fontSize: "2rem",
              fontWeight: 800,
              background: "linear-gradient(135deg, #FF8C00, #FF4500)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "0.5rem",
            }}>
              OBSCURA 2026
            </div>
            <div style={{
              fontFamily: "var(--font-decorative)",
              fontSize: "1rem",
              color: "var(--color-text-muted)",
              letterSpacing: "0.2em",
            }}>
              RULE BOOK
            </div>
            <div style={{
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.3)",
              marginTop: "1.5rem",
            }}>
              Page {currentPage} of {totalPages}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
