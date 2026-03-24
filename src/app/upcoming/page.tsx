import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import { events, obscuraDate } from "@/data";
import { EventCard, SectionHeader } from "@/components/ui";
import CountdownSection from "./CountdownSection";

export const metadata: Metadata = {
  title: "Upcoming Events",
  description:
    "Stay up to date with the latest upcoming events from WiCyS Sathyabama, including OBSCURA CTF and more.",
};

const upcomingEvents = events.filter((e) => e.status === "upcoming");

export default function UpcomingPage() {
  return (
    <div className="min-h-screen bg-dark-900 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="What&apos;s Next"
          title="Upcoming Events"
          subtitle="Exciting events on the horizon — mark your calendars and prepare for something extraordinary."
        />

        {/* OBSCURA Highlight */}
        <section
          className="mb-16 relative overflow-hidden rounded-2xl border border-amber-500/30"
          aria-labelledby="obscura-section-heading"
          style={{
            background: "linear-gradient(135deg, #1a1005 0%, #0d0a02 50%, #1a1005 100%)",
          }}
        >
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full" style={{ background: "radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 70%)" }} />
            <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full" style={{ background: "radial-gradient(circle, rgba(251,191,36,0.04) 0%, transparent 70%)" }} />
          </div>

          <div className="relative p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="flex-1">
                <span
                  className="inline-block px-3 py-1 text-xs font-bold rounded-full border mb-6 uppercase tracking-widest"
                  style={{
                    background: "rgba(251,191,36,0.15)",
                    borderColor: "rgba(251,191,36,0.4)",
                    color: "#fbbf24",
                  }}
                >
                  ✦ Headline Event
                </span>
                <h2
                  id="obscura-section-heading"
                  className="text-4xl sm:text-5xl font-black mb-3"
                  style={{
                    color: "#fbbf24",
                    textShadow: "0 0 30px rgba(251,191,36,0.4)",
                  }}
                >
                  OBSCURA
                </h2>
                <p className="text-xl mb-2" style={{ color: "#d97706" }}>
                  The Forbidden Cipher
                </p>
                <p className="font-semibold mb-6" style={{ color: "#92400e" }}>
                  A Magical Capture The Flag Experience
                </p>

                <div className="flex flex-wrap gap-5 mb-8 text-sm" style={{ color: "#a16207" }}>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" style={{ color: "#fbbf24" }} />
                    April 10, 2026
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" style={{ color: "#fbbf24" }} />
                    9:00 AM – 5:00 PM
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" style={{ color: "#fbbf24" }} />
                    Sathyabama Institute, Chennai
                  </div>
                </div>

                <p className="leading-relaxed mb-8 max-w-xl" style={{ color: "#78350f" }}>
                  Enter an enchanted realm where ancient ciphers meet modern exploitation. OBSCURA challenges participants with cryptography, steganography, web security, and reverse engineering — all wrapped in a uniquely immersive magical theme.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/obscura"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 font-bold rounded-xl transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, #92400e, #d97706)",
                      color: "#fef3c7",
                    }}
                  >
                    ✦ Enter The Portal
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://forms.gle/example-registration-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-xl border transition-all duration-300"
                    style={{
                      borderColor: "rgba(251,191,36,0.4)",
                      color: "#fbbf24",
                    }}
                    aria-label="Register for OBSCURA CTF"
                  >
                    Register Now
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex-shrink-0 w-full lg:w-auto">
                <div className="text-center mb-4">
                  <p className="text-sm uppercase tracking-wider mb-4" style={{ color: "#92400e" }}>
                    Event Begins In
                  </p>
                  <CountdownSection targetDate={obscuraDate} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Upcoming */}
        <SectionHeader
          badge="More Events"
          title="Also Coming Up"
          subtitle="Keep an eye out for these upcoming programs and opportunities."
          align="left"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents
            .filter((e) => !e.highlight)
            .map((event, index) => (
              <EventCard
                key={event.id}
                title={event.title}
                category={event.category}
                date={event.date}
                description={event.description}
                index={index}
              />
            ))}
        </div>

        {upcomingEvents.filter((e) => !e.highlight).length === 0 && (
          <div className="text-center py-16 text-gray-500">
            <p className="text-lg">More events coming soon — stay tuned!</p>
            <a
              href="mailto:wicys@sathyabama.ac.in"
              className="inline-flex items-center gap-2 text-brand-purple-light hover:text-white mt-4 transition-colors"
            >
              Subscribe to updates
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
