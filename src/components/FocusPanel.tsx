import React from 'react';
import {
  stats,
  principles,
  pillars,
  experienceHighlights,
  projects,
  skills,
  awards,
  education,
  profile,
  links
} from '../data';

type ViewMode = 'skim' | 'deep';

interface FocusPanelProps {
  activeSection: string;
  viewMode: ViewMode;
}

const FocusPanel = ({ activeSection, viewMode }: FocusPanelProps) => {
  const githubPagesUrl = `https://${links.githubUsername}.github.io/${links.repoName}`;

  if (activeSection === 'impact') {
    return (
      <div className="space-y-4 animate-fade-in" key="impact">
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
      <div className="space-y-3 animate-fade-in" key="work">
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
      <div className="space-y-3 animate-fade-in" key="projects">
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
      <div className="space-y-3 animate-fade-in" key="skills">
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
      <div className="space-y-3 animate-fade-in" key="recognition">
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
      <div className="space-y-3 animate-fade-in" key="contact">
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


export default FocusPanel;
