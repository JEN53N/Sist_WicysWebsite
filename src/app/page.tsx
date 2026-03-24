import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { events } from "@/data";
import HeroClient from "./HeroClient";

export const metadata: Metadata = {
  title: "Home | WiCyS Sathyabama",
  description:
    "WiCyS Student Chapter at Sathyabama Institute of Science and Technology. Empowering women in cybersecurity through community, events, and education.",
};

const pastEvents = events.filter((e) => e.status === "past").slice(0, 6);

const categoryStyle: Record<string, { tag: string; thumb: string; emoji: string }> = {
  workshop:  { tag: "bg-blue-500/10 text-blue-400 border border-blue-500/20",  thumb: "from-blue-500/10 to-blue-500/3",  emoji: "🔧" },
  lecture:   { tag: "bg-violet-500/10 text-violet-400 border border-violet-500/20", thumb: "from-violet-500/10 to-violet-500/3", emoji: "🎤" },
  hackathon: { tag: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20", thumb: "from-emerald-500/10 to-emerald-500/3", emoji: "💻" },
  technical: { tag: "bg-orange-500/10 text-orange-400 border border-orange-500/20", thumb: "from-orange-500/10 to-orange-500/3", emoji: "⚙️" },
};

export default function HomePage() {
  return (
    <>
      <HeroClient />

      {/* ── WHO WE ARE + MISSION & VISION ── */}
      <section className="section-padding cyber-grid-bg" style={{ background: "rgba(11,15,30,0.5)" }}>
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Left — Who We Are */}
            <div>
              <span className="section-label">About WiCyS</span>
              <h2
                className="text-white mb-5"
                style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.75rem", fontWeight: 700, lineHeight: 1.2 }}
              >
                Who We Are
              </h2>
              <p style={{ color: "#8b93a8", fontSize: "15px", lineHeight: 1.8, fontWeight: 300, marginBottom: "1rem" }}>
                The WiCyS (Women in CyberSecurity) Student Chapter at Sathyabama Institute of Science and Technology is part of a global initiative to support and advance women in the cybersecurity field.
              </p>
              <p style={{ color: "#8b93a8", fontSize: "15px", lineHeight: 1.8, fontWeight: 300 }}>
                Founded to bridge the gender gap in information security, our chapter organizes workshops, CTF competitions, guest lectures, and networking events to build skills, confidence, and community.
              </p>
            </div>

            {/* Right — Mission & Vision */}
            <div>
              <span className="section-label">Purpose</span>
              <h2
                className="text-white mb-6"
                style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.75rem", fontWeight: 700, lineHeight: 1.2 }}
              >
                Mission &amp; Vision
              </h2>

              <div className="mb-6">
                <h3 className="text-white mb-2" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "15px", fontWeight: 700 }}>
                  Our Mission
                </h3>
                <p style={{ color: "#8b93a8", fontSize: "15px", lineHeight: 1.8, fontWeight: 300 }}>
                  To empower women in cybersecurity through mentorship, hands-on training, and community building — creating pathways for underrepresented talent to lead in the security industry.
                </p>
              </div>

              <div>
                <h3 className="text-white mb-2" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "15px", fontWeight: 700 }}>
                  Our Vision
                </h3>
                <p style={{ color: "#8b93a8", fontSize: "15px", lineHeight: 1.8, fontWeight: 300 }}>
                  A world where women are equally represented in cybersecurity roles — from analysts and engineers to CISOs and researchers — driving innovation and protecting our digital future.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PAST EVENTS ── */}
      <section
        className="section-padding"
        style={{ background: "rgba(5,7,15,0.8)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="section-label">History</span>
            <h2
              className="text-white mt-2 mb-2"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.75rem", fontWeight: 700, lineHeight: 1.2 }}
            >
              Past Events
            </h2>
            <p style={{ color: "#6b7280", fontSize: "14px", fontWeight: 300 }}>
              Workshops, lectures, and competitions that have shaped our community.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pastEvents.map((event) => {
              const s = categoryStyle[event.category] ?? categoryStyle.technical;
              return (
                <div key={event.id} className="card-cyber overflow-hidden">
                  <div
                    className={`h-28 flex items-center justify-center text-4xl bg-gradient-to-br ${s.thumb}`}
                  >
                    {s.emoji}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${s.tag}`} style={{ textTransform: "capitalize" }}>
                        {event.category}
                      </span>
                      <span style={{ fontSize: "11px", color: "#6b7280" }}>{event.date}</span>
                    </div>
                    <h3 className="text-white mb-1" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", fontWeight: 700, lineHeight: 1.35 }}>
                      {event.title}
                    </h3>
                    <p style={{ fontSize: "12px", color: "#6b7280", lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      {event.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link href="/archive" className="btn-outline">
              View Full Archive
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── OBSCURA UPCOMING ── */}
      <section className="section-padding cyber-grid-bg" style={{ background: "rgba(8,6,4,0.9)" }}>
        <div className="container-max">
          <div className="text-center mb-8">
            <span className="section-label" style={{ borderColor: "rgba(217,119,6,0.25)", background: "rgba(217,119,6,0.06)", color: "rgba(251,191,36,0.7)" }}>
              Coming Soon
            </span>
            <h2
              className="text-white mt-2 mb-1"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.75rem", fontWeight: 700, lineHeight: 1.2 }}
            >
              Upcoming Event
            </h2>
            <p style={{ color: "#6b7280", fontSize: "14px", fontWeight: 300 }}>
              Our next major event — the magical OBSCURA CTF experience.
            </p>
          </div>

          <div
            className="rounded-2xl relative overflow-hidden p-8 sm:p-12"
            style={{
              background: "linear-gradient(135deg, #130e02 0%, #0d0902 60%, #130e02 100%)",
              border: "1px solid rgba(217,119,6,0.2)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(251,191,36,0.05) 0%, transparent 70%)" }}
            />
            <div className="relative">
              <span
                className="inline-block text-xs font-bold rounded-full border px-3 py-1 mb-4"
                style={{ background: "rgba(251,191,36,0.08)", borderColor: "rgba(251,191,36,0.25)", color: "#fbbf24", textTransform: "uppercase", letterSpacing: "0.1em" }}
              >
                ✦ Featured Event
              </span>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2.2rem", fontWeight: 800, color: "#fbbf24", lineHeight: 1, marginBottom: "0.4rem" }}>
                OBSCURA
              </h3>
              <p style={{ color: "#d97706", fontSize: "15px", fontStyle: "italic", marginBottom: "1rem" }}>
                The Forbidden Cipher — Capture The Flag
              </p>
              <p style={{ color: "#78716c", fontSize: "14px", lineHeight: 1.75, maxWidth: 520, fontWeight: 300, marginBottom: "1.5rem" }}>
                Enter a realm where ancient ciphers meet modern cybersecurity. Cryptography, steganography, web exploitation — wrapped in an enchanted CTF unlike any other.
              </p>
              <div className="flex flex-wrap gap-5 mb-8" style={{ color: "#6b7280", fontSize: "13px" }}>
                <span>📅 April 10, 2026</span>
                <span>🕘 9:00 AM onwards</span>
                <span>📍 Sathyabama Institute, Chennai</span>
              </div>
              <Link
                href="/obscura"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm"
                style={{ background: "linear-gradient(135deg, #92400e, #d97706)", color: "#fef3c7" }}
              >
                ✦ Enter the Portal
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── JOIN CTA ── */}
      <section
        className="section-padding text-center"
        style={{ background: "rgba(11,15,30,0.5)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="container-max">
          <div className="max-w-xl mx-auto">
            <span className="section-label">Join Us</span>
            <h2
              className="text-white mt-2 mb-4"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.9rem", fontWeight: 700, lineHeight: 1.2 }}
            >
              Be Part of the <span className="gradient-text">Movement</span>
            </h2>
            <p className="mb-8" style={{ color: "#6b7280", fontSize: "15px", fontWeight: 300, lineHeight: 1.75 }}>
              Whether you&apos;re a beginner or an experienced practitioner, WiCyS Sathyabama welcomes you. Join our community of changemakers today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="mailto:wicys@sathyabama.ac.in" className="btn-primary">
                Join Our Community
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/team"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border text-sm font-medium transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.08)", color: "#9ca3af" }}
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
