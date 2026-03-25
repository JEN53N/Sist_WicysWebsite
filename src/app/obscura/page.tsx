"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import Navbar from "@/components/ctf/Navbar";
import Countdown from "@/components/ctf/Countdown";
import Gallery from "@/components/ctf/Gallery";
import Flipbook from "@/components/ctf/Flipbook";
import Sponsors from "@/components/ctf/Sponsors";
import ArcaneOrders from "@/components/ctf/ArcaneOrders";
import Treasures from "@/components/ctf/Treasures";
import Footer from "@/components/ctf/Footer";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={containerRef}>
      <Navbar />

      {/* Social Sidebar */}
      <div className="social-sidebar">
        <a href="https://www.instagram.com/wicys_sathyabama/" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <a href="https://www.linkedin.com/company/wicys-sathyabama-student-chapter/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a href="#" className="social-icon">▶</a>
      </div>

      {/* Hero Section */}
      <section className="section-container" style={{ minHeight: "100vh", paddingTop: "100px" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            maxWidth: 1200,
            zIndex: 10,
          }}
        >
          {/* Top Banner Tag */}
          <div style={{
            background: "rgba(58, 10, 13, 0.4)",
            border: "1px solid rgba(255, 140, 0, 0.4)",
            padding: "0.5rem 1.5rem",
            borderRadius: "30px",
            marginBottom: "4rem",
            backdropFilter: "blur(10px)",
          }}>
            <Link href="/obscura/tickets" style={{
              color: "var(--color-cream)",
              textDecoration: "none",
              fontSize: "0.7rem",
              fontFamily: "var(--font-heading)",
              letterSpacing: "0.15em",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textTransform: "uppercase",
            }}>
              <span style={{ color: "var(--color-orange)" }}>●</span>
              April 10, Sathyabama Institute Of Science & Technology
            </Link>
          </div>

          {/* Main Title Banner */}
          <div style={{
            position: "relative",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "5rem",
            textAlign: "center",
          }}>
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.3 }
                }
              }}
              style={{
                fontFamily: "var(--font-harry)",
                fontSize: "clamp(5rem, 18vw, 12rem)",
                fontWeight: 400,
                lineHeight: 1,
                letterSpacing: "0.05em",
                color: "var(--color-gold)",
                display: "flex",
                textShadow: "0 6px 15px rgba(0,0,0,0.9), 0 0 20px rgba(238,186,48,0.4)",
              }}
            >
              {Array.from("OBSCURA").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 50, rotateX: -90 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      rotateX: 0,
                      transition: { type: "spring", damping: 12, stiffness: 100 }
                    }
                  }}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1rem, 3vw, 2rem)",
                fontWeight: 700,
                letterSpacing: "0.5em",
                marginTop: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem"
              }}
            >
              <motion.span 
                initial={{ width: 0 }} 
                animate={{ width: 40 }} 
                transition={{ delay: 1.8, duration: 0.8 }}
                style={{ height: 2, background: "var(--color-cream)" }}
              />
              <motion.span
                animate={{ textShadow: ["0px 0px 0px rgba(255,140,0,0)", "0px 0px 20px rgba(255,140,0,0.8)", "0px 0px 0px rgba(255,140,0,0)"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                CAPTURE THE FLAG
              </motion.span>
              <motion.span 
                initial={{ width: 0 }} 
                animate={{ width: 40 }} 
                transition={{ delay: 1.8, duration: 0.8 }}
                style={{ height: 2, background: "var(--color-cream)" }}
              />
            </motion.div>
            

          </div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ marginTop: "1rem" }}
          >
            <Countdown />
          </motion.div>
        </motion.div>
      </section>

      {/* What is Savara Section */}
      <section className="section-container" style={{ background: "linear-gradient(to bottom, transparent, rgba(58,10,13,0.3) 50%, transparent)" }}>
        <motion.div 
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1 }}
          style={{ maxWidth: 800, textAlign: "center", zIndex: 10 }}
        >
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 800,
            letterSpacing: "0.05em",
            marginBottom: "2rem",
          }}>
            <span className="heading-gradient">WHAT IS</span>{" "}
            <span style={{ color: "var(--color-cream)" }}>OBSCURA</span>
          </h2>
          
          <div style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "var(--color-text-primary)",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem"
          }}>
            <p>
              <strong style={{ color: "var(--color-cream)", fontWeight: 700, fontSize: "1.2rem" }}>OBSCURA</strong> is the new unified identity of <span style={{ color: "var(--color-orange)" }}>Samgatha × Vashisht</span> — the flagship techno-cultural fest of Sathyabama Institute of Science and Technology. It is the collision of innovation and tradition, engineering and artistry, where 5,000+ minds from premier institutions ignite five days of code, creativity, and culture.
            </p>
            <p style={{ color: "var(--color-text-secondary)" }}>
              Under the banner of the theme of this year <strong style={{ color: "var(--color-gold)" }}>Capture The Flag</strong>, this edition transcends time itself — where the ancient meets the futuristic in a spectacle unlike any other.
            </p>
          </div>
        </motion.div>
      </section>

      {/* About the Fest Section */}
      <section className="section-container" style={{ padding: "8rem 2rem", position: "relative" }}>
        <div style={{ maxWidth: 1000, width: "100%", display: "flex", flexDirection: "column", gap: "2rem" }}>
          <motion.h2 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 800,
              letterSpacing: "0.05em",
            }}
          >
            <span className="heading-gradient">THE ANCIENT</span>{" "}
            <span style={{ color: "var(--color-cream)" }}>PROPHECY</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "var(--color-text-secondary)",
              maxWidth: 700,
              display: "flex",
              flexDirection: "column",
              gap: "2rem"
            }}
          >
            <p>
              In the deep annals of the Forbidden Archive, there exists a cipher known only as OBSCURA — woven from shadow, starlight, and the darkest threads of arcane knowledge. For centuries, it has remained unbroken, its secrets guarded by enchantments that bend the very fabric of logic.
            </p>
            <p>
              The Council of WiCyS has opened the vaults. The scrolls are unsealed. Brave apprentices of the digital arts are now summoned to prove their mastery over cryptographic enchantments, steganographic glyphs, web fortress vulnerabilities, and the mysteries of binary incantations.
            </p>
            <p style={{ fontStyle: "italic", color: "var(--color-cream)" }}>
              "The cipher is not broken by strength, but by seeing what others dare not look at."
            </p>
            
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
              <Link href="/obscura/events" className="btn-primary btn-outline" style={{ borderImage: "linear-gradient(135deg, #FF8C00, #c41e3a) 1" }}>
                EXPLORE EVENTS
              </Link>
              <a href="#" className="btn-primary btn-outline" style={{ background: "rgba(0,0,0,0.5)" }}>
                DOWNLOAD EVENTS BROCHURE
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Arcane Orders Section */}
      <ArcaneOrders />

      {/* Treasures Section */}
      <Treasures />

      {/* Flipbook Section */}
      <section style={{ padding: "4rem 2rem", position: "relative", zIndex: 1 }}>
        <Flipbook />
      </section>

      {/* Sponsors Section */}
      <Sponsors />

      {/* Portal/QR Code Section */}
      <section style={{ padding: "6rem 2rem", position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <h2 style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 700,
          color: "#d48a20",
          marginBottom: "0.5rem",
          letterSpacing: "0.05em",
          textShadow: "0 2px 10px rgba(0,0,0,0.8)"
        }}>
          Open the Portal
        </h2>
        <div style={{
          fontFamily: "var(--font-heading)",
          fontSize: "0.8rem",
          color: "rgba(212, 138, 32, 0.7)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "3rem"
        }}>
          SCAN TO CLAIM YOUR PLACE IN THE FORBIDDEN CIPHER
        </div>

        <div style={{
          background: "var(--color-cream)",
          padding: "1rem",
          borderRadius: "16px",
          position: "relative",
          marginBottom: "2rem",
          boxShadow: "0 0 30px rgba(212,138,32,0.3)",
          display: "inline-block"
        }}>
          {/* Decorative corners */}
          <div style={{ position: "absolute", top: "10px", left: "10px", width: "20px", height: "20px", borderTop: "3px solid #d48a20", borderLeft: "3px solid #d48a20" }}></div>
          <div style={{ position: "absolute", top: "10px", right: "10px", width: "20px", height: "20px", borderTop: "3px solid #d48a20", borderRight: "3px solid #d48a20" }}></div>
          <div style={{ position: "absolute", bottom: "10px", left: "10px", width: "20px", height: "20px", borderBottom: "3px solid #d48a20", borderLeft: "3px solid #d48a20" }}></div>
          <div style={{ position: "absolute", bottom: "10px", right: "10px", width: "20px", height: "20px", borderBottom: "3px solid #d48a20", borderRight: "3px solid #d48a20" }}></div>
          
          <div style={{ display: "block", background: "white", padding: "8px", borderRadius: "12px" }}>
            <Image 
              src="/ctf/qrcode.jpg" 
              alt="Register QR Code" 
              width={250} 
              height={250}
              style={{ borderRadius: "8px", display: "block" }}
            />
          </div>
        </div>

        <div style={{
          fontFamily: "var(--font-decorative)",
          fontSize: "1.2rem",
          color: "#d48a20",
          marginBottom: "1.5rem"
        }}>
          ✦ Scan to Register ✦
        </div>

        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSdnJAA2mZ2gkSvCnmJVnFIskNTadKVgFhnb2nWl01rmhbvF4A/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{
            background: "linear-gradient(to bottom, #d48a20, #804a08)",
            color: "var(--color-cream)",
            border: "1px solid rgba(255,255,255,0.2)",
            textShadow: "none",
            boxShadow: "0 5px 15px rgba(0,0,0,0.5)",
            padding: "1rem 2.5rem",
            marginBottom: "2rem"
          }}
        >
          ✦ Register Now ✦
        </a>

        <div style={{
          fontSize: "0.7rem",
          color: "rgba(255,255,255,0.2)",
          fontFamily: "var(--font-body)",
          maxWidth: "80%",
          textAlign: "center",
          wordBreak: "break-all"
        }}>
          https://docs.google.com/forms/d/e/1FAIpQLSdnJAA2mZ2gkSvCnmJVnFIskNTadKVgFhnb2nWl01rmhbvF4A/viewform
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
