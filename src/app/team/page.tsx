import type { Metadata } from "next";
import { teamMembers } from "@/data";
import { TeamCard } from "@/components/ui/TeamCard";

export const metadata: Metadata = {
  title: "Team | WiCyS Sathyabama",
  description: "Meet the dedicated team behind WiCyS Sathyabama Student Chapter.",
};

export default function TeamPage() {
  // Group members by category
  const categories = [
    { key: "faculty", label: "Faculty Coordinators" },
    { key: "leadership", label: "Chapter Leadership" },
    { key: "core", label: "Core Team" },
    { key: "lead", label: "Department Leads", subtitle: "Driving technical and creative initiatives" },
    { key: "coordinator", label: "Event Coordinators" },
  ];

  const grouped = categories.map(cat => ({
    ...cat,
    members: teamMembers.filter(member => member.category === cat.key),
  })).filter(cat => cat.members.length > 0);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-max">
        <div className="text-center mb-12">
          <span className="section-label">Team</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            Team
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The passionate individuals driving WiCyS Sathyabama forward, empowering women in cybersecurity.
          </p>
        </div>

        {grouped.map((category) => (
          <section key={category.key} className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white">
                {category.label}
              </h2>
              {category.subtitle && (
                <p className="text-gray-400 mt-2">{category.subtitle}</p>
              )}
            </div>
            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6">
              {category.members.map((member, index) => (
                <div key={member.id} className="w-[300px] shrink-0 h-full">
                  <TeamCard
                    name={member.name}
                    role={member.role}
                    bio={member.bio}
                    linkedin={member.linkedin}
                    index={index}
                    className="h-full"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}

        {grouped.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No team members found.</p>
          </div>
        )}
      </div>
    </div>
  );
}