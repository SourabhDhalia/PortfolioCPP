import React from 'react';
import { X, Download, ExternalLink } from 'lucide-react';
import { chapterItems, profile, links, experienceHighlights } from '../data';
import { motion, AnimatePresence } from 'framer-motion';

interface QuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuickViewModal = ({ isOpen, onClose }: QuickViewModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#e9eff5]/90 backdrop-blur-xl p-4 lg:p-12 overflow-y-auto"
      >
        <div className="relative w-full max-w-5xl bg-white shadow-2xl rounded-[32px] overflow-hidden flex flex-col max-h-full">
          <div className="flex items-center justify-between p-8 border-b border-gray-100 bg-white/50 backdrop-blur-sm sticky top-0 z-10">
            <div>
              <h2 className="text-2xl font-display font-bold text-[color:var(--ink)]">
                {profile.firstName} {profile.lastName}
              </h2>
              <p className="text-sm text-[color:var(--muted)] font-mono">{profile.role}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => window.print()}
                className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-xs font-bold uppercase tracking-wider hover:bg-gray-50 transition"
              >
                <Download className="w-4 h-4" />
                Print / PDF
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
          </div>

          <div className="overflow-y-auto p-8 lg:p-12 space-y-12">
            
            {/* Header Section */}
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                <p className="text-xl leading-relaxed text-[color:var(--ink)]">
                  {profile.tagline}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a href={links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)] hover:underline">
                    LinkedIn <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href={links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)] hover:underline">
                    GitHub <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)] hover:underline">
                    {profile.email} <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                 <h3 className="text-xs font-bold uppercase tracking-widest text-[color:var(--muted)] mb-4">Core Skills</h3>
                 <div className="flex flex-wrap gap-2">
                    {['C++17/20', 'Linux Systems', 'GPU Profiling', 'Device Automation', 'Unreal Engine', 'Python'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700">
                        {skill}
                      </span>
                    ))}
                 </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Experience Map - extracting from simple list for now, ideally would use data.ts structure better */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[color:var(--accent)] mb-8">Professional Experience</h3>
              <div className="grid gap-8">
                {experienceHighlights.map((exp, i) => (
                   <div key={i} className="group">
                      <div className="flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-8">
                        <h4 className="flex-1 text-lg font-bold text-[color:var(--ink)]">{exp.title}</h4>
                      </div>
                      <p className="mt-2 text-gray-600 leading-relaxed max-w-3xl">{exp.detail}</p>
                   </div>
                ))}
              </div>
            </div>

             <hr className="border-gray-100" />

             {/* Projects / Chapters Summary */}
             <div>
               <h3 className="text-sm font-bold uppercase tracking-widest text-[color:var(--accent)] mb-8">Detailed Expertise</h3>
               <div className="grid md:grid-cols-2 gap-6">
                  {chapterItems.filter(c => c.id !== 'contact').map(chapter => (
                    <div key={chapter.id} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 break-inside-avoid">
                      <div className="flex items-center gap-3 mb-3">
                        <chapter.icon className="w-5 h-5 text-[color:var(--accent-2)]" />
                        <h4 className="font-bold text-gray-900">{chapter.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{chapter.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        {chapter.chips.map(chip => (
                          <span key={chip} className="text-[10px] font-mono px-2 py-1 bg-white rounded border border-gray-200 text-gray-500">
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
               </div>
             </div>

          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuickViewModal;
