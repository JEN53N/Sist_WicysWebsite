"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";


const navLinks = [
  { href: "/", label: "Home" },
  { href: "/archive", label: "Archive" },
  { href: "/team", label: "Team" },
  { href: "/upcoming", label: "Upcoming" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        height: 76,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2.5rem",
        background: scrolled ? "rgba(5,7,15,0.94)" : "rgba(5,7,15,0.82)",
        backdropFilter: "blur(24px) saturate(1.5)",
        borderBottom: "1px solid rgba(124,92,252,0.18)",
      }}
    >
      {/* Logo */}
       <Link href="/" className="flex items-center">
         <Image
           src="/wicys-logo-new.png"
           alt="WiCyS"
           width={120}
           height={40}
           style={{ objectFit: "contain" }}
         />
       </Link>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              padding: "6px 14px",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 500,
              textDecoration: "none",
              color: pathname === link.href ? "#fff" : "#6b7280",
              background: pathname === link.href ? "rgba(255,255,255,0.06)" : "transparent",
              transition: "color 0.2s, background 0.2s",
            }}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScm_DKdL6alMaxyC0SyuQJ5CPYu2cEYyCr_arrS29rIg4T3UQ/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginLeft: 8,
            padding: "7px 16px",
            borderRadius: 8,
            background: "linear-gradient(135deg, #6366f1, #a855f7)",
            color: "#ffffff",
            fontSize: 12,
            fontWeight: 600,
            textDecoration: "none",
            letterSpacing: "0.02em",
            boxShadow: "0 0 12px rgba(168,85,247,0.25)",
            transition: "all 0.2s ease",
          }}
        >
          Join Team
        </a>
      </div>

      {/* Mobile toggle */}
      <button
        className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="absolute top-full left-0 right-0 md:hidden"
          style={{
            background: "rgba(5,7,15,0.98)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "1rem",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block"
              style={{
                padding: "10px 14px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                color: pathname === link.href ? "#fff" : "#6b7280",
                marginBottom: 2,
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScm_DKdL6alMaxyC0SyuQJ5CPYu2cEYyCr_arrS29rIg4T3UQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center mt-2"
            style={{
              padding: "10px 14px",
              borderRadius: 8,
              background: "linear-gradient(135deg, #6366f1, #a855f7)",
              color: "#ffffff",
              fontSize: 13,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Join Team
          </a>
        </div>
      )}
    </nav>
  );
}
