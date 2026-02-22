import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  ChevronUp,
  ChevronDown,
  Sparkles,
  Cpu,
  Code,
  Award,
  Briefcase,
  Sun,
  Moon
} from 'lucide-react';
import { profile, links, chapterItems } from './data';
import Scene3D from './components/Scene3D';
import type { SectionProps } from './types';
import {
  ImpactSection,
  WorkSection,
  ProjectsSection,
  SkillsSection,
  RecognitionSection,
  ContactSection
} from './components/sections';

/* ================================================================
   SECTION CONFIGURATION
   ================================================================ */
const sectionIcons: Record<string, React.ElementType> = {
  impact: Sparkles,
  work: Briefcase,
  projects: Cpu,
  skills: Code,
  recognition: Award,
  contact: Mail
};

const sectionContent: Record<string, React.FC<SectionProps>> = {
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
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  // Persisted section state — survives unmount/remount from AnimatePresence
  const projectPageRef = useRef(0);
  const workExpandedRef = useRef<number | null>(null);

  // Touch/swipe tracking for mobile vertical navigation
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
    const metaThemeColor = document.getElementById('meta-theme-color');
    if (metaThemeColor) metaThemeColor.setAttribute('content', newTheme === 'light' ? '#faf9f7' : '#0a0a0f');
  };

  const lastWheelTime = useRef(0);
  // Refs for stable event listener callbacks (avoids listener thrashing)
  const activeIndexRef = useRef(activeIndex);
  const isTransitioningRef = useRef(isTransitioning);
  const sectionsLengthRef = useRef(0);

  const sections = chapterItems;
  const currentSection = sections[activeIndex];
  const SectionIcon = sectionIcons[currentSection.id] || Sparkles;
  const SectionContent = sectionContent[currentSection.id] || ImpactSection;

  // Keep refs in sync for stable callbacks
  useEffect(() => { activeIndexRef.current = activeIndex; }, [activeIndex]);
  useEffect(() => { isTransitioningRef.current = isTransitioning; }, [isTransitioning]);
  useEffect(() => { sectionsLengthRef.current = sections.length; }, [sections.length]);

  // Handle wheel navigation (Root Level) — stable identity via refs
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (isTransitioningRef.current) return;

      const now = Date.now();
      if (now - lastWheelTime.current < 800) return;

      const delta = e.deltaY;
      if (delta > 30) {
        if (activeIndexRef.current < sectionsLengthRef.current - 1) {
          lastWheelTime.current = now;
          setIsTransitioning(true);
          setActiveIndex((prev) => prev + 1);
        }
      } else if (delta < -30) {
        if (activeIndexRef.current > 0) {
          lastWheelTime.current = now;
          setIsTransitioning(true);
          setActiveIndex((prev) => prev - 1);
        }
      }
    },
    []
  );

  // Handle keyboard navigation — stable callback, listener attached once
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (isTransitioningRef.current) return;

      // Don't hijack arrow keys inside form elements
      const tag = document.activeElement?.tagName || '';
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(tag)) return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        if (activeIndexRef.current < sectionsLengthRef.current - 1) {
          setIsTransitioning(true);
          setActiveIndex((prev) => prev + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        if (activeIndexRef.current > 0) {
          setIsTransitioning(true);
          setActiveIndex((prev) => prev - 1);
        }
      }
    },
    []
  );

  // Setup keyboard listener ONCE on mount (no thrashing)
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Touch/swipe handlers for mobile vertical section navigation
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (isTransitioningRef.current) return;

    const endY = e.changedTouches[0].clientY;
    const endX = e.changedTouches[0].clientX;
    const diffY = touchStartY.current - endY;
    const diffX = touchStartX.current - endX;
    const threshold = 60;

    // Only trigger if swipe is predominantly vertical
    if (Math.abs(diffY) > threshold && Math.abs(diffY) > Math.abs(diffX) * 1.5) {
      if (diffY > 0 && activeIndexRef.current < sectionsLengthRef.current - 1) {
        setIsTransitioning(true);
        setActiveIndex((prev) => prev + 1);
      } else if (diffY < 0 && activeIndexRef.current > 0) {
        setIsTransitioning(true);
        setActiveIndex((prev) => prev - 1);
      }
    }
  }, []);

  // Reset transition state
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 700);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, activeIndex]);

  // Navigate to section — allows immediate navigation (no freeze)
  const goToSection = (index: number) => {
    if (index >= 0 && index < sections.length && index !== activeIndex) {
      setIsTransitioning(true);
      setActiveIndex(index);
    }
  };

  // Calculate progress
  const progress = ((activeIndex + 1) / sections.length) * 100;

  return (
    <div
      className="relative w-screen overflow-hidden bg-[var(--bg-primary)]"
      style={{ height: '100dvh' }}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 3D Background */}
      <Scene3D />

      {/* Main Container */}
      <div className="relative z-10 h-full w-full flex flex-col">

        {/* Header */}
        <header className="shrink-0 px-6 lg:px-12 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-60 blur" />
              <img
                src={profile.photo}
                alt={profile.firstName}
                className="relative h-12 w-12 rounded-xl object-cover border border-[var(--border-medium)]"
                fetchPriority="high"
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
            <button
              onClick={toggleTheme}
              className="btn-ghost flex items-center justify-center p-2 rounded-full"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-[var(--accent-primary)]" />
              ) : (
                <Moon className="h-5 w-5 text-[var(--accent-tertiary)]" />
              )}
            </button>
            <a href={links.github} target="_blank" rel="noreferrer" className="btn-ghost" aria-label="GitHub">
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="btn-ghost" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a href={`mailto:${profile.email}`} className="btn-primary" aria-label="Contact via email">
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
                  aria-label={`Navigate to ${section.label}`}
                  aria-current={i === activeIndex ? 'step' : undefined}
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

              {/* Chips — fixed min-height prevents layout shift between sections */}
              <div className="mt-4 flex flex-wrap gap-2 min-h-[2rem]">
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
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                  className={`h-full no-scrollbar pb-8 ${isTransitioning ? 'overflow-hidden' : 'overflow-y-auto'}`}
                  onWheel={(e) => {
                    const el = e.currentTarget;
                    const { scrollTop, scrollHeight, clientHeight } = el;
                    if (scrollHeight <= clientHeight) return;
                    const isAtTop = scrollTop <= 0;
                    const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;
                    if ((!isAtTop && e.deltaY < 0) || (!isAtBottom && e.deltaY > 0)) {
                      e.stopPropagation();
                    }
                  }}
                >
                  <SectionContent
                    isTransitioning={isTransitioning}
                    projectPageRef={projectPageRef}
                    workExpandedRef={workExpandedRef}
                  />
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
                aria-label="Previous section"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-subtle)] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronUp className="h-5 w-5" />
              </button>
              <button
                onClick={() => goToSection(activeIndex + 1)}
                disabled={activeIndex === sections.length - 1}
                aria-label="Next section"
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
        <nav className="lg:hidden shrink-0 px-4 py-4 bg-[var(--bg-glass)] backdrop-blur-xl border-t border-[var(--border-subtle)]" style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}>
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={() => goToSection(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Previous section"
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[var(--bg-tertiary)] text-[var(--text-secondary)] disabled:opacity-30"
            >
              <ChevronUp className="h-5 w-5" />
              Prev
            </button>
            <div className="flex items-center gap-2 px-4">
              {sections.map((section, i) => (
                <button
                  key={i}
                  onClick={() => goToSection(i)}
                  aria-label={`Navigate to ${section.label}`}
                  aria-current={i === activeIndex ? 'step' : undefined}
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
              aria-label="Next section"
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[var(--accent-primary)] text-white disabled:opacity-30"
            >
              Next
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>
        </nav>

        {/* Footer */}
        <footer className="shrink-0 px-6 lg:px-12 py-4 flex items-center justify-between text-[var(--text-muted)]" style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}>
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
