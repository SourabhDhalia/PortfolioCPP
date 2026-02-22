import React from 'react';
import { ChevronDown } from 'lucide-react';
import { experienceHighlights } from '../../data';
import type { SectionProps } from '../../types';

const WorkSection = ({ isTransitioning }: SectionProps) => {
    const [expandedIdx, setExpandedIdx] = React.useState<number | null>(null);
    const scrollRef = React.useRef<HTMLDivElement>(null);

    const handleScroll = (e: React.WheelEvent) => {
        const el = scrollRef.current;
        if (!el) return;

        const { scrollTop, scrollHeight, clientHeight } = el;
        const isAtTop = scrollTop <= 0;
        const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;

        if ((!isAtTop && e.deltaY < 0) || (!isAtBottom && e.deltaY > 0)) {
            e.stopPropagation();
        }
    };

    const toggleItem = (i: number) => setExpandedIdx(expandedIdx === i ? null : i);

    return (
        <div className="flex flex-col h-full">
            {/* Company Header */}
            <div className="glass-card rounded-2xl p-5 border-[var(--border-accent)] mb-4 shrink-0">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                            Samsung R&D Institute
                        </h3>
                        <p className="text-sm text-[var(--accent-secondary)] font-mono mt-1">
                            System Software Engineer • Delhi, India
                        </p>
                    </div>
                    <span className="text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-tertiary)] px-3 py-1.5 rounded-full">
                        2024 – Present
                    </span>
                </div>
            </div>

            {/* Scrollable Experience Items */}
            <div
                ref={scrollRef}
                onWheel={handleScroll}
                className={`flex-1 pr-2 space-y-3 custom-scrollbar ${isTransitioning ? 'overflow-y-hidden' : 'overflow-y-auto'}`}
            >
                {experienceHighlights.map((item, i) => (
                    <div
                        key={item.title}
                        role="button"
                        tabIndex={0}
                        onClick={() => toggleItem(i)}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleItem(i); } }}
                        aria-expanded={expandedIdx === i}
                        aria-label={`${item.title} — ${item.summary}`}
                        className={`glass-card rounded-xl p-4 group cursor-pointer transition-all animate-fade-in ${expandedIdx === i ? 'border-[var(--border-accent)] bg-[var(--bg-tertiary)]' : 'hover:border-[var(--border-accent)]'}`}
                        style={{ animationDelay: `${i * 30}ms` }}
                    >
                        <div className="flex items-start gap-3">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-xs font-mono font-bold mt-0.5">
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <h4 className={`font-semibold text-base transition-colors ${expandedIdx === i ? 'text-[var(--accent-primary)]' : 'text-[var(--text-primary)] group-hover:text-[var(--accent-primary)]'}`}>
                                        {item.title}
                                    </h4>
                                    <ChevronDown className={`w-5 h-5 text-[var(--text-muted)] transition-transform ${expandedIdx === i ? 'rotate-180' : ''}`} />
                                </div>
                                <p className="mt-1 text-sm text-[var(--text-secondary)] leading-relaxed">
                                    {item.summary}
                                </p>
                                {expandedIdx === i && (
                                    <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed border-t border-[var(--border-subtle)] pt-3 animate-fade-in">
                                        {item.detail}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center text-xs text-[var(--text-muted)] mt-3 opacity-70">
                ↕ Scroll to see all • Click to expand
            </div>
        </div>
    );
};

export default WorkSection;
