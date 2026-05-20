import { GraduationCap, Phone, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CTASection() {
  const ref = useScrollAnimation();

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#0d1a30' }}
    >
      {/* Top divider */}
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
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(212,175,80,0.06) 0%, transparent 60%)',
          borderRadius: '50%',
        }}
      />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-on-scroll">
          {/* Icon */}
          <div
            className="w-16 h-16 mx-auto mb-8 rounded-2xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #d4af50, #a07830)',
              boxShadow: '0 0 40px rgba(212,175,80,0.3)',
            }}
          >
            <GraduationCap size={28} color="#0a1628" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Siap Memulai Perjalanan
            <br />
            <span style={{ color: '#d4af50' }}>Akademik Anda?</span>
          </h2>

          <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Bergabunglah dengan ribuan alumni STIT Al-Ihsan yang telah berkontribusi
            bagi kemajuan pendidikan Islam di Indonesia. Pendaftaran dibuka sekarang!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #d4af50, #a07830)',
                color: '#0a1628',
                boxShadow: '0 4px 30px rgba(212,175,80,0.35)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(212,175,80,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 30px rgba(212,175,80,0.35)';
              }}
            >
              <GraduationCap size={16} />
              Daftar Mahasiswa Baru
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300"
              style={{
                background: 'transparent',
                color: '#ffffff',
                border: '1.5px solid rgba(212,175,80,0.5)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(212,175,80,0.1)';
                e.currentTarget.style.borderColor = '#d4af50';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(212,175,80,0.5)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Phone size={16} />
              Hubungi Kami
            </a>
          </div>

          {/* Info line */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              { label: 'Gelombang 1', value: 'Jan - Mar 2025' },
              { label: 'Gelombang 2', value: 'Apr - Jun 2025' },
              { label: 'Gelombang 3', value: 'Jul - Agu 2025' },
            ].map((g) => (
              <div key={g.label} className="text-center">
                <div className="text-sm font-bold" style={{ color: '#d4af50' }}>{g.label}</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{g.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
