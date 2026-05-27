import { BookOpen, Users, Award, Target } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PARTICLES = [
  { id: 0, x: 5,  y: 15, size: 7,  dur: 9,  delay: 0   },
  { id: 1, x: 88, y: 22, size: 5,  dur: 11, delay: 1.2 },
  { id: 2, x: 42, y: 8,  size: 8,  dur: 8,  delay: 2.5 },
  { id: 3, x: 73, y: 60, size: 5,  dur: 13, delay: 0.7 },
  { id: 4, x: 18, y: 75, size: 4,  dur: 10, delay: 3.1 },
  { id: 5, x: 95, y: 85, size: 6,  dur: 7,  delay: 1.8 },
  { id: 6, x: 60, y: 90, size: 7,  dur: 12, delay: 0.3 },
  { id: 7, x: 30, y: 50, size: 4,  dur: 9,  delay: 4   },
  { id: 8, x: 80, y: 40, size: 5,  dur: 11, delay: 2   },
  { id: 9, x: 50, y: 30, size: 4,  dur: 8,  delay: 1.5 },
];

const values = [
  { icon: BookOpen, title: 'Berilmu',     desc: 'Menyelami keilmuan Islam dan pendidikan modern secara mendalam' },
  { icon: Users,    title: 'Berakhlak',   desc: 'Membentuk karakter yang mulia sesuai ajaran Al-Quran dan Sunnah' },
  { icon: Award,    title: 'Berdedikasi', desc: 'Berkontribusi nyata bagi kemajuan pendidikan umat' },
  { icon: Target,   title: 'Berprestasi', desc: 'Mencapai keunggulan di bidang akademik dan non-akademik' },
];

export default function AboutSection() {
  const ref = useScrollAnimation();

  return (
    <section
      id="profil"
      className="relative py-14 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0b2a1a 0%, #0f3a23 50%, #0b2a1a 100%)' }}
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af50' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

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

      {/* Radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: '-100px',
          top: '30%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(212,175,80,0.06) 0%, transparent 70%)',
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
            <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#d4af50' }}>
              Tentang Kami
            </span>
          </div>
          <h2 className="text-[1.85rem] md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Membangun Peradaban Melalui
            <span className="block mt-3" style={{ color: '#d4af50' }}>Pendidikan Berkualitas</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            STIT Al-Ihsan Baleendah hadir sebagai lembaga pendidikan tinggi Islam yang berkomitmen
            mencetak generasi pendidik muslim profesional dan berakhlak mulia di Baleendah, Bandung.
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          {/* Left: Image */}
          <div className="animate-on-scroll-left relative">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(212,175,80,0.15), rgba(11,42,26,0.8))',
                border: '1px solid rgba(212,175,80,0.2)',
              }}
            >
              <img
                src="/image/about-kampus.jpg"
                alt="STIT Al-Ihsan Kampus"
                className="w-full h-64 md:h-80 object-cover mix-blend-luminosity opacity-60"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(11,42,26,0.7), rgba(212,175,80,0.1))' }} />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #d4af50, #a07830)' }}
                  >
                    <Award size={20} color="#071a0d" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Terakreditasi BAN-PT</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Perguruan Tinggi Swasta Islam</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-3 -left-3 w-8 h-8 pointer-events-none" style={{ borderTop: '2px solid #d4af50', borderLeft: '2px solid #d4af50' }} />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 pointer-events-none" style={{ borderBottom: '2px solid #d4af50', borderRight: '2px solid #d4af50' }} />
          </div>

          {/* Right: Content */}
          <div className="animate-on-scroll-right">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Visi & Misi</h3>
            <div className="space-y-4 mb-8">
              <div
                className="p-4 rounded-xl"
                style={{ background: 'rgba(212,175,80,0.06)', border: '1px solid rgba(212,175,80,0.12)' }}
              >
                <div className="text-sm font-bold mb-1" style={{ color: '#d4af50' }}>Visi</div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Menjadi perguruan tinggi Islam terdepan di Baleendah, Bandung yang menghasilkan tenaga pendidik
                  profesional, berakhlak mulia, dan berdaya saing di tingkat nasional.
                </p>
              </div>
              <div
                className="p-4 rounded-xl"
                style={{ background: 'rgba(212,175,80,0.06)', border: '1px solid rgba(212,175,80,0.12)' }}
              >
                <div className="text-sm font-bold mb-1" style={{ color: '#d4af50' }}>Misi</div>
                <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  <li className="flex items-start gap-2"><span style={{ color: '#d4af50' }}>&#8226;</span>Menyelenggarakan pendidikan tinggi Islam yang berkualitas dan relevan</li>
                  <li className="flex items-start gap-2"><span style={{ color: '#d4af50' }}>&#8226;</span>Mengembangkan penelitian ilmiah berbasis keislaman</li>
                  <li className="flex items-start gap-2"><span style={{ color: '#d4af50' }}>&#8226;</span>Melakukan pengabdian masyarakat untuk kemajuan umat</li>
                  <li className="flex items-start gap-2"><span style={{ color: '#d4af50' }}>&#8226;</span>Menjalin kerjasama strategis dengan lembaga pendidikan nasional dan internasional</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="animate-on-scroll-scale group p-5 md:p-6 rounded-xl text-center transition-all duration-300 cursor-default"
              style={{
                background: 'rgba(212,175,80,0.04)',
                border: '1px solid rgba(212,175,80,0.1)',
                transitionDelay: `${i * 0.12}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(212,175,80,0.1)';
                e.currentTarget.style.borderColor = 'rgba(212,175,80,0.3)';
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(212,175,80,0.04)';
                e.currentTarget.style.borderColor = 'rgba(212,175,80,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(212,175,80,0.15)' }}
              >
                <v.icon size={20} color="#d4af50" />
              </div>
              <div className="text-white font-bold text-sm md:text-base mb-1">{v.title}</div>
              <div className="text-xs md:text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{v.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
