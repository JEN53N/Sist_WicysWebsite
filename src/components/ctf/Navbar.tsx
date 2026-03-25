"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { label: "Home", href: "/obscura/obscura" },
  { label: "Dashboard", href: "/obscura/dashboard" },
  { label: "Schedule", href: "/obscura/schedule" },
  { label: "Events", href: "/obscura/events" },
  { label: "Accomodation", href: "/obscura/accomodation" },
  { label: "Tickets", href: "/obscura/tickets" },
  { label: "Merch", href: "/obscura/merch" },
  { label: "Sponsors", href: "/obscura/#sponsors" },
  { label: "Contact", href: "/obscura/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Sticky Header */}
      <header
        className="navbar-header"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 100%)",
        }}
      >
        {/* Left: Logo */}
        <Link href="/obscura" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
          <Image 
            src="/ctf/Wicys%20Logo.png" 
            alt="WiCyS Logo" 
            width={200}
            height={70}
            priority
            className="navbar-logo"
            style={{ width: "auto", objectFit: "contain" }} 
          />
        </Link>

        {/* Right: Bird icon + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Bird/Savara icon */}
          <div style={{
            width: 36, height: 36,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#f5e6c8", fontSize: "1.4rem",
          }}>
            ✦
          </div>
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            style={{
              width: 44, height: 44, borderRadius: "50%",
              border: "1.5px solid rgba(255,255,255,0.3)",
              background: "rgba(0,0,0,0.4)",
              display: "flex", flexDirection: "column", alignItems: "center",
              justifyContent: "center", gap: "5px", cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            <span style={{
              width: 18, height: 1.5, background: "#f5e6c8",
              borderRadius: 2, transition: "all 0.3s ease",
              transform: menuOpen ? "rotate(45deg) translate(2.5px, 2.5px)" : "none",
            }} />
            <span style={{
              width: 18, height: 1.5, background: "#f5e6c8",
              borderRadius: 2, transition: "all 0.3s ease",
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              width: 18, height: 1.5, background: "#f5e6c8",
              borderRadius: 2, transition: "all 0.3s ease",
              transform: menuOpen ? "rotate(-45deg) translate(2.5px, -2.5px)" : "none",
            }} />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`menu-overlay-backdrop ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Menu Overlay */}
      <div className={`menu-overlay ${menuOpen ? "open" : ""}`}>
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close Menu"
          style={{
            position: "absolute", top: "1.5rem", right: "2rem",
            background: "none", border: "none", color: "#f5e6c8",
            fontSize: "1.8rem", cursor: "pointer",
          }}
        >
          ✕
        </button>

        <nav style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
          <AnimatePresence>
            {menuOpen && menuItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  className="menu-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </nav>

        {/* Social icons in menu */}
        <div style={{
          position: "absolute", right: "2rem", top: "50%",
          transform: "translateY(-50%)",
          display: "flex", flexDirection: "column", gap: "1rem",
        }}>
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
          {["▶"].map((icon, i) => (
            <a key={i} href="#" className="social-icon">{icon}</a>
          ))}
        </div>

        {/* Year watermark */}
        <div style={{
          position: "absolute", bottom: "2rem", right: "2rem",
          fontFamily: "var(--font-heading)", fontSize: "8rem",
          fontWeight: 900, color: "rgba(255,255,255,0.03)",
          lineHeight: 1,
        }}>
          26
        </div>
      </div>
    </>
  );
}
