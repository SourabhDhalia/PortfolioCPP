import React, { useEffect, useMemo, useRef, useState } from 'react';
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
  Youtube,
  Zap
} from 'lucide-react';

type ViewMode = 'skim' | 'deep';

const Resume = () => {
  const [activeSection, setActiveSection] = useState('impact');
  const [viewMode, setViewMode] = useState<ViewMode>('skim');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [lockFocus, setLockFocus] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const profile = {
    firstName: 'Sourabh',
    lastName: 'Dhalia',
    role: 'System Software Engineer | High-Performance C++',
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

  const renderFocusPanel = () => {
    if (activeSection === 'impact') {
      return (
        <div className="space-y-4">
          <div className="grid gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[var(--stroke)] bg-white/70 p-3">
                <div className="flex items-center justify-between">
                  <p className="font-display text-lg font-semibold text-[color:var(--accent-3)]">
                    {stat.value}
                  </p>
                  <span className="text-xs font-mono text-[color:var(--muted)]">{stat.meter}%</span>
                </div>
                <p className="text-xs text-[color:var(--muted)]">{stat.label}</p>
                <div className="mt-2 h-1.5 rounded-full bg-[var(--accent-soft)]">
                  <div
                    className="h-full rounded-full bg-[color:var(--accent-2)]"
                    style={{ width: `${stat.meter}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="grid gap-3">
            {principles.map((principle) => (
              <div key={principle.title} className="rounded-2xl border border-[var(--stroke)] bg-white/70 p-3">
                <p className="text-sm font-semibold text-[color:var(--ink)]">{principle.title}</p>
                <p className="text-xs text-[color:var(--muted)]">{principle.detail}</p>
              </div>
            ))}
          </div>
          {viewMode === 'deep' && (
            <div className="grid gap-3">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="rounded-2xl border border-[var(--stroke)] bg-white/70 p-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[color:var(--accent)]">
                        <Icon className="h-4 w-4" />
                      </span>
                      <p className="text-sm font-semibold text-[color:var(--ink)]">{pillar.title}</p>
                    </div>
                    <p className="mt-2 text-xs text-[color:var(--muted)]">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      );
    }

    if (activeSection === 'work') {
      const workItems = viewMode === 'skim' ? experienceHighlights.slice(0, 4) : experienceHighlights;
      return (
        <div className="space-y-3">
          {workItems.map((item, index) => (
            <div key={item.title} className="rounded-2xl border border-[var(--stroke)] bg-white/70 p-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[color:var(--ink)]">{item.title}</p>
                <span className="text-xs font-mono text-[color:var(--muted)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="mt-1 text-xs text-[color:var(--muted)]">
                {viewMode === 'skim' ? item.summary : item.detail}
              </p>
            </div>
          ))}
        </div>
      );
    }

    if (activeSection === 'projects') {
      return (
        <div className="space-y-3">
          {projects.map((project) => (
            <div key={project.title} className="rounded-2xl border border-[var(--stroke)] bg-white/70 p-3">
              <p className="text-sm font-semibold text-[color:var(--ink)]">{project.title}</p>
              <p className="mt-1 text-xs text-[color:var(--accent-3)]">{project.stack}</p>
              <p className="mt-2 text-xs text-[color:var(--muted)]">{project.summary}</p>
              {viewMode === 'deep' && (
                <ul className="mt-3 space-y-2 text-xs text-[color:var(--muted)]">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent-2)]" />
                      <span>{highlight}</span>
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
      return (
        <div className="space-y-3">
          {skills.map((skill) => (
            <div key={skill.label} className="rounded-2xl border border-[var(--stroke)] bg-white/70 p-3">
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
        <div className="space-y-3">
          <div className="rounded-2xl border border-[var(--stroke)] bg-white/70 p-3">
            <p className="text-sm font-semibold text-[color:var(--ink)]">Awards</p>
            <div className="mt-2 space-y-2">
              {awards.map((award) => (
                <div key={award.title} className="rounded-2xl border border-[var(--stroke)] bg-white/70 p-3">
                  <p className="text-sm font-semibold text-[color:var(--ink)]">{award.title}</p>
                  <p className="text-xs text-[color:var(--accent-3)]">{award.org}</p>
                  <p className="mt-1 text-xs text-[color:var(--muted)]">{award.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[var(--stroke)] bg-white/70 p-3">
            <p className="text-sm font-semibold text-[color:var(--ink)]">Education</p>
            <p className="mt-1 text-xs text-[color:var(--accent-3)]">{education.degree}</p>
            <p className="text-xs text-[color:var(--muted)]">{education.school}</p>
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
        <div className="space-y-3">
          <div className="rounded-2xl border border-[var(--stroke)] bg-white/70 p-3">
            <p className="text-sm font-semibold text-[color:var(--ink)]">Email</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-1 block text-xs text-[color:var(--accent-3)] hover:text-[color:var(--accent)]"
            >
              {profile.email}
            </a>
          </div>
          <div className="rounded-2xl border border-[var(--stroke)] bg-white/70 p-3">
            <p className="text-sm font-semibold text-[color:var(--ink)]">Location</p>
            <p className="mt-1 text-xs text-[color:var(--muted)]">{profile.location}</p>
          </div>
          <div className="flex flex-wrap gap-2">
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

html { scroll-behavior: smooth; }

.font-display { font-family: var(--font-display); }
.font-body { font-family: var(--font-body); }
.font-mono { font-family: var(--font-mono); }

.glass-panel {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.52));
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px) saturate(1.3);
}

.glass-soft {
  background: var(--surface);
  border: 1px solid var(--stroke);
  backdrop-filter: blur(14px) saturate(1.2);
}

.scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(28, 78, 128, 0.35) transparent;
}

.scrollbar::-webkit-scrollbar {
  width: 6px;
}

.scrollbar::-webkit-scrollbar-thumb {
  background: rgba(28, 78, 128, 0.35);
  border-radius: 999px;
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

      <div className="fixed left-0 right-0 top-0 z-50 h-1 bg-transparent">
        <div className="h-full bg-[var(--accent)] transition-all" style={{ width: `${scrollProgress}%` }} />
      </div>

      <div className="relative overflow-hidden bg-[color:var(--bg)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 right-[-120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,106,61,0.28),transparent_60%)] blur-3xl animate-float" />
          <div
            className="absolute left-[-160px] top-24 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(14,165,164,0.26),transparent_60%)] blur-3xl animate-float"
            style={{ animationDelay: '2s' }}
          />
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(11,26,36,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(11,26,36,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_center,rgba(14,165,164,0.2)_1px,transparent_1px)] [background-size:180px_180px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-12 lg:px-10">
          <header className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-3)] shadow-sm animate-rise">
                <Sparkles className="h-4 w-4 text-[color:var(--accent)]" />
                2026 systems portfolio
              </div>

              <div className="space-y-5 animate-rise" style={{ animationDelay: '120ms' }}>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[color:var(--accent-3)]">
                  {profile.role}
                </p>
                <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  {profile.firstName}{' '}
                  <span className="text-[color:var(--accent)]">{profile.lastName}</span>
                </h1>
                <p className="max-w-xl text-lg text-[color:var(--muted)]">{profile.tagline}</p>
              </div>

              <div className="flex flex-wrap gap-3 animate-rise" style={{ animationDelay: '240ms' }}>
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow)] transition-transform hover:-translate-y-0.5"
                >
                  <Mail className="h-4 w-4" />
                  Email
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-white/75 px-5 py-3 text-sm font-semibold text-[color:var(--accent-3)] transition-transform hover:-translate-y-0.5 hover:bg-white"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-white/75 px-5 py-3 text-sm font-semibold text-[color:var(--accent-3)] transition-transform hover:-translate-y-0.5 hover:bg-white"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={links.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-white/75 px-5 py-3 text-sm font-semibold text-[color:var(--accent-3)] transition-transform hover:-translate-y-0.5 hover:bg-white"
                >
                  <Youtube className="h-4 w-4" />
                  YouTube
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

              <div className="grid gap-3 md:grid-cols-2 animate-rise" style={{ animationDelay: '360ms' }}>
                {focusAreas.map((area) => {
                  const Icon = area.icon;
                  return (
                    <div key={area.title} className="glass-soft rounded-2xl p-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[var(--accent-2-soft)] text-[color:var(--accent-2)]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-[color:var(--ink)]">{area.title}</p>
                          <p className="text-xs text-[color:var(--muted)]">{area.detail}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-panel rounded-3xl p-6 animate-rise" style={{ animationDelay: '220ms' }}>
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent-3)]">System index</p>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--accent)]">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent-2)] shadow-[0_0_0_5px_rgba(14,165,164,0.18)]" />
                    Available 2026
                  </span>
                </div>

                <div className="mt-6 grid gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-[var(--stroke)] bg-white/70 p-4">
                      <div className="flex items-center justify-between">
                        <p className="font-display text-2xl font-semibold text-[color:var(--accent-3)]">
                          {stat.value}
                        </p>
                        <span className="text-xs font-mono text-[color:var(--muted)]">{stat.meter}%</span>
                      </div>
                      <p className="text-sm text-[color:var(--muted)]">{stat.label}</p>
                      <div className="mt-3 h-1.5 rounded-full bg-[var(--accent-soft)]">
                        <div
                          className="h-full rounded-full bg-[color:var(--accent-2)]"
                          style={{ width: `${stat.meter}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-panel rounded-3xl p-6 animate-rise" style={{ animationDelay: '320ms' }}>
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent-3)]">Graphics signal</p>
                  <span className="text-xs font-mono text-[color:var(--accent-3)]">GPU / IPC</span>
                </div>
                <div className="mt-4 rounded-2xl border border-[var(--stroke)] bg-white/70 p-4">
                  <svg viewBox="0 0 240 120" fill="none" className="h-28 w-full">
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

              <div className="glass-panel rounded-3xl p-6 animate-rise" style={{ animationDelay: '420ms' }}>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-2xl bg-[var(--accent-soft)]" />
                    <img
                      src={profile.photo}
                      alt={`${profile.firstName} ${profile.lastName}`}
                      className="relative h-16 w-16 rounded-2xl border border-[var(--stroke)] object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="font-display text-lg font-semibold">
                      {profile.firstName} {profile.lastName}
                    </p>
                    <p className="text-sm text-[color:var(--muted)]">{profile.role}</p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-[color:var(--accent-3)]">
                      <MapPin className="h-3.5 w-3.5" />
                      {profile.location}
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-[color:var(--muted)]">
                  <a href={`mailto:${profile.email}`} className="hover:text-[color:var(--accent)]">
                    {profile.email}
                  </a>
                </div>
              </div>
            </div>
          </header>

          <div className="mt-12 grid gap-8 lg:grid-cols-[320px_1fr]">
            <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
              <div className="glass-panel rounded-3xl p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-3)]">
                      {currentChapter.label}
                    </p>
                    <h3 className="font-display text-xl font-semibold">{currentChapter.title}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setLockFocus((prev) => !prev)}
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                      lockFocus
                        ? 'bg-[var(--accent)] text-white'
                        : 'bg-white/70 text-[color:var(--accent-3)]'
                    }`}
                  >
                    {lockFocus ? 'Locked' : 'Auto'}
                  </button>
                </div>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{currentChapter.summary}</p>

                <div className="mt-4 flex rounded-full border border-[var(--stroke)] bg-white/80 p-1">
                  {(['skim', 'deep'] as const).map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setViewMode(mode)}
                      className={`flex-1 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                        viewMode === mode
                          ? 'bg-[var(--accent)] text-white shadow-[var(--shadow)]'
                          : 'text-[color:var(--accent-3)] hover:text-[color:var(--accent)]'
                      }`}
                    >
                      {mode === 'skim' ? 'Skim' : 'Deep'}
                    </button>
                  ))}
                </div>

                <div className="mt-4 flex gap-2">
                  <button
                    type="button"
                    onClick={() => handleCycle('prev')}
                    className="flex-1 rounded-full border border-[var(--stroke)] bg-white/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-3)] hover:text-[color:var(--accent)]"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCycle('next')}
                    className="flex-1 rounded-full bg-[var(--accent)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
                  >
                    Next
                  </button>
                </div>
                <p className="mt-3 text-xs text-[color:var(--muted)]">
                  Use Prev/Next to browse without scrolling, or unlock Auto to sync with scroll.
                </p>

                <div className="mt-4 space-y-3">{renderFocusPanel()}</div>
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
                    href={`mailto:${profile.email}`}
                    className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[var(--shadow)] transition-transform hover:-translate-y-0.5"
                  >
                    Email
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href={githubPagesUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-3)] transition-transform hover:-translate-y-0.5"
                  >
                    Live site
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </aside>

            <div
              ref={scrollRef}
              className="scrollbar space-y-6 lg:h-[72vh] lg:overflow-y-auto lg:pr-2 lg:snap-y lg:snap-mandatory"
            >
              {chapterItems.map((chapter, index) => {
                const Icon = chapter.icon;
                return (
                  <section key={chapter.id} id={chapter.id} className="snap-start scroll-mt-24">
                    <div className="glass-panel min-h-[56vh] rounded-3xl p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--accent-2-soft)] text-[color:var(--accent-2)]">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-3)]">
                              {chapter.label}
                            </p>
                            <h3 className="font-display text-xl font-semibold">{chapter.title}</h3>
                          </div>
                        </div>
                        <span className="text-xs font-mono text-[color:var(--muted)]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <p className="mt-3 text-sm text-[color:var(--muted)]">{chapter.summary}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {chapter.chips.map((chip) => (
                          <span
                            key={chip}
                            className="rounded-full border border-[var(--stroke)] bg-white/70 px-3 py-1 text-xs font-mono text-[color:var(--accent-3)]"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 rounded-2xl border border-[var(--stroke)] bg-white/70 p-4 text-xs text-[color:var(--muted)]">
                        Details update in the Focus Deck on the left. Use Prev/Next to browse without scrolling.
                      </div>
                    </div>
                  </section>
                );
              })}
            </div>
          </div>

          <footer className="mt-16 text-center text-xs text-[color:var(--muted)] font-mono">
            Built for GitHub Pages. Crafted for 2026-ready systems portfolios.
          </footer>
        </div>
      </div>

      {showTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-[var(--accent)] px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[var(--shadow)] transition-transform hover:-translate-y-1"
        >
          Back to top
        </button>
      )}
    </div>
  );
};

export default Resume;
