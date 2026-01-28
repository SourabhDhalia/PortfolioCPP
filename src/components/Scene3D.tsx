import React, { Suspense, lazy, useState, useEffect } from 'react';


/* ================================================================
   SIMPLE ANIMATED BACKGROUND - CSS ONLY FALLBACK
   ================================================================ */

const SimpleBackground = () => (
    <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]" />

        {/* Animated orbs - optimized with will-change and reduced blur */}
        {/* Animated orbs - optimized with CSS animations, reduced flicker */}
        <div
            className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-25 animate-float-slower"
            style={{
                background: 'radial-gradient(circle, #ff6b35 0%, transparent 70%)',
                top: '-10%',
                right: '-5%',
                willChange: 'transform'
            }}
        />
        <div
            className="absolute w-[400px] h-[400px] rounded-full blur-[60px] opacity-20 animate-float-slow"
            style={{
                background: 'radial-gradient(circle, #00d4aa 0%, transparent 70%)',
                bottom: '-15%',
                left: '-10%',
                willChange: 'transform'
            }}
        />
        <div
            className="absolute w-[300px] h-[300px] rounded-full blur-[50px] opacity-15 animate-float-slowest"
            style={{
                background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
                top: '40%',
                left: '25%',
                willChange: 'transform'
            }}
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
            className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
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
