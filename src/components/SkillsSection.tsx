import React, { useState } from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  return (
    <section id="skills" className="pt-14 scroll-mt-24">
      {/* Section Header */}
      <div
        id="skills-section-header"
        className="flex items-center justify-between pb-3 border-b border-zinc-800/80"
      >
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-zinc-500">03.</span>
          <h2 className="text-sm sm:text-base font-semibold text-zinc-100 tracking-tight">
            Technical Competencies
          </h2>
        </div>
        <span className="font-mono text-xs text-zinc-500">skills_manifest</span>
      </div>

      {/* 4 Competency Columns */}
      <div
        id="skills-grid"
        className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.id}
            id={`skill-group-${group.id}`}
            className="rounded-xl border border-zinc-800/80 bg-[#0d0f14]/70 p-5 backdrop-blur-sm flex flex-col"
          >
            <h3
              id={`skill-group-title-${group.id}`}
              className="text-xs sm:text-[13px] font-medium text-zinc-200 mb-4 tracking-tight"
            >
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => {
                const isSelected = activeTag === skill;
                return (
                  <button
                    key={skill}
                    id={`skill-tag-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    onClick={() => setActiveTag(isSelected ? null : skill)}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-all text-left cursor-pointer ${
                      isSelected
                        ? 'bg-zinc-100 text-zinc-950 font-semibold shadow'
                        : 'bg-zinc-900 border border-zinc-800/90 text-zinc-300 hover:border-zinc-700 hover:text-white'
                    }`}
                  >
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
