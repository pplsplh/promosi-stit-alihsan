import { Calendar, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const news = [
  {
    category: 'Akademik',
    title: 'Pendaftaran Mahasiswa Baru Tahun Akademik 2025/2026 Resmi Dibuka',
    excerpt:
      'STIT Al-Ihsan membuka pendaftaran mahasiswa baru untuk dua program studi unggulan dengan berbagai kemudahan dan beasiswa.',
    date: '15 Mei 2025',
    image: 'https://images.pexels.com/photos/8780770/pexels-photo-8780770.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'Prestasi',
    title: 'Mahasiswa PAI Raih Juara Olimpiade Ilmu Al-Quran Tingkat Nasional',
    excerpt:
      'Siti Nurhaliza, mahasiswa semester 6, berhasil meraih juara 2 dalam kompetisi tahfidz dan tafsir Al-Quran tingkat nasional.',
    date: '2 April 2025',
    image: 'https://images.pexels.com/photos/8566532/pexels-photo-8566532.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'Kegiatan',
    title: 'Seminar Internasional: Pendidikan Islam di Era Digital',
    excerpt:
      'STIT Al-Ihsan menggelar seminar internasional menghadirkan pakar pendidikan Islam dari Universitas Al-Azhar dan UII Yogyakarta.',
    date: '20 Maret 2025',
    image: 'https://images.pexels.com/photos/25639566/pexels-photo-25639566.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const categoryColors: Record<string, string> = {
  Akademik: '#2d8cf0',
  Prestasi: '#28a745',
  Kegiatan: '#C9A84C',
};

export default function NewsSection() {
  const ref = useScrollAnimation();

  return (
    <section
      id="berita"
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
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
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
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <a
              key={i}
              href="#"
              className="animate-on-scroll group rounded-xl overflow-hidden transition-all duration-300"
              style={{
                background: 'rgba(212,175,80,0.03)',
                border: '1px solid rgba(212,175,80,0.08)',
                transitionDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212,175,80,0.25)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212,175,80,0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(10,22,40,0.8))' }}
                />
                <div
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: categoryColors[item.category] || '#C9A84C',
                    color: item.category === 'Kegiatan' ? '#0a1628' : '#ffffff',
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
                <h3 className="text-white font-bold text-sm md:text-base mb-2 leading-snug line-clamp-2 group-hover:text-white/90">
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
