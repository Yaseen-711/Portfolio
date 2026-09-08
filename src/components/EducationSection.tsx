import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="pt-14 scroll-mt-24">
      {/* Section Header */}
      <div
        id="education-section-header"
        className="flex items-center justify-between pb-3 border-b border-zinc-800/80"
      >
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-zinc-500">04.</span>
          <h2 className="text-sm sm:text-base font-semibold text-zinc-100 tracking-tight">
            Education
          </h2>
        </div>
        <span className="font-mono text-xs text-zinc-500">academic_record</span>
      </div>

      {/* Education List Container */}
      <div
        id="education-list-card"
        className="mt-6 rounded-xl border border-zinc-800/80 bg-[#0d0f14]/70 p-5 sm:p-6 backdrop-blur-sm divide-y divide-zinc-800/60"
      >
        {EDUCATION_DATA.map((item, index) => (
          <div
            key={item.id}
            id={`education-item-${item.id}`}
            className={`flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-6 ${
              index === 0 ? 'pb-6' : index === EDUCATION_DATA.length - 1 ? 'pt-6' : 'py-6'
            }`}
          >
            {/* Left: Degree & Institution */}
            <div className="space-y-1.5 max-w-2xl">
              <h3
                id={`education-title-${item.id}`}
                className="text-sm sm:text-[15px] font-semibold text-zinc-100 tracking-tight"
              >
                {item.title}
              </h3>

              <p
                id={`education-inst-${item.id}`}
                className="text-xs sm:text-[13px] text-zinc-400 font-normal"
              >
                {item.institution}
              </p>

              {item.details && (
                <p
                  id={`education-details-${item.id}`}
                  className="text-xs text-zinc-500 font-normal leading-relaxed pt-1"
                >
                  {item.details}
                </p>
              )}
            </div>

            {/* Right: Period */}
            <div className="shrink-0 pt-0.5">
              <span
                id={`education-period-${item.id}`}
                className="text-xs font-mono text-zinc-400"
              >
                {item.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
