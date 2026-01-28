import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Award,
  Briefcase,
  Code,
  Cpu,
  Gauge,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Network,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap
} from 'lucide-react';

type ViewMode = 'skim' | 'deep';

const Resume = () => {
  const [activeSection, setActiveSection] = useState('impact');
  const [viewMode, setViewMode] = useState<ViewMode>('skim');
  const lastWheelRef = useRef(0);
  const touchStartRef = useRef<number | null>(null);

  const profile = {
    firstName: 'Sourabh',
    lastName: 'Dhalia',
    role: 'System Software Engineer | High-Performance C++',
    headline: 'High-performance C++ systems, embedded Linux, and GPU pipelines for global device validation.',
    tagline:
      'System Software Engineer specializing in high-performance C++, embedded Linux, and graphics pipelines. Built automation daemons/services consumed by YouTube, Netflix, and Amazon for critical performance validation and content pipeline validation. Reduced system boot latency by 70% through optimization. Expert in modern C++, memory management, multithreading, IPC, and GPU profiling (ARM/RISC-V Streamline, PVRTune).',
    photo: 'https://avatars.githubusercontent.com/SourabhDhalia',
    location: 'Noida, India',
    email: 'sdhalia.007@gmail.com'
  };

  const links = {
    github: 'https://github.com/SourabhDhalia',
    linkedin: 'https://www.linkedin.com/in/sourabhdhalia/',
    youtube: 'https://www.youtube.com/@sourabhdhalia',
    githubUsername: 'SourabhDhalia',
    repoName: 'PortfolioCPP'
  };

  const githubPagesUrl = `https://${links.githubUsername}.github.io/${links.repoName}`;

  const stats = [
    { value: '70%', label: 'Boot latency reduction', meter: 70 },
    { value: '800+', label: 'Memory violations resolved', meter: 88 },
    { value: '9 yrs', label: 'Legacy OS compatibility', meter: 80 },
    { value: 'Global', label: 'Device automation footprint', meter: 76 }
  ];

  const focusAreas = [
    {
      title: 'Automation Bus',
      detail: 'Remote orchestration for media validation at scale.',
      icon: Network
    },
    {
      title: 'Latency Tuning',
      detail: 'Syscall profiling, LRU caching, and boot wins.',
      icon: Gauge
    },
    {
      title: 'Memory Safety',
      detail: 'ASAN + Valgrind hygiene for long-lived services.',
      icon: ShieldCheck
    },
    {
      title: 'Graphics Pipelines',
      detail: 'OpenGL ES profiling with Streamline + PVRTune.',
      icon: Cpu
    }
  ];

  const principles = [
    {
      title: 'Latency obsession',
      detail: 'Measure, profile, and remove the slow path at every layer.'
    },
    {
      title: 'Reliability by default',
      detail: 'RAII, strict error handling, and memory instrumentation.'
    },
    {
      title: 'Secure automation',
      detail: 'Access-controlled orchestration across MQTT + IPC boundaries.'
    }
  ];

  const pillars = [
    {
      title: 'Modern C++ Systems',
      description:
        'C++17/20, RAII, concurrency design, and fault-tolerant APIs for long-lived platform services.',
      icon: Terminal
    },
    {
      title: 'Embedded Linux Platforms',
      description:
        'Daemon architecture, IPC bridges, OTA hot patching, and hardened system-level integration.',
      icon: Cpu
    },
    {
      title: 'Graphics + GPU Performance',
      description:
        'OpenGL ES, GPU profiling, frame pacing, and validation tooling for rendering pipelines.',
      icon: Code
    },
    {
      title: 'Automation at Scale',
      description:
        'Secure device orchestration over MQTT with cloud to IPC workflows for global fleets.',
      icon: Zap
    }
  ];

  const experienceHighlights = [
    {
      title: 'Device Automation Bus (DAB)',
      summary: 'Privileged daemon enabling remote device orchestration for global media validation.',
      detail:
        'Owned and engineered a privileged daemon enabling remote device orchestration. Exposed access-controlled control of OS subsystems (HAL, Input, Power) to support stability, stress, and media playback/content-pipeline validation for YouTube, Netflix, Amazon, and TVPlus.'
    },
    {
      title: 'UI Manager Performance',
      summary: 'Refactored core APIs, added LRU caching, and cut boot latency by 70%.',
      detail:
        'Optimized a platform UI resource/config service by refactoring core APIs, adding LRU caching, improving memory allocation reuse, and replacing high-cost syscalls via syscall/page-fault profiling. Reduced system boot latency by 70% and minimized page faults.'
    },
    {
      title: 'Concurrency & Modern C++',
      summary: 'Re-architected C++17 APIs and removed race conditions.',
      detail:
        'Re-architected core API using C++17 RAII and design patterns. Eliminated race conditions/deadlocks with thread-safe GMainLoop async event handling.'
    },
    {
      title: 'OTA Firmware Hot-Patcher',
      summary: 'Standalone OTA updater with CRC, atomic swaps, and rollback.',
      detail:
        'Developed a standalone C++ OTA updater to patch platform modules without full firmware rebuilds. Implemented CRC validation, atomic file swapping, and automated rollback, reducing build-verify cycles by 70%.'
    },
    {
      title: 'Memory Safety & Linux Systems',
      summary: 'Resolved 800+ memory violations across 9 years of Tizen OS.',
      detail:
        'Resolved 800+ memory violations (leaks/corruption) by integrating ASAN, Valgrind, and GDB into CI workflow. Backported critical system services to support 9 years of legacy Tizen OS versions.'
    },
    {
      title: 'Cloud-to-IPC Protocol Bridge',
      summary: 'Secure MQTT bridge for cloud-to-device control flow.',
      detail:
        'Built a secure C++ bridge linking external cloud microservices to isolated internal TV hardware. Orchestrated bidirectional control flow via MQTT v5.'
    },
    {
      title: 'Cross-Architecture Graphics Porting (RISC-V to ARM)',
      summary: 'Smoothed FPS stutters by profiling rendering pipelines.',
      detail:
        'Migrated platform modules across multiple OS versions. Diagnosed and resolved FPS stutters by profiling rendering pipelines with PVRTune and Streamline.'
    }
  ];

  const projects = [
    {
      title: '3D Zombie Hunter',
      stack: 'Unreal Engine, C++, Blueprints, Autodesk Maya',
      summary:
        'Built a performance-first gameplay loop with AI-driven enemies and real-time systems engineering.',
      highlights: [
        'AI behavior trees and state machines in C++ and Blueprints.',
        'Realtime gameplay systems with performance-first update loops.',
        'Exposure to OpenGL, image compression, and video processing.'
      ]
    },
    {
      title: 'GenAI Linux Server & RAG Pipeline',
      stack: 'Linux, LLMs, Python',
      summary:
        'Delivered a secure LLM stack and retrieval pipeline for local, context-aware technical search.',
      highlights: [
        'Secured remote Linux inference stack accessed via SSH.',
        'RAG pipeline for local technical documentation search.',
        'Context-aware querying optimized for restricted networks.'
      ]
    }
  ];

  const skills = [
    {
      label: 'Languages',
      items: ['C++ (11/14/17, STL)', 'C', 'Python', 'C#', 'JavaScript', 'Shell Scripting']
    },
    {
      label: 'System & OS',
      items: [
        'Linux system programming',
        'Tizen OS',
        'IPC (shared memory, sockets, RPC)',
        'Multithreading (pthreads, GMainLoop)',
        'Synchronization',
        'Memory management (corruption, leaks)'
      ]
    },
    {
      label: 'Graphics & GPU',
      items: ['OpenGL ES', 'EGL', 'GPU profiling (Streamline, PVRTune)', 'Shader optimization', 'Unreal Engine']
    },
    {
      label: 'Tools & Networking',
      items: ['CMake', 'GCC/GDB', 'Valgrind', 'ASAN', 'Git', 'Perforce', 'MQTT v5', 'TCP/IP', 'REST']
    },
    {
      label: 'Emerging Tech',
      items: ['GenAI', 'LLMs (Ollama)', 'RAG', 'Model fine-tuning']
    }
  ];

  const awards = [
    {
      title: 'SPOT Award',
      org: 'Samsung R&D Institute',
      detail:
        'Awarded as the only new joiner for exceptional system optimization and architectural adaptability.'
    },
    {
      title: 'Stellar Project Award',
      org: 'Samsung R&D Institute',
      detail:
        'Best Collaboration award for building AI-driven TVPlus content validation and QC automation used for global content rollout.'
    }
  ];

  const education = {
    degree: 'B.Tech, Computer Engineering',
    school: 'J.C. Bose University of Science and Technology, YMCA (Formerly YMCA UST)',
    location: 'Faridabad, India',
    period: '2019 - 2023',
    courses: [
      'C++',
      'Data Structures & Algorithms',
      'Operating Systems',
      'Object-Oriented Programming',
      'Computer Networks',
      'DBMS'
    ],
    cgpa: '8.1'
  };

  const chapterItems = useMemo(
    () => [
      {
        id: 'impact',
        label: 'Capability',
        title: 'Systems you can trust at scale',
        summary: 'Latency-first systems engineering with secure automation and GPU-level observability.',
        chips: ['C++17/20', 'Linux', 'GPU', 'Automation'],
        icon: Sparkles
      },
      {
        id: 'work',
        label: 'Experience',
        title: 'High-performance platforms for global devices',
        summary: 'Samsung R&D platform engineering across automation, memory safety, and OTA pipelines.',
        chips: ['DAB', 'LRU', 'MQTT', 'ASAN'],
        icon: Briefcase
      },
      {
        id: 'projects',
        label: 'Projects',
        title: 'Hands-on builds beyond the day job',
        summary: 'Gameplay AI systems and GenAI infrastructure built end-to-end.',
        chips: ['Unreal', 'RAG', 'LLM', 'OpenGL'],
        icon: Cpu
      },
      {
        id: 'skills',
        label: 'Toolbox',
        title: 'The stack behind the systems',
        summary: 'Languages, OS internals, graphics profiling, and distributed tooling.',
        chips: ['C++', 'Linux', 'GPU', 'CI'],
        icon: Code
      },
      {
        id: 'recognition',
        label: 'Recognition',
        title: 'Awards and academic foundation',
        summary: 'SPOT + Stellar awards with a B.Tech in Computer Engineering (CGPA 8.1).',
        chips: ['Awards', 'CGPA 8.1'],
        icon: Award
      },
      {
        id: 'contact',
        label: 'Contact',
        title: 'Ready for high-stakes systems work',
        summary: 'Let us connect for platform engineering and performance-critical roles.',
        chips: ['Email', 'LinkedIn', 'GitHub'],
        icon: Mail
      }
    ],
    []
  );

  const navItems = useMemo(
    () => chapterItems.map((item) => ({ id: item.id, label: item.label })),
    [chapterItems]
  );

  const currentIndex = Math.max(
    0,
    navItems.findIndex((item) => item.id === activeSection)
  );
  const currentChapter = chapterItems.find((item) => item.id === activeSection) ?? chapterItems[0];
  const progress = navItems.length ? ((currentIndex + 1) / navItems.length) * 100 : 0;

  const stepSection = useCallback(
    (direction: 'prev' | 'next') => {
      setActiveSection((prev) => {
        const current = navItems.findIndex((item) => item.id === prev);
        const delta = direction === 'next' ? 1 : -1;
        const nextIndex = (current + delta + navItems.length) % navItems.length;
        return navItems[nextIndex]?.id ?? navItems[0]?.id ?? prev;
      });
    },
    [navItems]
  );

  const handleNavClick = (id: string) => {
    setActiveSection(id);
  };

  const handleCycle = (direction: 'prev' | 'next') => {
    stepSection(direction);
  };

  useEffect(() => {
    const throttleMs = 700;

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 12) {
        return;
      }
      event.preventDefault();
      const now = Date.now();
      if (now - lastWheelRef.current < throttleMs) {
        return;
      }
      lastWheelRef.current = now;
      stepSection(event.deltaY > 0 ? 'next' : 'prev');
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const forward = event.key === 'ArrowDown' || event.key === 'ArrowRight' || event.key === 'PageDown';
      const backward = event.key === 'ArrowUp' || event.key === 'ArrowLeft' || event.key === 'PageUp';
      if (forward || event.key === ' ' || event.key === 'Spacebar') {
        event.preventDefault();
        stepSection('next');
      } else if (backward) {
        event.preventDefault();
        stepSection('prev');
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartRef.current = event.touches[0]?.clientY ?? null;
    };

    const onTouchEnd = (event: TouchEvent) => {
      const start = touchStartRef.current;
      const end = event.changedTouches[0]?.clientY ?? null;
      if (start === null || end === null) {
        return;
      }
      const delta = start - end;
      if (Math.abs(delta) < 40) {
        return;
      }
      stepSection(delta > 0 ? 'next' : 'prev');
      touchStartRef.current = null;
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [stepSection]);

  const renderFocusPanel = () => {
    if (activeSection === 'impact') {
      return (
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="sm:col-span-2 rounded-2xl border border-[var(--stroke)] bg-white/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-3)]">
              Executive summary
            </p>
            <p className="mt-2 text-xs text-[color:var(--muted)] clamp-4">{profile.tagline}</p>
          </div>
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div key={area.title} className="rounded-2xl border border-[var(--stroke)] bg-white/70 p-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-[var(--accent-2-soft)] text-[color:var(--accent-2)]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-semibold text-[color:var(--ink)]">{area.title}</p>
                </div>
                <p className="mt-2 text-xs text-[color:var(--muted)] clamp-2">{area.detail}</p>
              </div>
            );
          })}
          {viewMode === 'deep' &&
            principles.map((principle) => (
              <div key={principle.title} className="rounded-2xl border border-[var(--stroke)] bg-white/70 p-4">
                <p className="text-sm font-semibold text-[color:var(--ink)]">{principle.title}</p>
                <p className="mt-2 text-xs text-[color:var(--muted)] clamp-2">{principle.detail}</p>
              </div>
            ))}
          {viewMode === 'deep' &&
            pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="rounded-2xl border border-[var(--stroke)] bg-white/70 p-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[color:var(--accent)]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <p className="text-sm font-semibold text-[color:var(--ink)]">{pillar.title}</p>
                  </div>
                  <p className="mt-2 text-xs text-[color:var(--muted)] clamp-2">{pillar.description}</p>
                </div>
              );
            })}
        </div>
      );
    }

    if (activeSection === 'work') {
      const workItems = viewMode === 'deep' ? experienceHighlights.slice(0, 6) : experienceHighlights.slice(0, 4);
      return (
        <div className="grid gap-3 sm:grid-cols-2">
          {workItems.map((item, index) => (
            <div key={item.title} className="rounded-2xl border border-[var(--stroke)] bg-white/70 p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[color:var(--ink)]">{item.title}</p>
                <span className="text-xs font-mono text-[color:var(--muted)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="mt-2 text-xs text-[color:var(--muted)] clamp-3">
                {viewMode === 'skim' ? item.summary : item.detail}
              </p>
            </div>
          ))}
        </div>
      );
    }

    if (activeSection === 'projects') {
      return (
        <div className="grid gap-3 sm:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="rounded-2xl border border-[var(--stroke)] bg-white/70 p-4">
              <p className="text-sm font-semibold text-[color:var(--ink)]">{project.title}</p>
              <p className="mt-1 text-xs text-[color:var(--accent-3)]">{project.stack}</p>
              <p className="mt-2 text-xs text-[color:var(--muted)] clamp-2">{project.summary}</p>
              {viewMode === 'deep' && (
                <ul className="mt-3 space-y-2 text-xs text-[color:var(--muted)]">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent-2)]" />
                      <span className="clamp-2">{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      );
    }

    if (activeSection === 'skills') {
      const visibleSkills = viewMode === 'deep' ? skills : skills.slice(0, 3);
      return (
        <div className="grid gap-3 sm:grid-cols-2">
          {visibleSkills.map((skill) => (
            <div key={skill.label} className="rounded-2xl border border-[var(--stroke)] bg-white/70 p-4">
              <p className="text-sm font-semibold text-[color:var(--ink)]">{skill.label}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--stroke)] bg-white/70 px-2 py-1 text-[11px] font-mono text-[color:var(--accent-3)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (activeSection === 'recognition') {
      return (
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-[var(--stroke)] bg-white/70 p-4">
            <p className="text-sm font-semibold text-[color:var(--ink)]">Awards</p>
            <div className="mt-2 space-y-2">
              {awards.map((award) => (
                <div key={award.title} className="rounded-2xl border border-[var(--stroke)] bg-white/70 p-3">
                  <p className="text-sm font-semibold text-[color:var(--ink)]">{award.title}</p>
                  <p className="text-xs text-[color:var(--accent-3)]">{award.org}</p>
                  <p className="mt-1 text-xs text-[color:var(--muted)] clamp-2">{award.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[var(--stroke)] bg-white/70 p-4">
            <p className="text-sm font-semibold text-[color:var(--ink)]">Education</p>
            <p className="mt-1 text-xs text-[color:var(--accent-3)]">{education.degree}</p>
            <p className="text-xs text-[color:var(--muted)] clamp-2">{education.school}</p>
            <p className="text-xs text-[color:var(--muted)]">
              {education.location} | {education.period}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {education.courses.map((course) => (
                <span
                  key={course}
                  className="rounded-full border border-[var(--stroke)] bg-white/70 px-2 py-1 text-[11px] font-mono text-[color:var(--accent-3)]"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (activeSection === 'contact') {
      return (
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-[var(--stroke)] bg-white/70 p-4">
            <p className="text-sm font-semibold text-[color:var(--ink)]">Email</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-1 block text-xs text-[color:var(--accent-3)] hover:text-[color:var(--accent)]"
            >
              {profile.email}
            </a>
          </div>
          <div className="rounded-2xl border border-[var(--stroke)] bg-white/70 p-4">
            <p className="text-sm font-semibold text-[color:var(--ink)]">Location</p>
            <p className="mt-1 text-xs text-[color:var(--muted)]">{profile.location}</p>
          </div>
          <div className="sm:col-span-2 flex flex-wrap gap-2">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--stroke)] bg-white/80 px-3 py-2 text-xs font-semibold text-[color:var(--accent-3)] hover:text-[color:var(--accent)]"
            >
              GitHub
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--stroke)] bg-white/80 px-3 py-2 text-xs font-semibold text-[color:var(--accent-3)] hover:text-[color:var(--accent)]"
            >
              LinkedIn
            </a>
            <a
              href={links.youtube}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--stroke)] bg-white/80 px-3 py-2 text-xs font-semibold text-[color:var(--accent-3)] hover:text-[color:var(--accent)]"
            >
              YouTube
            </a>
            <a
              href={githubPagesUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--stroke)] bg-white/80 px-3 py-2 text-xs font-semibold text-[color:var(--accent-3)] hover:text-[color:var(--accent)]"
            >
              Live site
            </a>
          </div>
        </div>
      );
    }

    return null;
  };

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
    <div className="min-h-screen font-body text-[color:var(--ink)]" style={rootStyle}>
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Sora:wght@400;600;700&display=swap');

* { box-sizing: border-box; }
html, body, #root { height: 100%; overflow: hidden; }
body { margin: 0; overscroll-behavior: none; }

.font-display { font-family: var(--font-display); }
.font-body { font-family: var(--font-body); }
.font-mono { font-family: var(--font-mono); }

.clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.glass-panel {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.86), rgba(255, 255, 255, 0.55));
  border: 1px solid rgba(255, 255, 255, 0.65);
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px) saturate(1.3);
}

.glass-soft {
  background: var(--surface);
  border: 1px solid var(--stroke);
  backdrop-filter: blur(14px) saturate(1.2);
}

@keyframes rise {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

.animate-rise { animation: rise 0.8s ease-out both; }
.animate-float { animation: float 9s ease-in-out infinite; }

@media (prefers-reduced-motion: reduce) {
  .animate-rise,
  .animate-float {
    animation: none;
  }
}
      `}</style>

      <div className="relative h-screen overflow-hidden bg-[color:var(--bg)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 right-[-120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,106,61,0.28),transparent_60%)] blur-3xl animate-float" />
          <div
            className="absolute left-[-160px] top-24 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(14,165,164,0.26),transparent_60%)] blur-3xl animate-float"
            style={{ animationDelay: '2s' }}
          />
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(11,26,36,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(11,26,36,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_center,rgba(14,165,164,0.2)_1px,transparent_1px)] [background-size:180px_180px]" />
        </div>

        <div className="relative mx-auto flex h-full max-w-6xl flex-col px-6 py-6 lg:px-10">
          <header className="flex flex-wrap items-center justify-between gap-4 animate-rise">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-3)] shadow-sm">
                <Sparkles className="h-4 w-4 text-[color:var(--accent)]" />
                2026 systems portfolio
              </div>
              <div className="hidden items-center gap-2 text-xs text-[color:var(--muted)] md:flex">
                <span className="h-2 w-2 rounded-full bg-[var(--accent-2)] shadow-[0_0_0_4px_rgba(14,165,164,0.18)]" />
                Scroll, swipe, or use arrows to switch chapters
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-white shadow-[var(--shadow)] transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                Email
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-white/80 px-4 py-2 text-xs font-semibold text-[color:var(--accent-3)] transition-transform hover:-translate-y-0.5"
              >
                <Github className="h-4 w-4" />
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-white/80 px-4 py-2 text-xs font-semibold text-[color:var(--accent-3)] transition-transform hover:-translate-y-0.5"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </header>

          <div className="mt-4 flex items-center gap-3 rounded-3xl border border-[var(--stroke)] bg-white/70 p-4 lg:hidden">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-[var(--accent-soft)]" />
              <img
                src={profile.photo}
                alt={`${profile.firstName} ${profile.lastName}`}
                className="relative h-12 w-12 rounded-2xl border border-[var(--stroke)] object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p className="font-display text-lg font-semibold">
                {profile.firstName} {profile.lastName}
              </p>
              <p className="text-xs text-[color:var(--muted)]">{profile.role}</p>
              <div className="mt-1 flex items-center gap-2 text-xs text-[color:var(--accent-3)]">
                <MapPin className="h-3.5 w-3.5" />
                {profile.location}
              </div>
            </div>
          </div>

          <main className="mt-5 grid flex-1 gap-6 lg:grid-cols-[260px_1fr_300px]">
            <aside className="hidden flex-col gap-4 lg:flex">
              <div className="glass-panel rounded-3xl p-5">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-2xl bg-[var(--accent-soft)]" />
                    <img
                      src={profile.photo}
                      alt={`${profile.firstName} ${profile.lastName}`}
                      className="relative h-14 w-14 rounded-2xl border border-[var(--stroke)] object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="font-display text-lg font-semibold">
                      {profile.firstName} {profile.lastName}
                    </p>
                    <p className="text-xs text-[color:var(--muted)]">{profile.role}</p>
                    <div className="mt-1 flex items-center gap-2 text-xs text-[color:var(--accent-3)]">
                      <MapPin className="h-3.5 w-3.5" />
                      {profile.location}
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-xs text-[color:var(--muted)] clamp-3">{profile.headline}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-3 py-2 text-xs font-semibold text-white"
                  >
                    Email
                  </a>
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-white/80 px-3 py-2 text-xs font-semibold text-[color:var(--accent-3)]"
                  >
                    GitHub
                  </a>
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-white/80 px-3 py-2 text-xs font-semibold text-[color:var(--accent-3)]"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="glass-panel rounded-3xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-3)]">
                  Navigation
                </p>
                <div className="mt-4 space-y-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavClick(item.id)}
                      className={`flex w-full items-center justify-between rounded-2xl border border-transparent px-3 py-2 text-sm font-semibold transition ${
                        activeSection === item.id
                          ? 'border-[var(--accent-soft)] bg-white/90 text-[color:var(--accent)]'
                          : 'text-[color:var(--accent-3)] hover:border-[var(--stroke)] hover:bg-white/70'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="glass-panel rounded-3xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-3)]">
                  Quick actions
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={links.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-white/90 px-3 py-2 text-xs font-semibold text-[color:var(--accent-3)]"
                  >
                    YouTube
                  </a>
                  <a
                    href={githubPagesUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-white/90 px-3 py-2 text-xs font-semibold text-[color:var(--accent-3)]"
                  >
                    Live site
                  </a>
                </div>
              </div>
            </aside>

            <section className="glass-panel flex h-full flex-col rounded-3xl p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-3)]">
                    {currentChapter.label}
                  </p>
                  <h2 className="font-display text-2xl font-semibold sm:text-3xl">{currentChapter.title}</h2>
                  <p className="mt-2 text-sm text-[color:var(--muted)] clamp-2">{currentChapter.summary}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleCycle('prev')}
                    className="rounded-full border border-[var(--stroke)] bg-white/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-3)]"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCycle('next')}
                    className="rounded-full bg-[var(--accent)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
                  >
                    Next
                  </button>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {currentChapter.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-[var(--stroke)] bg-white/70 px-3 py-1 text-xs font-mono text-[color:var(--accent-3)]"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[color:var(--muted)]">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent-2)]" />
                  {String(currentIndex + 1).padStart(2, '0')} / {navItems.length}
                </div>
                <div className="h-1.5 flex-1 rounded-full bg-[var(--accent-soft)]">
                  <div className="h-full rounded-full bg-[color:var(--accent)]" style={{ width: `${progress}%` }} />
                </div>
                <div className="flex rounded-full border border-[var(--stroke)] bg-white/80 p-1">
                  {(['skim', 'deep'] as const).map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setViewMode(mode)}
                      className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                        viewMode === mode
                          ? 'bg-[var(--accent)] text-white shadow-[var(--shadow)]'
                          : 'text-[color:var(--accent-3)] hover:text-[color:var(--accent)]'
                      }`}
                    >
                      {mode === 'skim' ? 'Skim' : 'Deep'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2 lg:hidden">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
                      activeSection === item.id
                        ? 'border-[var(--accent)] bg-white/90 text-[color:var(--accent)]'
                        : 'border-[var(--stroke)] bg-white/70 text-[color:var(--accent-3)]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="mt-4 flex-1 overflow-hidden">{renderFocusPanel()}</div>

              <div className="mt-4 hidden items-center gap-2 text-xs text-[color:var(--muted)] lg:flex">
                <span className="h-2 w-2 rounded-full bg-[var(--accent-2)]" />
                Scroll, swipe, or use arrow keys to change chapters without page scrolling.
              </div>
            </section>

            <aside className="hidden flex-col gap-4 lg:flex">
              <div className="glass-panel rounded-3xl p-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent-3)]">System index</p>
                  <span className="text-xs font-mono text-[color:var(--accent-3)]">2026 ready</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-[var(--stroke)] bg-white/70 p-3">
                      <p className="font-display text-lg font-semibold text-[color:var(--accent-3)]">
                        {stat.value}
                      </p>
                      <p className="text-xs text-[color:var(--muted)]">{stat.label}</p>
                      <div className="mt-2 h-1 rounded-full bg-[var(--accent-soft)]">
                        <div
                          className="h-full rounded-full bg-[color:var(--accent-2)]"
                          style={{ width: `${stat.meter}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-panel rounded-3xl p-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent-3)]">Graphics signal</p>
                  <span className="text-xs font-mono text-[color:var(--accent-3)]">GPU / IPC</span>
                </div>
                <div className="mt-4 rounded-2xl border border-[var(--stroke)] bg-white/70 p-4">
                  <svg viewBox="0 0 240 120" fill="none" className="h-24 w-full">
                    <defs>
                      <linearGradient id="pulse" x1="0" y1="0" x2="240" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#ff6a3d" />
                        <stop offset="0.5" stopColor="#0ea5a4" />
                        <stop offset="1" stopColor="#1c4e80" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M10 80 C 40 20, 80 120, 120 60 S 200 20, 230 70"
                      stroke="url(#pulse)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="10" cy="80" r="4" fill="#0ea5a4" />
                    <circle cx="120" cy="60" r="4" fill="#ff6a3d" />
                    <circle cx="230" cy="70" r="4" fill="#1c4e80" />
                  </svg>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                  {['Streamline', 'PVRTune', 'EGL'].map((item) => (
                    <div key={item} className="rounded-2xl border border-[var(--stroke)] bg-white/70 p-2">
                      <p className="text-[color:var(--accent-3)]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </main>

          <footer className="mt-4 text-center text-[10px] font-mono text-[color:var(--muted)]">
            Built for GitHub Pages. One-screen UX with scroll-to-switch chapters.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Resume;
