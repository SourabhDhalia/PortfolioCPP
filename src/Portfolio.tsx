import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Youtube,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Terminal,
  Cpu,
  Code,
  Zap,
  Award,
  Briefcase,
  Network,
  Gauge,
  ShieldCheck
} from 'lucide-react';
import {
  profile,
  links,
  stats,
  focusAreas,
  principles,
  pillars,
  experienceHighlights,
  projects,
  skills,
  awards,
  education,
  chapterItems
} from './data';
import Scene3D from './components/Scene3D';

/* ================================================================
   SECTION CONFIGURATIONS
   ================================================================ */
const sectionIcons: Record<string, React.ElementType> = {
  impact: Sparkles,
  work: Briefcase,
  projects: Cpu,
  skills: Code,
  recognition: Award,
  contact: Mail
};

/* ================================================================
   SECTION CONTENT COMPONENTS
   ================================================================ */

// Section: Impact/Capability
const ImpactSection = () => (
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

// Section: Work/Experience - Scrollable with expandable details and scroll passthrough
const WorkSection = ({ onScrollEnd }: { onScrollEnd?: (direction: 'up' | 'down') => void }) => {
  const [expandedIdx, setExpandedIdx] = React.useState<number | null>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const scrollEndTimeout = React.useRef<number | null>(null);

  const handleScroll = (e: React.WheelEvent) => {
    const el = scrollRef.current;
    if (!el || !onScrollEnd) return;

    const { scrollTop, scrollHeight, clientHeight } = el;
    const isAtTop = scrollTop <= 0;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 5;

    // If at bounds and scrolling in that direction, pass to parent
    if (isAtTop && e.deltaY < -30) {
      e.preventDefault();
      if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);
      scrollEndTimeout.current = window.setTimeout(() => onScrollEnd('up'), 50);
    } else if (isAtBottom && e.deltaY > 30) {
      e.preventDefault();
      if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);
      scrollEndTimeout.current = window.setTimeout(() => onScrollEnd('down'), 50);
    }
  };

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

      {/* Scrollable Experience Items with passthrough */}
      <div
        ref={scrollRef}
        onWheel={handleScroll}
        className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar"
      >
        {experienceHighlights.map((item, i) => (
          <div
            key={item.title}
            onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
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

      {/* Hint */}
      <div className="text-center text-xs text-[var(--text-muted)] mt-3 opacity-70">
        ↕ Scroll to see all • Click to expand
      </div>
    </div>
  );
};

// Section: Projects - Paginated view with swipe gestures
const ProjectsSection = () => {
  const [page, setPage] = React.useState(0);
  const touchStartX = React.useRef(0);
  const touchEndX = React.useRef(0);
  const projectsPerPage = 4;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIdx = page * projectsPerPage;
  const visibleProjects = projects.slice(startIdx, startIdx + projectsPerPage);

  // Swipe gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // minimum swipe distance

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && page < totalPages - 1) {
        // Swipe left -> next page
        setPage(page + 1);
      } else if (diff < 0 && page > 0) {
        // Swipe right -> prev page
        setPage(page - 1);
      }
    }
  };

  // Mouse wheel horizontal scroll (for trackpad)
  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 30) {
      e.preventDefault();
      if (e.deltaX > 0 && page < totalPages - 1) {
        setPage(page + 1);
      } else if (e.deltaX < 0 && page > 0) {
        setPage(page - 1);
      }
    }
  };

  return (
    <div
      className="flex flex-col h-full"
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
                <h4 className="font-display text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                  {project.title}
                </h4>
                <p className="mt-1 text-xs font-mono text-[var(--accent-secondary)]">
                  {project.stack}
                </p>
              </div>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-xs font-mono font-bold">
                {String(startIdx + i + 1).padStart(2, '0')}
              </span>
            </div>
            <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">
              {project.summary}
            </p>
            <ul className="mt-3 space-y-1.5">
              {project.highlights.map((highlight, j) => (
                <li key={j} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent-primary)] shrink-0" />
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

      {/* Swipe hint */}
      <p className="text-center text-[10px] text-[var(--text-muted)] mt-2 opacity-60">
        ← Swipe or use arrows to navigate →
      </p>
    </div>
  );
};

// Section: Skills/Toolbox
const SkillsSection = () => (
  <div className="space-y-6">
    {skills.map((skillGroup, i) => (
      <motion.div
        key={skillGroup.label}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        className="glass-card rounded-2xl p-5"
      >
        <h4 className="font-semibold text-[var(--text-primary)] mb-3">{skillGroup.label}</h4>
        <div className="flex flex-wrap gap-2">
          {skillGroup.items.map((item) => (
            <span
              key={item}
              className="chip hover:chip-accent cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
);

// Section: Recognition
const RecognitionSection = () => (
  <div className="space-y-6">
    {/* Awards */}
    <div className="space-y-4">
      <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--accent-primary)]">
        Awards
      </h3>
      {awards.map((award, i) => (
        <motion.div
          key={award.title}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
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
        </motion.div>
      ))}
    </div>

    {/* Education */}
    <div className="space-y-4">
      <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--accent-secondary)]">
        Education
      </h3>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
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
      </motion.div>
    </div>
  </div>
);

// Section: Contact
const ContactSection = () => (
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
        <a
          href={links.github}
          target="_blank"
          rel="noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-subtle)] transition-all"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-subtle)] transition-all"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href={links.youtube}
          target="_blank"
          rel="noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-subtle)] transition-all"
        >
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

/* ================================================================
   SECTION CONTENT MAP
   ================================================================ */
const sectionContent: Record<string, React.FC> = {
  impact: ImpactSection,
  work: WorkSection,
  projects: ProjectsSection,
  skills: SkillsSection,
  recognition: RecognitionSection,
  contact: ContactSection
};

/* ================================================================
   MAIN PORTFOLIO COMPONENT
   ================================================================ */
const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const wheelTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastWheelTime = useRef(0);

  const sections = chapterItems;
  const currentSection = sections[activeIndex];
  const SectionIcon = sectionIcons[currentSection.id] || Sparkles;
  const SectionContent = sectionContent[currentSection.id] || ImpactSection;

  // Handle wheel navigation
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();

      const now = Date.now();
      if (now - lastWheelTime.current < 800) return; // Debounce
      if (isTransitioning) return;

      const delta = e.deltaY;

      if (delta > 30) {
        // Scroll down = next section
        if (activeIndex < sections.length - 1) {
          lastWheelTime.current = now;
          setIsTransitioning(true);
          setActiveIndex((prev) => prev + 1);
        }
      } else if (delta < -30) {
        // Scroll up = previous section
        if (activeIndex > 0) {
          lastWheelTime.current = now;
          setIsTransitioning(true);
          setActiveIndex((prev) => prev - 1);
        }
      }
    },
    [activeIndex, sections.length, isTransitioning]
  );

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (isTransitioning) return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        if (activeIndex < sections.length - 1) {
          setIsTransitioning(true);
          setActiveIndex((prev) => prev + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        if (activeIndex > 0) {
          setIsTransitioning(true);
          setActiveIndex((prev) => prev - 1);
        }
      }
    },
    [activeIndex, sections.length, isTransitioning]
  );

  // Setup event listeners
  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleWheel, handleKeyDown]);

  // Reset transition state
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 700);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, activeIndex]);

  // Navigate to section
  const goToSection = (index: number) => {
    if (index !== activeIndex && !isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex(index);
    }
  };

  // Calculate progress
  const progress = ((activeIndex + 1) / sections.length) * 100;

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[var(--bg-primary)]">
      {/* 3D Background */}
      <Scene3D activeSection={activeIndex} />

      {/* Floating Orbs removed - using Scene3D orbs only for performance */}

      {/* Main Container */}
      <div className="relative z-10 h-full w-full flex flex-col">

        {/* Header */}
        <header className="shrink-0 px-6 lg:px-12 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-60 blur" />
              <img
                src={profile.photo}
                alt={profile.firstName}
                className="relative h-12 w-12 rounded-xl object-cover border border-[var(--border-medium)]"
              />
            </motion.div>
            <div>
              <h1 className="font-display text-lg font-bold text-[var(--text-primary)]">
                {profile.firstName}{' '}
                <span className="gradient-text">{profile.lastName}</span>
              </h1>
              <p className="text-xs text-[var(--text-muted)] font-mono">
                {profile.role.split('|')[0].trim()}
              </p>
            </div>
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-3">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <Linkedin className="h-4 w-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="btn-primary"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">Contact</span>
            </a>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 flex overflow-hidden">

          {/* Left: Section Navigation */}
          <aside className="hidden lg:flex flex-col items-center justify-center w-24 shrink-0">
            <div className="nav-dots">
              {sections.map((section, i) => (
                <button
                  key={section.id}
                  className={`nav-dot ${i === activeIndex ? 'active' : ''}`}
                  onClick={() => goToSection(i)}
                  title={section.label}
                />
              ))}
            </div>
          </aside>

          {/* Center: Content */}
          <div className="flex-1 flex flex-col px-6 lg:px-8 overflow-hidden">

            {/* Section Header */}
            <div className="shrink-0 mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSection.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-4"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                    <SectionIcon className="h-7 w-7" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent-primary)]">
                      {currentSection.label}
                    </p>
                    <h2 className="font-display text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">
                      {currentSection.title}
                    </h2>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Chips */}
              <div className="mt-4 flex flex-wrap gap-2">
                {currentSection.chips.map((chip: string) => (
                  <span key={chip} className="chip chip-accent">{chip}</span>
                ))}
              </div>
            </div>

            {/* Section Content */}
            <div className="flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSection.id}
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -60, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="h-full overflow-y-auto no-scrollbar pb-8"
                >
                  {currentSection.id === 'work' ? (
                    <WorkSection
                      onScrollEnd={(direction) => {
                        if (isTransitioning) return;
                        const now = Date.now();
                        if (now - lastWheelTime.current < 800) return;

                        if (direction === 'down' && activeIndex < sections.length - 1) {
                          lastWheelTime.current = now;
                          setIsTransitioning(true);
                          setActiveIndex((prev) => prev + 1);
                        } else if (direction === 'up' && activeIndex > 0) {
                          lastWheelTime.current = now;
                          setIsTransitioning(true);
                          setActiveIndex((prev) => prev - 1);
                        }
                      }}
                    />
                  ) : (
                    <SectionContent />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Progress & Controls */}
          <aside className="hidden lg:flex flex-col items-center justify-between w-24 shrink-0 py-4">
            {/* Progress Ring */}
            <div className="progress-ring">
              <svg viewBox="0 0 52 52" className="w-full h-full">
                <circle className="bg" cx="26" cy="26" r="22" />
                <circle
                  className="progress"
                  cx="26"
                  cy="26"
                  r="22"
                  style={{
                    strokeDashoffset: 138.23 - (138.23 * progress) / 100
                  }}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-mono text-[var(--text-muted)]">
                {activeIndex + 1}/{sections.length}
              </span>
            </div>

            {/* Navigation Arrows */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => goToSection(activeIndex - 1)}
                disabled={activeIndex === 0}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-subtle)] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronUp className="h-5 w-5" />
              </button>
              <button
                onClick={() => goToSection(activeIndex + 1)}
                disabled={activeIndex === sections.length - 1}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-subtle)] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronDown className="h-5 w-5" />
              </button>
            </div>

            {/* Scroll Hint */}
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] writing-mode-vertical rotate-180" style={{ writingMode: 'vertical-rl' }}>
                Scroll to navigate
              </p>
            </div>
          </aside>
        </main>

        {/* Mobile Navigation */}
        <nav className="lg:hidden shrink-0 px-4 py-4 bg-[var(--bg-glass)] backdrop-blur-xl border-t border-[var(--border-subtle)]">
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={() => goToSection(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[var(--bg-tertiary)] text-[var(--text-secondary)] disabled:opacity-30"
            >
              <ChevronUp className="h-5 w-5" />
              Prev
            </button>
            <div className="flex items-center gap-2 px-4">
              {sections.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSection(i)}
                  className={`h-2 rounded-full transition-all ${i === activeIndex
                    ? 'w-6 bg-[var(--accent-primary)]'
                    : 'w-2 bg-[var(--border-medium)]'
                    }`}
                />
              ))}
            </div>
            <button
              onClick={() => goToSection(activeIndex + 1)}
              disabled={activeIndex === sections.length - 1}
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[var(--accent-primary)] text-white disabled:opacity-30"
            >
              Next
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>
        </nav>

        {/* Footer */}
        <footer className="shrink-0 px-6 lg:px-12 py-4 flex items-center justify-between text-[var(--text-muted)]">
          <p className="text-xs font-mono">
            © 2026 {profile.firstName} {profile.lastName}
          </p>
          <p className="text-xs font-mono flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--accent-secondary)] animate-pulse" />
            Available for opportunities
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
