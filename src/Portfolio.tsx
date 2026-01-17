import React, { useEffect, useMemo, useRef, useState } from 'react';
import { chapterItems } from './data';
import Header from './components/Header';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import FocusPanel from './components/FocusPanel';
import NavButtons from './components/NavButtons';
import QuickViewModal from './components/QuickViewModal';
import { motion, AnimatePresence } from 'framer-motion';

type ViewMode = 'skim' | 'deep';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('impact');
  const [viewMode, setViewMode] = useState<ViewMode>('skim');

  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [lockFocus, setLockFocus] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const navItems = useMemo(
    () => chapterItems.map((item) => ({ id: item.id, label: item.label })),
    [chapterItems]
  );

  const currentChapter = chapterItems.find((item) => item.id === activeSection) ?? chapterItems[0];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    if (lockFocus) {
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCycle = (direction: 'prev' | 'next') => {
    const currentIndex = navItems.findIndex((item) => item.id === activeSection);
    const delta = direction === 'next' ? 1 : -1;
    const nextIndex = (currentIndex + delta + navItems.length) % navItems.length;
    const nextId = navItems[nextIndex]?.id ?? navItems[0].id;
    setActiveSection(nextId);
    if (!lockFocus) {
      const element = document.getElementById(nextId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const scrollToTop = () => {
    const node = scrollRef.current;
    if (node && node.scrollHeight > node.clientHeight + 8) {
      node.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const node = scrollRef.current;
      if (node && node.scrollHeight > node.clientHeight + 8) {
        const total = node.scrollHeight - node.clientHeight;
        const progress = total > 0 ? (node.scrollTop / total) * 100 : 0;
        setScrollProgress(progress);
        setShowTop(node.scrollTop > 240);
        return;
      }

      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      setScrollProgress(progress);
      setShowTop(window.scrollY > 520);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    const node = scrollRef.current;
    if (node) {
      node.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (node) {
        node.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (lockFocus) {
      return;
    }

    const root =
      scrollRef.current && scrollRef.current.scrollHeight > scrollRef.current.clientHeight + 8
        ? scrollRef.current
        : null;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root, rootMargin: '-35% 0px -55% 0px' }
    );

    chapterItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [chapterItems, lockFocus]);

  const rootStyle = {
    '--bg': '#e9eff5',
    '--ink': '#0b1a24',
    '--muted': '#445660',
    '--accent': '#ff6a3d',
    '--accent-soft': 'rgba(255, 106, 61, 0.18)',
    '--accent-2': '#0ea5a4',
    '--accent-2-soft': 'rgba(14, 165, 164, 0.16)',
    '--accent-3': '#1c4e80',
    '--accent-3-soft': 'rgba(28, 78, 128, 0.12)',
    '--surface': 'rgba(255, 255, 255, 0.72)',
    '--surface-strong': 'rgba(255, 255, 255, 0.88)',
    '--stroke': 'rgba(11, 26, 36, 0.12)',
    '--shadow': '0 32px 90px rgba(11, 26, 36, 0.18)',
    '--font-display': "'Sora', sans-serif",
    '--font-body': "'Plus Jakarta Sans', sans-serif",
    '--font-mono': "'JetBrains Mono', monospace"
  } as React.CSSProperties;

  return (
    <div className="min-h-screen font-body text-[color:var(--ink)] overflow-x-hidden selection:bg-[var(--accent)] selection:text-white" style={rootStyle}>

      {/* Scroll Progress Bar */}
      <div className="fixed left-0 right-0 top-0 z-50 h-1.5 bg-transparent">
        <motion.div
          className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]"
          style={{ width: `${scrollProgress}%` }}
          layoutId="scrollProgress"
        />
      </div>

      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden bg-[color:var(--bg)] -z-10">
        <motion.div
          animate={{
            translateY: [0, -20, 0],
            translateX: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,106,61,0.15),transparent_70%)] blur-[100px]"
        />
        <motion.div
          animate={{
            translateY: [0, 30, 0],
            translateX: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(14,165,164,0.12),transparent_70%)] blur-[80px]"
        />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#0b1a24_1.2px,transparent_1.2px),linear-gradient(90deg,#0b1a24_1.2px,transparent_1.2px)] [background-size:40px_40px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 pb-24 pt-8 lg:px-12">
        <Header />
        <NavButtons activeSection={activeSection} handleNavClick={handleNavClick} />

        <div className="mt-8 lg:mt-12 grid gap-8 lg:grid-cols-[400px_1fr] xl:grid-cols-[440px_1fr] items-start">
          <LeftPanel
            activeSection={activeSection}
            handleNavClick={handleNavClick}
            handleCycle={handleCycle}
            lockFocus={lockFocus}
            setLockFocus={setLockFocus}
            viewMode={viewMode}
            setViewMode={setViewMode}
            currentChapter={currentChapter}
            navItems={navItems}
            scrollProgress={scrollProgress}
            onOpenQuickView={() => setShowQuickView(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection + viewMode}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <FocusPanel activeSection={activeSection} viewMode={viewMode} />
              </motion.div>
            </AnimatePresence>
          </LeftPanel>

          <RightPanel scrollRef={scrollRef} activeSection={activeSection} scrollProgress={scrollProgress} />
        </div>

        <footer className="mt-24 text-center">
          <p className="text-xs text-[color:var(--muted)] font-mono uppercase tracking-widest opacity-60">
            System Optimized • 2026 Ready
          </p>
        </footer>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            type="button"
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-4 rounded-full bg-white/80 backdrop-blur-md shadow-xl border border-white/50 text-[var(--accent)] hover:-translate-y-1 transition-transform"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
          </motion.button>
        )}
      </AnimatePresence>

      <QuickViewModal isOpen={showQuickView} onClose={() => setShowQuickView(false)} />
    </div>
  );
};

export default Portfolio;

