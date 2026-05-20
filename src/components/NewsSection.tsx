import { Calendar, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PARTICLES = [
  { id: 0, x: 10, y: 12, size: 6,  dur: 9,  delay: 0.4 },
  { id: 1, x: 90, y: 30, size: 5,  dur: 11, delay: 1.9 },
  { id: 2, x: 45, y: 5,  size: 8,  dur: 8,  delay: 0.8 },
  { id: 3, x: 70, y: 65, size: 5,  dur: 13, delay: 3.2 },
  { id: 4, x: 22, y: 80, size: 6,  dur: 10, delay: 0   },
  { id: 5, x: 85, y: 88, size: 4,  dur: 7,  delay: 2.6 },
  { id: 6, x: 55, y: 92, size: 6,  dur: 12, delay: 1.4 },
  { id: 7, x: 33, y: 48, size: 5,  dur: 9,  delay: 4.1 },
];

const news = [
  {
    category: 'Akademik',
    title: 'Pendaftaran Mahasiswa Baru Tahun Akademik 2026/2027 Resmi Dibuka',
    excerpt: 'STIT Al-Ihsan membuka pendaftaran mahasiswa baru untuk dua program studi unggulan dengan berbagai kemudahan dan beasiswa.',
    date: '1 Februari - 19 September 2026',
    image: '/image/PMB.jpg',
  },
  {
    category: 'Prestasi',
    title: 'Mahasiswa MPI Raih Juara Olimpiade Ilmu Hadits Tingkat Nasional',
    excerpt: 'Dudu Dzuriyah, Mahasiswa Program Studi Manajemen Pendidikan Islam (MPI) STIT Al-Ihsan, berhasil meraih juara 1 dalam Olimpiade Ilmu Hadits tingkat nasional.',
    date: '6 Desember 2024',
    image: '/image/prestasi-1.jpg',
  },
  {
    category: 'Kegiatan',
    title: 'NAKAMAKRAB: Semarak Malam Keakraban Mahasiswa',
    excerpt: '"Wherever you go, STIT Al-Ihsan still your home!", yang mengindikasikan bahwa ini adalah acara internal kampus untuk mempererat tali persaudaraan, team building, atau penyambutan mahasiswa baru/reuni alumni.',
    date: '17-18 Januari 2026',
    image: '/image/kegiatan-nakamakrab.jpg',
  },
];

const categoryColors: Record<string, string> = {
  Akademik: '#1a7a50',
  Prestasi: '#28a745',
  Kegiatan: '#C9A84C',
};

const CARD_ANIM = ['animate-on-scroll-left', 'animate-on-scroll', 'animate-on-scroll-right'];

export default function NewsSection() {
  const ref = useScrollAnimation();

  return (
    <section
      id="berita"
      className="relative py-14 md:py-32 overflow-hidden"
      style={{ background: '#0b2f1f' }}
    >

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
            background: 'rgba(212,175,80,0.75)', zIndex: 0,
            animation: `${p.id % 2 === 0 ? 'floatParticle' : 'floatParticle2'} ${p.dur}s ${p.delay}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 animate-on-scroll">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{ background: 'rgba(212,175,80,0.1)', border: '1px solid rgba(212,175,80,0.25)' }}
            >
              <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#C9A84C' }}>
                Berita & Kegiatan
              </span>
            </div>
            <h2 className="text-[1.85rem] md:text-5xl font-extrabold text-white leading-tight">
              Informasi
              <br />
              <span style={{ color: '#C9A84C' }}>Terbaru</span>
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-4 md:mt-0 text-sm font-semibold transition-all duration-300 group"
            style={{ color: '#C9A84C' }}
          >
            Lihat Semua Berita
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* News cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <a
              key={i}
              href="#"
              className={`${CARD_ANIM[i]} group rounded-xl overflow-hidden transition-all duration-300`}
              style={{
                background: 'rgba(212,175,80,0.03)',
                border: '1px solid rgba(212,175,80,0.08)',
                transitionDelay: `${i * 0.12}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212,175,80,0.25)';
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212,175,80,0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
                {/* force consistent aspect ratio (16:9) for all news images */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(11,42,26,0.8))' }}
                />
                <div
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: categoryColors[item.category] || '#C9A84C',
                    color: item.category === 'Kegiatan' ? '#071a0d' : '#ffffff',
                  }}
                >
                  {item.category}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 mb-2.5">
                  <Calendar size={12} color="#C9A84C" />
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{item.date}</span>
                </div>
                <h3 className="text-white font-bold text-sm md:text-base mb-2 leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm leading-relaxed line-clamp-2" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {item.excerpt}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
