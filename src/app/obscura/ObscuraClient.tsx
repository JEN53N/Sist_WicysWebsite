"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MagicalCountdown } from "@/components/ui/Countdown";
import { obscuraDate } from "@/data";

const REGISTRATION_URL = "https://forms.gle/example-registration-link";

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



function HarryPotterParticles() {
  // Particles that appear at random positions on screen and fade in/out — not directional
  const particles = Array.from({ length: 55 }, (_, i) => {
    const r = (i * 2654435761 + 1234567) >>> 0;
    const r2 = (r * 1664525 + 1013904223) >>> 0;
    const r3 = (r2 * 22695477 + 1) >>> 0;
    // type: 0=snitch spark gold, 1=white flash, 2=gold streak, 3=small gold, 4=lavender
    const type = i % 5;
    const isStreak = type === 2;
    return {
      id: i,
      type,
      // Random position across the entire viewport
      left: `${2 + (r % 96)}%`,
      top: `${2 + (r2 % 90)}%`,
      size: isStreak ? 2 + (r3 % 3) : 4 + (r % 9),
      // Stagger the animation cycles so they don't all pulse together
      duration: 1.8 + (r % 30) * 0.18,
      delay: -(r3 % 40) * 0.5,
      maxOpacity: 0.55 + (r % 4) * 0.12,
      // Slight drift while fading in/out
      driftX: ((r2 % 7) - 3) * 6,
      driftY: ((r3 % 7) - 3) * 6,
      streakW: 12 + (r % 20),
    };
  });

  const sym = (t: number) => ["✦", "✨", "·", "⋆", "✦"][t] ?? "✦";
  const col = (t: number) => [
    "rgba(251,191,36,",
    "rgba(255,252,210,",
    "rgba(251,191,36,",
    "rgba(255,215,80,",
    "rgba(190,160,255,",
  ][t] ?? "rgba(251,191,36,";

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {particles.map((p) =>
        p.type === 2 ? (
          // Gold streak — thin horizontal line that flickers
          <motion.div
            key={p.id}
            className="absolute"
            style={{
              left: p.left,
              top: p.top,
              width: p.streakW,
              height: 1.5,
              borderRadius: 2,
              background: `linear-gradient(to right, transparent, rgba(251,191,36,${p.maxOpacity}), transparent)`,
              rotate: `${((p.id * 37) % 60) - 30}deg`,
            }}
            animate={{
              opacity: [0, p.maxOpacity, p.maxOpacity * 0.6, 0],
              x: [0, p.driftX],
              y: [0, p.driftY],
              scaleX: [0.3, 1, 0.6, 0],
            }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ) : (
          <motion.span
            key={p.id}
            className="absolute select-none"
            style={{
              left: p.left,
              top: p.top,
              fontSize: p.size,
              color: col(p.type) + p.maxOpacity + ")",
              lineHeight: 1,
            }}
            animate={{
              opacity: [0, p.maxOpacity, p.maxOpacity * 0.7, 0],
              x: [0, p.driftX],
              y: [0, p.driftY],
              scale: p.type === 1 ? [0.3, 1.5, 0.8, 0] : [0.5, 1.1, 0.9, 0],
            }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          >
            {sym(p.type)}
          </motion.span>
        )
      )}
    </div>
  );
}

// ── Starfield ──────────────────────────────────────────────────────────────
function StarField() {
  const stars = Array.from({ length: 160 }, (_, i) => {
    const r  = (i * 2654435761 + 999) >>> 0;
    const r2 = (r  * 1664525   + 1013904223) >>> 0;
    const r3 = (r2 * 22695477  + 1) >>> 0;
    const size   = 0.8 + (r % 3) * 0.7;
    const bright = i % 12 === 0;          // occasional brighter star
    return {
      id: i,
      left:   `${(r  % 100)}%`,
      top:    `${(r2 % 88)}%`,
      size,
      dur:    2.5 + (r3 % 40) * 0.15,
      delay:  -(r  % 60) * 0.4,
      opacity: bright ? 0.75 : 0.15 + (r3 % 5) * 0.1,
    };
  });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }} aria-hidden="true">
      {stars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full"
          style={{
            left: s.left,
            top:  s.top,
            width:  s.size,
            height: s.size,
            background: "#e8e0ff",
            boxShadow: s.size > 1.8 ? `0 0 ${s.size * 2}px rgba(200,190,255,0.6)` : "none",
          }}
          animate={{ opacity: [s.opacity * 0.4, s.opacity, s.opacity * 0.5, s.opacity] }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

// ── 3-D parallax Moon ──────────────────────────────────────────────────────
function Moon({ scrollY }: { scrollY: number }) {
  // Fades out and drifts up as user scrolls — gone by ~600px scroll
  const progress = Math.min(scrollY / 520, 1);
  const opacity  = 1 - progress;
  const translateY = scrollY * 0.38;          // slower than page = parallax depth

  return (
    <div
      className="fixed pointer-events-none"
      style={{
        top:   "6vh",
        right: "6vw",
        zIndex: 0,
        opacity,
        transform: `translateY(${translateY}px)`,
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
        // Base moon colour — icy silver with a cool purple cast
        background: "radial-gradient(circle at 38% 35%, #f0eeff 0%, #ccc6ee 18%, #9e94cc 40%, #6b5fa8 65%, #2d2050 85%, #130d30 100%)",
        boxShadow: [
          // Rim light — subtle purple/silver on the lit edge
          "inset -6px -6px 20px rgba(80,50,160,0.55)",
          "inset  4px  4px 18px rgba(255,255,255,0.18)",
          // Outer glow cast onto sky
          "0 0 60px rgba(160,130,255,0.25)",
          "0 0 120px rgba(120,80,220,0.15)",
          "0 0 220px rgba(90,50,190,0.10)",
        ].join(", "),
      }}>
        {/* 3-D shading overlay — darkens the lower-right to give sphere depth */}
        <div style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          background: "radial-gradient(circle at 62% 65%, rgba(10,5,30,0.72) 0%, rgba(10,5,30,0.35) 45%, transparent 70%)",
        }} />
        {/* Specular highlight — top-left bright spot */}
        <div style={{
          position: "absolute",
          top: "10%", left: "14%",
          width: "32%", height: "22%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",
          filter: "blur(4px)",
        }} />
        {/* Secondary soft highlight */}
        <div style={{
          position: "absolute",
          top: "18%", left: "20%",
          width: "18%", height: "12%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(255,255,255,0.35) 0%, transparent 100%)",
          filter: "blur(2px)",
        }} />
        {/* Crater 1 */}
        <div style={{
          position: "absolute", top: "42%", left: "52%",
          width: "14%", height: "14%", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(40,25,80,0.55) 0%, transparent 70%)",
          boxShadow: "inset 1px 1px 3px rgba(255,255,255,0.06)",
        }} />
        {/* Crater 2 */}
        <div style={{
          position: "absolute", top: "28%", left: "62%",
          width: "9%", height: "9%", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(40,25,80,0.45) 0%, transparent 70%)",
        }} />
        {/* Crater 3 — smaller */}
        <div style={{
          position: "absolute", top: "60%", left: "38%",
          width: "7%", height: "7%", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(40,25,80,0.4) 0%, transparent 70%)",
        }} />
        {/* Subtle cloud/mare texture */}
        <div style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          background: [
            "radial-gradient(ellipse 55% 30% at 55% 55%, rgba(70,45,120,0.22) 0%, transparent 100%)",
            "radial-gradient(ellipse 35% 20% at 30% 65%, rgba(60,35,100,0.18) 0%, transparent 100%)",
          ].join(", "),
        }} />
      </div>

      {/* Slow rotation animation for a living feel */}
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
function CastleSilhouette({ scrollY }: { scrollY: number }) {
  const offsetY = scrollY * 0.12;
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          transform: `translateY(${offsetY}px)`,
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
    <div className="flex items-center justify-center gap-4 my-16">
      <div className="h-px flex-1 max-w-48" style={{ background: "linear-gradient(to right, transparent, rgba(251,191,36,0.2))" }} />
      <span style={{ color: "rgba(251,191,36,0.35)", letterSpacing: "0.5em", fontSize: 13 }}>✦ ✦ ✦</span>
      <div className="h-px flex-1 max-w-48" style={{ background: "linear-gradient(to left, transparent, rgba(251,191,36,0.2))" }} />
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-4xl sm:text-5xl font-bold text-center mb-3" style={{ color: "#d97706", textShadow: "0 0 20px rgba(217,119,6,0.3)", fontFamily: "Georgia, serif" }}>
      {children}
    </h2>
  );
}

export default function ObscuraClient() {
  const [mounted, setMounted] = useState(false);
  const [qrHovered, setQrHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen relative"
      style={{
        backgroundColor: "#0a0618",
        backgroundImage: [
          // Deep stormy purple-indigo base gradient
          "radial-gradient(ellipse 110% 55% at 50% 0%, #1a0a3a 0%, #0d0525 40%, transparent 70%)",
          // Purple storm clouds upper left
          "radial-gradient(ellipse 70% 45% at 15% 20%, rgba(80,30,140,0.35) 0%, rgba(50,15,100,0.2) 40%, transparent 70%)",
          // Indigo storm mass upper right (where moon is)
          "radial-gradient(ellipse 60% 40% at 85% 15%, rgba(60,20,120,0.3) 0%, rgba(40,10,90,0.15) 50%, transparent 75%)",
          // Deep violet mid-page
          "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(45,15,90,0.2) 0%, transparent 60%)",
          // Subtle warm amber at bottom — torch/castle light
          "radial-gradient(ellipse 70% 30% at 50% 100%, rgba(90,35,10,0.25) 0%, transparent 55%)",
        ].join(", "),
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      {mounted && <StarField />}
      {mounted && <Moon scrollY={scrollY} />}
      {mounted && <CastleSilhouette scrollY={scrollY} />}
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
          {/* Pre-title — status pill REMOVED, only this line */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm uppercase tracking-[0.5em] mb-8"
            style={{ color: "rgba(251,191,36,0.35)" }}
          >
            WiCyS Sathyabama Presents
          </motion.p>

          {/* ── OBSCURA — New Rocker font, 3D carved stone ── */}
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
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {[{ icon: "📅", label: "April 10, 2026" },{ icon: "🕘", label: "9:00 AM – 5:00 PM" },{ icon: "📍", label: "Sathyabama Institute, Chennai" }].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full text-base" style={{ background: "rgba(251,191,36,0.06)", border: "1px solid rgba(251,191,36,0.15)", color: "rgba(180,130,60,0.9)" }}>
                <span>{icon}</span><span>{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.25 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-lg font-semibold text-base tracking-wide transition-opacity hover:opacity-90" style={{ background: "linear-gradient(135deg, #92400e, #d97706)", color: "#fef3c7", border: "1px solid rgba(251,191,36,0.3)" }}>
              ✦ Register Now
            </a>
            <a href="#countdown" className="px-8 py-4 rounded-lg text-base tracking-wide transition-opacity hover:opacity-80" style={{ border: "1px solid rgba(251,191,36,0.2)", color: "rgba(251,191,36,0.6)" }}>
              Scroll to Explore ↓
            </a>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(10,6,24,0.92), transparent)" }} />
      </section>

      {/* ══ CONTENT ══ */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-36">

        <section id="countdown" className="text-center mb-0">
          <p className="text-sm uppercase tracking-[0.45em] mb-10" style={{ color: "rgba(251,191,36,0.3)" }}>Time Remaining</p>
          {mounted && <MagicalCountdown targetDate={obscuraDate} />}
        </section>

        <Divider />

        <section className="mb-0">
          <SectionHeading>The Ancient Prophecy</SectionHeading>
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
        </section>

        <Divider />

        <section>
          <SectionHeading>The Four Arcane Orders</SectionHeading>
          <p className="text-center text-sm uppercase tracking-widest mb-10" style={{ color: "rgba(146,64,14,0.5)" }}>Choose your realm — or conquer them all</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {houses.map((house, i) => (
              <motion.div key={house.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }} className="rounded-xl p-6" style={{ background: "rgba(14,8,28,0.55)", border: `1px solid ${house.borderColor}` }}>
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

        <section>
          <SectionHeading>The Sacred Codex</SectionHeading>
          <p className="text-center text-sm uppercase tracking-widest mb-10" style={{ color: "rgba(146,64,14,0.5)" }}>Rules inscribed by the High Council</p>
          <div className="rounded-2xl px-8 sm:px-12 py-10" style={{ background: "rgba(14,8,28,0.65)", border: "1px solid rgba(251,191,36,0.1)" }}>
            <ol className="space-y-5">
              {rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center text-sm font-bold mt-0.5" style={{ borderColor: "rgba(251,191,36,0.2)", color: "rgba(251,191,36,0.5)" }}>{i + 1}</span>
                  <p className="text-base leading-relaxed" style={{ color: "rgba(180,130,60,0.8)" }}>{rule}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Divider />

        <section>
          <SectionHeading>Treasures of the Victors</SectionHeading>
          <p className="text-center text-sm uppercase tracking-widest mb-10" style={{ color: "rgba(146,64,14,0.5)" }}>Spoils worthy of the most cunning enchanters</p>
          <div className="grid sm:grid-cols-3 gap-5">
            {prizes.map((prize, i) => (
              <div key={prize.place} className={`text-center rounded-2xl p-8 ${i === 0 ? "sm:-mt-4" : ""}`} style={{ background: "rgba(14,8,28,0.65)", border: `1px solid ${i === 0 ? "rgba(252,211,77,0.25)" : "rgba(251,191,36,0.1)"}`, boxShadow: i === 0 ? "0 0 30px rgba(252,211,77,0.1)" : "none" }}>
                <div className="text-5xl mb-4">{prize.badge}</div>
                <div className="text-base font-bold mb-1" style={{ color: prize.color }}>{prize.place} Place</div>
                <div className="text-sm italic mb-4" style={{ color: "rgba(146,64,14,0.7)" }}>{prize.title}</div>
                <div className="text-3xl font-black mb-2" style={{ color: prize.color }}>{prize.amount}</div>
                <div className="text-sm" style={{ color: "rgba(146,64,14,0.4)" }}>+ Certificates &amp; Gifts</div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        <section className="text-center">
          <SectionHeading>Open the Portal</SectionHeading>
          <p className="text-sm uppercase tracking-widest mb-12" style={{ color: "rgba(146,64,14,0.5)" }}>Scan to claim your place in the Forbidden Cipher</p>
          <div className="flex flex-col items-center gap-8">
            <div
              className="relative p-1 rounded-2xl cursor-pointer transition-all duration-300"
              onMouseEnter={() => setQrHovered(true)}
              onMouseLeave={() => setQrHovered(false)}
              role="img"
              aria-label="QR code for OBSCURA registration"
              style={{ background: "linear-gradient(135deg, rgba(251,191,36,0.3), rgba(217,119,6,0.1), rgba(251,191,36,0.3))", boxShadow: qrHovered ? "0 0 50px rgba(251,191,36,0.3), 0 0 100px rgba(251,191,36,0.1)" : "0 0 25px rgba(251,191,36,0.12)" }}
            >
              {(["top-2 left-2","top-2 right-2","bottom-2 left-2","bottom-2 right-2"] as const).map((pos, i) => (
                <span key={i} className={`absolute ${pos} text-base`} style={{ color: "rgba(251,191,36,0.5)" }} aria-hidden="true">{["◤","◥","◣","◢"][i]}</span>
              ))}
              <div className="p-6 rounded-xl" style={{ background: "#faf8f0" }}>
                <QRCodeSVG value={REGISTRATION_URL} size={200} level="H" fgColor="#1a0a00" bgColor="#faf8f0" />
              </div>
            </div>
            <p className="text-sm" style={{ color: "rgba(251,191,36,0.3)" }}>✦ Scan to Register ✦</p>
            <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-4 rounded-xl font-bold text-lg tracking-wide transition-opacity hover:opacity-90" style={{ background: "linear-gradient(135deg, #92400e, #d97706)", color: "#fef3c7", border: "1px solid rgba(251,191,36,0.3)" }} aria-label="Register for OBSCURA CTF">
              ✦ Register Now ✦
            </a>
            <p className="text-sm" style={{ color: "rgba(146,64,14,0.35)" }}>{REGISTRATION_URL}</p>
          </div>
        </section>

        <Divider />

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

        <div className="text-center mt-16">
          <Link href="/" className="text-sm uppercase tracking-widest transition-opacity hover:opacity-80" style={{ color: "rgba(146,64,14,0.4)" }}>
            ← Return to WiCyS Sathyabama
          </Link>
        </div>
      </div>
    </div>
  );
}
