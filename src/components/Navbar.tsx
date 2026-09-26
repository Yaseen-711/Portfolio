import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0e0f0c]/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-lg shadow-black/30'
          : 'bg-[#0e0f0c]/60 backdrop-blur-sm border-b border-zinc-800/40 py-3.5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Left: Name & Website name (no btech, no green dots) */}
        <div className="flex items-center gap-2">
          <a
            id="nav-brand-link"
            href="#"
            className="flex items-baseline gap-2 group tracking-tight"
          >
            <span className="font-mono text-sm sm:text-base font-bold text-white group-hover:text-zinc-200 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="hidden sm:inline text-xs font-mono text-zinc-400 font-normal">
              / {PERSONAL_INFO.websiteTitle}
            </span>
          </a>
        </div>

        {/* Center: Navigation links (Desktop) */}
        <nav id="nav-desktop-menu" className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              id={`nav-link-${link.name.toLowerCase()}`}
              href={link.href}
              className="text-xs font-mono text-zinc-400 hover:text-zinc-100 transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <a
            id="nav-github-btn"
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-md text-xs font-mono text-zinc-300 bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-all"
            title="View GitHub Profile"
          >
            <Github className="w-3.5 h-3.5 text-zinc-400" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            id="nav-linkedin-btn"
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-md text-xs font-mono text-zinc-300 bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-all"
            title="View LinkedIn Profile"
          >
            <Linkedin className="w-3.5 h-3.5 text-zinc-400" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <button
            id="nav-contact-btn"
            onClick={onContactClick}
            className="inline-flex items-center justify-center px-3.5 sm:px-4 py-1.5 rounded-md text-xs font-medium text-zinc-950 bg-zinc-100 hover:bg-white hover:shadow transition-all tracking-tight cursor-pointer"
          >
            Contact
          </button>

          {/* Mobile menu trigger */}
          <button
            id="nav-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-zinc-400 hover:text-white rounded-md border border-zinc-800 bg-zinc-900/50"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div
          id="nav-mobile-drawer"
          className="md:hidden border-b border-zinc-800 bg-[#0e0f0c] px-4 py-4 space-y-3"
        >
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-mono text-zinc-400 hover:text-white hover:bg-zinc-900/60 px-2 py-1.5 rounded"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
