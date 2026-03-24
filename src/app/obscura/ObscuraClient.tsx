"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MagicalCountdown } from "@/components/ui/Countdown";
import { obscuraDate } from "@/data";

const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdnJAA2mZ2gkSvCnmJVnFIskNTadKVgFhnb2nWl01rmhbvF4A/viewform?usp=publish-editor";

const houses = [
  { name: "Umbra", element: "Shadow & Steganography", color: "#9CA3AF", borderColor: "rgba(156,163,175,0.25)", badge: "🌑", desc: "Masters of concealment. Hide messages within images, audio files, and corrupted data streams that only the truly perceptive can decode.", difficulty: "Beginner", points: "100–300" },
  { name: "Crypta", element: "Cryptography & Ciphers", color: "#A78BFA", borderColor: "rgba(167,139,250,0.25)", badge: "🔮", desc: "Wielders of ancient codes. Caesar ciphers, RSA vulnerabilities, hash collisions, and arcane mathematical puzzles await the cunning.", difficulty: "Intermediate", points: "300–600" },
  { name: "Vulnus", element: "Web Exploitation", color: "#FCA5A5", borderColor: "rgba(252,165,165,0.25)", badge: "⚡", desc: "Seekers of cracks in fortresses. SQL injections, XSS enchantments, SSRF portals, and authentication bypasses for the bold.", difficulty: "Advanced", points: "600–1000" },
  { name: "Inversus", element: "Reverse Engineering", color: "#FCD34D", borderColor: "rgba(252,211,77,0.25)", badge: "🧿", desc: "Unravelers of forbidden machines. Disassemble binaries, defeat obfuscation spells, and extract secrets from enchanted executables.", difficulty: "Expert", points: "1000–1500" },
];

const prizes = [
  { place: "1st", title: "Grand Archmage", amount: "₹5,000", badge: "🥇", color: "#FCD34D" },
  { place: "2nd", title: "Master Sorcerer", amount: "₹3,000", badge: "🥈", color: "#D1D5DB" },
  { place: "3rd", title: "Apprentice Mage", amount: "₹1,500", badge: "🥉", color: "#D97706" },
];

const rules = [
  "All participants must carry a valid college identity card.",
  "No automated tools for flag submission are permitted.",
  "Each team may have no more than 3 members.",
  "Internet access for hints is strictly forbidden during the event.",
  "Flags must be submitted in the exact format: OBSCURA{...}",
  "Any participant caught cheating will be immediately disqualified.",
  "Organiser decisions are final and binding.",
  "Challenges may only be attempted through the designated platform.",
];

// ── Scroll-triggered reveal wrapper ────────────────────────────────────────
function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 60,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}) {
  const dirMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };
  const { x, y } = dirMap[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}

// ── Particles (Pure CSS — no Framer Motion overhead) ───────────────────────
function HarryPotterParticles() {
  const particles = Array.from({ length: 30 }, (_, i) => {
    const r = (i * 2654435761 + 1234567) >>> 0;
    const r2 = (r * 1664525 + 1013904223) >>> 0;
    const r3 = (r2 * 22695477 + 1) >>> 0;
    const type = i % 4;
    return {
      id: i,
      left: `${2 + (r % 96)}%`,
      top: `${2 + (r2 % 90)}%`,
      size: 4 + (r % 7),
      duration: 2.5 + (r % 30) * 0.15,
      delay: (r3 % 40) * 0.4,
      maxOpacity: 0.45 + (r % 4) * 0.12,
      sym: ["✦", "✨", "⋆", "✦"][type],
      color: [
        "rgba(251,191,36,",
        "rgba(255,252,210,",
        "rgba(255,215,80,",
        "rgba(190,160,255,",
      ][type] ?? "rgba(251,191,36,",
    };
  });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute select-none"
          style={{
            left: p.left,
            top: p.top,
            fontSize: p.size,
            color: p.color + p.maxOpacity + ")",
            lineHeight: 1,
            animation: `particlePulse ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        >
          {p.sym}
        </span>
      ))}
    </div>
  );
}

// ── Starfield (Pure CSS — no Framer Motion overhead) ───────────────────────
function StarField() {
  const stars = Array.from({ length: 80 }, (_, i) => {
    const r  = (i * 2654435761 + 999) >>> 0;
    const r2 = (r  * 1664525   + 1013904223) >>> 0;
    const r3 = (r2 * 22695477  + 1) >>> 0;
    const size = 0.8 + (r % 3) * 0.7;
    const bright = i % 10 === 0;
    return {
      id: i,
      left:   `${(r  % 100)}%`,
      top:    `${(r2 % 88)}%`,
      size,
      dur:    3 + (r3 % 40) * 0.15,
      delay:  (r % 60) * 0.3,
      opacity: bright ? 0.7 : 0.15 + (r3 % 5) * 0.08,
    };
  });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }} aria-hidden="true">
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full"
          style={{
            left: s.left,
            top:  s.top,
            width:  s.size,
            height: s.size,
            background: "#e8e0ff",
            boxShadow: s.size > 1.8 ? `0 0 ${s.size * 2}px rgba(200,190,255,0.6)` : "none",
            animation: `starTwinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
            opacity: s.opacity,
          }}
        />
      ))}
    </div>
  );
}

// ── 3-D parallax Moon ──────────────────────────────────────────────────────
function Moon() {
  const moonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          if (moonRef.current) {
            const sy = window.scrollY;
            const progress = Math.min(sy / 520, 1);
            moonRef.current.style.opacity = String(1 - progress);
            moonRef.current.style.transform = `translateY(${sy * 0.38}px)`;
          }
          ticking = false;
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={moonRef}
      className="fixed pointer-events-none"
      style={{
        top:   "6vh",
        right: "6vw",
        zIndex: 0,
        willChange: "transform, opacity",
        width:  "28vw",
        height: "28vw",
        maxWidth:  420,
        maxHeight: 420,
      }}
      aria-hidden="true"
    >
      {/* Outer atmospheric glow */}
      <div style={{
        position: "absolute", inset: "-35%",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(180,160,255,0.09) 0%, rgba(120,80,220,0.05) 40%, transparent 70%)",
        filter: "blur(18px)",
      }} />
      {/* Mid glow ring */}
      <div style={{
        position: "absolute", inset: "-14%",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(220,210,255,0.13) 0%, rgba(160,120,255,0.07) 50%, transparent 75%)",
        filter: "blur(8px)",
      }} />
      {/* Moon sphere */}
      <div style={{
        position: "relative",
        width:  "100%",
        height: "100%",
        borderRadius: "50%",
        overflow: "hidden",
        background: "radial-gradient(circle at 38% 35%, #f0eeff 0%, #ccc6ee 18%, #9e94cc 40%, #6b5fa8 65%, #2d2050 85%, #130d30 100%)",
        boxShadow: [
          "inset -6px -6px 20px rgba(80,50,160,0.55)",
          "inset  4px  4px 18px rgba(255,255,255,0.18)",
          "0 0 60px rgba(160,130,255,0.25)",
          "0 0 120px rgba(120,80,220,0.15)",
          "0 0 220px rgba(90,50,190,0.10)",
        ].join(", "),
      }}>
        <div style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          background: "radial-gradient(circle at 62% 65%, rgba(10,5,30,0.72) 0%, rgba(10,5,30,0.35) 45%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute",
          top: "10%", left: "14%",
          width: "32%", height: "22%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",
          filter: "blur(4px)",
        }} />
        <div style={{
          position: "absolute",
          top: "18%", left: "20%",
          width: "18%", height: "12%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(255,255,255,0.35) 0%, transparent 100%)",
          filter: "blur(2px)",
        }} />
        <div style={{
          position: "absolute", top: "42%", left: "52%",
          width: "14%", height: "14%", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(40,25,80,0.55) 0%, transparent 70%)",
          boxShadow: "inset 1px 1px 3px rgba(255,255,255,0.06)",
        }} />
        <div style={{
          position: "absolute", top: "28%", left: "62%",
          width: "9%", height: "9%", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(40,25,80,0.45) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", top: "60%", left: "38%",
          width: "7%", height: "7%", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(40,25,80,0.4) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          background: [
            "radial-gradient(ellipse 55% 30% at 55% 55%, rgba(70,45,120,0.22) 0%, transparent 100%)",
            "radial-gradient(ellipse 35% 20% at 30% 65%, rgba(60,35,100,0.18) 0%, transparent 100%)",
          ].join(", "),
        }} />
      </div>

      <motion.div
        style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          background: "radial-gradient(ellipse 70% 40% at 50% 50%, rgba(130,100,220,0.06) 0%, transparent 70%)",
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

// ── Castle silhouette ──────────────────────────────────────────────────────
function CastleSilhouette() {
  const castleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          if (castleRef.current) {
            castleRef.current.style.transform = `translateY(${window.scrollY * 0.12}px)`;
          }
          ticking = false;
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    >
      <div
        ref={castleRef}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          willChange: "transform",
        }}
      >
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "50%",
          background: "linear-gradient(to bottom, #0a0618 0%, transparent 100%)",
          zIndex: 2, pointerEvents: "none",
        }} />
        <img
          src="/castle.png"
          alt=""
          style={{
            width: "100%",
            maxWidth: "820px",
            margin: "0 auto",
            display: "block",
            opacity: 0.55,
            userSelect: "none",
            pointerEvents: "none",
            position: "relative",
            zIndex: 1,
          }}
        />
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "25%",
          background: "linear-gradient(to top, #0a0618 0%, transparent 100%)",
          zIndex: 2, pointerEvents: "none",
        }} />
      </div>
    </div>
  );
}

function Divider() {
  return (
    <motion.div
      className="flex items-center justify-center gap-4 my-24"
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="h-px flex-1 max-w-48" style={{ background: "linear-gradient(to right, transparent, rgba(251,191,36,0.2))" }} />
      <span style={{ color: "rgba(251,191,36,0.35)", letterSpacing: "0.5em", fontSize: 13 }}>✦ ✦ ✦</span>
      <div className="h-px flex-1 max-w-48" style={{ background: "linear-gradient(to left, transparent, rgba(251,191,36,0.2))" }} />
    </motion.div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      className="text-4xl sm:text-5xl font-bold text-center mb-3"
      style={{ color: "#d97706", textShadow: "0 0 20px rgba(217,119,6,0.3)", fontFamily: "Georgia, serif" }}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.h2>
  );
}

export default function ObscuraClient() {
  const [mounted, setMounted] = useState(false);
  const [qrHovered, setQrHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen relative"
      style={{
        backgroundColor: "#0a0618",
        backgroundImage: [
          "radial-gradient(ellipse 110% 55% at 50% 0%, #1a0a3a 0%, #0d0525 40%, transparent 70%)",
          "radial-gradient(ellipse 70% 45% at 15% 20%, rgba(80,30,140,0.35) 0%, rgba(50,15,100,0.2) 40%, transparent 70%)",
          "radial-gradient(ellipse 60% 40% at 85% 15%, rgba(60,20,120,0.3) 0%, rgba(40,10,90,0.15) 50%, transparent 75%)",
          "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(45,15,90,0.2) 0%, transparent 60%)",
          "radial-gradient(ellipse 70% 30% at 50% 100%, rgba(90,35,10,0.25) 0%, transparent 55%)",
        ].join(", "),
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      {mounted && <StarField />}
      {mounted && <Moon />}
      {mounted && <CastleSilhouette />}
      {mounted && <HarryPotterParticles />}

      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-80" style={{ color: "rgba(251,191,36,0.5)" }}>
          <ArrowLeft className="w-3 h-3" />
          Return
        </Link>
        <span className="text-xs tracking-widest uppercase hidden sm:block" style={{ color: "rgba(251,191,36,0.2)" }}>
          WiCyS Sathyabama
        </span>
      </nav>

      {/* ══ HERO ══ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6" style={{ paddingTop: "5rem", paddingBottom: "6rem" }}>
        <div className="absolute top-0 left-0 right-0 h-40 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(10,6,24,0.92), transparent)" }} />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm uppercase tracking-[0.5em] mb-8"
            style={{ color: "rgba(251,191,36,0.35)" }}
          >
            WiCyS Sathyabama Presents
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              className="obscura-3d-text leading-none mb-6"
              style={{ fontSize: "clamp(5rem, 18vw, 13rem)", letterSpacing: "0.06em" }}
            >
              OBSCURA
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-16" style={{ background: "rgba(251,191,36,0.25)" }} />
            <p className="text-xl sm:text-2xl italic" style={{ color: "#d97706", letterSpacing: "0.08em" }}>The Forbidden Cipher</p>
            <div className="h-px w-16" style={{ background: "rgba(251,191,36,0.25)" }} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            className="text-base uppercase tracking-widest mb-12"
            style={{ color: "rgba(146,64,14,0.7)", letterSpacing: "0.35em" }}
          >
            A Magical Capture The Flag Experience
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {[{ icon: "📅", label: "April 10, 2026" },{ icon: "🕘", label: "9:00 AM – 5:00 PM" },{ icon: "📍", label: "Sathyabama Institute, Chennai" }].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full text-base" style={{ background: "rgba(251,191,36,0.06)", border: "1px solid rgba(251,191,36,0.15)", color: "rgba(180,130,60,0.9)" }}>
                <span>{icon}</span><span>{label}</span>
              </div>
            ))}
          </motion.div>

          {/* ── Countdown (Moved to Hero) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.25 }}
            className="mb-12 w-full"
            id="countdown"
          >
            <p className="text-xs sm:text-sm uppercase tracking-[0.45em] mb-6" style={{ color: "rgba(251,191,36,0.3)" }}>Time Remaining</p>
            {mounted && <MagicalCountdown targetDate={obscuraDate} />}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-lg font-semibold text-base tracking-wide transition-all duration-300 hover:opacity-90 hover:scale-[1.03]" style={{ background: "linear-gradient(135deg, #92400e, #d97706)", color: "#fef3c7", border: "1px solid rgba(251,191,36,0.3)" }}>
              ✦ Register Now
            </a>
            <a href="#prophecy" className="px-8 py-4 rounded-lg text-base tracking-wide transition-all duration-300 hover:opacity-80 hover:scale-[1.03]" style={{ border: "1px solid rgba(251,191,36,0.2)", color: "rgba(251,191,36,0.6)" }}>
              Scroll to Explore ↓
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2" style={{ borderColor: "rgba(251,191,36,0.2)" }}>
              <motion.div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "rgba(251,191,36,0.5)" }}
                animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>

      </section>

      {/* ══ CONTENT ══ */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-36">

        {/* ── The Ancient Prophecy ── */}
        <ScrollReveal>
          <section id="prophecy" className="mb-0 pt-8">
            <SectionHeading>The Ancient Prophecy</SectionHeading>
            <ScrollReveal delay={0.15}>
              <div className="rounded-2xl px-8 sm:px-12 py-10" style={{ background: "rgba(14,8,28,0.65)", border: "1px solid rgba(251,191,36,0.1)" }}>
                <p className="leading-8 mb-5" style={{ color: "rgba(196,150,80,0.85)", fontSize: "19px" }}>
                  In the deep annals of the Forbidden Archive, there exists a cipher known only as{" "}
                  <em className="font-new-rocker" style={{ color: "#fbbf24", fontSize: "1.15em" }}>OBSCURA</em>{" "}
                  — woven from shadow, starlight, and the darkest threads of arcane knowledge. For centuries, it has remained unbroken, its secrets guarded by enchantments that bend the very fabric of logic.
                </p>
                <p className="leading-8 mb-5" style={{ color: "rgba(196,150,80,0.85)", fontSize: "19px" }}>
                  The Council of WiCyS has opened the vaults. The scrolls are unsealed. Brave apprentices of the digital arts are now summoned to prove their mastery over cryptographic enchantments, steganographic glyphs, web fortress vulnerabilities, and the mysteries of binary incantations.
                </p>
                <p className="text-center italic pt-2" style={{ color: "rgba(217,119,6,0.7)", fontSize: "19px" }}>
                  &quot;The cipher is not broken by strength, but by seeing what others dare not look at.&quot;
                </p>
              </div>
            </ScrollReveal>
          </section>
        </ScrollReveal>

        <Divider />

        {/* ── The Four Arcane Orders ── */}
        <section>
          <SectionHeading>The Four Arcane Orders</SectionHeading>
          <ScrollReveal delay={0.1}>
            <p className="text-center text-sm uppercase tracking-widest mb-10" style={{ color: "rgba(146,64,14,0.5)" }}>Choose your realm — or conquer them all</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {houses.map((house, i) => (
              <motion.div
                key={house.name}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="rounded-xl p-6"
                style={{ background: "rgba(14,8,28,0.55)", border: `1px solid ${house.borderColor}` }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl mt-0.5">{house.badge}</span>
                  <div>
                    <h3 className="font-bold text-xl mb-0.5" style={{ color: house.color }}>House {house.name}</h3>
                    <p className="text-sm mb-3 uppercase tracking-wider" style={{ color: "rgba(146,64,14,0.6)" }}>{house.element}</p>
                    <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(180,130,60,0.75)" }}>{house.desc}</p>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="px-2.5 py-1 rounded-full" style={{ background: "rgba(251,191,36,0.07)", border: "1px solid rgba(251,191,36,0.15)", color: "rgba(251,191,36,0.7)" }}>{house.difficulty}</span>
                      <span style={{ color: "rgba(146,64,14,0.5)" }}>{house.points} pts</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── The Sacred Codex ── */}
        <ScrollReveal>
          <section>
            <SectionHeading>The Sacred Codex</SectionHeading>
            <ScrollReveal delay={0.1}>
              <p className="text-center text-sm uppercase tracking-widest mb-10" style={{ color: "rgba(146,64,14,0.5)" }}>Rules inscribed by the High Council</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl px-8 sm:px-12 py-10" style={{ background: "rgba(14,8,28,0.65)", border: "1px solid rgba(251,191,36,0.1)" }}>
                <ol className="space-y-5">
                  {rules.map((rule, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06, duration: 0.4 }}
                    >
                      <span className="flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center text-sm font-bold mt-0.5" style={{ borderColor: "rgba(251,191,36,0.2)", color: "rgba(251,191,36,0.5)" }}>{i + 1}</span>
                      <p className="text-base leading-relaxed" style={{ color: "rgba(180,130,60,0.8)" }}>{rule}</p>
                    </motion.li>
                  ))}
                </ol>
              </div>
            </ScrollReveal>
          </section>
        </ScrollReveal>

        <Divider />

        {/* ── Treasures of the Victors ── */}
        <section>
          <SectionHeading>Treasures of the Victors</SectionHeading>
          <ScrollReveal delay={0.1}>
            <p className="text-center text-sm uppercase tracking-widest mb-10" style={{ color: "rgba(146,64,14,0.5)" }}>Spoils worthy of the most cunning enchanters</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-5">
            {prizes.map((prize, i) => (
              <motion.div
                key={prize.place}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
                className={`text-center rounded-2xl p-8 ${i === 0 ? "sm:-mt-4" : ""}`}
                style={{
                  background: "rgba(14,8,28,0.65)",
                  border: `1px solid ${i === 0 ? "rgba(252,211,77,0.25)" : "rgba(251,191,36,0.1)"}`,
                  boxShadow: i === 0 ? "0 0 30px rgba(252,211,77,0.1)" : "none",
                }}
              >
                <div className="text-5xl mb-4">{prize.badge}</div>
                <div className="text-base font-bold mb-1" style={{ color: prize.color }}>{prize.place} Place</div>
                <div className="text-sm italic mb-4" style={{ color: "rgba(146,64,14,0.7)" }}>{prize.title}</div>
                <div className="text-3xl font-black mb-2" style={{ color: prize.color }}>{prize.amount}</div>
                <div className="text-sm" style={{ color: "rgba(146,64,14,0.4)" }}>+ Certificates &amp; Gifts</div>
              </motion.div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── Open the Portal ── */}
        <ScrollReveal>
          <section className="text-center">
            <SectionHeading>Open the Portal</SectionHeading>
            <ScrollReveal delay={0.1}>
              <p className="text-sm uppercase tracking-widest mb-12" style={{ color: "rgba(146,64,14,0.5)" }}>Scan to claim your place in the Forbidden Cipher</p>
            </ScrollReveal>
            <div className="flex flex-col items-center gap-8">
              <ScrollReveal delay={0.2}>
                <div
                  className="relative p-1 rounded-2xl cursor-pointer transition-all duration-500"
                  onMouseEnter={() => setQrHovered(true)}
                  onMouseLeave={() => setQrHovered(false)}
                  role="img"
                  aria-label="QR code for OBSCURA registration"
                  style={{ background: "linear-gradient(135deg, rgba(251,191,36,0.3), rgba(217,119,6,0.1), rgba(251,191,36,0.3))", boxShadow: qrHovered ? "0 0 50px rgba(251,191,36,0.3), 0 0 100px rgba(251,191,36,0.1)" : "0 0 25px rgba(251,191,36,0.12)" }}
                >
                  {(["top-2 left-2","top-2 right-2","bottom-2 left-2","bottom-2 right-2"] as const).map((pos, i) => (
                    <span key={i} className={`absolute ${pos} text-base`} style={{ color: "rgba(251,191,36,0.5)" }} aria-hidden="true">{"◤◥◣◢"[i]}</span>
                  ))}
                  <div className="p-6 rounded-xl" style={{ background: "#faf8f0" }}>
                    <QRCodeSVG value={REGISTRATION_URL} size={200} level="H" fgColor="#1a0a00" bgColor="#faf8f0" />
                  </div>
                </div>
              </ScrollReveal>
              <p className="text-sm" style={{ color: "rgba(251,191,36,0.3)" }}>✦ Scan to Register ✦</p>
              <motion.a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-xl font-bold text-lg tracking-wide"
                style={{ background: "linear-gradient(135deg, #92400e, #d97706)", color: "#fef3c7", border: "1px solid rgba(251,191,36,0.3)" }}
                aria-label="Register for OBSCURA CTF"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(251,191,36,0.3)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25 }}
              >
                ✦ Register Now ✦
              </motion.a>
              <p className="text-sm" style={{ color: "rgba(146,64,14,0.35)" }}>{REGISTRATION_URL}</p>
            </div>
          </section>
        </ScrollReveal>

        <Divider />

        {/* ── Gathering Point ── */}
        <ScrollReveal>
          <section className="text-center">
            <div className="inline-block px-10 py-8 rounded-2xl" style={{ background: "rgba(14,8,28,0.65)", border: "1px solid rgba(251,191,36,0.1)" }}>
              <p className="text-sm uppercase tracking-widest mb-4" style={{ color: "rgba(146,64,14,0.5)" }}>The Gathering Point</p>
              <p className="text-xl font-bold mb-1" style={{ color: "#d97706" }}>Sathyabama Institute of Science and Technology</p>
              <p className="text-base mb-5" style={{ color: "rgba(146,64,14,0.6)" }}>Jeppiaar Nagar, Rajiv Gandhi Salai, Chennai, Tamil Nadu 600119</p>
              <div className="flex flex-wrap justify-center gap-6 text-base" style={{ color: "rgba(180,130,60,0.6)" }}>
                <span>📅 April 10, 2026</span>
                <span>🕘 9:00 AM – 5:00 PM</span>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <div className="text-center mt-16">
          <Link href="/" className="text-sm uppercase tracking-widest transition-opacity hover:opacity-80" style={{ color: "rgba(146,64,14,0.4)" }}>
            ← Return to WiCyS Sathyabama
          </Link>
        </div>
      </div>
    </div>
  );
}
