import { BookOpen, GraduationCap, ArrowRight, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const programs = [
  {
    name: 'Pendidikan Agama Islam',
    shortName: 'PAI',
    degree: 'S1',
    description:
      'Program studi yang mempersiapkan tenaga pendidik agama Islam profesional dengan penguasaan ilmu keislaman, pedagogik, dan keterampilan mengajar yang mumpuni.',
    highlights: [
      'Kurikulum berbasis KKNI & SN-Dikti',
      'Praktik mengajar di madrasah & sekolah',
      'Mata kuliah tafsir, hadits, fiqih, & akhlak',
      'Sertifikasi kompetensi pendidik',
    ],
    image: 'https://images.pexels.com/photos/8780770/pexels-photo-8780770.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Manajemen Pendidikan Islam',
    shortName: 'MPI',
    degree: 'S1',
    description:
      'Program studi yang mencetak pengelola lembaga pendidikan Islam yang handal, mampu memimpin madrasah, pesantren, dan institusi pendidikan Islam lainnya.',
    highlights: [
      'Manajemen lembaga pendidikan Islam',
      'Kepemimpinan & kewirausahaan pendidikan',
      'Praktik manajemen di lembaga pendidikan',
      'Kerjasama dengan pondok pesantren',
    ],
    image: 'https://images.pexels.com/photos/8566532/pexels-photo-8566532.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function ProgramsSection() {
  const ref = useScrollAnimation();

  return (
    <section
      id="program-studi"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#1B4332' }}
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
            <BookOpen size={14} color="#C9A84C" />
            <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#C9A84C' }}>
              Program Studi
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Pilihan Program Studi
            <br />
            <span style={{ color: '#C9A84C' }}>Unggulan</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Dua program studi S1 yang dirancang untuk mencetak generasi pendidik dan pengelola
            pendidikan Islam yang profesional dan berdaya saing.
          </p>
        </div>

        {/* Program cards */}
        <div className="space-y-8 md:space-y-12">
          {programs.map((prog, idx) => (
            <div
              key={prog.shortName}
              className="animate-on-scroll grid md:grid-cols-2 gap-6 md:gap-10 items-center rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(212,175,80,0.03)',
                border: '1px solid rgba(212,175,80,0.1)',
                transitionDelay: `${idx * 0.15}s`,
              }}
            >
              {/* Image side */}
              <div className={`relative ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.name}
                    className="w-full h-56 md:h-72 object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(135deg, rgba(10,22,40,0.6), rgba(212,175,80,0.1))' }}
                  />
                  {/* Degree badge */}
                  <div
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold"
                    style={{ background: 'linear-gradient(135deg, #C9A84C, #8B6914)', color: '#0a1628' }}
                  >
                    {prog.degree}
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className={`p-4 md:p-6 ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(212,175,80,0.15)' }}
                  >
                    <GraduationCap size={18} color="#C9A84C" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{prog.name}</h3>
                    <div className="text-xs font-medium" style={{ color: '#C9A84C' }}>{prog.shortName}</div>
                  </div>
                </div>

                <p className="text-sm md:text-base leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {prog.description}
                </p>

                <div className="space-y-2.5 mb-6">
                  {prog.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5">
                      <CheckCircle size={16} color="#C9A84C" className="mt-0.5 shrink-0" />
                      <span className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>{h}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group"
                  style={{ color: '#C9A84C' }}
                  onMouseEnter={(e) => (e.currentTarget.style.gap = '12px')}
                  onMouseLeave={(e) => (e.currentTarget.style.gap = '8px')}
                >
                  Selengkapnya
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
