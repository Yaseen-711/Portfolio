import React, { useState } from 'react';
import { X, ExternalLink, Terminal, CheckCircle2, Play, RefreshCw } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // ASCII Terminal simulator state for terminal-2d-graphics-editor
  const [asciiShape, setAsciiShape] = useState<'circle' | 'box' | 'sine' | 'cube'>('circle');
  const [asciiResolution, setAsciiResolution] = useState<number>(24);

  if (!project) return null;

  // Generate ASCII canvas based on mode
  const renderAsciiCanvas = () => {
    const width = 38;
    const height = 16;
    const grid: string[][] = Array(height)
      .fill(' ')
      .map(() => Array(width).fill(' '));

    if (asciiShape === 'circle') {
      const cx = width / 2;
      const cy = height / 2;
      const rx = 12;
      const ry = 6;
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const val = Math.pow((x - cx) / rx, 2) + Math.pow((y - cy) / ry, 2);
          if (Math.abs(val - 1.0) < 0.22) {
            grid[y][x] = '#';
          } else if (val < 0.8) {
            grid[y][x] = '.';
          }
        }
      }
    } else if (asciiShape === 'box') {
      const minX = 6,
        maxX = 31,
        minY = 3,
        maxY = 12;
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          if ((x === minX || x === maxX) && y >= minY && y <= maxY) {
            grid[y][x] = '|';
          } else if ((y === minY || y === maxY) && x >= minX && x <= maxX) {
            grid[y][x] = '-';
          } else if (x > minX && x < maxX && y > minY && y < maxY) {
            grid[y][x] = (x + y) % 3 === 0 ? ':' : ' ';
          }
        }
      }
      grid[minY][minX] = '+';
      grid[minY][maxX] = '+';
      grid[maxY][minX] = '+';
      grid[maxY][maxX] = '+';
    } else if (asciiShape === 'sine') {
      for (let x = 0; x < width; x++) {
        const rad = (x / width) * Math.PI * 3.5;
        const yVal = Math.round(height / 2 + Math.sin(rad) * 5.5);
        if (yVal >= 0 && yVal < height) {
          grid[yVal][x] = '*';
        }
      }
    } else if (asciiShape === 'cube') {
      const lines = [
        '     +--------+',
        '    /        /|',
        '   /        / |',
        '  +--------+  |',
        '  |        |  |',
        '  |        |  +',
        '  |        | /',
        '  |        |/',
        '  +--------+',
      ];
      return lines.join('\n');
    }

    return grid.map((row) => row.join('')).join('\n');
  };

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="project-modal-dialog"
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border border-zinc-800 bg-[#0d0f14] p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-zinc-800/80">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <span className="px-2 py-0.5 rounded text-xs font-mono font-medium bg-zinc-900 border border-zinc-800 text-zinc-300">
                {project.badge}
              </span>
              <h3 className="text-lg font-mono font-bold text-white tracking-tight">
                {project.title}
              </h3>
            </div>
            <p className="text-xs text-zinc-400 font-mono">System Architecture & Technical Specs</p>
          </div>

          <button
            id="project-modal-close-btn"
            onClick={onClose}
            className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="mt-5 space-y-5 text-sm text-zinc-300">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2 font-semibold">
              Overview
            </h4>
            <p className="text-zinc-300 text-sm leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2 font-semibold">
                Core Engineering Highlights
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs font-mono text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Interactive ASCII Simulator specifically for terminal-2d-graphics-editor */}
          {project.id === 'terminal-2d-graphics-editor' && (
            <div className="p-4 rounded-lg bg-black border border-zinc-800/90 font-mono">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-850 mb-3 text-xs">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>ASCII Frame Buffer Live Preview</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {(['circle', 'box', 'sine', 'cube'] as const).map((shape) => (
                    <button
                      key={shape}
                      onClick={() => setAsciiShape(shape)}
                      className={`px-2 py-0.5 text-[11px] rounded transition-colors ${
                        asciiShape === shape
                          ? 'bg-zinc-800 text-emerald-400 border border-zinc-700'
                          : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      {shape}
                    </button>
                  ))}
                </div>
              </div>
              <pre className="text-emerald-400/90 text-[11px] leading-tight overflow-x-auto select-none bg-black/60 p-2 rounded">
                {renderAsciiCanvas()}
              </pre>
              <div className="mt-2 text-[10px] text-zinc-500 flex items-center justify-between">
                <span>Buffer: 38x16 POSIX ASCII Matrix</span>
                <span className="text-emerald-400/80">30.0 FPS Sync</span>
              </div>
            </div>
          )}

          {/* Tags */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2 font-semibold">
              Tags & Primitives
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
          <span className="text-xs font-mono text-zinc-500">Repository link:</span>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono font-medium text-black bg-zinc-100 hover:bg-white transition-all shadow"
          >
            <span>Open on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-800" />
          </a>
        </div>
      </div>
    </div>
  );
};
