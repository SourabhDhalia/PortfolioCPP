import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { awards, education } from '../../data';
import type { SectionProps } from '../../types';

const RecognitionSection = (_props: SectionProps) => (
    <div className="space-y-6">
        {/* Awards */}
        <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--accent-primary)]">
                Awards
            </h3>
            {awards.map((award, i) => (
                <div
                    key={award.title}
                    className="glass-card rounded-2xl p-5 hover:border-[var(--border-accent)] transition-all"
                >
                    <div className="flex items-start gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                            <Award className="h-5 w-5" />
                        </span>
                        <div>
                            <h4 className="font-semibold text-[var(--text-primary)]">{award.title}</h4>
                            <p className="text-sm text-[var(--accent-secondary)]">{award.org}</p>
                            <p className="mt-2 text-sm text-[var(--text-muted)]">{award.detail}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Education */}
        <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--accent-secondary)]">
                Education
            </h3>
            <div
                className="glass-card rounded-2xl p-5"
            >
                <h4 className="font-semibold text-[var(--text-primary)]">{education.degree}</h4>
                <p className="text-sm text-[var(--accent-secondary)]">{education.school}</p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">
                    {education.location} • {education.period} • CGPA: {education.cgpa}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {education.courses.map((course) => (
                        <span key={course} className="chip chip-secondary">{course}</span>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default RecognitionSection;
