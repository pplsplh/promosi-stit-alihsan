import { GraduationCap, Phone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PARTICLES = [
  { id: 0, x: 5,  y: 20, size: 2.5, dur: 10, delay: 0   },
  { id: 1, x: 95, y: 15, size: 2,   dur: 8,  delay: 1.5 },
  { id: 2, x: 20, y: 80, size: 1.5, dur: 12, delay: 2.8 },
  { id: 3, x: 80, y: 75, size: 2,   dur: 9,  delay: 0.7 },
  { id: 4, x: 48, y: 5,  size: 3,   dur: 11, delay: 3.5 },
  { id: 5, x: 52, y: 95, size: 2,   dur: 7,  delay: 1.2 },
  { id: 6, x: 70, y: 45, size: 1.5, dur: 13, delay: 4   },
  { id: 7, x: 30, y: 55, size: 1,   dur: 9,  delay: 2   },
  { id: 8, x: 88, y: 88, size: 2,   dur: 10, delay: 0.4 },
  { id: 9, x: 12, y: 40, size: 1.5, dur: 8,  delay: 3   },
];

export default function CTASection() {
  const ref = useScrollAnimation();

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#0d3520' }}
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
            background: 'rgba(212,175,80,0.5)',
            animation: `${p.id % 2 === 0 ? 'floatParticle' : 'floatParticle2'} ${p.dur}s ${p.delay}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(212,175,80,0.07) 0%, transparent 60%)',
          borderRadius: '50%',
        }}
      />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-on-scroll-scale">
          {/* Icon */}
          <div
            className="w-16 h-16 mx-auto mb-8 rounded-2xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #d4af50, #a07830)',
              boxShadow: '0 0 40px rgba(212,175,80,0.3)',
            }}
          >
            <GraduationCap size={28} color="#071a0d" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Siap Memulai Perjalanan
            <br />
            <span style={{ color: '#d4af50' }}>Akademik Anda?</span>
          </h2>

          <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Bergabunglah dengan ribuan alumni STIT Al-Ihsan yang telah berkontribusi
            bagi kemajuan pendidikan Islam di Indonesia. Pendaftaran dibuka sekarang!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #d4af50, #a07830)',
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
              Daftar Mahasiswa Baru
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300"
              style={{ background: 'transparent', color: '#ffffff', border: '1.5px solid rgba(212,175,80,0.5)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(212,175,80,0.1)';
                e.currentTarget.style.borderColor = '#d4af50';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(212,175,80,0.5)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Phone size={16} />
              Hubungi Kami
            </a>
          </div>

          {/* Gelombang info */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              { label: 'Gelombang 1', value: 'Jan - Mar 2025' },
              { label: 'Gelombang 2', value: 'Apr - Jun 2025' },
              { label: 'Gelombang 3', value: 'Jul - Agu 2025' },
            ].map((g) => (
              <div key={g.label} className="text-center">
                <div className="text-sm font-bold" style={{ color: '#d4af50' }}>{g.label}</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{g.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
