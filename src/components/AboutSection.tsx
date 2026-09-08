import React from 'react';
import { ABOUT_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="pt-10 scroll-mt-24">
      {/* Section Header */}
      <div id="about-section-header" className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-zinc-500">01.</span>
          <h2 className="text-sm sm:text-base font-semibold text-zinc-100 tracking-tight">
            About & Technical Focus
          </h2>
        </div>
        <span className="font-mono text-xs text-zinc-500">overview</span>
      </div>

      {/* Two Column Layout */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Narrative */}
        <div id="about-narrative-col" className="lg:col-span-7 space-y-4 text-sm sm:text-[15px] text-zinc-400 leading-relaxed font-normal">
          {ABOUT_DATA.paragraphs.map((para, index) => (
            <p key={index} id={`about-para-${index + 1}`} className="tracking-wide">
              {para}
            </p>
          ))}
        </div>

        {/* Right Column: Primary Areas Card */}
        <div id="about-primary-areas-col" className="lg:col-span-5">
          <div
            id="primary-areas-card"
            className="rounded-xl border border-zinc-800/80 bg-[#0d0f14]/70 p-5 backdrop-blur-sm"
          >
            <h3
              id="primary-areas-heading"
              className="text-[11px] font-mono font-medium uppercase tracking-wider text-zinc-500 mb-4"
            >
              PRIMARY AREAS
            </h3>

            <div className="space-y-4">
              {ABOUT_DATA.primaryAreas.map((area, idx) => (
                <div key={idx} id={`primary-area-item-${idx + 1}`} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-400 text-xs font-mono">•</span>
                    <h4 className="text-xs sm:text-sm font-medium text-zinc-200">
                      {area.title}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-400 pl-4 font-mono leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
