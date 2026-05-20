import { GraduationCap, MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react';

const quickLinks = [
  { label: 'Beranda', href: '#' },
  { label: 'Profil', href: '#profil' },
  { label: 'Program Studi', href: '#program-studi' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Berita', href: '#berita' },
];

const programLinks = [
  { label: 'Pendidikan Agama Islam (S1)', href: '#' },
  { label: 'Manajemen Pendidikan Islam (S1)', href: '#' },
  { label: 'Pendaftaran Mahasiswa Baru', href: '#' },
  { label: 'Beasiswa', href: '#' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: '#0a1a0f' }}
    >
      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,80,0.2), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-full"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #8B6914)' }}
              >
                <GraduationCap size={20} color="#0a1628" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-tight">STIT Al-Ihsan</div>
                <div className="text-xs" style={{ color: '#C9A84C' }}>Baleendah, Bandung</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Sekolah Tinggi Ilmu Tarbiyah Al-Ihsan Baleendah — Mencetak generasi pendidik
              muslim yang berakhlak, berilmu, dan berdedikasi.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Tautan Cepat</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.4)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Program & Layanan</h4>
            <ul className="space-y-2.5">
              {programLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.4)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} color="#C9A84C" className="mt-0.5 shrink-0" />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Jl. Adipati Agung No. 40 Baleendah, Kabupaten Bandung
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} color="#C9A84C" className="shrink-0" />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  (031) 309-1234
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} color="#C9A84C" className="shrink-0" />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  info@stit-alihsan.ac.id
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock size={14} color="#C9A84C" className="shrink-0" />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Sen - Sab: 08.00 - 16.00 WIB
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(212,175,80,0.1)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            &copy; {new Date().getFullYear()} STIT Al-Ihsan Baleendah. Hak cipta dilindungi.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-medium transition-colors duration-200"
            style={{ color: 'rgba(255,255,255,0.3)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
          >
            <ArrowUp size={12} />
            Kembali ke Atas
          </button>
        </div>
      </div>
    </footer>
  );
}
