import React, { useState } from 'react';
import { Copy, Check, ExternalLink, Download } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

interface CertificationsSectionProps {
  onNotify: (msg: string) => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ onNotify }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, fullId: string, title: string) => {
    navigator.clipboard.writeText(fullId);
    setCopiedId(id);
    onNotify(`Copied credential ID for "${title}"`);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section id="certifications" className="pt-14 scroll-mt-24">
      {/* Section Header */}
      <div
        id="certifications-section-header"
        className="flex items-center justify-between pb-3 border-b border-zinc-800/80"
      >
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-zinc-500">05.</span>
          <h2 className="text-sm sm:text-base font-semibold text-zinc-100 tracking-tight">
            Certifications
          </h2>
        </div>
        <span className="font-mono text-xs text-zinc-500">verified_credentials</span>
      </div>

      {/* 3 Certifications Cards */}
      <div
        id="certifications-grid"
        className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {CERTIFICATIONS.map((cert) => {
          const isCopied = copiedId === cert.id;
          return (
            <div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              className="rounded-xl border border-zinc-800/80 bg-[#0d0f14]/80 p-5 backdrop-blur-md flex flex-col justify-between hover:border-zinc-700 transition-all duration-200"
            >
              {/* Top metadata */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
                  <span>{cert.organization}</span>
                  <span>{cert.date}</span>
                </div>

                {/* Certificate Title */}
                <h3
                  id={`cert-title-${cert.id}`}
                  className="text-sm font-semibold text-zinc-100 mt-2 mb-3 leading-snug"
                >
                  {cert.title}
                </h3>
              </div>

              {/* Action Buttons & Credential ID */}
              <div className="pt-3 border-t border-zinc-850/60 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="truncate pr-2" title={cert.fullCredentialId}>
                    ID: {cert.credentialId}
                  </span>

                  <button
                    id={`cert-copy-btn-${cert.id}`}
                    onClick={() => handleCopy(cert.id, cert.fullCredentialId, cert.title)}
                    className="p-1 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy full credential ID"
                    aria-label={`Copy credential ID for ${cert.title}`}
                  >
                    {isCopied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  {cert.pdfUrl && (
                    <a
                      href={cert.pdfUrl}
                      download
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-mono text-zinc-200 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:text-white hover:bg-zinc-850 transition-all"
                      title="Download Certificate PDF"
                    >
                      <Download className="w-3 h-3 text-zinc-400" />
                      <span>Download PDF</span>
                    </a>
                  )}

                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-mono text-zinc-200 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:text-white hover:bg-zinc-850 transition-all"
                      title="Verify Certificate Online"
                    >
                      <ExternalLink className="w-3 h-3 text-zinc-400" />
                      <span>Verify</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
