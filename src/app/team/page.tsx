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
    { key: "chair", label: "Chairpersons" },
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
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            The passionate individuals driving WiCyS Sathyabama forward, empowering women in cybersecurity.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScm_DKdL6alMaxyC0SyuQJ5CPYu2cEYyCr_arrS29rIg4T3UQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #6366f1, #a855f7)",
              color: "#ffffff",
              boxShadow: "0 0 20px rgba(168,85,247,0.3)",
            }}
          >
            ✦ Join Our Team
          </a>
        </div>

        {grouped.map((category) => {
          // Special handling for Event Coordinators: show first 4, then remaining below
          if (category.key === "coordinator") {
            const firstFour = category.members.slice(0, 4);
            const remaining = category.members.slice(4);
            
            return (
              <section key={category.key} className="mb-16">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white">
                    {category.label}
                  </h2>
                  {category.subtitle && (
                    <p className="text-gray-400 mt-2">{category.subtitle}</p>
                  )}
                </div>
                
                {/* First 4 coordinators */}
                {firstFour.length > 0 && (
                  <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 mb-8">
                    {firstFour.map((member, index) => (
                      <div key={member.id} className="w-[300px] shrink-0 h-full">
                        <TeamCard
                          name={member.name}
                          role={member.role}
                          bio={member.bio}
                          linkedin={member.linkedin}
                          image={member.image}
                          index={index}
                          className="h-full"
                        />
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Remaining coordinators (if any) */}
                {remaining.length > 0 && (
                  <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6">
                    {remaining.map((member, index) => (
                      <div key={member.id} className="w-[300px] shrink-0 h-full">
                        <TeamCard
                          name={member.name}
                          role={member.role}
                          bio={member.bio}
                          linkedin={member.linkedin}
                          image={member.image}
                          index={index + 4} // Continue index animation
                          className="h-full"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </section>
            );
          }
          
          // Default handling for all other categories
          return (
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
                      image={member.image}
                      index={index}
                      className="h-full"
                    />
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {grouped.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No team members found.</p>
          </div>
        )}
      </div>
    </div>
  );
}