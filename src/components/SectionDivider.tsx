import { useId } from 'react';

// 4-pointed sparkle dengan sisi concave yang terkontrol.
// a=0 → control di center (paling slim), a=1 → mendekati straight (paling berisi).
// a=0.35 memberikan bentuk berisi tapi tetap sparkle.
function SparkleShape({
  cx, cy, ry, rx, a = 0.35,
  fillOpacity = 1, fill = '#C9A84C',
  stroke, strokeOpacity, strokeWidth,
}: {
  cx: number; cy: number; ry: number; rx: number; a?: number;
  fillOpacity?: number; fill?: string;
  stroke?: string; strokeOpacity?: number; strokeWidth?: number;
}) {
  const t = cy - ry, b = cy + ry, l = cx - rx, r = cx + rx;
  const dx = rx * a, dy = ry * a;
  // Control points di antara center dan sudut bounding box
  const d = [
    `M ${cx},${t}`,
    `Q ${cx + dx},${cy - dy} ${r},${cy}`,
    `Q ${cx + dx},${cy + dy} ${cx},${b}`,
    `Q ${cx - dx},${cy + dy} ${l},${cy}`,
    `Q ${cx - dx},${cy - dy} ${cx},${t}`,
    'Z',
  ].join(' ');
  return (
    <path
      d={d}
      fill={fill}
      fillOpacity={fillOpacity}
      stroke={stroke}
      strokeOpacity={strokeOpacity}
      strokeWidth={strokeWidth}
    />
  );
}

export default function SectionDivider() {
  const uid = useId().replace(/[^a-z0-9]/gi, '');

  return (
    <div style={{ position: 'relative', height: 0, overflow: 'visible', zIndex: 10, pointerEvents: 'none' }}>
      <div style={{ position: 'absolute', top: '-28px', left: 0, right: 0, height: '56px', overflow: 'visible' }}>
        <style>{`
          @keyframes ${uid}ring {
            0%   { transform: scale(1);   opacity: 0.6; }
            100% { transform: scale(3.2); opacity: 0;   }
          }
          @keyframes ${uid}glow {
            0%, 100% { opacity: 0.18; }
            50%       { opacity: 0.52; }
          }
          .${uid}r1 {
            animation: ${uid}ring 2.6s ease-out infinite;
            transform-box: fill-box;
            transform-origin: center;
          }
          .${uid}r2 {
            animation: ${uid}ring 2.6s ease-out 1s infinite;
            transform-box: fill-box;
            transform-origin: center;
          }
          .${uid}bg {
            filter: blur(12px);
            animation: ${uid}glow 2.6s ease-in-out infinite;
          }
        `}</style>

        <svg
          viewBox="0 0 700 56"
          preserveAspectRatio="xMidYMid meet"
          width="100%"
          height="56"
          overflow="visible"
        >
          <defs>
            <linearGradient id={`${uid}L`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C9A84C" stopOpacity="0" />
              <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id={`${uid}R`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Lines */}
          <line x1="0"   y1="28" x2="262" y2="28" stroke={`url(#${uid}L)`} strokeWidth="0.8" />
          <line x1="438" y1="28" x2="700" y2="28" stroke={`url(#${uid}R)`} strokeWidth="0.8" />

          {/* 4 side sparkles — semua ukuran SAMA, proporsi square rx≈ry */}
          <SparkleShape cx={276} cy={28} rx={9} ry={12} fillOpacity={0.55} />
          <SparkleShape cx={308} cy={28} rx={9} ry={12} fillOpacity={0.55} />
          <SparkleShape cx={392} cy={28} rx={9} ry={12} fillOpacity={0.55} />
          <SparkleShape cx={424} cy={28} rx={9} ry={12} fillOpacity={0.55} />

          {/* Glow halo */}
          <ellipse cx={350} cy={28} rx={22} ry={22} fill="#C9A84C" className={`${uid}bg`} />

          {/* Pulse rings */}
          <circle cx={350} cy={28} r={20} fill="none" stroke="#C9A84C" strokeWidth="1.2" className={`${uid}r1`} />
          <circle cx={350} cy={28} r={20} fill="none" stroke="#C9A84C" strokeWidth="0.7" className={`${uid}r2`} />

          {/* Main sparkle */}
          <SparkleShape cx={350} cy={28} ry={26} rx={19} fillOpacity={0.93} />
        </svg>
      </div>
    </div>
  );
}
