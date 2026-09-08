import React, { useState } from 'react';
import { Copy, Check, ExternalLink, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroCardProps {
  onNotify: (msg: string) => void;
}

export const HeroCard: React.FC<HeroCardProps> = ({ onNotify }) => {
  const [copied, setCopied] = useState(false);
  const [showFullEmail, setShowFullEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.realEmail);
    setCopied(true);
    onNotify(`Copied ${PERSONAL_INFO.realEmail} to clipboard`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="hero-profile-card"
      className="relative rounded-xl border border-zinc-800/90 bg-[#0d0f14]/80 p-5 sm:p-7 shadow-2xl backdrop-blur-sm overflow-hidden"
    >
      {/* Background subtle radial glow */}
      <div className="absolute top-0 right-1/4 w-72 h-40 bg-zinc-800/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Top Content */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-5">
        {/* Profile Info Left */}
        <div className="flex items-start gap-4 sm:gap-5">
          {/* Avatar Monogram AY */}
          <div
            id="hero-avatar-monogram"
            className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-lg bg-zinc-900 border border-zinc-750 flex items-center justify-center font-mono text-lg sm:text-xl font-bold text-zinc-100 shadow-inner select-none"
          >
            {PERSONAL_INFO.initials}
          </div>

          {/* Text block */}
          <div className="space-y-1.5 min-w-0">
            {/* Name + Location */}
            <div className="flex flex-wrap items-center gap-2.5">
              <h1
                id="hero-name-heading"
                className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white"
              >
                {PERSONAL_INFO.name}
              </h1>
              <span
                id="hero-location-badge"
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono text-zinc-400 bg-zinc-900/90 border border-zinc-800"
              >
                <MapPin className="w-3 h-3 text-zinc-500" />
                {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Subtitle 1: Roles */}
            <p
              id="hero-roles-text"
              className="text-xs sm:text-sm font-medium text-zinc-300 tracking-wide"
            >
              {PERSONAL_INFO.role}
            </p>

            {/* Subtitle 2: Education status */}
            <p
              id="hero-education-summary"
              className="text-xs text-zinc-400 font-normal leading-relaxed"
            >
              {PERSONAL_INFO.educationSummary}
            </p>
          </div>
        </div>

        {/* Action Buttons Right */}
        <div
          id="hero-actions-container"
          className="flex flex-wrap items-center gap-2 self-start pt-1 sm:pt-0"
        >
          <button
            id="hero-copy-email-btn"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:text-white hover:bg-zinc-850 transition-all cursor-pointer"
            title="Copy email address"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-zinc-400" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          <a
            id="hero-github-link"
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:text-white hover:bg-zinc-850 transition-all"
            title="Open GitHub"
          >
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3 text-zinc-500" />
          </a>

          <a
            id="hero-linkedin-link"
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:text-white hover:bg-zinc-850 transition-all"
            title="Open LinkedIn"
          >
            <span>LinkedIn</span>
            <ExternalLink className="w-3 h-3 text-zinc-500" />
          </a>
        </div>
      </div>

      {/* Bottom Metadata Bar */}
      <div
        id="hero-meta-strip"
        className="mt-6 pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-zinc-400"
      >
        <div id="hero-focus-info" className="flex items-center gap-2">
          <span className="text-zinc-500">Focus:</span>
          <span className="text-zinc-200">{PERSONAL_INFO.focus}</span>
        </div>

        <div id="hero-status-info" className="flex items-center gap-2">
          <span className="text-zinc-500">Status:</span>
          <span className="inline-flex items-center gap-1.5 text-zinc-300 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{PERSONAL_INFO.status}</span>
          </span>
        </div>

        <div id="hero-email-info" className="flex items-center gap-2">
          <span className="text-zinc-500">Email:</span>
          <button
            id="hero-email-toggle-btn"
            onClick={() => setShowFullEmail(!showFullEmail)}
            className="text-zinc-300 hover:text-white transition-colors cursor-pointer hover:underline decoration-zinc-700 flex items-center gap-1"
            title={showFullEmail ? 'Click to mask email' : 'Click to reveal full email'}
          >
            <Mail className="w-3 h-3 text-zinc-500" />
            <span>{showFullEmail ? PERSONAL_INFO.realEmail : PERSONAL_INFO.maskedEmail}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
