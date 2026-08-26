"use client";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Navbar from "@/components/obscura/Navbar";
import Countdown from "@/components/obscura/Countdown";
import SacredCodex from "@/components/obscura/SacredCodex";
import Sponsors from "@/components/obscura/Sponsors";
import Treasures from "@/components/obscura/Treasures";
import Footer from "@/components/obscura/Footer";

export default function Home() {
  const containerRef = useRef(null);
  useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={containerRef}>
      <Navbar />


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


          {/* Main Title Banner */}
          <div style={{
            position: "relative",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "0.5rem",
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
            
            {/* Event Details */}
            <div style={{
              background: "rgba(0, 0, 0, 0.3)",
              border: "1px solid rgba(212, 138, 32, 0.3)",
              borderRadius: "30px",
              padding: "0.75rem 1.5rem",
              marginTop: "1rem",
              marginBottom: "0.5rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--color-gold)",
                fontFamily: "var(--font-heading)",
                fontSize: "0.8rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}>
                <span>📅</span>
                <span>April 10, 2026</span>
              </div>
              <span style={{
                color: "rgba(212, 138, 32, 0.5)",
                fontSize: "1.2rem",
                lineHeight: 1,
              }}>|</span>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--color-gold)",
                fontFamily: "var(--font-heading)",
                fontSize: "0.8rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}>
                <span>🕘</span>
                <span>9:00 AM – 6:00 PM</span>
              </div>
              <span style={{
                color: "rgba(212, 138, 32, 0.5)",
                fontSize: "1.2rem",
                lineHeight: 1,
              }}>|</span>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--color-gold)",
                fontFamily: "var(--font-heading)",
                fontSize: "0.8rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}>
                <span>📍</span>
                <span>Sathyabama Institute of Science and Technology, Chennai</span>
              </div>
            </div>
            
          </div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ marginTop: "0" }}
          >
            <Countdown />
          </motion.div>

           {/* Register Button */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1, duration: 0.8 }}
             style={{ marginTop: "2rem" }}
           >
             <a
               href="https://docs.google.com/forms/d/e/1FAIpQLSffz93BunAfJZpZ77awTWiuEhx9R5FMeuzMt4R9-wGAdTTUew/viewform?usp=send_form"
               target="_blank"
               rel="noopener noreferrer"
               style={{
                 display: "inline-block",
                 padding: "1rem 3rem",
                 background: "linear-gradient(135deg, #dc2626 0%, #fb923c 100%)",
                 border: "1px solid rgba(251, 146, 60, 0.5)",
                 borderRadius: "8px",
                 color: "#fef3c7",
                 fontFamily: "var(--font-heading)",
                 fontSize: "1rem",
                 fontWeight: 700,
                 textTransform: "uppercase",
                 letterSpacing: "0.1em",
                 textDecoration: "none",
                 boxShadow: "0 4px 20px rgba(220, 38, 38, 0.4)",
                 transition: "all 0.3s ease",
               }}
             >
               Register Now
             </a>
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
              Step into the Chamber of Codes. <strong style={{ color: "var(--color-cream)", fontWeight: 700, fontSize: "1.2rem" }}>OBSCURA</strong>, a National Level CTF hosted by WiCyS Sathyabama, is a high-stakes, Harry Potter-inspired National Level CTF designed to test the limits of logic and creativity in a single-day sprint. 
            </p>
            <p style={{ color: "var(--color-text-secondary)" }}>
              This flagship challenge at Sathyabama Institute of Science and Technology invites participants to bridge the gap between technical expertise and magical strategy. From solving ancient riddles in the script to mastering modern cybersecurity charms, <strong style={{ color: "var(--color-gold)" }}>OBSCURA</strong> is the ultimate quest for the next generation of tech-wizards.
            </p>
          </div>
        </motion.div>
      </section>

      {/* About the Fest Section */}
      <section className="section-container" style={{ padding: "8rem 2rem", position: "relative" }}>
        <div style={{ maxWidth: 1000, width: "100%", display: "flex", flexDirection: "column", gap: "2rem" }}>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
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
              &quot;The cipher is not broken by strength, but by seeing what others dare not look at.&quot;
            </p>
            
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://docs.google.com/forms/d/e/1FAIpQLSffz93BunAfJZpZ77awTWiuEhx9R5FMeuzMt4R9-wGAdTTUew/viewform?usp=send_form" target="_blank" rel="noopener noreferrer" className="btn-primary btn-outline" style={{ borderImage: "linear-gradient(135deg, #FF8C00, #c41e3a) 1" }}>
                REGISTER NOW
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#" className="btn-primary btn-outline" style={{ background: "rgba(0,0,0,0.5)" }}>
                DOWNLOAD EVENTS BROCHURE
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Treasures Section */}
      <Treasures />

      {/* Rules Section */}
      <section style={{ padding: "4rem 2rem", position: "relative", zIndex: 1 }}>
        <SacredCodex />
      </section>

      {/* Sponsors Section */}
      <Sponsors />

      {/* Portal/QR Code Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={{ padding: "6rem 2rem", position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
      >
        <h2 style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 700,
          color: "#d48a20",
          marginBottom: "0.5rem",
          letterSpacing: "0.05em",
          textShadow: "0 2px 10px rgba(0,0,0,0.8)"
        }} id="open-the-portal">
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

        <motion.div 
          whileHover={{ scale: 1.05, rotateZ: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{
            background: "var(--color-cream)",
            padding: "1rem",
            borderRadius: "16px",
            position: "relative",
            marginBottom: "2rem",
            boxShadow: "0 0 30px rgba(212,138,32,0.3)",
            display: "inline-block",
            cursor: "zoom-in"
          }}
        >
          {/* Decorative corners */}
          <div style={{ position: "absolute", top: "10px", left: "10px", width: "20px", height: "20px", borderTop: "3px solid #d48a20", borderLeft: "3px solid #d48a20" }}></div>
          <div style={{ position: "absolute", top: "10px", right: "10px", width: "20px", height: "20px", borderTop: "3px solid #d48a20", borderRight: "3px solid #d48a20" }}></div>
          <div style={{ position: "absolute", bottom: "10px", left: "10px", width: "20px", height: "20px", borderBottom: "3px solid #d48a20", borderLeft: "3px solid #d48a20" }}></div>
          <div style={{ position: "absolute", bottom: "10px", right: "10px", width: "20px", height: "20px", borderBottom: "3px solid #d48a20", borderRight: "3px solid #d48a20" }}></div>
          
          <div style={{ display: "block", background: "white", padding: "8px", borderRadius: "12px" }}>
            <Image 
              src="/ctf/ObscuraQR Code.png" 
              alt="Register QR Code" 
              width={250} 
              height={250}
              style={{ borderRadius: "8px", display: "block" }}
            />
          </div>
        </motion.div>

        <div style={{
          fontFamily: "var(--font-decorative)",
          fontSize: "1.2rem",
          color: "#d48a20",
          marginBottom: "1.5rem"
        }}>
          ✦ Scan to Register ✦
        </div>

        <motion.a 
          whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(212, 138, 32, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSffz93BunAfJZpZ77awTWiuEhx9R5FMeuzMt4R9-wGAdTTUew/viewform?usp=send_form"
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
        </motion.a>

        <div style={{
          fontSize: "0.7rem",
          color: "rgba(255,255,255,0.2)",
          fontFamily: "var(--font-body)",
          maxWidth: "80%",
          textAlign: "center",
          wordBreak: "break-all"
        }}>
          
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
