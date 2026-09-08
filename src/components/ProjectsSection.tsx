import React, { useState } from 'react';
import { Folder, ArrowUpRight } from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="pt-14 scroll-mt-24">
      {/* Section Header */}
      <div
        id="projects-section-header"
        className="flex items-center justify-between pb-3 border-b border-zinc-800/80"
      >
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-zinc-500">02.</span>
          <h2 className="text-sm sm:text-base font-semibold text-zinc-100 tracking-tight">
            Projects
          </h2>
        </div>
        <a
          id="projects-github-profile-link"
          href={PERSONAL_INFO.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-1 group"
        >
          <span>github.com/{PERSONAL_INFO.githubUsername}</span>
          <span className="group-hover:translate-x-0.5 transition-transform">→</span>
        </a>
      </div>

      {/* Projects 2x2 Grid */}
      <div
        id="projects-grid"
        className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch"
      >
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            onClick={() => setSelectedProject(project)}
            className="group rounded-xl border border-zinc-800/80 bg-[#0d0f14]/70 p-5 sm:p-6 backdrop-blur-sm hover:border-zinc-700 hover:bg-[#0f1219]/80 transition-all duration-200 flex flex-col justify-between cursor-pointer"
          >
            {/* Top row: Folder icon + Title + Category Badge */}
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Folder className="w-4 h-4 text-zinc-400 group-hover:text-zinc-200 shrink-0 transition-colors" />
                  <h3
                    id={`project-title-${project.id}`}
                    className="font-mono text-sm sm:text-[15px] font-semibold text-zinc-100 group-hover:text-white truncate"
                  >
                    {project.title}
                  </h3>
                </div>
                <span
                  id={`project-badge-${project.id}`}
                  className="shrink-0 px-2 py-0.5 rounded text-[11px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800"
                >
                  {project.badge}
                </span>
              </div>

              {/* Description */}
              <p
                id={`project-desc-${project.id}`}
                className="text-xs sm:text-[13px] text-zinc-400 font-normal leading-relaxed line-clamp-4 mt-2"
              >
                {project.description}
              </p>
            </div>

            {/* Bottom: Tags & Repository Link */}
            <div className="mt-6 pt-4 border-t border-zinc-850/60 flex flex-col gap-3">
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[11px] font-mono text-zinc-400 bg-zinc-900/90 border border-zinc-800/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Repository Button */}
              <div className="flex justify-end items-center pt-1">
                <button
                  id={`project-view-btn-${project.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 group-hover:text-zinc-200 transition-colors cursor-pointer"
                >
                  <span>View Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project details modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
