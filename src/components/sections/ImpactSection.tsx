import React from 'react';
import { stats, focusAreas, pillars } from '../../data';
import type { SectionProps } from '../../types';

const ImpactSection = (_props: SectionProps) => (
    <div className="space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
                <div
                    key={stat.label}
                    className="stat-card animate-fade-in"
                    style={{ animationDelay: `${i * 50}ms` }}
                >
                    <p className="stat-value">{stat.value}</p>
                    <p className="stat-label">{stat.label}</p>
                    <div className="meter mt-3">
                        <div
                            className="meter-fill animate-meter"
                            style={{ '--meter-width': `${stat.meter}%`, animationDelay: `${200 + i * 50}ms` } as React.CSSProperties}
                        />
                    </div>
                </div>
            ))}
        </div>

        {/* Focus Areas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {focusAreas.map((area, i) => {
                const Icon = area.icon;
                return (
                    <div
                        key={area.title}
                        className="glass-card rounded-2xl p-5 group hover:border-[var(--border-accent)] transition-all animate-fade-in"
                        style={{ animationDelay: `${100 + i * 50}ms` }}
                    >
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)]/20 transition-colors">
                            <Icon className="h-5 w-5" />
                        </span>
                        <h4 className="mt-3 font-semibold text-[var(--text-primary)]">{area.title}</h4>
                        <p className="mt-1 text-sm text-[var(--text-muted)]">{area.detail}</p>
                    </div>
                );
            })}
        </div>

        {/* Core Pillars */}
        <div className="grid lg:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                    <div
                        key={pillar.title}
                        className="glass-card rounded-2xl p-5 flex gap-4 items-start animate-fade-in"
                        style={{ animationDelay: `${150 + i * 50}ms` }}
                    >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-secondary)]/10 text-[var(--accent-secondary)]">
                            <Icon className="h-6 w-6" />
                        </span>
                        <div>
                            <h4 className="font-semibold text-[var(--text-primary)]">{pillar.title}</h4>
                            <p className="mt-1 text-sm text-[var(--text-muted)] leading-relaxed">{pillar.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);

export default ImpactSection;
