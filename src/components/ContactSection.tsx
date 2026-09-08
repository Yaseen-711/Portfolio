import React, { useState } from 'react';
import { Lock, Mail, ExternalLink, Copy, Check, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onNotify: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNotify }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [revealedEmail, setRevealedEmail] = useState(false);
  const [showQuickMessage, setShowQuickMessage] = useState(false);
  const [messageSubject, setMessageSubject] = useState('');
  const [messageBody, setMessageBody] = useState('');
  const [senderName, setSenderName] = useState('');

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(PERSONAL_INFO.realEmail);
    setCopiedEmail(true);
    onNotify(`Copied ${PERSONAL_INFO.realEmail} to clipboard`);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(messageSubject || 'Engineering Inquiry / Collaboration');
    const body = encodeURIComponent(
      `Hello Ali Mohammed Yaseen,\n\n${messageBody}\n\nBest regards,\n${senderName}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.realEmail}?subject=${subject}&body=${body}`;
    onNotify('Opening mail client...');
  };

  return (
    <section id="contact" className="pt-14 scroll-mt-24">
      {/* Section Header */}
      <div
        id="contact-section-header"
        className="flex items-center justify-between pb-3 border-b border-zinc-800/80"
      >
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-zinc-500">06.</span>
          <h2 className="text-sm sm:text-base font-semibold text-zinc-100 tracking-tight">
            Contact & Connect
          </h2>
        </div>
        <span className="font-mono text-xs text-zinc-500">direct_comm</span>
      </div>

      {/* Main Container Card */}
      <div
        id="contact-main-card"
        className="mt-6 rounded-xl border border-zinc-800/80 bg-[#0d0f14]/70 p-6 sm:p-8 backdrop-blur-sm"
      >
        {/* Title */}
        <h3
          id="contact-title"
          className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight"
        >
          Open to engineering discussions and collaborations.
        </h3>

        {/* Subtitle / Pitch */}
        <p
          id="contact-description"
          className="mt-2 text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed max-w-3xl"
        >
          Currently seeking student software engineering internships, AI/ML research collaborations, and open-source contributions. Feel free to reach out directly via email or connect on LinkedIn.
        </p>

        {/* 3 Interactive Contact Columns */}
        <div
          id="contact-channels-grid"
          className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
        >
          {/* EMAIL */}
          <div
            id="contact-channel-email"
            onClick={() => setRevealedEmail(!revealedEmail)}
            className="group rounded-lg border border-zinc-800/90 bg-[#090b0f] p-3.5 flex flex-col justify-between hover:border-zinc-700 hover:bg-zinc-900/50 transition-all cursor-pointer select-none"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase font-semibold">
                EMAIL
              </span>
              <button
                id="contact-copy-email-sub-btn"
                onClick={handleCopyEmail}
                className="p-1 text-zinc-500 hover:text-white transition-colors cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
            <p
              className="font-mono text-xs text-zinc-300 group-hover:text-white transition-colors truncate mt-2 font-medium"
              title={revealedEmail ? 'Click to mask' : 'Click to reveal'}
            >
              {revealedEmail ? PERSONAL_INFO.realEmail : PERSONAL_INFO.maskedEmail}
            </p>
          </div>

          {/* LINKEDIN */}
          <a
            id="contact-channel-linkedin"
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-zinc-800/90 bg-[#090b0f] p-3.5 flex flex-col justify-between hover:border-zinc-700 hover:bg-zinc-900/50 transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase font-semibold">
                LINKEDIN
              </span>
              <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
            </div>
            <p className="font-mono text-xs text-zinc-300 group-hover:text-white transition-colors truncate mt-2 font-medium">
              {PERSONAL_INFO.linkedinUsername}
            </p>
          </a>

          {/* GITHUB */}
          <a
            id="contact-channel-github"
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-zinc-800/90 bg-[#090b0f] p-3.5 flex flex-col justify-between hover:border-zinc-700 hover:bg-zinc-900/50 transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase font-semibold">
                GITHUB
              </span>
              <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
            </div>
            <p className="font-mono text-xs text-zinc-300 group-hover:text-white transition-colors truncate mt-2 font-medium">
              {PERSONAL_INFO.githubUsername}
            </p>
          </a>
        </div>

        {/* Quick message trigger toggle */}
        <div className="mt-5 flex items-center justify-between">
          <button
            id="quick-msg-toggle-btn"
            onClick={() => setShowQuickMessage(!showQuickMessage)}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
          >
            <Send className="w-3 h-3 text-zinc-500" />
            <span>{showQuickMessage ? 'Close message composer' : 'Compose quick message →'}</span>
          </button>
        </div>

        {/* Quick Direct Message Drawer */}
        {showQuickMessage && (
          <form
            id="quick-message-form"
            onSubmit={handleSendMessage}
            className="mt-4 p-4 rounded-lg bg-black/40 border border-zinc-800 space-y-3"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-mono text-zinc-400 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Alex Smith"
                  className="w-full px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-200 focus:outline-none focus:border-zinc-600"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono text-zinc-400 mb-1">Subject</label>
                <input
                  type="text"
                  required
                  value={messageSubject}
                  onChange={(e) => setMessageSubject(e.target.value)}
                  placeholder="Internship / AI Project Inquiry"
                  className="w-full px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-200 focus:outline-none focus:border-zinc-600"
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-mono text-zinc-400 mb-1">Message</label>
              <textarea
                rows={3}
                required
                value={messageBody}
                onChange={(e) => setMessageBody(e.target.value)}
                placeholder="Write your note here..."
                className="w-full px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 focus:outline-none focus:border-zinc-600"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-3.5 py-1.5 rounded bg-zinc-100 text-zinc-950 font-mono text-xs font-medium hover:bg-white transition-colors cursor-pointer"
              >
                Send via Email
              </button>
            </div>
          </form>
        )}

        {/* Privacy Note Footer */}
        <div
          id="contact-privacy-note"
          className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-xs font-mono text-zinc-500"
        >
          <Lock className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
          <span>
            Privacy Note: Mobile contact number withheld from public index. Available upon direct message request.
          </span>
        </div>
      </div>
    </section>
  );
};
