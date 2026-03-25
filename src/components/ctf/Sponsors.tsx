"use client";
import { motion } from "framer-motion";

const titleSponsor = { name: "RIKŪN", color: "#1a1a6e" };

const partners = [
  { category: "Sound Partner", name: "ZEBRONICS" },
  { category: "Events Partner", name: "Lightcast" },
  { category: "Platform Partner", name: "Unstop" },
  { category: "Banking Partner", name: "PNB" },
];

const previousSponsors = [
  "A2B", "Bank of Baroda", "Canara Bank", "Cigniti",
  "CodeChef", "Contentstack", "Chennai Super", "Cyient",
  "Devfolio", "Green Trends", "HDFC Bank", "Indian Bank",
  "IOB", "ICICI", "JioStar", "KLA", "LIC", "MoneyControl",
  "Nippon Paint", "Oracle", "PayTM", "SBI", "Slice",
  "Swiggy", "TCS", "Titan", "TVS", "Wipro",
];

export default function Sponsors() {
  return (
    <section id="sponsors" style={{
      position: "relative", zIndex: 1, padding: "6rem 2rem",
    }}>
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "1rem" }}
      >
        <h2 style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 800,
          letterSpacing: "0.05em",
        }}>
          <span className="heading-gradient">OUR</span>{" "}
          <span style={{ color: "var(--color-cream)" }}>SPONSORS</span>
        </h2>
        <p style={{
          fontFamily: "var(--font-decorative)",
          fontSize: "1.1rem",
          color: "var(--color-text-muted)",
          letterSpacing: "0.1em",
          marginTop: "0.5rem",
        }}>
          Proudly supported by industry leaders
        </p>
      </motion.div>

      {/* Title Sponsor */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ maxWidth: 900, margin: "2rem auto" }}
      >
        <div style={{
          textAlign: "center", marginBottom: "1rem",
          fontFamily: "var(--font-heading)", fontSize: "0.75rem",
          letterSpacing: "0.2em", textTransform: "uppercase",
          color: "var(--color-gold)",
        }}>
          Title Sponsor
        </div>
        <div className="sponsor-card-title">
          <div style={{
            background: "#fff", borderRadius: 12, padding: "1.5rem 3rem",
            display: "inline-block",
          }}>
            <span style={{
              fontFamily: "var(--font-heading)", fontSize: "2.5rem",
              fontWeight: 900, color: titleSponsor.color,
              letterSpacing: "0.05em",
            }}>
              {titleSponsor.name}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Partners Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        style={{
          maxWidth: 1100, margin: "3rem auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {partners.map((p) => (
          <motion.div key={p.name} variants={{
            hidden: { opacity: 0, y: 50, scale: 0.9 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
          }}>
            <div style={{
              textAlign: "center", marginBottom: "0.75rem",
              fontFamily: "var(--font-heading)", fontSize: "0.7rem",
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "var(--color-text-muted)",
            }}>
              {p.category}
            </div>
            <div className="sponsor-card" style={{ minHeight: 100 }}>
              <div style={{
                background: "#fff", borderRadius: 8, padding: "0.8rem 1.5rem",
                display: "inline-block",
              }}>
                <span style={{
                  fontFamily: "var(--font-heading)", fontSize: "1.2rem",
                  fontWeight: 700, color: "#333",
                }}>
                  {p.name}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Previously Sponsored By */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ maxWidth: 1100, margin: "4rem auto 0" }}
      >
        <div style={{
          textAlign: "center", marginBottom: "2rem",
          fontFamily: "var(--font-heading)", fontSize: "0.75rem",
          letterSpacing: "0.2em", textTransform: "uppercase",
          color: "var(--color-text-muted)",
        }}>
          Previously Sponsored By
        </div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            gap: "1rem",
          }}
        >
          {previousSponsors.map((name) => (
            <motion.div key={name} variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }} className="sponsor-card" style={{ padding: "1rem", minHeight: 70 }}>
              <span style={{
                fontFamily: "var(--font-heading)", fontSize: "0.75rem",
                fontWeight: 600, color: "var(--color-text-secondary)",
                letterSpacing: "0.05em", textAlign: "center",
              }}>
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
