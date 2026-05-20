import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PARTICLES = [
  { id: 0, x: 6,  y: 18, size: 2,   dur: 10, delay: 0.2 },
  { id: 1, x: 94, y: 40, size: 1.5, dur: 8,  delay: 2.5 },
  { id: 2, x: 50, y: 6,  size: 2.5, dur: 12, delay: 1.3 },
  { id: 3, x: 28, y: 72, size: 1,   dur: 9,  delay: 3.8 },
  { id: 4, x: 76, y: 85, size: 2,   dur: 11, delay: 0.8 },
  { id: 5, x: 88, y: 60, size: 1.5, dur: 7,  delay: 2   },
  { id: 6, x: 15, y: 92, size: 2,   dur: 13, delay: 1   },
  { id: 7, x: 62, y: 78, size: 1,   dur: 9,  delay: 4.5 },
];

const testimonials = [
  {
    name: 'Siti Nurhaliza, S.Pd.I',
    role: 'Alumni PGMI Angkatan 2020',
    text: 'STIT Al-Ihsan memberikan fondasi keilmuan dan keimanan yang sangat kuat. Saya berhasil menjadi guru unggulan di madrasah terbaik di Baleendah berkat bimbingan dosen yang luar biasa.',
    rating: 5,
  },
  {
    name: 'Ahmad Fauzi, S.Pd.I',
    role: 'Alumni MPI Angkatan 2019',
    text: 'Program studi MPI membekali saya dengan kemampuan manajemen yang mumpuni. Kini saya dipercaya memimpin sebuah pondok pesantren modern di Sampang. Terima kasih STIT Al-Ihsan!',
    rating: 5,
  },
  {
    name: 'Dewi Rahmawati',
    role: 'Mahasiswa PGMI Semester 6',
    text: 'Suasana kampus yang Islami dan kekeluargaan membuat proses belajar sangat nyaman. Dosen-dosen sangat perhatian dan selalu mendorong kami untuk berprestasi.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const ref = useScrollAnimation();

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0b2a1a 0%, #0b2f1f 50%, #0b2a1a 100%)' }}
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

      {/* Center glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(212,175,80,0.05) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{ background: 'rgba(212,175,80,0.1)', border: '1px solid rgba(212,175,80,0.25)' }}
          >
            <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#C9A84C' }}>
              Testimoni
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Kata Mereka Tentang
            <br />
            <span style={{ color: '#C9A84C' }}>STIT Al-Ihsan</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="animate-on-scroll-scale p-6 md:p-7 rounded-xl transition-all duration-300"
              style={{
                background: 'rgba(212,175,80,0.04)',
                border: '1px solid rgba(212,175,80,0.1)',
                transitionDelay: `${i * 0.15}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212,175,80,0.25)';
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212,175,80,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="mb-4">
                <Quote size={28} color="#C9A84C" style={{ opacity: 0.4 }} />
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }, (_, j) => (
                  <Star key={j} size={14} color="#C9A84C" fill="#C9A84C" />
                ))}
              </div>
              <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: 'linear-gradient(135deg, #C9A84C, #8B6914)', color: '#0a1628' }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
