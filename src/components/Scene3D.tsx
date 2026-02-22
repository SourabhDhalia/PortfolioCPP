import React, { useEffect, useRef, useCallback, memo } from 'react';

/* ================================================================
   CONSTELLATION PARTICLE NETWORK — ENHANCED
   Premium canvas-based animated background:
   - Multiple particle types: circles, diamonds, triangles
   - Pulsing glow halos with varying intensities
   - Dynamic connections with gradient stroke
   - Mouse interaction with ripple effect
   - Shooting stars / meteor trails
   - Theme-aware color system
   - 60fps with requestAnimationFrame
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
    shape: 'circle' | 'diamond' | 'triangle';
    colorIdx: number;
}

interface Meteor {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    size: number;
    trail: { x: number; y: number }[];
}

const PARTICLE_COUNT = 70;
const CONNECTION_DISTANCE = 160;
const CONNECTION_DISTANCE_SQ = CONNECTION_DISTANCE * CONNECTION_DISTANCE;
const MOUSE_RADIUS = 220;
const MOUSE_STRENGTH = 0.025;
const METEOR_CHANCE = 0.003; // ~1 meteor every 5 seconds

const ConstellationBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const meteorsRef = useRef<Meteor[]>([]);
    const mouseRef = useRef({ x: -1000, y: -1000, active: false });
    const animFrameRef = useRef<number>(0);

    const initParticles = useCallback((width: number, height: number) => {
        const particles: Particle[] = [];
        const shapes: Particle['shape'][] = ['circle', 'diamond', 'triangle'];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                radius: Math.random() * 2.5 + 1,
                opacity: Math.random() * 0.5 + 0.25,
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: Math.random() * 0.02 + 0.008,
                shape: shapes[i % 3],
                colorIdx: i % 3,
            });
        }
        particlesRef.current = particles;
    }, []);

    useEffect(() => {
        // Respect prefers-reduced-motion — skip entire animation
        const motionOk = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!motionOk) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        let w = window.innerWidth;
        let h = window.innerHeight;

        const setSize = () => {
            const dpr = Math.min(window.devicePixelRatio, 2);
            w = window.innerWidth;
            h = window.innerHeight;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            if (particlesRef.current.length === 0) {
                initParticles(w, h);
            }
        };

        setSize();
        window.addEventListener('resize', setSize, { passive: true });

        // Mouse tracking
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
        };
        const handleMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000, active: false };
        };
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

        // Color system — cached, updated via MutationObserver instead of per-frame DOM read
        const computeColors = () => {
            const isLight = document.documentElement.classList.contains('light');
            return {
                particles: isLight
                    ? ['232, 93, 42', '0, 158, 126', '85, 88, 232']
                    : ['255, 107, 53', '0, 212, 170', '99, 102, 241'],
                connection: isLight ? '26, 22, 21' : '255, 255, 255',
                meteor: isLight ? '232, 93, 42' : '255, 200, 120',
            };
        };
        let cachedColors = computeColors();
        const observer = new MutationObserver(() => { cachedColors = computeColors(); });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        // Draw a diamond shape
        const drawDiamond = (cx: number, cy: number, size: number) => {
            ctx.beginPath();
            ctx.moveTo(cx, cy - size);
            ctx.lineTo(cx + size * 0.7, cy);
            ctx.lineTo(cx, cy + size);
            ctx.lineTo(cx - size * 0.7, cy);
            ctx.closePath();
        };

        // Draw a triangle shape
        const drawTriangle = (cx: number, cy: number, size: number) => {
            ctx.beginPath();
            ctx.moveTo(cx, cy - size);
            ctx.lineTo(cx + size * 0.87, cy + size * 0.5);
            ctx.lineTo(cx - size * 0.87, cy + size * 0.5);
            ctx.closePath();
        };

        // Draw a particle (any shape)
        const drawParticle = (p: Particle, alpha: number, color: string) => {
            const glowSize = p.radius * 4;

            // Outer glow
            ctx.beginPath();
            ctx.arc(p.x, p.y, glowSize, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${color}, ${alpha * 0.1})`;
            ctx.fill();

            // Shape
            ctx.fillStyle = `rgba(${color}, ${alpha})`;
            switch (p.shape) {
                case 'diamond':
                    drawDiamond(p.x, p.y, p.radius * 1.8);
                    ctx.fill();
                    break;
                case 'triangle':
                    drawTriangle(p.x, p.y, p.radius * 1.8);
                    ctx.fill();
                    break;
                default:
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                    ctx.fill();
            }
        };

        // Animation loop
        const animate = () => {
            const particles = particlesRef.current;
            const meteors = meteorsRef.current;
            const mouse = mouseRef.current;
            const colors = cachedColors;

            ctx.clearRect(0, 0, w, h);

            // === METEORS (shooting stars) ===
            if (Math.random() < METEOR_CHANCE) {
                const startSide = Math.random();
                meteors.push({
                    x: startSide < 0.5 ? Math.random() * w : w + 20,
                    y: startSide < 0.5 ? -20 : Math.random() * h * 0.4,
                    vx: (Math.random() - 0.7) * 8,
                    vy: Math.random() * 3 + 4,
                    life: 0,
                    maxLife: 40 + Math.random() * 30,
                    size: Math.random() * 2 + 1,
                    trail: [],
                });
            }

            for (let i = meteors.length - 1; i >= 0; i--) {
                const m = meteors[i];
                m.trail.push({ x: m.x, y: m.y });
                if (m.trail.length > 15) m.trail.shift();

                m.x += m.vx;
                m.y += m.vy;
                m.life++;

                const lifeRatio = 1 - m.life / m.maxLife;

                // Draw trail
                for (let t = 0; t < m.trail.length; t++) {
                    const trailAlpha = (t / m.trail.length) * lifeRatio * 0.4;
                    const trailSize = m.size * (t / m.trail.length);
                    ctx.beginPath();
                    ctx.arc(m.trail[t].x, m.trail[t].y, trailSize, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${colors.meteor}, ${trailAlpha})`;
                    ctx.fill();
                }

                // Draw head
                ctx.beginPath();
                ctx.arc(m.x, m.y, m.size * 1.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${colors.meteor}, ${lifeRatio * 0.8})`;
                ctx.fill();

                if (m.life >= m.maxLife || m.x < -50 || m.x > w + 50 || m.y > h + 50) {
                    meteors.splice(i, 1);
                }
            }

            // === PARTICLES ===
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Pulse
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

                // Wrap edges
                if (p.x < -60) p.x = w + 60;
                if (p.x > w + 60) p.x = -60;
                if (p.y < -60) p.y = h + 60;
                if (p.y > h + 60) p.y = -60;

                const color = colors.particles[p.colorIdx];

                // Draw particle
                drawParticle(p, pulseAlpha, color);

                // Connections between particles — squared distance avoids Math.sqrt
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const cdx = p.x - p2.x;
                    const cdy = p.y - p2.y;
                    const cdistSq = cdx * cdx + cdy * cdy;

                    if (cdistSq < CONNECTION_DISTANCE_SQ) {
                        const cdist = Math.sqrt(cdistSq);
                        const alpha = (1 - cdist / CONNECTION_DISTANCE) * 0.1;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(${colors.connection}, ${alpha})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }

                // Mouse connection
                if (mouse.active && dist < MOUSE_RADIUS) {
                    const alpha = (1 - dist / MOUSE_RADIUS) * 0.3;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(${color}, ${alpha})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }

            // Mouse cursor glow when active
            if (mouse.active) {
                const gradient = ctx.createRadialGradient(
                    mouse.x, mouse.y, 0,
                    mouse.x, mouse.y, MOUSE_RADIUS * 0.4
                );
                gradient.addColorStop(0, `rgba(${colors.particles[0]}, 0.06)`);
                gradient.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.beginPath();
                ctx.arc(mouse.x, mouse.y, MOUSE_RADIUS * 0.4, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
            }

            animFrameRef.current = requestAnimationFrame(animate);
        };

        animFrameRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animFrameRef.current);
            observer.disconnect();
            window.removeEventListener('resize', setSize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [initParticles]);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)] transition-colors duration-500" />

            {/* Ambient orbs */}
            <div
                className="absolute w-[500px] h-[500px] rounded-full opacity-25 animate-float-slower"
                style={{
                    background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)',
                    top: '-10%', right: '-5%', willChange: 'transform'
                }}
            />
            <div
                className="absolute w-[400px] h-[400px] rounded-full opacity-20 animate-float-slow"
                style={{
                    background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)',
                    bottom: '-15%', left: '-10%', willChange: 'transform'
                }}
            />
            <div
                className="absolute w-[300px] h-[300px] rounded-full opacity-15 animate-float-slowest"
                style={{
                    background: 'radial-gradient(circle, var(--accent-tertiary) 0%, transparent 70%)',
                    top: '40%', left: '25%', willChange: 'transform'
                }}
            />

            {/* Canvas constellation */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-[1]"
                style={{ pointerEvents: 'none' }}
            />

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.02] z-[2]"
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
                className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none z-[3]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                }}
            />
        </div>
    );
};

/* ================================================================
   SCENE COMPONENT — memoized to prevent re-renders from parent
   ================================================================ */
const Scene3D = memo(() => {
    return <ConstellationBackground />;
});
Scene3D.displayName = 'Scene3D';

export default Scene3D;
