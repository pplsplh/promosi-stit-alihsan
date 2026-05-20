import { BookOpen, Users, Award, Target } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const values = [
  {
    icon: BookOpen,
    title: 'Berilmu',
    desc: 'Menyelami keilmuan Islam dan pendidikan modern secara mendalam',
  },
  {
    icon: Users,
    title: 'Berakhlak',
    desc: 'Membentuk karakter yang mulia sesuai ajaran Al-Quran dan Sunnah',
  },
  {
    icon: Award,
    title: 'Berdedikasi',
    desc: 'Berkontribusi nyata bagi kemajuan pendidikan umat',
  },
  {
    icon: Target,
    title: 'Berprestasi',
    desc: 'Mencapai keunggulan di bidang akademik dan non-akademik',
  },
];

export default function AboutSection() {
  const ref = useScrollAnimation();

  return (
    <section
      id="profil"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a1a0f 0%, #1B4332 50%, #0a1a0f 100%)' }}
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af50' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
              Tentang Kami
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Membangun Peradaban Melalui
            <br />
            <span style={{ color: '#C9A84C' }}>Pendidikan Berkualitas</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            STIT Al-Ihsan Baleendah hadir sebagai lembaga pendidikan tinggi Islam yang berkomitmen
            mencetak generasi pendidik muslim profesional dan berakhlak mulia di Baleendah, Bandung.
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          {/* Left: Image placeholder with decorative frame */}
          <div className="animate-on-scroll relative">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(212,175,80,0.15), rgba(10,22,40,0.8))',
                border: '1px solid rgba(212,175,80,0.2)',
              }}
            >
              <img
                src="https://images.pexels.com/photos/25639566/pexels-photo-25639566.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="STIT Al-Ihsan Kampus"
                className="w-full h-64 md:h-80 object-cover mix-blend-luminosity opacity-60"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,22,40,0.7), rgba(212,175,80,0.1))' }} />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #C9A84C, #8B6914)' }}
                  >
                    <Award size={20} color="#0a1a0f" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Terakreditasi BAN-PT</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Perguruan Tinggi Swasta Islam</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative corner */}
            <div
              className="absolute -top-3 -left-3 w-8 h-8 pointer-events-none"
              style={{ borderTop: '2px solid #C9A84C', borderLeft: '2px solid #C9A84C' }}
            />
            <div
              className="absolute -bottom-3 -right-3 w-8 h-8 pointer-events-none"
              style={{ borderBottom: '2px solid #C9A84C', borderRight: '2px solid #C9A84C' }}
            />
          </div>

          {/* Right: Content */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Visi & Misi
            </h3>
            <div className="space-y-4 mb-8">
              <div
                className="p-4 rounded-xl"
                style={{ background: 'rgba(212,175,80,0.06)', border: '1px solid rgba(212,175,80,0.12)' }}
              >
                <div className="text-sm font-bold mb-1" style={{ color: '#C9A84C' }}>Visi</div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Menjadi perguruan tinggi Islam terdepan di Baleendah, Bandung yang menghasilkan tenaga pendidik
                  profesional, berakhlak mulia, dan berdaya saing di tingkat nasional.
                </p>
              </div>
              <div
                className="p-4 rounded-xl"
                style={{ background: 'rgba(212,175,80,0.06)', border: '1px solid rgba(212,175,80,0.12)' }}
              >
                <div className="text-sm font-bold mb-1" style={{ color: '#C9A84C' }}>Misi</div>
                <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#C9A84C' }}>&#8226;</span>
                    Menyelenggarakan pendidikan tinggi Islam yang berkualitas dan relevan
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#C9A84C' }}>&#8226;</span>
                    Mengembangkan penelitian ilmiah berbasis keislaman
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#C9A84C' }}>&#8226;</span>
                    Melakukan pengabdian masyarakat untuk kemajuan umat
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#C9A84C' }}>&#8226;</span>
                    Menjalin kerjasama strategis dengan lembaga pendidikan nasional dan internasional
                  </li>
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
              className="animate-on-scroll group p-5 md:p-6 rounded-xl text-center transition-all duration-300 cursor-default"
              style={{
                background: 'rgba(212,175,80,0.04)',
                border: '1px solid rgba(212,175,80,0.1)',
                transitionDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(212,175,80,0.1)';
                e.currentTarget.style.borderColor = 'rgba(212,175,80,0.3)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(212,175,80,0.04)';
                e.currentTarget.style.borderColor = 'rgba(212,175,80,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ background: 'rgba(212,175,80,0.15)' }}
              >
                <v.icon size={20} color="#C9A84C" />
              </div>
              <div className="text-white font-bold text-sm md:text-base mb-1">{v.title}</div>
              <div className="text-xs md:text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {v.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
