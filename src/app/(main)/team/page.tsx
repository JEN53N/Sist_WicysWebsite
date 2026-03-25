import type { Metadata } from "next";
import { teamMembers } from "@/data";
import { TeamCard, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the dedicated faculty and student leaders powering the WiCyS Student Chapter at Sathyabama Institute.",
};

const categoryConfig = [
  { key: "faculty", label: "Faculty Coordinator", description: "Guiding the chapter with expertise and mentorship" },
  { key: "leadership", label: "Chapter Leadership", description: "Leading the vision and direction of our community" },
  { key: "lead", label: "Department Leads", description: "Driving technical and creative initiatives" },
  { key: "coordinator", label: "Event Coordinators", description: "Bringing events to life with planning and passion" },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-dark-900 pt-24 pb-20 cyber-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our People"
          title="Meet The Team"
          subtitle="The passionate individuals behind WiCyS Sathyabama — dedicated to empowering women in cybersecurity."
        />

        {categoryConfig.map(({ key, label, description }) => {
          const members = teamMembers.filter((m) => m.category === key);
          if (members.length === 0) return null;

          const gridClass =
            members.length === 1
              ? "grid sm:grid-cols-1 max-w-sm mx-auto"
              : members.length === 2
              ? "grid sm:grid-cols-2 max-w-2xl mx-auto"
              : "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

          return (
            <section key={key} className="mb-16" aria-labelledby={`${key}-heading`}>
              <div className="mb-8 text-center">
                <h2 id={`${key}-heading`} className="text-2xl font-bold text-white mb-2">
                  {label}
                </h2>
                <p className="text-gray-500 text-sm">{description}</p>
              </div>
              <div className={`${gridClass} gap-6`}>
                {members.map((member, index) => (
                  <TeamCard
                    key={member.id}
                    name={member.name}
                    role={member.role}
                    bio={member.bio}
                    linkedin={member.linkedin}
                    index={index}
                  />
                ))}
              </div>
            </section>
          );
        })}

        {/* Join the team CTA */}
        <div className="mt-10 text-center bg-dark-700 border border-brand-purple/30 rounded-2xl p-10">
          <h3 className="text-2xl font-bold text-white mb-3">Want to Join the Team?</h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            We&apos;re always looking for passionate students to contribute to our chapter. Reach out to us!
          </p>
          <a
            href="mailto:wicys@sathyabama.ac.in"
            className="btn-primary inline-flex items-center gap-2"
            aria-label="Email us to join the team"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}
