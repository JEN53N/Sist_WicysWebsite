import type { Metadata } from "next";
import { events } from "@/data";
import { EventCard, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Archive",
  description:
    "Browse all past WiCyS Sathyabama events — CTFs, guest lectures, hackathons, and workshops.",
};

const pastEvents = events.filter((e) => e.status === "past" && e.category !== "workshop");
const pastWorkshops = events.filter((e) => e.status === "past" && e.category === "workshop");

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-dark-900 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          badge="Archive"
          title="Past Events"
          subtitle="A look back at the sessions, talks, and competitions we have hosted."
        />

        {/* Past Events */}
        <section className="mb-20" aria-labelledby="past-events-heading">
          <div className="flex items-center gap-3 mb-8">
            <h2 id="past-events-heading" className="text-xl font-semibold text-white">Events</h2>
            <span className="px-2.5 py-0.5 bg-dark-700 border border-dark-500 rounded-full text-gray-400 text-xs">
              {pastEvents.length} total
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
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
        </section>

        <div className="border-t border-dark-500/40 mb-20" />

        {/* Past Workshops */}
        <section aria-labelledby="past-workshops-heading">
          <div className="flex items-center gap-3 mb-8">
            <h2 id="past-workshops-heading" className="text-xl font-semibold text-white">Past Workshops</h2>
            <span className="px-2.5 py-0.5 bg-dark-700 border border-dark-500 rounded-full text-gray-400 text-xs">
              {pastWorkshops.length} total
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastWorkshops.map((event, index) => (
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
        </section>

      </div>
    </div>
  );
}
