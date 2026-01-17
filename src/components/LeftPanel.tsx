import React from 'react';
import { ArrowUpRight, Zap, ListFilter } from 'lucide-react';
import { profile, links, chapterItems } from '../data';
import { motion } from 'framer-motion';

interface LeftPanelProps {
  activeSection: string;
  handleNavClick: (id: string) => void;
  handleCycle: (direction: 'prev' | 'next') => void;
  lockFocus: boolean;
  setLockFocus: (lock: boolean | ((lock: boolean) => boolean)) => void;
  viewMode: 'skim' | 'deep';
  setViewMode: (mode: 'skim' | 'deep') => void;
  currentChapter: any;
  navItems: any[];
  children: React.ReactNode;
  scrollProgress: number;
  onOpenQuickView: () => void;
}

const LeftPanel = ({
  activeSection,
  handleNavClick,
  handleCycle,
  lockFocus,
  setLockFocus,
  viewMode,
  setViewMode,
  currentChapter,
  navItems,
  children,
  scrollProgress,
  onOpenQuickView
}: LeftPanelProps) => {
  const githubPagesUrl = `https://${links.githubUsername}.github.io/${links.repoName}`;
  const blur = 18 + scrollProgress * 0.1;
  return (
    <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
      <div
        className="glass-panel rounded-3xl p-5 relative overflow-hidden group"
        style={{
          backdropFilter: `blur(${blur}px) saturate(1.3)`,
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <motion.div
            key={currentChapter.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-3)]">
              {currentChapter.label}
            </p>
            <h3 className="font-display text-xl font-semibold">{currentChapter.title}</h3>
          </motion.div>
          <button
            type="button"
            onClick={() => setLockFocus((prev) => !prev)}
            className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] transition ${lockFocus
                ? 'bg-[var(--accent)] text-white'
                : 'bg-white/70 text-[color:var(--accent-3)]'
              }`}
          >
            {lockFocus ? 'Locked' : 'Auto'}
          </button>
        </div>
        <p className="mt-2 text-sm text-[color:var(--muted)]">{currentChapter.summary}</p>

        <div className="mt-4 flex rounded-full border border-[var(--stroke)] bg-white/50 p-1 backdrop-blur-sm">
          {(['skim', 'deep'] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setViewMode(mode)}
              className={`relative flex-1 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-colors z-10 ${viewMode === mode
                  ? 'text-white'
                  : 'text-[color:var(--accent-3)] hover:text-[color:var(--accent)]'
                }`}
            >
              {viewMode === mode && (
                <motion.div
                  layoutId="viewModeBg"
                  className="absolute inset-0 bg-[var(--accent)] rounded-full -z-10 shadow-sm"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {mode === 'skim' ? 'Skim' : 'Deep'}
            </button>
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => handleCycle('prev')}
            className="flex-1 rounded-full border border-[var(--stroke)] bg-white/60 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-3)] hover:text-[color:var(--accent)] hover:bg-white transition-all"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => handleCycle('next')}
            className="flex-1 rounded-full bg-[var(--accent)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-orange-500/20 transition-transform hover:-translate-y-0.5"
          >
            Next
          </button>
        </div>

        {/* Recruiter / Quick View Button */}
        <div className="mt-4 pt-4 border-t border-[var(--stroke)]">
          <button
            onClick={onOpenQuickView}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-white/40 border border-[var(--stroke)] px-3 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-[color:var(--ink)] hover:bg-white/80 transition-all hover:scale-[1.02]"
          >
            <ListFilter className="w-4 h-4" />
            Recruiter View
          </button>
        </div>

        <div className="mt-4 space-y-3">{children}</div>
      </div>

      <div
        className="glass-panel rounded-3xl p-5"
        style={{
          backdropFilter: `blur(${blur}px) saturate(1.3)`,
        }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-3)]">
          Navigation
        </p>
        <div className="mt-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`flex w-full items-center justify-between rounded-2xl border border-transparent px-3 py-2 text-sm font-semibold transition ${activeSection === item.id
                  ? 'border-[var(--accent-soft)] bg-white/90 text-[color:var(--accent)] shadow-sm'
                  : 'text-[color:var(--accent-3)] hover:border-[var(--stroke)] hover:bg-white/70'
                }`}
            >
              <span>{item.label}</span>
              {activeSection === item.id && <motion.div layoutId="navActiveIcon"><ArrowUpRight className="h-4 w-4" /></motion.div>}
              {activeSection !== item.id && <ArrowUpRight className="h-4 w-4 opacity-0" />}
            </button>
          ))}
        </div>
      </div>

      <div
        className="glass-panel rounded-3xl p-5"
        style={{
          backdropFilter: `blur(${blur}px) saturate(1.3)`,
        }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-3)]">
          Quick actions
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[var(--shadow)] transition-transform hover:-translate-y-0.5"
          >
            Email
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={githubPagesUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-3)] transition-transform hover:-translate-y-0.5"
          >
            Live site
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default LeftPanel;
