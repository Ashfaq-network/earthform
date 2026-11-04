import { useId } from 'react'

const TONES = {
  sage: { bg1: '#e9eee0', bg2: '#cbd6bc', ink: '#41503a', accent: '#93a583', soft: '#f6f2e5' },
  terra: { bg1: '#f4e3d7', bg2: '#e8c8b4', ink: '#8a4e36', accent: '#c67c5b', soft: '#fbf1e6' },
  rose: { bg1: '#f4e1dd', bg2: '#e6c6bf', ink: '#8a5a54', accent: '#d9a7a0', soft: '#fbf0ec' },
  butter: { bg1: '#f7edd4', bg2: '#ead9a8', ink: '#7a6636', accent: '#d8bc74', soft: '#fcf6e6' },
  moss: { bg1: '#dde4d4', bg2: '#b8c6a8', ink: '#2c382a', accent: '#6f8460', soft: '#eff3e7' },
}

const LABELS = {
  meadow: 'A whimsical meadow illustration',
  vase: 'Hand-thrown ceramic vase with stems',
  mug: 'Handmade stoneware mug',
  bowl: 'Handmade ceramic bowl',
  textile: 'Handwoven draped textile',
  bouquet: 'Wrapped bouquet of wildflowers',
  candle: 'Hand-poured botanical candle',
  basket: 'Woven basket',
  plate: 'Hand-painted ceramic plate',
  jar: 'Small-batch ceramic jar',
  wreath: 'Botanical wreath',
}

function Stems({ t, x = 200, y = 250, h = 90 }) {
  return (
    <g stroke={t.ink} strokeWidth="2.6" fill="none" strokeLinecap="round">
      <path d={`M${x} ${y} C ${x - 6} ${y - h * 0.4}, ${x + 10} ${y - h * 0.7}, ${x + 24} ${y - h}`} />
      <path d={`M${x} ${y} C ${x - 10} ${y - h * 0.35}, ${x - 26} ${y - h * 0.55}, ${x - 34} ${y - h * 0.8}`} />
      <path d={`M${x} ${y} C ${x + 2} ${y - h * 0.5}, ${x - 4} ${y - h * 0.75}, ${x + 4} ${y - h * 1.05}`} />
      <g fill={t.accent} stroke="none">
        <ellipse cx={x + 16} cy={y - h * 0.66} rx="10" ry="5.5" transform={`rotate(-38 ${x + 16} ${y - h * 0.66})`} />
        <ellipse cx={x - 20} cy={y - h * 0.52} rx="9" ry="5" transform={`rotate(34 ${x - 20} ${y - h * 0.52})`} />
        <ellipse cx={x + 2} cy={y - h * 0.88} rx="8" ry="4.5" transform="rotate(-8 202 160)" />
      </g>
    </g>
  )
}

function Variant({ variant, t }) {
  switch (variant) {
    case 'meadow':
      return (
        <g>
          <circle cx="200" cy="132" r="62" fill={t.soft} />
          <circle cx="200" cy="132" r="62" fill="none" stroke={t.ink} strokeWidth="1.5" opacity="0.35" />
          <path d="M-20 340 Q 80 270 180 330 T 420 320 V 520 H -20 Z" fill={t.accent} opacity="0.4" />
          <path d="M-20 392 Q 100 330 210 388 T 420 372 V 520 H -20 Z" fill={t.ink} opacity="0.2" />
          <g stroke={t.ink} strokeWidth="3" strokeLinecap="round" fill="none">
            <path d="M96 386c-2-26 2-44 10-60" />
            <path d="M304 392c2-24-2-42-10-58" />
            <path d="M236 376c-1-18 1-30 6-42" />
          </g>
          <g fill={t.soft} stroke={t.ink} strokeWidth="2">
            <circle cx="106" cy="322" r="9" />
            <circle cx="94" cy="338" r="7" />
            <circle cx="294" cy="330" r="9" />
            <circle cx="306" cy="346" r="6" />
            <circle cx="242" cy="330" r="7" />
          </g>
          <g fill={t.ink} opacity="0.55">
            <circle cx="106" cy="322" r="3" />
            <circle cx="294" cy="330" r="3" />
            <circle cx="242" cy="330" r="2.5" />
          </g>
          <g stroke={t.ink} strokeWidth="2" fill="none" opacity="0.7" strokeLinecap="round">
            <path d="M150 206c8-10 16-10 24 0" />
            <path d="M250 184c7-9 14-9 21 0" />
          </g>
        </g>
      )
    case 'vase':
      return (
        <g>
          <Stems t={t} x={200} y={286} h={96} />
          <path
            d="M166 286c-12-22-10-44 8-58h52c18 14 20 36 8 58-7 13-7 28 3 40h-74c10-12 10-27 3-40Z"
            fill={t.soft}
            stroke={t.ink}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M174 246h52" stroke={t.accent} strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
          <path d="M190 300c0-10 8-16 10-16s10 6 10 16" stroke={t.accent} strokeWidth="2" fill="none" opacity="0.75" />
        </g>
      )
    case 'mug':
      return (
        <g>
          <g stroke={t.ink} strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.65">
            <path d="M176 224c-6-10 6-14 0-24" />
            <path d="M198 220c-6-11 6-15 0-26" />
            <path d="M220 224c-6-10 6-14 0-24" />
          </g>
          <path
            d="M152 262h82v64a30 30 0 0 1-30 30h-22a30 30 0 0 1-30-30Z"
            fill={t.soft}
            stroke={t.ink}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M234 276c30-2 32 40 2 44" fill="none" stroke={t.ink} strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="193" cy="262" rx="41" ry="9" fill={t.accent} opacity="0.45" stroke={t.ink} strokeWidth="2.4" />
          <g stroke={t.accent} strokeWidth="2.2" fill="none" opacity="0.9">
            <path d="M193 292c-4-14 4-22 12-26" />
            <path d="M193 292c4-12 14-16 22-14" />
          </g>
        </g>
      )
    case 'bowl':
      return (
        <g>
          <path d="M120 300q80 120 160 0" fill={t.soft} stroke={t.ink} strokeWidth="3" strokeLinejoin="round" />
          <ellipse cx="200" cy="300" rx="80" ry="17" fill={t.accent} opacity="0.4" stroke={t.ink} strokeWidth="2.6" />
          <path d="M160 322q40 44 80 0" fill="none" stroke={t.ink} strokeWidth="2" opacity="0.5" />
          <g fill={t.ink} opacity="0.55">
            <circle cx="182" cy="344" r="3" />
            <circle cx="200" cy="352" r="3" />
            <circle cx="218" cy="344" r="3" />
          </g>
        </g>
      )
    case 'textile':
      return (
        <g>
          <path
            d="M116 250q30-22 60 0t60 0 60 0v128q-30 22-60 0t-60 0-60 0Z"
            fill={t.soft}
            stroke={t.ink}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <g stroke={t.ink} strokeWidth="1.8" fill="none" opacity="0.4">
            <path d="M150 258v118" />
            <path d="M184 268v108" />
            <path d="M218 262v116" />
            <path d="M252 270v104" />
          </g>
          <path d="M116 330q30 18 60 0t60 0 60 0" fill="none" stroke={t.accent} strokeWidth="2.4" opacity="0.8" />
          <g fill={t.accent} opacity="0.85">
            <circle cx="148" cy="300" r="4" />
            <circle cx="210" cy="316" r="4" />
            <circle cx="264" cy="298" r="4" />
          </g>
        </g>
      )
    case 'bouquet':
      return (
        <g>
          <Stems t={t} x={200} y={296} h={116} />
          <path d="M172 300h56l22 82h-100Z" fill={t.soft} stroke={t.ink} strokeWidth="3" strokeLinejoin="round" />
          <path d="M184 322h32" stroke={t.accent} strokeWidth="2.4" strokeLinecap="round" />
          <g fill={t.soft} stroke={t.ink} strokeWidth="2.2">
            <circle cx="176" cy="196" r="13" />
            <circle cx="220" cy="180" r="15" />
            <circle cx="248" cy="220" r="12" />
            <circle cx="152" cy="232" r="10" />
          </g>
          <g fill={t.accent}>
            <circle cx="176" cy="196" r="5" />
            <circle cx="220" cy="180" r="5.5" />
            <circle cx="248" cy="220" r="4.5" />
            <circle cx="152" cy="232" r="4" />
          </g>
        </g>
      )
    case 'candle':
      return (
        <g>
          <path
            d="M156 300h88v74q0 24-24 24h-40q-24 0-24-24Z"
            fill={t.soft}
            stroke={t.ink}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M156 320h88" stroke={t.ink} strokeWidth="2" opacity="0.4" />
          <rect x="178" y="336" width="44" height="34" rx="4" fill={t.accent} opacity="0.35" />
          <g stroke={t.accent} strokeWidth="2" fill="none">
            <path d="M200 356c-5-8 5-12 0-20" />
          </g>
          <path
            d="M200 300c-9-12 0-26 0-26s9 14 0 26Z"
            fill={t.ink}
            opacity="0.8"
          />
          <path d="M200 294c-4-6 0-13 0-13s4 7 0 13Z" fill={t.soft} />
        </g>
      )
    case 'basket':
      return (
        <g>
          <path d="M152 320q48-108 96 0" fill="none" stroke={t.ink} strokeWidth="3" strokeLinecap="round" />
          <path d="M136 320h128l-16 74h-96Z" fill={t.soft} stroke={t.ink} strokeWidth="3" strokeLinejoin="round" />
          <g stroke={t.ink} strokeWidth="1.8" opacity="0.45" fill="none">
            <path d="M146 344h108" />
            <path d="M152 366h96" />
            <path d="M170 322l-6 70" />
            <path d="M200 322v70" />
            <path d="M230 322l6 70" />
          </g>
          <g fill={t.accent} opacity="0.9">
            <circle cx="176" cy="316" r="7" />
            <circle cx="204" cy="312" r="8" />
            <circle cx="230" cy="318" r="6" />
          </g>
        </g>
      )
    case 'plate':
      return (
        <g>
          <ellipse cx="200" cy="330" rx="96" ry="30" fill={t.soft} stroke={t.ink} strokeWidth="3" />
          <ellipse cx="200" cy="326" rx="70" ry="20" fill="none" stroke={t.ink} strokeWidth="1.8" opacity="0.45" />
          <g stroke={t.accent} strokeWidth="2.4" fill="none" strokeLinecap="round">
            <path d="M188 330c-2-14 4-22 12-26" />
            <path d="M212 330c2-12-3-20-10-24" />
            <path d="M200 304v26" />
          </g>
          <g fill={t.accent} opacity="0.8">
            <circle cx="200" cy="330" r="3" />
          </g>
        </g>
      )
    case 'jar':
      return (
        <g>
          <path d="M168 268h64l-6-22h-52Z" fill={t.accent} opacity="0.5" stroke={t.ink} strokeWidth="2.6" />
          <path
            d="M164 268h72v78q0 26-26 26h-20q-26 0-26-26Z"
            fill={t.soft}
            stroke={t.ink}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <rect x="178" y="300" width="44" height="40" rx="6" fill={t.accent} opacity="0.3" />
          <g stroke={t.ink} strokeWidth="2" fill="none" opacity="0.75">
            <path d="M200 330c-3-10 4-16 10-18" />
            <path d="M200 330c4-8 11-11 16-9" />
          </g>
        </g>
      )
    case 'wreath':
      return (
        <g>
          <circle cx="200" cy="288" r="70" fill="none" stroke={t.ink} strokeWidth="2.4" opacity="0.35" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
            <g key={deg} transform={`rotate(${deg} 200 288)`}>
              <ellipse
                cx="200"
                cy="214"
                rx="14"
                ry="7"
                fill={i % 2 ? t.accent : t.soft}
                stroke={t.ink}
                strokeWidth="1.8"
                opacity={i % 2 ? 0.85 : 1}
              />
            </g>
          ))}
          <g fill={t.soft} stroke={t.ink} strokeWidth="2">
            <circle cx="200" cy="206" r="9" />
            <circle cx="246" cy="262" r="8" />
            <circle cx="154" cy="262" r="8" />
          </g>
          <g fill={t.accent}>
            <circle cx="200" cy="206" r="3.4" />
            <circle cx="246" cy="262" r="3" />
            <circle cx="154" cy="262" r="3" />
          </g>
        </g>
      )
    default:
      return <Variant variant="vase" t={t} />
  }
}

export default function PlaceholderArt({ variant = 'vase', tone = 'sage', className = '', title }) {
  const rawId = useId()
  const id = rawId.replace(/[:]/g, '')
  const t = TONES[tone] || TONES.sage
  const label = title || LABELS[variant] || 'A handmade illustration'

  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      role="img"
      aria-label={label}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0%" stopColor={t.bg1} />
          <stop offset="100%" stopColor={t.bg2} />
        </linearGradient>
        <radialGradient id={`sun-${id}`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor={t.soft} />
          <stop offset="100%" stopColor={t.soft} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill={`url(#bg-${id})`} />
      <circle cx="200" cy="210" r="170" fill={`url(#sun-${id})`} opacity="0.7" />
      <g opacity="0.5">
        <circle cx="64" cy="92" r="26" fill={t.soft} opacity="0.6" />
        <circle cx="338" cy="150" r="14" fill={t.soft} opacity="0.5" />
      </g>
      <Variant variant={variant} t={t} />
      <g fill={t.ink} opacity="0.16">
        <circle cx="52" cy="440" r="3" />
        <circle cx="72" cy="460" r="2" />
        <circle cx="334" cy="438" r="2.5" />
        <circle cx="352" cy="462" r="3" />
      </g>
    </svg>
  )
}
