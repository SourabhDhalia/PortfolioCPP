import React from 'react';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Youtube
} from 'lucide-react';
import { profile, links, stats, focusAreas } from '../data';

const Header = () => {
  const githubPagesUrl = `https://${links.githubUsername}.github.io/${links.repoName}`;
  return (
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
  );
};

export default Header;
