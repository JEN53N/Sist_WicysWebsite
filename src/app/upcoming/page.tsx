"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function UpcomingPage() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Target date: April 10, 2026
    const targetDate = new Date("2026-04-10T23:59:59+05:30").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-max">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-brand-purple/20 border border-brand-purple/30 text-brand-purple-light text-xs font-semibold tracking-wider mb-6">
            WHAT&apos;S NEXT
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Upcoming Events
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Exciting events on the horizon — mark your calendars and prepare for something extraordinary.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-2xl relative overflow-hidden p-8 md:p-12"
            style={{
              background: "linear-gradient(135deg, #1a1503 0%, #0d0902 60%, #1a1503 100%)",
              border: "1px solid rgba(217,119,6,0.3)",
            }}
          >
            {/* Background glow */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)" }}
            />

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                <div className="flex-1">
                  {/* Headline badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-bold tracking-wider mb-6">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    HEADLINE EVENT
                  </div>

                  <h2
                    className="text-4xl md:text-5xl font-bold mb-2"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--color-gold)",
                      textShadow: "0 2px 10px rgba(238,186,48,0.3)",
                    }}
                  >
                    OBSCURA
                  </h2>

                  <h3
                    className="text-lg md:text-xl font-semibold mb-1"
                    style={{ color: "var(--color-cream)" }}
                  >
                    The Forbidden Cipher
                  </h3>

                  <p
                    className="text-base mb-6"
                    style={{ color: "var(--color-orange)" }}
                  >
                    A Magical National Level Capture The Flag Experience
                  </p>

                  {/* Event details */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2 text-amber-200/80">
                      <span className="text-lg">📅</span>
                      <span>April 10, 2026</span>
                    </div>
                    <div className="flex items-center gap-2 text-amber-200/80">
                      <span className="text-lg">🕘</span>
                      <span>9:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-amber-200/80">
                      <span className="text-lg">📍</span>
                      <span>Sathyabama Institute, Chennai</span>
                    </div>
                  </div>

                  <p
                    className="text-base leading-relaxed mb-8"
                    style={{ color: "#a89070", maxWidth: "600px" }}
                  >
                    Enter an enchanted realm where ancient ciphers meet modern exploitation. OBSCURA challenges participants with cryptography, steganography, web security, and reverse engineering — all wrapped in a uniquely immersive magical theme.
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/obscura"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all"
                      style={{
                        background: "linear-gradient(135deg, #d97706, #b45309)",
                        color: "#fef3c7",
                        border: "1px solid rgba(217,119,6,0.5)",
                      }}
                    >
                      ✦ Enter The Portal
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSffz93BunAfJZpZ77awTWiuEhx9R5FMeuzMt4R9-wGAdTTUew/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all"
                      style={{
                        background: "transparent",
                        color: "#fbbf24",
                        border: "1px solid rgba(251,191,36,0.4)",
                      }}
                    >
                      Register Now
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Countdown section */}
                <div className="lg:w-72 flex flex-col items-center lg:items-end">
                  <div className="text-amber-400 text-sm font-semibold tracking-wider mb-4 text-center lg:text-right">
                    EVENT BEGINS IN
                  </div>

                  <div className="flex gap-3">
                    {[
                      { val: timeLeft.days, label: "DAYS" },
                      { val: timeLeft.hours, label: "HOURS" },
                      { val: timeLeft.minutes, label: "MINUTES" },
                      { val: timeLeft.seconds, label: "SECONDS" },
                    ].map((item) => (
                      <div key={item.label} className="flex flex-col items-center">
                        <div
                          className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center text-2xl md:text-3xl font-bold mb-2"
                          style={{
                            background: "rgba(15,23,42,0.8)",
                            border: "1px solid rgba(251,191,36,0.2)",
                            color: "#fef3c7",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                          }}
                        >
                          {pad(item.val)}
                        </div>
                        <div className="text-amber-200/60 text-xs font-medium">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}