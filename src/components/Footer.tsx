import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="site-footer"
      className="mt-20 pt-8 pb-14 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500"
    >
      {/* Left: Name & University */}
      <div id="footer-left-info" className="flex items-center gap-2">
        <span className="text-zinc-400 font-medium">{PERSONAL_INFO.name}</span>
        <span>•</span>
        <span>REVA University</span>
      </div>

      {/* Right: Quick Links */}
      <div id="footer-right-links" className="flex items-center gap-4">
        <a
          id="footer-github-link"
          href={PERSONAL_INFO.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-300 transition-colors"
        >
          GitHub
        </a>

        <a
          id="footer-linkedin-link"
          href={PERSONAL_INFO.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-300 transition-colors"
        >
          LinkedIn
        </a>

        <button
          id="footer-contact-link"
          onClick={onContactClick}
          className="hover:text-zinc-300 transition-colors cursor-pointer"
        >
          Contact
        </button>

        <button
          id="footer-scroll-top-btn"
          onClick={scrollToTop}
          className="hover:text-zinc-200 transition-colors flex items-center gap-1 cursor-pointer"
          title="Scroll back to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3 h-3" />
        </button>
      </div>
    </footer>
  );
};
