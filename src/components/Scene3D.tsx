import React, { Suspense, lazy, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/* ================================================================
   SIMPLE ANIMATED BACKGROUND - CSS ONLY FALLBACK
   ================================================================ */

const SimpleBackground = () => (
    <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]" />

        {/* Animated orbs using CSS */}
        <motion.div
            className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-30"
            style={{ background: 'radial-gradient(circle, #ff6b35 0%, transparent 70%)' }}
            animate={{
                x: ['-10%', '5%', '-10%'],
                y: ['-20%', '-10%', '-20%'],
                scale: [1, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            initial={{ top: '-10%', right: '-5%' }}
        />
        <motion.div
            className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-25"
            style={{ background: 'radial-gradient(circle, #00d4aa 0%, transparent 70%)' }}
            animate={{
                x: ['0%', '10%', '0%'],
                y: ['0%', '-10%', '0%'],
                scale: [1, 0.9, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            initial={{ bottom: '-15%', left: '-10%' }}
        />
        <motion.div
            className="absolute w-[300px] h-[300px] rounded-full blur-[80px] opacity-20"
            style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }}
            animate={{
                x: ['-5%', '5%', '-5%'],
                y: ['0%', '5%', '0%'],
                scale: [0.9, 1.1, 0.9],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
            initial={{ top: '40%', left: '25%' }}
        />

        {/* Grid overlay */}
        <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
                backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
                backgroundSize: '50px 50px'
            }}
        />

        {/* Noise texture overlay */}
        <div
            className="absolute inset-0 opacity-[0.4] mix-blend-soft-light pointer-events-none"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
            }}
        />
    </div>
);

/* ================================================================
   SCENE COMPONENT WITH FALLBACK
   ================================================================ */
interface Scene3DProps {
    activeSection: number;
}

const Scene3D = ({ activeSection }: Scene3DProps) => {
    // Use simple CSS background - more reliable and still looks great
    return <SimpleBackground />;
};

export default Scene3D;
