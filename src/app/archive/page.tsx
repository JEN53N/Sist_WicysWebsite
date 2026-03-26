import type { Metadata } from "next";
import { events } from "@/data";
import { EventCard } from "@/components/ui/EventCard";

export const metadata: Metadata = {
  title: "Event Archive | WiCyS Sathyabama",
  description: "Browse all past events organized by WiCyS Sathyabama Student Chapter.",
};

export default function ArchivePage() {
  const workshopEvents = events
    .filter(e => e.category === "workshop")
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

  const otherEvents = events
    .filter(e => e.category !== "workshop")
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-max">
        <div className="text-center mb-12">
          <span className="section-label">Archive</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            Past Events
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A look back at the sessions, talks, and competitions we have hosted.
          </p>
        </div>

        {/* Workshops Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-bold text-white">Past Workshops</h2>
            <span className="bg-brand-purple/20 text-brand-purple-light text-xs font-semibold px-3 py-1 rounded-full">
              {workshopEvents.length} total
            </span>
          </div>
          
          {workshopEvents.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {workshopEvents.map((event, index) => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  category={event.category}
                  date={event.date}
                  description={event.description}
                  index={index}
                  highlight={event.highlight}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No workshop events found.</p>
            </div>
          )}
        </section>

        {/* Other Events Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-bold text-white">Events</h2>
            <span className="bg-brand-purple/20 text-brand-purple-light text-xs font-semibold px-3 py-1 rounded-full">
              {otherEvents.length} total
            </span>
          </div>
          
          {otherEvents.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherEvents.map((event, index) => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  category={event.category}
                  date={event.date}
                  description={event.description}
                  index={index}
                  highlight={event.highlight}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No events found.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}