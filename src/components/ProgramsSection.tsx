import { BookOpen, GraduationCap, ArrowRight, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PARTICLES = [
  { id: 0, x: 3,  y: 10, size: 6,  dur: 11, delay: 0   },
  { id: 1, x: 96, y: 25, size: 5,  dur: 9,  delay: 2.3 },
  { id: 2, x: 48, y: 3,  size: 7,  dur: 8,  delay: 1.1 },
  { id: 3, x: 20, y: 55, size: 4,  dur: 13, delay: 3   },
  { id: 4, x: 82, y: 70, size: 6,  dur: 10, delay: 0.6 },
  { id: 5, x: 65, y: 88, size: 5,  dur: 12, delay: 1.8 },
  { id: 6, x: 35, y: 80, size: 6,  dur: 7,  delay: 4.2 },
  { id: 7, x: 90, y: 50, size: 7,  dur: 9,  delay: 0.4 },
  { id: 8, x: 15, y: 35, size: 4,  dur: 11, delay: 2.7 },
];

const programs = [
  {
    name: 'Pendidikan Guru Madrasah Ibtidaiyah',
    shortName: 'PGMI',
    degree: 'S1',
    url: 'https://pgmi.stitalihsan.ac.id/public/',
    waText: 'Halo%2C%20saya%20ingin%20informasi%20tentang%20prodi%20PGMI%20STIT%20Al-Ihsan',
    description:
      'Program studi yang mempersiapkan tenaga pendidik kelas MI (Madrasah Ibtidaiyah) yang profesional dengan penguasaan ilmu keislaman, pedagogik, dan keterampilan mengajar yang mumpuni.',
    highlights: [
      'Kurikulum berbasis KKNI & SN-Dikti',
      'Praktik mengajar di madrasah & sekolah',
      'Mata kuliah tafsir, hadits, fiqih, & akhlak',
      'Sertifikasi kompetensi pendidik',
    ],
    image: '/image/PGMI-1.jpg',
  },
  {
    name: 'Manajemen Pendidikan Islam',
    shortName: 'MPI',
    degree: 'S1',
    url: 'https://mpi.stitalihsan.ac.id/',
    waText: 'Halo%2C%20saya%20ingin%20informasi%20tentang%20prodi%20MPI%20STIT%20Al-Ihsan',
    description:
      'Program studi yang mencetak pengelola lembaga pendidikan Islam yang handal, mampu memimpin madrasah, pesantren, dan institusi pendidikan Islam lainnya.',
    highlights: [
      'Manajemen lembaga pendidikan Islam',
      'Kepemimpinan & kewirausahaan pendidikan',
      'Praktik manajemen di lembaga pendidikan',
      'Kerjasama dengan pondok pesantren',
    ],
    image: '/image/program-mpi-2.jpg',
  },
];

const CARD_ANIM = ['animate-on-scroll-left', 'animate-on-scroll-right'];
export default function ProgramsSection() {
  const ref = useScrollAnimation();

  return (
    <section
      id="program-studi"
      className="relative py-14 md:py-32 overflow-hidden"
      style={{ background: '#0b2f1f' }}
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
            background: 'rgba(212,175,80,0.75)', zIndex: 0,
            animation: `${p.id % 2 === 0 ? 'floatParticle' : 'floatParticle2'} ${p.dur}s ${p.delay}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      {/* Side glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '-80px',
          top: '40%',
          width: '320px',
          height: '320px',
          background: 'radial-gradient(circle, rgba(212,175,80,0.05) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          right: '-80px',
          bottom: '20%',
          width: '320px',
          height: '320px',
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
            <BookOpen size={14} color="#d4af50" />
            <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#d4af50' }}>
              Program Studi
            </span>
          </div>
          <h2 className="text-[1.85rem] md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Pilihan Program Studi
            <br />
            <span style={{ color: '#d4af50' }}>Unggulan</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Dua program studi S1 yang dirancang untuk mencetak generasi pendidik dan pengelola
            pendidikan Islam yang profesional dan berdaya saing.
          </p>
        </div>

        {/* Program cards */}
        <div className="space-y-8 md:space-y-12">
          {programs.map((prog, idx) => {
            const CardWrapper = prog.url ? 'a' : 'div';
            const wrapperProps = prog.url
              ? { href: prog.url, target: '_blank', rel: 'noopener noreferrer' }
              : {};
            return (
            <CardWrapper
              key={prog.shortName}
              {...wrapperProps}
              className={`${CARD_ANIM[idx]} grid md:grid-cols-2 gap-6 md:gap-10 items-center rounded-2xl overflow-hidden select-none`}
              style={{
                background: 'rgba(212,175,80,0.03)',
                border: '1px solid rgba(212,175,80,0.1)',
                transitionDelay: `${idx * 0.15}s`,
                transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                cursor: prog.url ? 'pointer' : 'default',
                display: 'grid',
                textDecoration: 'none',
              }}
              onMouseEnter={prog.url ? (e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.35), 0 0 0 1px rgba(212,175,80,0.25)';
              } : undefined}
              onMouseLeave={prog.url ? (e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              } : undefined}
              onMouseDown={prog.url ? (e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(0.98)';
              } : undefined}
              onMouseUp={prog.url ? (e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
              } : undefined}
              onTouchStart={prog.url ? (e: React.TouchEvent<HTMLElement>) => {
                e.currentTarget.style.transform = 'scale(0.97)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)';
              } : undefined}
              onTouchEnd={prog.url ? (e: React.TouchEvent<HTMLElement>) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              } : undefined}
            >
              {/* Image side */}
              <div className={`relative p-4 md:p-0 ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.name}
                    loading="lazy" decoding="async"
                    className="w-full h-56 md:h-72 object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(135deg, rgba(11,42,26,0.6), rgba(212,175,80,0.1))' }}
                  />
                  <div
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold"
                    style={{ background: 'linear-gradient(135deg, #d4af50, #a07830)', color: '#071a0d' }}
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
                    <GraduationCap size={18} color="#d4af50" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{prog.name}</h3>
                    <div className="text-xs font-medium" style={{ color: '#d4af50' }}>{prog.shortName}</div>
                  </div>
                </div>

                <p className="text-sm md:text-base leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {prog.description}
                </p>

                <div className="space-y-2.5 mb-6">
                  {prog.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5">
                      <CheckCircle size={16} color="#d4af50" className="mt-0.5 shrink-0" />
                      <span className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>{h}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/6282135402248?text=${prog.waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group"
                  style={{ color: '#C9A84C' }}
                  onMouseEnter={(e) => (e.currentTarget.style.gap = '12px')}
                  onMouseLeave={(e) => (e.currentTarget.style.gap = '8px')}
                >
                  Tanya via WhatsApp
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
