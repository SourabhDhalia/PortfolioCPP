import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../../data';
import type { SectionProps } from '../../types';

const ProjectsSection = (_props: SectionProps) => {
    const [page, setPage] = React.useState(0);
    const touchStartX = React.useRef(0);
    const touchStartY = React.useRef(0);
    const projectsPerPage = 4;
    const totalPages = Math.ceil(projects.length / projectsPerPage);
    const startIdx = page * projectsPerPage;
    const visibleProjects = projects.slice(startIdx, startIdx + projectsPerPage);

    // Swipe gesture handlers — track both axes to avoid diagonal swipe bug
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const diffX = touchStartX.current - endX;
        const diffY = touchStartY.current - endY;
        const threshold = 50;

        // Only trigger horizontal pagination if swipe is intentionally more horizontal
        if (Math.abs(diffX) > threshold && Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 0 && page < totalPages - 1) {
                setPage(page + 1);
            } else if (diffX < 0 && page > 0) {
                setPage(page - 1);
            }
        }
    };

    /* Mouse wheel horizontal scroll (for trackpad) */
    const handleWheel = (e: React.WheelEvent) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 30) {
            if (e.deltaX > 0 && page < totalPages - 1) {
                setPage(page + 1);
            } else if (e.deltaX < 0 && page > 0) {
                setPage(page - 1);
            }
        }
    };

    return (
        <div
            className="flex flex-col h-full overscroll-x-contain"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onWheel={handleWheel}
        >
            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1">
                {visibleProjects.map((project, i) => (
                    <div
                        key={project.title}
                        className="glass-card rounded-2xl p-5 hover:border-[var(--border-accent)] transition-all group animate-fade-in"
                        style={{ animationDelay: `${i * 50}ms` }}
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                                <h4 className="font-display text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                                    {project.title}
                                </h4>
                                <p className="mt-1 text-sm font-mono text-[var(--accent-secondary)]">
                                    {project.stack}
                                </p>
                            </div>
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-sm font-mono font-bold">
                                {String(startIdx + i + 1).padStart(2, '0')}
                            </span>
                        </div>
                        <p className="mt-3 text-base text-[var(--text-secondary)] leading-relaxed">
                            {project.summary}
                        </p>
                        <ul className="mt-3 space-y-2">
                            {project.highlights.map((highlight, j) => (
                                <li key={j} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-primary)] shrink-0" />
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-[var(--border-subtle)]">
                <button
                    onClick={() => setPage(Math.max(0, page - 1))}
                    disabled={page === 0}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-glass)] border border-[var(--border-subtle)] text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:border-[var(--border-medium)] transition-all"
                >
                    <ChevronLeft className="w-4 h-4" />
                    Prev
                </button>

                <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i)}
                            aria-label={`Go to projects page ${i + 1}`}
                            aria-current={page === i ? 'true' : undefined}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${page === i ? 'bg-[var(--accent-primary)] scale-125' : 'bg-[var(--border-medium)] hover:bg-[var(--text-muted)]'}`}
                        />
                    ))}
                </div>

                <button
                    onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
                    disabled={page === totalPages - 1}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-glass)] border border-[var(--border-subtle)] text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:border-[var(--border-medium)] transition-all"
                >
                    Next
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>

            <p className="text-center text-[10px] text-[var(--text-muted)] mt-2 opacity-60">
                ← Swipe or use arrows to navigate →
            </p>
        </div>
    );
};

export default ProjectsSection;
