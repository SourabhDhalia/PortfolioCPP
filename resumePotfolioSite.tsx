import React from 'react';
import {
  ArrowUpRight,
  Award,
  Briefcase,
  Code,
  Cpu,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
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
    { id: 'impact', label: 'Impact' },
    { id: 'work', label: 'Work' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Toolbox' },
    { id: 'recognition', label: 'Recognition' },
    { id: 'contact', label: 'Contact' }
  ];

  const stats = [
    { value: '70%', label: 'Boot latency reduction' },
    { value: '800+', label: 'Memory violations resolved' },
    { value: '9 yrs', label: 'Legacy OS compatibility' },
    { value: 'Global', label: 'Device automation footprint' }
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
      description:
        'Developed AI behavior trees and state-machine logic in C++ and Blueprints, with exposure to OpenGL, image compression, and video processing.'
    },
    {
      title: 'GenAI Linux Server & RAG Pipeline',
      stack: 'Linux, LLMs, Python',
      description:
        'Configured and secured a remote Linux server to host LLMs via SSH, and built a RAG pipeline for context-aware querying over local technical documentation.'
    }
  ];

  const skills = [
    {
      label: 'Languages',
      items: 'C++ (11/14/17, STL), C, Python, C#, JavaScript, Shell Scripting'
    },
    {
      label: 'System & OS',
      items:
        'Linux system programming, Tizen OS, IPC (shared memory, sockets, RPC), multithreading (pthreads, GMainLoop), synchronization, memory management (corruption, leaks)'
    },
    {
      label: 'Graphics & GPU',
      items: 'OpenGL ES, EGL, GPU profiling (Streamline, PVRTune), shader optimization, Unreal Engine'
    },
    {
      label: 'Tools & Networking',
      items: 'CMake, GCC/GDB, Valgrind, ASAN, Git, Perforce, MQTT v5, TCP/IP, REST'
    },
    {
      label: 'Emerging Tech',
      items: 'GenAI, LLMs (Ollama), RAG, model fine-tuning'
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
    focus:
      'Key Courses: C++, Data Structures & Algorithms, Operating Systems, Object-Oriented Programming, Computer Networks, DBMS',
    cgpa: '8.1'
  };

  const rootStyle = {
    '--paper': '#f6f1e8',
    '--ink': '#0b1a24',
    '--muted': '#52606d',
    '--accent': '#f26b3a',
    '--accent-soft': 'rgba(242, 107, 58, 0.12)',
    '--accent-2': '#0ea5a4',
    '--accent-2-soft': 'rgba(14, 165, 164, 0.12)',
    '--accent-3': '#1c4966',
    '--panel': 'rgba(255, 255, 255, 0.82)',
    '--panel-strong': '#ffffff',
    '--stroke': 'rgba(15, 30, 44, 0.12)',
    '--shadow': '0 28px 60px rgba(11, 26, 36, 0.16)',
    '--font-display': "'Space Grotesk', sans-serif",
    '--font-body': "'Manrope', sans-serif",
    '--font-mono': "'IBM Plex Mono', monospace"
  } as React.CSSProperties;

  const stagger = (index: number): React.CSSProperties => ({
    animationDelay: `${index * 120}ms`
  });

  return (
    <div className="min-h-screen font-body text-[color:var(--ink)]" style={rootStyle}>
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Manrope:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');

.font-display { font-family: var(--font-display); }
.font-body { font-family: var(--font-body); }
.font-mono { font-family: var(--font-mono); }

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

.animate-rise { animation: rise 0.8s ease-out both; }
.animate-float { animation: float 9s ease-in-out infinite; }
.animate-sweep { animation: sweep 0.8s ease-out both; }

@media (prefers-reduced-motion: reduce) {
  .animate-rise,
  .animate-float,
  .animate-sweep {
    animation: none;
  }
}
      `}</style>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-[-120px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(242,107,58,0.32),transparent_60%)] blur-3xl animate-float" />
          <div
            className="absolute right-[-160px] top-12 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle_at_center,rgba(14,165,164,0.28),transparent_60%)] blur-3xl animate-float"
            style={{ animationDelay: '1.8s' }}
          />
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(12,24,35,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(12,24,35,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-16 lg:px-10">
          <header className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-3)] shadow-sm animate-rise">
                <Sparkles className="h-4 w-4 text-[var(--accent)]" />
                2026 systems portfolio
              </div>

              <div className="space-y-4 animate-rise" style={stagger(1)}>
                <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[color:var(--accent-3)]">
                  {profile.role}
                </p>
                <h1 className="font-display text-4xl font-semibold sm:text-5xl lg:text-6xl">
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

              <div className="flex flex-wrap gap-2 animate-rise" style={stagger(3)}>
                {['C++17/20', 'Embedded Linux', 'GPU profiling', 'Device automation', 'IPC + MQTT'].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--stroke)] bg-white/70 px-3 py-1 text-xs font-mono text-[color:var(--accent-3)]"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <div
              className="rounded-3xl border border-[var(--stroke)] bg-[var(--panel)] p-6 shadow-[var(--shadow)] backdrop-blur animate-rise"
              style={stagger(2)}
            >
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent-3)]">Impact</p>
                <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--accent)]">
                  2026 ready
                </span>
              </div>

              <div className="mt-6 grid gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-[var(--stroke)] bg-white/75 p-4"
                  >
                    <p className="font-display text-2xl font-semibold text-[color:var(--accent-3)]">
                      {stat.value}
                    </p>
                    <p className="text-sm text-[color:var(--muted)]">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4 rounded-2xl border border-[var(--stroke)] bg-white/75 p-4">
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
                  <p className="text-sm font-semibold text-[color:var(--accent-3)]">
                    {profile.firstName} {profile.lastName}
                  </p>
                  <p className="text-xs text-[color:var(--muted)]">{profile.role}</p>
                </div>
              </div>

              <div className="mt-6 space-y-3 rounded-2xl border border-[var(--stroke)] bg-white/75 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-[color:var(--accent-3)]">
                  <Briefcase className="h-4 w-4" />
                  Samsung R&D Institute
                </div>
                <p className="text-sm text-[color:var(--muted)]">
                  Core Software Engineer | 01/2024 - Present
                </p>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
                  { icon: MapPin, label: profile.location }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-3 text-sm text-[color:var(--muted)]">
                      <Icon className="h-4 w-4 text-[color:var(--accent-3)]" />
                      {item.href ? (
                        <a href={item.href} className="hover:text-[color:var(--accent-3)]">
                          {item.label}
                        </a>
                      ) : (
                        <span>{item.label}</span>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-3)]">
                  Online
                </p>
                <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-3)]">
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
                    href={links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[color:var(--accent)]"
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub
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

              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href={githubPagesUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-3)] transition-transform hover:-translate-y-0.5 hover:bg-white"
                >
                  GitHub Pages
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </header>

          <nav className="sticky top-6 z-20 mt-12 flex flex-wrap gap-3 rounded-full border border-[var(--stroke)] bg-white/80 px-4 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--accent-3)] shadow-sm backdrop-blur animate-sweep">
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

          <section id="impact" className="mt-20 space-y-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-3)]">
                  Engineering focus
                </p>
                <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                  Systems you can trust at scale
                </h2>
              </div>
              <span className="font-mono text-xs text-[color:var(--accent-3)]">
                C++17/20 | Linux | GPU | Automation
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="rounded-3xl border border-[var(--stroke)] bg-[var(--panel)] p-6 shadow-[var(--shadow)] backdrop-blur animate-rise"
                    style={stagger(index)}
                  >
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
          </section>

          <section id="work" className="mt-20">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-3)]">
                  Experience
                </p>
                <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                  High-performance platforms for global devices
                </h2>
                <p className="text-[color:var(--muted)]">
                  Leading platform initiatives across embedded Linux, GPU tooling, and automation
                  for mission-critical device fleets.
                </p>
                <div className="rounded-2xl border border-[var(--stroke)] bg-white/80 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[color:var(--accent-3)]">
                  <Briefcase className="h-4 w-4" />
                  Samsung R&D Institute
                </div>
                <p className="text-sm text-[color:var(--muted)]">
                  Core Software Engineer | Noida, India | 01/2024 - Present
                </p>
              </div>
              </div>

              <div className="space-y-4">
                {experienceHighlights.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-[var(--stroke)] bg-[var(--panel)] p-5 shadow-[var(--shadow)] backdrop-blur animate-rise"
                    style={stagger(index)}
                  >
                    <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-[color:var(--muted)]">{item.detail}</p>
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
                <div
                  key={project.title}
                  className="group rounded-3xl border border-[var(--stroke)] bg-[var(--panel)] p-6 shadow-[var(--shadow)] backdrop-blur transition-transform hover:-translate-y-1 animate-rise"
                  style={stagger(index)}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--accent-2-soft)] text-[color:var(--accent-2)]">
                      <Cpu className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                  </div>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-3)]">
                    {project.stack}
                  </p>
                  <p className="mt-3 text-sm text-[color:var(--muted)]">{project.description}</p>
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

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, index) => (
                <div
                  key={skill.label}
                  className="rounded-3xl border border-[var(--stroke)] bg-[var(--panel)] p-6 shadow-[var(--shadow)] backdrop-blur animate-rise"
                  style={stagger(index)}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[color:var(--accent)]">
                      <Code className="h-4 w-4" />
                    </span>
                    <h3 className="font-display text-lg font-semibold">{skill.label}</h3>
                  </div>
                  <p className="mt-3 text-sm text-[color:var(--muted)]">{skill.items}</p>
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

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="space-y-4 rounded-3xl border border-[var(--stroke)] bg-[var(--panel)] p-6 shadow-[var(--shadow)] backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-3)]">
                  <Award className="h-4 w-4 text-[color:var(--accent)]" />
                  Awards
                </div>
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

              <div className="rounded-3xl border border-[var(--stroke)] bg-[var(--panel)] p-6 shadow-[var(--shadow)] backdrop-blur">
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
                  <p className="mt-3 text-sm text-[color:var(--muted)]">{education.focus}</p>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="mt-20">
            <div className="rounded-3xl border border-[var(--stroke)] bg-[var(--panel)] p-8 shadow-[var(--shadow)] backdrop-blur">
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
                    href={githubPagesUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-white/80 px-5 py-3 text-sm font-semibold text-[color:var(--accent-3)] transition-transform hover:-translate-y-0.5 hover:bg-white"
                  >
                    View GitHub Pages
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <footer className="mt-16 text-center text-xs text-[color:var(--muted)]">
            Built for GitHub Pages, optimized for modern 2026 portfolio standards.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Resume;
