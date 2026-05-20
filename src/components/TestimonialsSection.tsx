import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Siti Nurhaliza, S.Pd.I',
    role: 'Alumni PAI Angkatan 2020',
    text: 'STIT Al-Ihsan memberikan fondasi keilmuan dan keimanan yang sangat kuat. Saya berhasil menjadi guru PAI unggulan di madrasah terbaik di Baleendah berkat bimbingan dosen yang luar biasa.',
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
    role: 'Mahasiswa PAI Semester 6',
    text: 'Suasana kampus yang Islami dan kekeluargaan membuat proses belajar sangat nyaman. Dosen-dosen sangat perhatian dan selalu mendorong kami untuk berprestasi.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const ref = useScrollAnimation();

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a1628 0%, #0d1a30 50%, #0a1628 100%)' }}
    >
      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,80,0.2), transparent)' }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{ background: 'rgba(212,175,80,0.1)', border: '1px solid rgba(212,175,80,0.25)' }}
          >
            <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#d4af50' }}>
              Testimoni
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Kata Mereka Tentang
            <br />
            <span style={{ color: '#d4af50' }}>STIT Al-Ihsan</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="animate-on-scroll p-6 md:p-7 rounded-xl transition-all duration-300"
              style={{
                background: 'rgba(212,175,80,0.04)',
                border: '1px solid rgba(212,175,80,0.1)',
                transitionDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212,175,80,0.25)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212,175,80,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Quote icon */}
              <div className="mb-4">
                <Quote size={28} color="#d4af50" style={{ opacity: 0.4 }} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }, (_, j) => (
                  <Star key={j} size={14} color="#d4af50" fill="#d4af50" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: 'linear-gradient(135deg, #d4af50, #a07830)', color: '#0a1628' }}
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
