import React from 'react';
import {
  ArrowUpRight,
  Award,
  Briefcase,
  Code,
  Cpu,
  Gauge,
  Github,
  GraduationCap,
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

const Resume = () => {
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

  const navItems = [
    { id: 'impact', label: 'Capability' },
    { id: 'work', label: 'Work' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Toolbox' },
    { id: 'recognition', label: 'Recognition' },
    { id: 'contact', label: 'Contact' }
  ];

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
      detail:
        'Owned and engineered a privileged daemon enabling remote device orchestration. Exposed access-controlled control of OS subsystems (HAL, Input, Power) to support stability, stress, and media playback/content-pipeline validation for YouTube, Netflix, Amazon, and TVPlus.'
    },
    {
      title: 'UI Manager Performance',
      detail:
        'Optimized a platform UI resource/config service by refactoring core APIs, adding LRU caching, improving memory allocation reuse, and replacing high-cost syscalls via syscall/page-fault profiling. Reduced system boot latency by 70% and minimized page faults.'
    },
    {
      title: 'Concurrency & Modern C++',
      detail:
        'Re-architected core API using C++17 RAII and design patterns. Eliminated race conditions/deadlocks with thread-safe GMainLoop async event handling.'
    },
    {
      title: 'OTA Firmware Hot-Patcher',
      detail:
        'Developed a standalone C++ OTA updater to patch platform modules without full firmware rebuilds. Implemented CRC validation, atomic file swapping, and automated rollback, reducing build-verify cycles by 70%.'
    },
    {
      title: 'Memory Safety & Linux Systems',
      detail:
        'Resolved 800+ memory violations (leaks/corruption) by integrating ASAN, Valgrind, and GDB into CI workflow. Backported critical system services to support 9 years of legacy Tizen OS versions.'
    },
    {
      title: 'Cloud-to-IPC Protocol Bridge',
      detail:
        'Built a secure C++ bridge linking external cloud microservices to isolated internal TV hardware. Orchestrated bidirectional control flow via MQTT v5.'
    },
    {
      title: 'Cross-Architecture Graphics Porting (RISC-V to ARM)',
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

  const rootStyle = {
    '--bg': '#f4f2ee',
    '--ink': '#0b1a24',
    '--muted': '#465865',
    '--accent': '#ff6a3d',
    '--accent-soft': 'rgba(255, 106, 61, 0.18)',
    '--accent-2': '#0ea5a4',
    '--accent-2-soft': 'rgba(14, 165, 164, 0.16)',
    '--accent-3': '#1c4e80',
    '--accent-3-soft': 'rgba(28, 78, 128, 0.12)',
    '--surface': 'rgba(255, 255, 255, 0.86)',
    '--surface-strong': '#ffffff',
    '--stroke': 'rgba(11, 26, 36, 0.12)',
    '--shadow': '0 30px 80px rgba(11, 26, 36, 0.16)',
    '--font-display': "'Sora', sans-serif",
    '--font-body': "'Plus Jakarta Sans', sans-serif",
    '--font-mono': "'JetBrains Mono', monospace"
  } as React.CSSProperties;

  const stagger = (index: number): React.CSSProperties => ({
    animationDelay: `${index * 120}ms`
  });

  return (
    <div className="min-h-screen font-body text-[color:var(--ink)]" style={rootStyle}>
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Sora:wght@400;600;700&display=swap');

.font-display { font-family: var(--font-display); }
.font-body { font-family: var(--font-body); }
.font-mono { font-family: var(--font-mono); }

.panel {
  background: var(--surface);
  border: 1px solid var(--stroke);
  box-shadow: var(--shadow);
  backdrop-filter: blur(16px);
}

.panel-strong {
  background: var(--surface-strong);
}

.status-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background: var(--accent-2);
  box-shadow: 0 0 0 4px var(--accent-2-soft);
  animation: pulse 2.4s ease-in-out infinite;
}

.timeline-dot {
  box-shadow: 0 0 0 6px var(--accent-soft);
}

@keyframes rise {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

@keyframes sweep {
  from { opacity: 0; transform: translateX(-18px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.12); opacity: 1; }
}

.animate-rise { animation: rise 0.8s ease-out both; }
.animate-float { animation: float 9s ease-in-out infinite; }
.animate-sweep { animation: sweep 0.8s ease-out both; }

@media (prefers-reduced-motion: reduce) {
  .animate-rise,
  .animate-float,
  .animate-sweep,
  .status-dot {
    animation: none;
  }
}
      `}</style>

      <div className="relative overflow-hidden bg-[color:var(--bg)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 right-[-120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,106,61,0.32),transparent_60%)] blur-3xl animate-float" />
          <div
            className="absolute left-[-160px] top-24 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(14,165,164,0.28),transparent_60%)] blur-3xl animate-float"
            style={{ animationDelay: '2s' }}
          />
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(11,26,36,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(11,26,36,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />
          <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_center,rgba(14,165,164,0.2)_1px,transparent_1px)] [background-size:180px_180px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-14 lg:px-10">
          <header className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-3)] shadow-sm animate-rise">
                <Sparkles className="h-4 w-4 text-[color:var(--accent)]" />
                2026 systems portfolio
              </div>

              <div className="space-y-5 animate-rise" style={stagger(1)}>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[color:var(--accent-3)]">
                  {profile.role}
                </p>
                <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  {profile.firstName}{' '}
                  <span className="text-[color:var(--accent)]">{profile.lastName}</span>
                </h1>
                <p className="max-w-xl text-lg text-[color:var(--muted)]">{profile.tagline}</p>
              </div>

              <div className="flex flex-wrap gap-3 animate-rise" style={stagger(2)}>
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
                  className="group inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-white/80 px-5 py-3 text-sm font-semibold text-[color:var(--accent-3)] transition-transform hover:-translate-y-0.5 hover:bg-white"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-white/80 px-5 py-3 text-sm font-semibold text-[color:var(--accent-3)] transition-transform hover:-translate-y-0.5 hover:bg-white"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={links.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-white/80 px-5 py-3 text-sm font-semibold text-[color:var(--accent-3)] transition-transform hover:-translate-y-0.5 hover:bg-white"
                >
                  <Youtube className="h-4 w-4" />
                  YouTube
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

              <div className="grid gap-3 md:grid-cols-2 animate-rise" style={stagger(3)}>
                {focusAreas.map((area) => {
                  const Icon = area.icon;
                  return (
                    <div key={area.title} className="panel rounded-2xl p-4">
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
              <div className="panel rounded-3xl p-6 animate-rise" style={stagger(2)}>
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent-3)]">System index</p>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--accent)]">
                    <span className="status-dot" />
                    Available 2026
                  </span>
                </div>

                <div className="mt-6 grid gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-[var(--stroke)] bg-white/75 p-4">
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

              <div className="panel rounded-3xl p-6 animate-rise" style={stagger(3)}>
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

                <div className="mt-4 space-y-3 text-sm text-[color:var(--muted)]">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-[color:var(--accent-3)]" />
                    <a href={`mailto:${profile.email}`} className="hover:text-[color:var(--accent-3)]">
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-3)]">
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[color:var(--accent)]"
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[color:var(--accent)]"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                    LinkedIn
                  </a>
                  <a
                    href={links.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[color:var(--accent)]"
                  >
                    <Youtube className="h-3.5 w-3.5" />
                    YouTube
                  </a>
                </div>
              </div>

              <div className="panel rounded-3xl p-6 animate-rise" style={stagger(4)}>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-3)]">
                  <Terminal className="h-4 w-4 text-[color:var(--accent)]" />
                  Quick actions
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={githubPagesUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[var(--shadow)] transition-transform hover:-translate-y-0.5"
                  >
                    Live site
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-3)] transition-transform hover:-translate-y-0.5"
                  >
                    Repo
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </header>

          <nav className="sticky top-6 z-20 mt-12 flex flex-wrap gap-2 rounded-full border border-[var(--stroke)] bg-white/80 px-4 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--accent-3)] shadow-sm backdrop-blur animate-sweep">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full px-3 py-2 transition hover:bg-white hover:text-[color:var(--accent)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <section id="impact" className="mt-20 space-y-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-3)]">
                  Capability
                </p>
                <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                  Systems you can trust at scale
                </h2>
              </div>
              <span className="font-mono text-xs text-[color:var(--accent-3)]">
                C++17/20 | Linux | GPU | Automation
              </span>
            </div>

            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-4">
                <p className="text-[color:var(--muted)]">
                  Systems engineering with obsessive profiling, secure automation, and hardware-level empathy. I design
                  platform services that stay fast, safe, and observable under real device load.
                </p>
                <div className="space-y-3">
                  {principles.map((principle) => (
                    <div key={principle.title} className="panel rounded-2xl p-4">
                      <p className="text-sm font-semibold text-[color:var(--ink)]">{principle.title}</p>
                      <p className="text-xs text-[color:var(--muted)]">{principle.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {pillars.map((pillar, index) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={pillar.title} className="panel rounded-3xl p-6 animate-rise" style={stagger(index)}>
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[color:var(--accent)]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="font-display text-lg font-semibold">{pillar.title}</h3>
                      </div>
                      <p className="mt-3 text-sm text-[color:var(--muted)]">{pillar.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="work" className="mt-20">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-3)]">
                  Experience
                </p>
                <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                  High-performance platforms for global devices
                </h2>
                <p className="text-[color:var(--muted)]">
                  Leading platform initiatives across embedded Linux, GPU tooling, and automation for
                  mission-critical device fleets.
                </p>
                <div className="panel rounded-3xl p-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[color:var(--accent-3)]">
                    <Briefcase className="h-4 w-4" />
                    Samsung R&D Institute
                  </div>
                  <p className="text-sm text-[color:var(--muted)]">
                    Core Software Engineer | Noida, India | 01/2024 - Present
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['Embedded Linux', 'C++17', 'MQTT', 'Automation', 'GPU Profiling'].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--stroke)] bg-white/70 px-3 py-1 text-xs font-mono text-[color:var(--accent-3)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative space-y-6">
                <div className="absolute left-3 top-3 h-full w-px bg-[var(--stroke)]" />
                {experienceHighlights.map((item, index) => (
                  <div key={item.title} className="relative pl-10">
                    <div className="timeline-dot absolute left-1.5 top-2 h-3.5 w-3.5 rounded-full bg-[var(--accent)]" />
                    <div className="panel rounded-3xl p-5">
                      <div className="flex items-center justify-between">
                        <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                        <span className="font-mono text-xs text-[color:var(--muted)]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-[color:var(--muted)]">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="mt-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-3)]">
                  Projects
                </p>
                <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                  Hands-on builds beyond the day job
                </h2>
              </div>
              <span className="font-mono text-xs text-[color:var(--accent-3)]">
                C++ | AI | Real-time systems
              </span>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {projects.map((project, index) => (
                <div key={project.title} className="panel rounded-3xl p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--accent-2-soft)] text-[color:var(--accent-2)]">
                        <Cpu className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                    </div>
                    <span className="text-xs font-mono text-[color:var(--muted)]">Case {index + 1}</span>
                  </div>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-3)]">
                    {project.stack}
                  </p>
                  <p className="mt-3 text-sm text-[color:var(--muted)]">{project.summary}</p>
                  <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-2)]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="skills" className="mt-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-3)]">
                  Toolbox
                </p>
                <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                  The stack behind the systems
                </h2>
              </div>
              <span className="font-mono text-xs text-[color:var(--accent-3)]">
                Platforms, tooling, and emerging tech
              </span>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill.label} className="panel rounded-3xl p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[color:var(--accent)]">
                      <Code className="h-4 w-4" />
                    </span>
                    <h3 className="font-display text-lg font-semibold">{skill.label}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--stroke)] bg-white/70 px-3 py-1 text-xs font-mono text-[color:var(--accent-3)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="recognition" className="mt-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-3)]">
                  Recognition
                </p>
                <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                  Awards and academic foundation
                </h2>
              </div>
              <span className="font-mono text-xs text-[color:var(--accent-3)]">
                Leadership and excellence
              </span>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="panel rounded-3xl p-6">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-3)]">
                  <Award className="h-4 w-4 text-[color:var(--accent)]" />
                  Awards
                </div>
                <div className="mt-4 space-y-4">
                  {awards.map((award) => (
                    <div key={award.title} className="rounded-2xl border border-[var(--stroke)] bg-white/80 p-4">
                      <h3 className="font-display text-lg font-semibold">{award.title}</h3>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-3)]">
                        {award.org}
                      </p>
                      <p className="mt-2 text-sm text-[color:var(--muted)]">{award.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="panel rounded-3xl p-6">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-3)]">
                  <GraduationCap className="h-4 w-4 text-[color:var(--accent)]" />
                  Education
                </div>
                <div className="mt-4 rounded-2xl border border-[var(--stroke)] bg-white/80 p-5">
                  <h3 className="font-display text-lg font-semibold">{education.degree}</h3>
                  <p className="text-sm text-[color:var(--accent-3)]">{education.school}</p>
                  <p className="text-sm text-[color:var(--muted)]">
                    {education.location} | {education.period}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-[color:var(--accent-3)]">
                    <span className="font-mono">CGPA</span>
                    <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-[color:var(--accent)]">
                      {education.cgpa}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {education.courses.map((course) => (
                      <span
                        key={course}
                        className="rounded-full border border-[var(--stroke)] bg-white/70 px-3 py-1 text-xs font-mono text-[color:var(--accent-3)]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="mt-20">
            <div className="rounded-3xl bg-gradient-to-br from-[var(--accent-2-soft)] via-transparent to-[var(--accent-soft)] p-[1px]">
              <div className="panel rounded-3xl p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-3)]">
                      Let's build
                    </p>
                    <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                      Ready for high-stakes systems work
                    </h2>
                    <p className="mt-2 text-sm text-[color:var(--muted)]">
                      Reach out for platform engineering, embedded systems, or performance-critical C++ roles.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`mailto:${profile.email}`}
                      className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow)] transition-transform hover:-translate-y-0.5"
                    >
                      <Mail className="h-4 w-4" />
                      Start a conversation
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                    <a
                      href={links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-white/80 px-5 py-3 text-sm font-semibold text-[color:var(--accent-3)] transition-transform hover:-translate-y-0.5 hover:bg-white"
                    >
                      LinkedIn
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="mt-16 text-center text-xs text-[color:var(--muted)] font-mono">
            Built for GitHub Pages. Crafted for 2026-ready systems portfolios.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Resume;
