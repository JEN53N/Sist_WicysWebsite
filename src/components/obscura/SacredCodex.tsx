"use client";
import { motion } from "framer-motion";

const rules = [
  "Event Overview",
  "This is a Jeopardy style National Level CTF where teams compete to solve cybersecurity challenges and capture flags.",
  "Each challenge contains a flag string that must be submitted to the scoreboard platform.",
  "📅 Date: 10th April 2026",
  "📍 Mode: Offline",
  "⏰ Time: 9:00 AM – 6:00 PM",
  "👥 Team Size: Max 3 members",
  "💰 Registration Fee: ₹150 per person (No Refund)",
  "🎓 Open to students and industry professionals",
  "",
  "Team Formation Rules",
  "Participants must compete in teams of 3 members only",
  "Team members must be declared at the time of registration.",
  "Team composition is final and cannot be changed after registration.",
  "Replacement or addition of members is strictly not allowed.",
  "If a registered team member does not attend, the remaining members must continue without replacement.",
  "Cross-college teams allowed",
  "",
  "Requirements",
  "All participants must carry valid ID cards.",
  "BYOD: Every participant must bring their own laptops",
  "Bring your own extension box",
  "",
  "Prohibited Actions",
  "Attacking the CTF platform or scoreboard infrastructure",
  "Denial-of-Service (DoS/DDoS) attacks",
  "Attacking other teams’ machines or networks",
  "Flag sharing between teams",
  "Exploiting unintended vulnerabilities in the platform itself",
  "Brute-forcing the flag submission endpoint"
];

export default function SacredCodex() {
  return (
    <section id="rules" style={{
      padding: "8rem 2rem",
      position: "relative",
      zIndex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
      justifyContent: "center",
    }}>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "4rem" }}
      >
        <h2 style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
          fontWeight: 800,
          color: "#e67e22", // Sacred orange from image
          letterSpacing: "0.05em",
          marginBottom: "1rem",
          textTransform: "capitalize"
        }}>
          The Sacred Codex
        </h2>
        <div style={{
          fontFamily: "var(--font-heading)",
          fontSize: "0.9rem",
          color: "rgba(230, 126, 34, 0.6)",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
        }}>
          Rules Inscribed By The High Council
        </div>
      </motion.div>

       {/* Rules Container */}
       <motion.div
         initial={{ opacity: 0, scale: 0.95 }}
         whileInView={{ opacity: 1, scale: 1 }}
         whileHover={{ scale: 1.01, borderColor: "rgba(230, 126, 34, 0.2)" }}
         whileTap={{ scale: 0.99 }}
         viewport={{ once: false }}
         transition={{ duration: 0.8, delay: 0.2 }}
         style={{
           maxWidth: "900px",
           width: "100%",
           background: "rgba(10, 5, 5, 0.4)",
           backdropFilter: "blur(20px)",
           border: "1px solid rgba(230, 126, 34, 0.1)",
           borderRadius: "24px",
           padding: "3rem",
           boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
           display: "flex",
           flexDirection: "column",
           gap: "0.5rem",
           cursor: "default"
         }}
        >
          {rules.map((rule, index) => {
            // Determine the type of rule for styling
            const isSectionHeader = ["Event Overview", "Team Formation Rules", "Requirements", "Prohibited Actions"].includes(rule);
            const isEmpty = rule === "";
            const isBulletPoint = rule.startsWith("•");
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: isEmpty ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                style={{
                  display: "flex",
                  width: "100%",
                  gap: isEmpty ? "0.25rem" : isSectionHeader ? "1rem" : "0.75rem",
                  alignItems: "flex-start"
                }}
              >
                {!isEmpty && (
                  <div style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem"
                  }}>
                    {!isSectionHeader && isBulletPoint && (
                      <div style={{
                        display: "flex",
                        alignItems: "flex-start",
                        marginBottom: "0.25rem"
                      }}>
                        <span style={{ 
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          color: "rgba(255, 255, 255, 0.9)",
                          marginRight: "0.75rem",
                          flexShrink: 0
                        }}>•</span>
                        <p style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          color: "rgba(255, 255, 255, 0.9)",
                          margin: 0,
                          lineHeight: 1.4,
                          textAlign: "left"
                        }}>
                          {rule.substring(2)}
                        </p>
                      </div>
                    )}
                    {!isSectionHeader && !isBulletPoint && (
                      <p style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        color: "rgba(255, 255, 255, 0.9)",
                        margin: 0,
                        lineHeight: 1.4,
                        textAlign: "left"
                      }}>
                        {rule}
                      </p>
                    )}
                    {isSectionHeader && (
                      <div style={{ marginBottom: "0.5rem" }}>
                        <p style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.25rem",
                          fontWeight: 800,
                          color: "#f39c12",
                          letterSpacing: "0.03em",
                          margin: 0,
                          lineHeight: 1.4,
                          textAlign: "center"
                        }}>
                          {rule}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
       </motion.div>

      {/* Footer link style from image (optional addition) */}
      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{
              marginTop: "4rem",
              fontFamily: "var(--font-heading)",
              fontSize: "0.8rem",
              letterSpacing: "0.2em",
              color: "rgba(255, 255, 255, 0.3)",
              textTransform: "uppercase"
          }}
      >
          WiCyS Sathyabama
      </motion.div>
    </section>
  );
}
