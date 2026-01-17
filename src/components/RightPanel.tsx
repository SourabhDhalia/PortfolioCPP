import React from 'react';
import { chapterItems } from '../data';
import Illustration from './Illustration';
import { motion } from 'framer-motion';

interface RightPanelProps {
  scrollRef: React.RefObject<HTMLDivElement>;
  activeSection: string;
  scrollProgress: number;
}

const RightPanel = ({ scrollRef, activeSection, scrollProgress }: RightPanelProps) => {
  const blur = 18 + scrollProgress * 0.1;
  return (
    <div
      ref={scrollRef}
      className="scrollbar space-y-6 lg:h-[72vh] lg:overflow-y-auto lg:pr-2 lg:snap-y lg:snap-mandatory pb-32"
    >
      {chapterItems.map((chapter, index) => {
        const Icon = chapter.icon;
        const isActive = chapter.id === activeSection;

        return (
          <motion.section
            key={chapter.id}
            id={chapter.id}
            initial={{ opacity: 0.8, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
            className="snap-start scroll-mt-24"
          >
            <div
              className={`glass-panel min-h-[40vh] rounded-3xl p-6 transition-all duration-500 border-2 ${isActive
                  ? 'border-[var(--accent-soft)] bg-white/80 shadow-lg shadow-orange-500/5'
                  : 'border-transparent bg-white/40 grayscale-[0.5] hover:grayscale-0'
                }`}
              style={{
                backdropFilter: `blur(${blur}px) saturate(1.3)`,
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${isActive ? 'bg-[var(--accent-2-soft)] text-[color:var(--accent-2)]' : 'bg-gray-100 text-gray-400'}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-3)]">
                      {chapter.label}
                    </p>
                    <h3 className="font-display text-xl font-semibold">{chapter.title}</h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-[color:var(--muted)] opacity-50">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="mt-6 flex justify-center py-4 relative group">
                <Illustration className="transform transition-transform group-hover:scale-105 duration-500" width={280} height={160} />
              </div>

              <p className="mt-4 text-sm text-[color:var(--muted)] leading-relaxed">{chapter.summary}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {chapter.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-[var(--stroke)] bg-white/50 px-3 py-1 text-xs font-mono text-[color:var(--accent-3)]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </motion.section>
        );
      })}

      <div className="h-24"></div> {/* Spacer for bottom scroll */}
    </div>
  );
};

export default RightPanel;
