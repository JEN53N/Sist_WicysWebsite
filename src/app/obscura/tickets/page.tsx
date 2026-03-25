"use client";
import Navbar from "@/components/ctf/Navbar";
import Footer from "@/components/ctf/Footer";
import { motion } from "framer-motion";

export default function Tickets() {
  return (
    <main>
      <Navbar />
      
      <section className="section-container" style={{ minHeight: "100vh", paddingTop: "120px" }}>
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <div style={{
            fontFamily: "var(--font-heading)",
            fontSize: "0.8rem",
            color: "var(--color-text-muted)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "0.5rem"
          }}>
            TICKETS
          </div>
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
            TICKETS
          </h1>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "1rem",
            color: "var(--color-text-secondary)",
          }}>
            Fill the form below to complete your ticket purchase.
          </p>
        </motion.div>

        {/* Ticket Options Container */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              }
            }
          }}
          style={{ display: "flex", flexDirection: "column", gap: "2rem", width: "100%", maxWidth: 800 }}
        >
          
          {/* Activation Code Block */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80 } }
            }}
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(255,140,0,0.2)" }}
            style={{
              background: "rgba(30, 10, 10, 0.6)",
              border: "1px solid rgba(255, 140, 0, 0.2)",
              borderRadius: "16px",
              padding: "3rem 2rem",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
              backdropFilter: "blur(10px)",
              transition: "border 0.3s ease"
            }}
          >
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.5rem",
              color: "var(--color-cream)",
              letterSpacing: "0.1em",
            }}>
              HAVE AN ACTIVATION CODE?
            </h2>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
              Login to redeem your activation code and get your e-ticket.
            </p>
            <button className="btn-solid" style={{
              padding: "0.6rem 2rem",
              borderRadius: "4px",
              fontSize: "0.8rem",
              fontFamily: "var(--font-heading)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}>
              DASHBOARD
            </button>
          </motion.div>

          {/* Buy Tickets Block */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80 } }
            }}
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(255,140,0,0.2)" }}
            style={{
              background: "rgba(30, 10, 10, 0.6)",
              border: "1px solid rgba(255, 140, 0, 0.2)",
              borderRadius: "16px",
              padding: "3rem 2rem",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
              backdropFilter: "blur(10px)",
              transition: "border 0.3s ease"
            }}
          >
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.5rem",
              color: "var(--color-cream)",
              letterSpacing: "0.1em",
            }}>
              BUY TICKETS
            </h2>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", maxWidth: "90%" }}>
              Choose the correct form to complete your ticket booking. After payment verification, you will receive activation code in email.
            </p>
            
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginTop: "1rem" }}>
              <button className="btn-solid" style={{
                padding: "0.6rem 2rem",
                borderRadius: "4px",
                fontSize: "0.8rem",
                fontFamily: "var(--font-heading)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                background: "#d4a853",
              }}>
                SATHYABAMA STUDENTS
              </button>
              
              <button className="btn-solid" style={{
                padding: "0.6rem 2rem",
                borderRadius: "4px",
                fontSize: "0.8rem",
                fontFamily: "var(--font-heading)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                background: "#d4a853",
              }}>
                NON-SATHYABAMA PARTICIPANTS
              </button>
            </div>
          </motion.div>

        </motion.div>
        
        {/* Scroll To Top Button (Sticky) */}
        <button style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          width: 50,
          height: 50,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "var(--color-cream)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.2rem",
          cursor: "pointer",
          zIndex: 90,
          transition: "all 0.3s ease",
        }}
        onClick={() => window.scrollTo(0, 0)}
        >
          ↑
        </button>

      </section>

      <Footer />
    </main>
  );
}
