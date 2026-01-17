import React from 'react';
import { chapterItems } from '../data';
import { ArrowUpRight } from 'lucide-react';

interface NavButtonsProps {
  activeSection: string;
  handleNavClick: (id: string) => void;
}

const NavButtons = ({ activeSection, handleNavClick }: NavButtonsProps) => {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      {chapterItems.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => handleNavClick(item.id)}
          className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
            activeSection === item.id
              ? 'bg-[var(--accent)] text-white shadow-[var(--shadow)]'
              : 'border border-[var(--stroke)] bg-white/75 text-[color:var(--accent-3)] hover:bg-white hover:text-[color:var(--accent)] hover:shadow-lg'
          }`}
        >
          {item.label}
          {activeSection === item.id && <ArrowUpRight className="h-5 w-5" />}
        </button>
      ))}
    </div>
  );
};

export default NavButtons;
