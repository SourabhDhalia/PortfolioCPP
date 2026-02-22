import React, { useEffect, useRef, useCallback } from 'react';

/* ================================================================
   CONSTELLATION PARTICLE NETWORK
   A performant, canvas-based animated background with:
   - Floating particles (nodes) with subtle glow
   - Dynamic connections between nearby particles
   - Mouse interaction (particles gravitate toward cursor)
   - Theme-aware colors (dark/light)
   - requestAnimationFrame with cleanup
   ================================================================ */

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    opacity: number;
    pulse: number;
    pulseSpeed: number;
}

const PARTICLE_COUNT = 60;
const CONNECTION_DISTANCE = 150;
const MOUSE_RADIUS = 200;
const MOUSE_STRENGTH = 0.02;

const ConstellationBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const animFrameRef = useRef<number>(0);
    const resizeObserverRef = useRef<ResizeObserver | null>(null);

    const initParticles = useCallback((width: number, height: number) => {
        const particles: Particle[] = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                radius: Math.random() * 2.5 + 1,
                opacity: Math.random() * 0.5 + 0.3,
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: Math.random() * 0.02 + 0.01,
            });
        }
        particlesRef.current = particles;
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        // Set canvas size
        const setSize = () => {
            const dpr = Math.min(window.devicePixelRatio, 2);
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);

            if (particlesRef.current.length === 0) {
                initParticles(window.innerWidth, window.innerHeight);
            }
        };

        setSize();

        // Resize observer for canvas
        resizeObserverRef.current = new ResizeObserver(() => {
            setSize();
        });
        resizeObserverRef.current.observe(document.body);

        // Mouse tracking
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        const handleMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

        // Get theme-aware colors
        const getColors = () => {
            const isLight = document.documentElement.classList.contains('light');
            return {
                particle: isLight ? 'rgba(232, 93, 42,' : 'rgba(255, 107, 53,',
                particleAlt: isLight ? 'rgba(0, 158, 126,' : 'rgba(0, 212, 170,',
                particleAccent: isLight ? 'rgba(85, 88, 232,' : 'rgba(99, 102, 241,',
                connection: isLight ? 'rgba(26, 22, 21,' : 'rgba(255, 255, 255,',
            };
        };

        // Animation loop
        const animate = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            const particles = particlesRef.current;
            const mouse = mouseRef.current;
            const colors = getColors();

            ctx.clearRect(0, 0, w, h);

            // Update & draw particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Pulse animation
                p.pulse += p.pulseSpeed;
                const pulseAlpha = p.opacity + Math.sin(p.pulse) * 0.15;

                // Mouse attraction
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MOUSE_RADIUS && dist > 0) {
                    const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
                    p.vx += (dx / dist) * force * MOUSE_STRENGTH;
                    p.vy += (dy / dist) * force * MOUSE_STRENGTH;
                }

                // Velocity damping
                p.vx *= 0.99;
                p.vy *= 0.99;

                // Position update
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges with padding
                if (p.x < -50) p.x = w + 50;
                if (p.x > w + 50) p.x = -50;
                if (p.y < -50) p.y = h + 50;
                if (p.y > h + 50) p.y = -50;

                // Pick color based on index
                const color = i % 3 === 0 ? colors.particle
                    : i % 3 === 1 ? colors.particleAlt
                        : colors.particleAccent;

                // Draw particle glow
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
                ctx.fillStyle = `${color} ${pulseAlpha * 0.15})`;
                ctx.fill();

                // Draw particle core
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `${color} ${pulseAlpha})`;
                ctx.fill();

                // Draw connections to nearby particles
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const cdx = p.x - p2.x;
                    const cdy = p.y - p2.y;
                    const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

                    if (cdist < CONNECTION_DISTANCE) {
                        const alpha = (1 - cdist / CONNECTION_DISTANCE) * 0.12;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `${colors.connection} ${alpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }

                // Draw connection to mouse if nearby
                if (dist < MOUSE_RADIUS) {
                    const alpha = (1 - dist / MOUSE_RADIUS) * 0.25;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `${colors.particle} ${alpha})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }

            animFrameRef.current = requestAnimationFrame(animate);
        };

        animFrameRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animFrameRef.current);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            resizeObserverRef.current?.disconnect();
        };
    }, [initParticles]);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden">
            {/* Base gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)] transition-colors duration-500" />

            {/* Animated orbs — subtle ambient glow behind the constellation */}
            <div
                className="absolute w-[500px] h-[500px] rounded-full opacity-25 animate-float-slower"
                style={{
                    background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)',
                    top: '-10%',
                    right: '-5%',
                    willChange: 'transform'
                }}
            />
            <div
                className="absolute w-[400px] h-[400px] rounded-full opacity-20 animate-float-slow"
                style={{
                    background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)',
                    bottom: '-15%',
                    left: '-10%',
                    willChange: 'transform'
                }}
            />
            <div
                className="absolute w-[300px] h-[300px] rounded-full opacity-15 animate-float-slowest"
                style={{
                    background: 'radial-gradient(circle, var(--accent-tertiary) 0%, transparent 70%)',
                    top: '40%',
                    left: '25%',
                    willChange: 'transform'
                }}
            />

            {/* Canvas particle constellation */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-[1]"
                style={{ pointerEvents: 'none' }}
            />

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] z-[2]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Noise texture */}
            <div
                className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none z-[3]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                }}
            />
        </div>
    );
};

/* ================================================================
   SCENE COMPONENT
   ================================================================ */
interface Scene3DProps {
    activeSection: number;
}

const Scene3D = ({ activeSection }: Scene3DProps) => {
    return <ConstellationBackground />;
};

export default Scene3D;
