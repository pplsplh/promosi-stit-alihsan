import { GraduationCap, MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

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
  { label: 'Pendidikan Guru Madrasah Ibtidaiyah (S1)', href: '#' },
  { label: 'Manajemen Pendidikan Islam (S1)', href: '#' },
  { label: 'Pendaftaran Mahasiswa Baru', href: '#' },
  { label: 'Beasiswa', href: '#' },
];

export default function Footer() {
  const ref = useScrollAnimation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: '#070e09' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,80,0.2), transparent)' }}
      />

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: 'rgba(212,175,80,0.35)',
            animation: `${p.id % 2 === 0 ? 'floatParticle' : 'floatParticle2'} ${p.dur}s ${p.delay}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      <div ref={ref} className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1 animate-on-scroll-left">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-full"
                style={{ background: 'linear-gradient(135deg, #d4af50, #a07830)' }}
              >
                <GraduationCap size={20} color="#071a0d" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-tight">STIT Al-Ihsan</div>
                <div className="text-xs" style={{ color: '#d4af50' }}>Baleendah, Bandung</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Sekolah Tinggi Ilmu Tarbiyah Al-Ihsan Baleendah — Mencetak generasi pendidik
              muslim yang berakhlak, berilmu, dan berdedikasi.
            </p>
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
                <MapPin size={14} color="#d4af50" className="mt-0.5 shrink-0" />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Jl. Adipati Agung No. 40 Baleendah, Kabupaten Bandung
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} color="#d4af50" className="shrink-0" />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>(031) 309-1234</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} color="#d4af50" className="shrink-0" />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>info@stit-alihsan.ac.id</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock size={14} color="#d4af50" className="shrink-0" />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>Sen - Sab: 08.00 - 16.00 WIB</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 animate-on-scroll"
          style={{ borderTop: '1px solid rgba(212,175,80,0.1)', transitionDelay: '0.3s' }}
        >
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            &copy; {new Date().getFullYear()} STIT Al-Ihsan Baleendah. Hak cipta dilindungi.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-medium transition-colors duration-200"
            style={{ color: 'rgba(255,255,255,0.3)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#d4af50')}
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
