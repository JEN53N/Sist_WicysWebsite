"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" style={{
      position: "relative",
      zIndex: 1,
      padding: "6rem 2rem 2rem",
      background: "transparent", // Ensures background shows through
      borderTop: "1px solid rgba(255, 255, 255, 0.05)",
      fontFamily: "var(--font-body)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "4rem",
            marginBottom: "4rem",
          }}
        >
          {/* Brand Col */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L42 18L24 10L32 28L14 36L32 44L24 62L42 54L50 72L58 54L76 62L68 44L86 36L68 28L76 10L58 18L50 0Z" fill="var(--color-cream)"/>
              </svg>
            </div>
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "2.5rem",
              fontWeight: 900,
              color: "var(--color-cream)",
              letterSpacing: "0.05em",
            }}>
              OBSCURA
            </h2>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              color: "var(--color-text-muted)",
              letterSpacing: "0.05em",
              maxWidth: "280px"
            }}>
              Capture The Flag — Where Ancient Meets Future
            </p>
          </div>

          {/* Contact Col */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.2rem",
              fontWeight: 800,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-cream)",
              marginBottom: "1.5rem",
            }}>
              CONTACT US
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <a href="mailto:team@sathyabama-wicys.org" style={{
                display: "flex", alignItems: "center", gap: "1rem", color: "var(--color-text-secondary)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.3s"
              }}>
                <Mail size={18} />
                team@sathyabama-wicys.org
              </a>
              <a href="tel:+919391131165" style={{
                display: "flex", alignItems: "center", gap: "1rem", color: "var(--color-text-secondary)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.3s"
              }}>
                <Phone size={18} />
                +91 93911 31165
              </a>
              <div style={{
                display: "flex", alignItems: "flex-start", gap: "1rem", color: "var(--color-text-secondary)", fontSize: "0.9rem", lineHeight: "1.6"
              }}>
                <MapPin size={18} style={{ marginTop: "4px", flexShrink: 0 }} />
                <span>
                  <span style={{ whiteSpace: "nowrap" }}>Sathyabama Institute of Science and Technology</span><br/>
                  Jeppiaar Nagar,<br/>
                  Rajiv Gandhi Salai,<br/>
                  Chennai - 600 119,<br/>
                  Tamil Nadu, India
                </span>
              </div>
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "center", gap: "1rem", color: "var(--color-text-secondary)", textDecoration: "none", fontSize: "0.9rem", fontWeight: "bold", marginTop: "0.5rem", letterSpacing: "0.1em", transition: "color 0.3s"
              }}>
                <MapPin size={18} />
                REACH CAMPUS
              </a>
            </div>
          </div>

          {/* Follow Us Col */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.2rem",
              fontWeight: 800,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-cream)",
              marginBottom: "1.5rem",
            }}>
              FOLLOW US
            </h3>
            <a
              href="https://www.instagram.com/wicys_sathyabama/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.8rem",
                padding: "0.5rem 1rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                color: "var(--color-cream)",
                textDecoration: "none",
                fontSize: "0.9rem",
                transition: "all 0.3s ease",
                background: "rgba(255,255,255,0.02)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--color-gold)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)" }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/company/wicys-sathyabama-student-chapter/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.8rem",
                padding: "0.5rem 1rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                color: "var(--color-cream)",
                textDecoration: "none",
                fontSize: "0.9rem",
                transition: "all 0.3s ease",
                background: "rgba(255,255,255,0.02)",
                marginTop: "1rem"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--color-gold)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)" }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          paddingTop: "2rem",
          paddingBottom: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "var(--color-text-muted)",
            letterSpacing: "0.05em",
            textAlign: "center"
          }}>
            © 2026 OBSCURA Capture The Flag — Sathyabama Institute of Science and Technology. All rights reserved.
          </p>
          
          <button 
            style={{
              position: "absolute",
              right: 0,
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "var(--color-cream)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
            onClick={() => window.scrollTo(0, 0)}
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
