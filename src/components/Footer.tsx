import { GraduationCap, MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { WA_URL } from '../config';

const PARTICLES = [
  { id: 0, x: 8,  y: 30, size: 1.5, dur: 10, delay: 0.5 },
  { id: 1, x: 92, y: 20, size: 1,   dur: 8,  delay: 2   },
  { id: 2, x: 50, y: 8,  size: 2,   dur: 12, delay: 1   },
  { id: 3, x: 25, y: 70, size: 1,   dur: 9,  delay: 3   },
  { id: 4, x: 78, y: 80, size: 1.5, dur: 11, delay: 0.3 },
  { id: 5, x: 40, y: 90, size: 1,   dur: 7,  delay: 2.5 },
];

const quickLinks = [
  { label: 'Beranda', href: '#' },
  { label: 'Profil', href: '#profil' },
  { label: 'Program Studi', href: '#program-studi' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Berita', href: '#berita' },
];

const programLinks = [
  { label: 'Pendidikan Guru Madrasah Ibtidaiyah (S1)', href: '#program-studi' },
  { label: 'Manajemen Pendidikan Islam (S1)', href: '#program-studi' },
  { label: 'Hubungi Kami', href: WA_URL },
  { label: 'Beasiswa', href: '#keunggulan' },
];

export default function Footer() {
  const ref = useScrollAnimation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      className="relative overflow-hidden"
      style={{ background: '#070e09' }}
    >

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="particle absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: 'rgba(212,175,80,0.65)', zIndex: 0,
            animation: `${p.id % 2 === 0 ? 'floatParticle' : 'floatParticle2'} ${p.dur}s ${p.delay}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      {/* Watermark text */}
      <div
        className="absolute inset-0 flex items-end justify-center pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(48px, 10vw, 130px)',
            fontWeight: 700,
            color: '#C9A84C',
            opacity: 0.06,
            letterSpacing: '0.18em',
            lineHeight: 1,
            whiteSpace: 'nowrap',
            userSelect: 'none',
            paddingBottom: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          STIT AL-IHSAN
        </span>
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1 animate-on-scroll-left">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-full"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #8B6914)' }}
              >
                <GraduationCap size={20} color="#0a1628" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-tight">STIT Al-Ihsan</div>
                <div className="text-xs" style={{ color: '#C9A84C' }}>Baleendah, Bandung</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Sekolah Tinggi Ilmu Tarbiyah Al-Ihsan Baleendah — Mencetak generasi pendidik
              muslim yang berakhlak, berilmu, dan berdedikasi.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/stitalihsan.official"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram STIT Al-Ihsan"
                className="transition-opacity duration-200"
                style={{ color: 'rgba(255,255,255,0.35)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://stitalihsan.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website STIT Al-Ihsan"
                className="transition-opacity duration-200"
                style={{ color: 'rgba(255,255,255,0.35)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            <h4 className="text-white font-bold text-sm mb-4">Tautan Cepat</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.4)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#d4af50')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <h4 className="text-white font-bold text-sm mb-4">Program & Layanan</h4>
            <ul className="space-y-2.5">
              {programLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.4)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#d4af50')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-on-scroll-right">
            <h4 className="text-white font-bold text-sm mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} color="#C9A84C" className="mt-0.5 shrink-0" />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Jl. Adipati Agung No. 40 Baleendah, Kabupaten Bandung
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} color="#C9A84C" className="shrink-0" />
                <a
                  href="https://wa.me/6282135402248"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.4)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                >
                  0821-3540-2248
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} color="#C9A84C" className="shrink-0" />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>info@stit-alihsan.ac.id</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock size={14} color="#C9A84C" className="shrink-0" />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>Sen - Sab: 08.00 - 16.00 WIB</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 animate-on-scroll"
          style={{ transitionDelay: '0.3s' }}
        >
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            &copy; {new Date().getFullYear()} STIT Al-Ihsan Baleendah. Hak cipta dilindungi.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-medium transition-colors duration-200"
            style={{ color: 'rgba(255,255,255,0.3)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
          >
            <ArrowUp size={12} />
            Kembali ke Atas
          </button>
        </div>
      </div>
    </footer>
  );
}
