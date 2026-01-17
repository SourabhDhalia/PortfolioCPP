import {
  Award,
  Briefcase,
  Code,
  Cpu,
  Gauge,
  Mail,
  Network,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap
} from 'lucide-react';

export const profile = {
    firstName: 'Sourabh',
    lastName: 'Dhalia',
    role: 'System Software Engineer | High-Performance C++',
    tagline:
      'System Software Engineer specializing in high-performance C++, embedded Linux, and graphics pipelines. Built automation daemons/services consumed by YouTube, Netflix, and Amazon for critical performance validation and content pipeline validation. Reduced system boot latency by 70% through optimization. Expert in modern C++, memory management, multithreading, IPC, and GPU profiling (ARM/RISC-V Streamline, PVRTune).',
    photo: 'https://avatars.githubusercontent.com/SourabhDhalia',
    location: 'Noida, India',
    email: 'sdhalia.007@gmail.com'
  };

  export const links = {
    github: 'https://github.com/SourabhDhalia',
    linkedin: 'https://www.linkedin.com/in/sourabhdhalia/',
    youtube: 'https://www.youtube.com/@sourabhdhalia',
    githubUsername: 'SourabhDhalia',
    repoName: 'PortfolioCPP'
  };

  export const stats = [
    { value: '70%', label: 'Boot latency reduction', meter: 70 },
    { value: '800+', label: 'Memory violations resolved', meter: 88 },
    { value: '9 yrs', label: 'Legacy OS compatibility', meter: 80 },
    { value: 'Global', label: 'Device automation footprint', meter: 76 }
  ];

  export const focusAreas = [
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

  export const principles = [
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

  export const pillars = [
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

  export const experienceHighlights = [
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

  export const projects = [
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

  export const skills = [
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

  export const awards = [
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

  export const education = {
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

  export const chapterItems = 
    [
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
    ];
