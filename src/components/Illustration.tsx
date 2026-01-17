import React from 'react';
import { motion } from 'framer-motion';

interface IllustrationProps {
  width?: number;
  height?: number;
  className?: string;
}

const Illustration = ({ width = 200, height = 150, className }: IllustrationProps) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width, height }}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-soft)] to-[var(--accent-2-soft)] rounded-2xl blur-xl opacity-60"
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [0.9, 1.05, 0.9] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="relative z-10 drop-shadow-lg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width={width} height={height} rx="16" fill="rgba(255, 255, 255, 0.4)" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />

        {/* Abstract Data Flow Lines */}
        <path d={`M${width * 0.2} ${height * 0.5} C ${width * 0.4} ${height * 0.2}, ${width * 0.6} ${height * 0.8}, ${width * 0.8} ${height * 0.5}`}
          stroke="var(--accent)" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.8" />
        <path d={`M${width * 0.2} ${height * 0.6} C ${width * 0.4} ${height * 0.9}, ${width * 0.6} ${height * 0.3}, ${width * 0.8} ${height * 0.6}`}
          stroke="var(--accent-2)" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.8" />

        <circle cx={width * 0.2} cy={height * 0.5} r="4" fill="var(--accent)" />
        <circle cx={width * 0.8} cy={height * 0.5} r="4" fill="var(--accent)" />
        <circle cx={width * 0.5} cy={height * 0.5} r="20" fill="url(#grad1)" fillOpacity="0.2" />

        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Illustration;
