import { useEffect, useRef, useState } from 'react';
import { GraduationCap, BookOpen, Star, ChevronDown, Menu, X } from 'lucide-react';
import { WA_URL, CTA_PRIMARY_LABEL, CTA_NAV_LABEL } from '../config';
import { useCountUp } from '../hooks/useCountUp';
import { animate, stagger, splitText } from 'animejs';

const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 5,
}));

const GEOMETRIC_SHAPES = [
  { id: 1, type: 'star8', size: 120, x: 8, y: 12, opacity: 0.08, rotate: 15 },
  { id: 2, type: 'star8', size: 80, x: 88, y: 8, opacity: 0.06, rotate: 30 },
  { id: 3, type: 'hexagon', size: 160, x: 92, y: 70, opacity: 0.05, rotate: 0 },
  { id: 4, type: 'star8', size: 60, x: 4, y: 80, opacity: 0.07, rotate: 45 },
  { id: 5, type: 'hexagon', size: 100, x: 50, y: 90, opacity: 0.04, rotate: 10 },
  { id: 6, type: 'circle', size: 200, x: 75, y: 20, opacity: 0.04, rotate: 0 },
  { id: 7, type: 'arabesque', size: 90, x: 20, y: 45, opacity: 0.07, rotate: 0 },
];

function Star8({ size, color = 'currentColor' }: { size: number; color?: string }) {
  const r = size / 2;
  const points = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * Math.PI) / 4;
    const innerAngle = angle + Math.PI / 8;
    const outer = `${r + (r * 0.45) * Math.cos(angle)},${r + (r * 0.45) * Math.sin(angle)}`;
    const inner = `${r + (r * 0.22) * Math.cos(innerAngle)},${r + (r * 0.22) * Math.sin(innerAngle)}`;
    return `${outer} ${inner}`;
  }).join(' ');

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <polygon points={points} fill={color} />
    </svg>
  );
}

function Hexagon({ size, color = 'currentColor' }: { size: number; color?: string }) {
  const r = size / 2;
  const points = Array.from({ length: 6 }, (_, i) => {
    const angle = (i * Math.PI) / 3 - Math.PI / 6;
    return `${r + r * 0.45 * Math.cos(angle)},${r + r * 0.45 * Math.sin(angle)}`;
  }).join(' ');

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <polygon points={points} fill="none" stroke={color} strokeWidth="2" />
    </svg>
  );
}

function Arabesque({ size, color = 'currentColor' }: { size: number; color?: string }) {
  const r = size / 2;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i * Math.PI) / 6;
        const x1 = r + r * 0.15 * Math.cos(angle);
        const y1 = r + r * 0.15 * Math.sin(angle);
        const x2 = r + r * 0.45 * Math.cos(angle);
        const y2 = r + r * 0.45 * Math.sin(angle);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.5" />;
      })}
      <circle cx={r} cy={r} r={r * 0.15} fill={color} />
      <circle cx={r} cy={r} r={r * 0.45} fill="none" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

/* ── Art Nouveau decorative components ── */

function MuchaFlower({ x, cy, scale = 1, opacity = 0.55, flip = false }: {
  x: number; cy: number; scale?: number; opacity?: number; flip?: boolean;
}) {
  const g = `scale(${flip ? -scale : scale}, ${scale}) translate(${flip ? -(x * 2 + 80) : 0}, 0)`;
  return (
    <g transform={g} opacity={opacity}>
      {/* stem */}
      <path d={`M${x + 40},${cy + 60} C${x + 38},${cy + 20} ${x + 42},${cy - 20} ${x + 40},${cy - 60}`}
        stroke="#C9A84C" strokeWidth="1.2" fill="none" />
      {/* leaves */}
      <path d={`M${x + 40},${cy} C${x + 20},${cy - 18} ${x + 8},${cy - 8} ${x + 14},${cy + 4}`}
        stroke="#C9A84C" strokeWidth="0.9" fill="rgba(201,168,76,0.08)" />
      <path d={`M${x + 40},${cy - 24} C${x + 58},${cy - 40} ${x + 68},${cy - 28} ${x + 60},${cy - 16}`}
        stroke="#C9A84C" strokeWidth="0.9" fill="rgba(201,168,76,0.08)" />
      {/* bloom petals */}
      {[0,60,120,180,240,300].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const px = x + 40 + Math.cos(rad) * 14;
        const py = cy - 60 + Math.sin(rad) * 14;
        return (
          <ellipse key={i} cx={px} cy={py}
            rx="6" ry="9"
            transform={`rotate(${deg}, ${px}, ${py})`}
            fill="rgba(201,168,76,0.18)" stroke="#C9A84C" strokeWidth="0.7" />
        );
      })}
      {/* bloom center */}
      <circle cx={x + 40} cy={cy - 60} r="5" fill="rgba(201,168,76,0.45)" stroke="#C9A84C" strokeWidth="0.8" />
      <circle cx={x + 40} cy={cy - 60} r="2.5" fill="#C9A84C" />
      {/* small buds */}
      <ellipse cx={x + 22} cy={cy - 44} rx="4" ry="6"
        transform={`rotate(-30, ${x + 22}, ${cy - 44})`}
        fill="rgba(201,168,76,0.2)" stroke="#C9A84C" strokeWidth="0.7" />
      <ellipse cx={x + 56} cy={cy - 36} rx="4" ry="6"
        transform={`rotate(20, ${x + 56}, ${cy - 36})`}
        fill="rgba(201,168,76,0.2)" stroke="#C9A84C" strokeWidth="0.7" />
    </g>
  );
}

function MuchaArch() {
  return (
    <svg
      viewBox="0 0 900 420"
      preserveAspectRatio="xMidYMid meet"
      className="absolute pointer-events-none"
      style={{ top: 60, left: '50%', transform: 'translateX(-50%)', width: '92%', maxWidth: 900, opacity: 0.55, zIndex: 1 }}
    >
      {/* outer arch */}
      <path d="M 120,400 L 120,200 Q 120,60 450,60 Q 780,60 780,200 L 780,400"
        fill="none" stroke="#C9A84C" strokeWidth="1.5" />
      {/* inner arch */}
      <path d="M 150,400 L 150,210 Q 150,100 450,100 Q 750,100 750,210 L 750,400"
        fill="none" stroke="#C9A84C" strokeWidth="0.7" strokeDasharray="4,6" />

      {/* top center medallion */}
      <circle cx="450" cy="62" r="18" fill="rgba(201,168,76,0.12)" stroke="#C9A84C" strokeWidth="1.2" />
      <circle cx="450" cy="62" r="10" fill="rgba(201,168,76,0.22)" stroke="#C9A84C" strokeWidth="0.8" />
      {[0,45,90,135,180,225,270,315].map((d, i) => {
        const r = (d * Math.PI) / 180;
        return <line key={i} x1={450 + Math.cos(r) * 10} y1={62 + Math.sin(r) * 10}
          x2={450 + Math.cos(r) * 17} y2={62 + Math.sin(r) * 17}
          stroke="#C9A84C" strokeWidth="0.8" />;
      })}

      {/* left pillar top ornament */}
      <circle cx="120" cy="200" r="10" fill="rgba(201,168,76,0.15)" stroke="#C9A84C" strokeWidth="1" />
      <circle cx="120" cy="200" r="5" fill="rgba(201,168,76,0.3)" />
      {/* right pillar top ornament */}
      <circle cx="780" cy="200" r="10" fill="rgba(201,168,76,0.15)" stroke="#C9A84C" strokeWidth="1" />
      <circle cx="780" cy="200" r="5" fill="rgba(201,168,76,0.3)" />

      {/* horizontal rule lines */}
      <line x1="120" y1="380" x2="320" y2="380" stroke="#C9A84C" strokeWidth="0.7" opacity="0.6" />
      <line x1="580" y1="380" x2="780" y2="380" stroke="#C9A84C" strokeWidth="0.7" opacity="0.6" />
      <line x1="120" y1="376" x2="240" y2="376" stroke="#C9A84C" strokeWidth="0.4" opacity="0.4" />
      <line x1="660" y1="376" x2="780" y2="376" stroke="#C9A84C" strokeWidth="0.4" opacity="0.4" />

      {/* arch dot chain */}
      {[0.15, 0.3, 0.45, 0.55, 0.7, 0.85].map((t, i) => {
        const angle = Math.PI + t * Math.PI;
        const cx = 450 + Math.cos(angle) * 330;
        const cy2 = 200 + Math.sin(angle) * 140 - 80;
        return <circle key={i} cx={cx} cy={cy2} r="2" fill="#C9A84C" opacity="0.5" />;
      })}

      {/* flowers on arch */}
      <MuchaFlower x={60} cy={280} scale={0.9} opacity={0.6} />
      <MuchaFlower x={760} cy={280} scale={0.9} opacity={0.6} flip />

      {/* corner small florals */}
      <MuchaFlower x={180} cy={340} scale={0.55} opacity={0.45} />
      <MuchaFlower x={640} cy={340} scale={0.55} opacity={0.45} flip />
    </svg>
  );
}

function MuchaSidePanel({ side }: { side: 'left' | 'right' }) {
  const isLeft = side === 'left';
  return (
    <svg
      viewBox="0 0 120 600"
      preserveAspectRatio="xMidYMid meet"
      className="absolute pointer-events-none hidden lg:block"
      style={{
        top: '10%',
        [isLeft ? 'left' : 'right']: '1%',
        width: 'clamp(60px, 7vw, 110px)',
        height: 'auto',
        opacity: 0.5,
        zIndex: 1,
        transform: isLeft ? 'none' : 'scaleX(-1)',
      }}
    >
      {/* vertical stem */}
      <path d="M 60,580 C 58,480 62,380 60,280 C 58,180 62,100 60,20"
        stroke="#C9A84C" strokeWidth="1.2" fill="none" />

      {/* large flower top */}
      {[0,60,120,180,240,300].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <ellipse key={i} cx={60 + Math.cos(rad) * 16} cy={36 + Math.sin(rad) * 16}
            rx="7" ry="11" transform={`rotate(${deg}, ${60 + Math.cos(rad) * 16}, ${36 + Math.sin(rad) * 16})`}
            fill="rgba(201,168,76,0.15)" stroke="#C9A84C" strokeWidth="0.8" />
        );
      })}
      <circle cx="60" cy="36" r="7" fill="rgba(201,168,76,0.4)" stroke="#C9A84C" strokeWidth="0.9" />
      <circle cx="60" cy="36" r="3.5" fill="#C9A84C" />

      {/* mid flowers */}
      {[180, 320, 440].map((y, i) => (
        <g key={i}>
          {[0,72,144,216,288].map((deg, j) => {
            const rad = (deg * Math.PI) / 180;
            return (
              <ellipse key={j} cx={60 + Math.cos(rad) * 11} cy={y + Math.sin(rad) * 11}
                rx="5" ry="8" transform={`rotate(${deg}, ${60 + Math.cos(rad) * 11}, ${y + Math.sin(rad) * 11})`}
                fill="rgba(201,168,76,0.12)" stroke="#C9A84C" strokeWidth="0.7" />
            );
          })}
          <circle cx="60" cy={y} r="5" fill="rgba(201,168,76,0.35)" stroke="#C9A84C" strokeWidth="0.7" />
        </g>
      ))}

      {/* leaves */}
      {[120, 240, 370, 500].map((y, i) => (
        <path key={i}
          d={i % 2 === 0
            ? `M60,${y} C40,${y - 16} 22,${y - 6} 28,${y + 8}`
            : `M60,${y} C80,${y - 16} 98,${y - 6} 92,${y + 8}`}
          stroke="#C9A84C" strokeWidth="0.9" fill="rgba(201,168,76,0.1)" />
      ))}

      {/* bottom ornament */}
      <circle cx="60" cy="570" r="8" fill="rgba(201,168,76,0.2)" stroke="#C9A84C" strokeWidth="0.9" />
      <line x1="60" y1="562" x2="60" y2="555" stroke="#C9A84C" strokeWidth="0.9" />
      <line x1="52" y1="570" x2="68" y2="570" stroke="#C9A84C" strokeWidth="0.9" />
    </svg>
  );
}

function StatCounter({ target, label, suffix = '', duration = 1800 }: { target: number; label: string; suffix?: string; duration?: number }) {
  const { count, ref } = useCountUp(target, duration);
  return (
    <div ref={ref} className="text-center">
      <div className="text-xl md:text-2xl font-bold" style={{ color: '#C9A84C' }}>
        {count}{suffix}
      </div>
      <div className="text-xs md:text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>{label}</div>
    </div>
  );
}

function StatText({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-xl md:text-2xl font-bold" style={{ color: '#C9A84C' }}>{value}</div>
      <div className="text-xs md:text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>{label}</div>
    </div>
  );
}

const NAV_ITEMS = [
  { label: 'Beranda',       href: '#',              id: ''              },
  { label: 'Profil',        href: '#profil',        id: 'profil'        },
  { label: 'Program Studi', href: '#program-studi', id: 'program-studi' },
  { label: 'Berita',        href: '#berita',        id: 'berita'        },
  { label: 'Kontak',        href: '#footer',        id: 'footer'        },
];

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const timeRef = useRef(0);
  const isVisibleRef = useRef(true);
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  useEffect(() => {
    // split "Sekolah Tinggi Ilmu" per karakter
    const { chars } = splitText('.hero-line1', { chars: true });

    animate(chars, {
      y: [
        { to: '-2rem', ease: 'outExpo', duration: 500 },
        { to: 0, ease: 'outBounce', duration: 700, delay: 80 },
      ],
      opacity: [0, 1],
      delay: stagger(45, { start: 200 }),
    });

    // "Tarbiyah Al-Ihsan" fade in setelah semua karakter selesai
    animate('.hero-line2', {
      opacity: [0, 1],
      y: [20, 0],
      delay: chars.length * 45 + 600,
      duration: 900,
      ease: 'outExpo',
    });
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Section biasa: aktif saat pusatnya menyilang garis tengah viewport
    ['profil', 'program-studi', 'berita'].forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    // Footer: aktif begitu 15% dari footer terlihat (footer pendek, tidak akan menyilang garis tengah)
    const footerEl = document.getElementById('footer');
    if (footerEl) {
      const footerObs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection('footer'); },
        { threshold: 0.15 }
      );
      footerObs.observe(footerEl);
      observers.push(footerObs);
    }

    // Hero: reset ke Beranda saat hero masih dominan
    const heroObs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActiveSection(''); },
      { rootMargin: '0px 0px -80% 0px', threshold: 0 }
    );
    const heroEl = document.querySelector('.hero-line1');
    if (heroEl) heroObs.observe(heroEl as Element);

    return () => {
      observers.forEach((obs) => obs.disconnect());
      heroObs.disconnect();
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Level 3: skip canvas sepenuhnya di mobile
    if (isMobile) return;

    const NODE_COUNT = 30;
    const LINK_DIST  = 140;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const nodes: { x: number; y: number; vx: number; vy: number }[] = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));

    const draw = () => {
      // Level 2: stop render kalau canvas tidak terlihat
      if (!isVisibleRef.current) {
        animFrameRef.current = requestAnimationFrame(draw);
        return;
      }

      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      timeRef.current += 0.008;

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.18;
            ctx.strokeStyle = `rgba(212, 175, 80, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }

        const pulse = Math.sin(timeRef.current * 2 + i) * 0.5 + 0.5;
        ctx.beginPath();
        ctx.arc(nodes[i].x, nodes[i].y, 1.5 + pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 80, ${0.3 + pulse * 0.4})`;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    // Level 2: Intersection Observer — pause saat hero tidak di viewport
    const observer = new IntersectionObserver(
      ([entry]) => { isVisibleRef.current = entry.isIntersecting; },
      { threshold: 0 }
    );
    observer.observe(canvas);

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrameRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0b2a1a 0%, #0f3a23 40%, #0b2a1a 100%)' }}
    >
      {/* Geometric background decorations */}
      {GEOMETRIC_SHAPES.map((s) => (
        <div
          key={s.id}
          className="absolute pointer-events-none"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            opacity: s.opacity,
            transform: `translate(-50%, -50%) rotate(${s.rotate}deg)`,
          }}
        >
          {s.type === 'star8' && <Star8 size={s.size} color="#C9A84C" />}
          {s.type === 'hexagon' && <Hexagon size={s.size} color="#C9A84C" />}
          {s.type === 'arabesque' && <Arabesque size={s.size} color="#C9A84C" />}
          {s.type === 'circle' && (
            <div
              style={{
                width: s.size,
                height: s.size,
                borderRadius: '50%',
                border: '1.5px solid #C9A84C',
              }}
            />
          )}
        </div>
      ))}

      {/* Animated particles */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: 'rgba(212, 175, 80, 0.5)',
            animation: `floatParticle ${p.duration}s ${p.delay}s ease-in-out infinite alternate`,
          }}
        />
      ))}

       {!isMobile && (
         <canvas
           ref={canvasRef}
           className="absolute inset-0 w-full h-full pointer-events-none"
           style={{ opacity: 0.6 }}
         />
       )}

      {/* Radial glow center */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(212,175,80,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      {/* Art Nouveau: arch + side panels */}
      <MuchaArch />
      <MuchaSidePanel side="left" />
      <MuchaSidePanel side="right" />

      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(11,42,26,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(212,175,80,0.15)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-full"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #8B6914)', boxShadow: '0 0 20px rgba(212,175,80,0.3)' }}
              >
                <GraduationCap size={20} color="#071a0d" strokeWidth={2.5} />
              </div>
            </div>
            <div>
              <div className="text-white font-bold text-sm leading-tight tracking-wide">STIT Al-Ihsan</div>
              <div className="text-xs leading-tight" style={{ color: '#C9A84C' }}>Baleendah</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium transition-colors duration-200 relative"
                  style={{ color: isActive ? '#C9A84C' : 'rgba(255,255,255,0.75)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? '#C9A84C' : 'rgba(255,255,255,0.75)')}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-px rounded-full"
                      style={{ background: '#C9A84C' }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="hidden md:block">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #C9A84C, #8B6914)',
                color: '#071a0d',
                boxShadow: '0 0 20px rgba(212,175,80,0.25)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(212,175,80,0.5)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(212,175,80,0.25)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {CTA_NAV_LABEL}
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-4" style={{ background: 'rgba(11,42,26,0.97)' }}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium"
                style={{ color: activeSection === item.id ? '#C9A84C' : 'rgba(255,255,255,0.8)' }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-semibold rounded-full text-center"
              style={{ background: 'linear-gradient(135deg, #C9A84C, #8B6914)', color: '#071a0d' }}
            >
              {CTA_NAV_LABEL}
            </a>
          </div>
        )}
      </nav>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center pt-20">
        <div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 animate-fadeInDown"
          style={{
            background: 'rgba(212,175,80,0.12)',
            border: '1px solid rgba(212,175,80,0.3)',
            animation: 'fadeInDown 0.8s ease both',
          }}
        >
          <Star size={14} color="#C9A84C" fill="#C9A84C" />
          <span className="text-sm font-medium" style={{ color: '#C9A84C' }}>
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </span>
          <Star size={14} color="#C9A84C" fill="#C9A84C" />
        </div>

        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight"
          style={{ textShadow: '0 2px 40px rgba(212,175,80,0.15)' }}
        >
          <span className="hero-line1 text-white">Sekolah Tinggi Ilmu</span>
          <br />
          <span
            className="hero-line2 mt-3 inline-block"
            style={{
              opacity: 0,
              background: 'linear-gradient(135deg, #C9A84C, #f5d78e, #C9A84C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              paddingBottom: '0.15em',
            }}
          >
            Tarbiyah Al-Ihsan
          </span>
        </h1>

        <p
          className="text-base md:text-xl max-w-2xl mb-4 leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.65)', animation: 'fadeInUp 0.9s ease 0.35s both' }}
        >
          Baleendah, Bandung — Membentuk Generasi Pendidik Muslim yang
          <span style={{ color: 'rgba(212,175,80,0.9)' }}> Berakhlak</span>,
          <span style={{ color: 'rgba(212,175,80,0.9)' }}> Berilmu</span>, dan
          <span style={{ color: 'rgba(212,175,80,0.9)' }}> Berdedikasi</span>
        </p>

        <div className="flex items-center gap-3 mb-8" style={{ animation: 'fadeInUp 0.9s ease 0.45s both' }}>
          <div className="w-16 h-px" style={{ background: 'linear-gradient(to right, transparent, #C9A84C)' }} />
          <Star8 size={20} color="#C9A84C" />
          <div className="w-16 h-px" style={{ background: 'linear-gradient(to left, transparent, #C9A84C)' }} />
        </div>

        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-5 md:gap-10 mb-10 w-full max-w-sm sm:max-w-none" style={{ animation: 'fadeInUp 0.9s ease 0.55s both' }}>
          <StatCounter target={2017} label="Tahun Berdiri" />
          <StatCounter target={2} label="Program Studi" duration={800} />
          <StatCounter target={1000} label="Alumni" suffix="+" />
          <StatText value="Terakreditasi" label="BAN-PT" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-16" style={{ animation: 'fadeInUp 0.9s ease 0.65s both' }}>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #C9A84C, #8B6914)',
              color: '#071a0d',
              boxShadow: '0 4px 30px rgba(212,175,80,0.35)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 40px rgba(212,175,80,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 30px rgba(212,175,80,0.35)';
            }}
          >
            <GraduationCap size={16} />
            {CTA_PRIMARY_LABEL}
          </a>
          <a
            href="#program-studi"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
            style={{ background: 'transparent', color: '#ffffff', border: '1.5px solid rgba(212,175,80,0.5)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(212,175,80,0.1)';
              e.currentTarget.style.borderColor = '#C9A84C';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(212,175,80,0.5)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <BookOpen size={16} />
            Jelajahi Program Studi
          </a>
        </div>

        <div
          className="flex flex-col items-center gap-2"
          style={{ animation: 'fadeInUp 0.9s ease 0.75s both, bounceY 2s ease-in-out 2s infinite', color: 'rgba(255,255,255,0.35)' }}
        >
          <span className="text-xs tracking-widest uppercase">Gulir ke Bawah</span>
          <ChevronDown size={18} />
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(11,42,26,0.6))' }}
      />

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatParticle {
          from { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          to { transform: translateY(-30px) translateX(15px); opacity: 0.8; }
        }
        @keyframes bounceY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </div>
  );
}
