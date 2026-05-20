import { GraduationCap, BookOpen, Users, Globe, Library, HeartHandshake } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  { icon: GraduationCap,  title: 'Dosen Berkualitas',  desc: 'Tenaga pengajar bergelar magister dan doktor dari universitas terkemuka dalam dan luar negeri.' },
  { icon: BookOpen,       title: 'Kurikulum Terkini',  desc: 'Kurikulum berbasis KKNI dan SN-Dikti yang mengintegrasikan keilmuan Islam dengan pendidikan modern.' },
  { icon: Users,          title: 'Bimbingan Intensif', desc: 'Sistem pembimbing akademik dan skripsi yang intensif untuk memastikan kelulusan tepat waktu.' },
  { icon: Globe,          title: 'Kerjasama Luas',     desc: 'MoU dengan pondok pesantren, madrasah, dan lembaga pendidikan nasional serta internasional.' },
  { icon: Library,        title: 'Fasilitas Lengkap',  desc: 'Perpustakaan digital, laboratorium microteaching, dan ruang seminar yang memadai.' },
  { icon: HeartHandshake, title: 'Beasiswa Tersedia',  desc: 'Program beasiswa prestasi, KIP-Kuliah, dan bantuan biaya bagi mahasiswa berprestasi.' },
];

const ANIM = ['animate-on-scroll-left', 'animate-on-scroll', 'animate-on-scroll-right'];

export default function FeaturesSection() {
  const ref = useScrollAnimation();

  return (
    <section
      id="keunggulan"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0b2a1a 0%, #0b2f1f 50%, #0b2a1a 100%)' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,80,0.2), transparent)' }}
      />

      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
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
              Keunggulan
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Mengapa Memilih
            <br />
            <span style={{ color: '#C9A84C' }}>STIT Al-Ihsan?</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Komitmen kami terhadap kualitas pendidikan Islam terwujud dalam setiap aspek
            penyelenggaraan akademik dan kemahasiswaan.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`${ANIM[i % 3]} group p-6 md:p-7 rounded-xl transition-all duration-300 cursor-default`}
              style={{
                background: 'rgba(212,175,80,0.03)',
                border: '1px solid rgba(212,175,80,0.08)',
                transitionDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(212,175,80,0.08)';
                e.currentTarget.style.borderColor = 'rgba(212,175,80,0.25)';
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(212,175,80,0.03)';
                e.currentTarget.style.borderColor = 'rgba(212,175,80,0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                style={{ background: 'rgba(212,175,80,0.12)' }}
              >
                <f.icon size={22} color="#C9A84C" />
              </div>
              <h3 className="text-white font-bold text-base md:text-lg mb-2">{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
