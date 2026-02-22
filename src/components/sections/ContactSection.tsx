import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Youtube } from 'lucide-react';
import { profile, links } from '../../data';
import type { SectionProps } from '../../types';

const ContactSection = (_props: SectionProps) => (
    <div className="space-y-6">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card rounded-3xl p-8 text-center max-w-xl mx-auto"
        >
            <div className="relative inline-block mb-6">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 blur-xl" />
                <img
                    src={profile.photo}
                    alt={`${profile.firstName} ${profile.lastName}`}
                    className="relative h-24 w-24 rounded-2xl object-cover border-2 border-[var(--border-medium)]"
                    loading="lazy"
                />
            </div>

            <h3 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                Let's Build Something
            </h3>
            <p className="mt-2 text-[var(--text-muted)]">
                Ready for high-stakes systems work and performance-critical roles.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href={`mailto:${profile.email}`} className="btn-primary">
                    <Mail className="h-4 w-4" />
                    Get in Touch
                    <ArrowUpRight className="h-4 w-4" />
                </a>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
                <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-subtle)] transition-all">
                    <Github className="h-5 w-5" />
                </a>
                <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-subtle)] transition-all">
                    <Linkedin className="h-5 w-5" />
                </a>
                <a href={links.youtube} target="_blank" rel="noreferrer" aria-label="YouTube channel"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-subtle)] transition-all">
                    <Youtube className="h-5 w-5" />
                </a>
            </div>

            <div className="mt-6 pt-6 border-t border-[var(--border-subtle)]">
                <div className="flex items-center justify-center gap-2 text-sm text-[var(--text-muted)]">
                    <MapPin className="h-4 w-4" />
                    {profile.location}
                </div>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{profile.email}</p>
            </div>
        </motion.div>
    </div>
);

export default ContactSection;
