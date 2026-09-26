import React from 'react';

/**
 * BrandLogo component for RO POINT
 * Renders the custom water droplet RO emblem matching the business brand identity
 */
export default function BrandLogo({ size = 'default', showSubtitle = true, invert = false, className = '' }) {
  const isLarge = size === 'large';
  const isSmall = size === 'small';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Dynamic Water RO Emblem */}
      <div className={`relative flex items-center justify-center shrink-0 ${isLarge ? 'w-14 h-14' : isSmall ? 'w-8 h-8' : 'w-11 h-11'}`}>
        <svg
          viewBox="0 0 160 120"
          className="w-full h-full drop-shadow-sm transition-transform hover:scale-105 duration-300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="roBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#003eaf" />
              <stop offset="60%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0046be" />
            </linearGradient>
            <linearGradient id="cyanWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00b4d8" />
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="dropGrad" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="60%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#034694" />
            </linearGradient>
          </defs>

          {/* Letter 'R' with bold stem & upper loop */}
          <path
            d="M18 20 H54 C72 20 84 30 84 46 C84 60 72 70 54 70 H36 V98 H18 V20 Z"
            fill="url(#roBlueGrad)"
          />
          <path
            d="M36 34 H52 C61 34 67 39 67 46 C67 53 61 58 52 58 H36 V34 Z"
            fill="#ffffff"
            opacity="0.95"
          />

          {/* Flowing Water Wave sweeping forward from the leg of R */}
          <path
            d="M36 68 C45 68 56 66 66 74 C78 84 94 98 120 102 C96 98 84 86 70 76 C60 70 48 70 36 70 Z"
            fill="url(#cyanWaveGrad)"
          />
          <path
            d="M18 84 C32 80 50 82 66 94 C82 106 102 110 128 108 C100 114 74 110 54 98 C38 88 28 86 18 84 Z"
            fill="url(#roBlueGrad)"
          />

          {/* Letter 'O' shaped as a Water Droplet outer ring */}
          <path
            d="M120 16 C120 16 148 54 148 76 C148 94 135 106 120 106 C105 106 92 94 92 76 C92 54 120 16 120 16 Z"
            fill="url(#roBlueGrad)"
          />
          {/* Inner droplet cutout */}
          <path
            d="M120 32 C120 32 138 60 138 76 C138 88 129 96 120 96 C111 96 102 88 102 76 C102 60 120 32 120 32 Z"
            fill={invert ? "#0f172a" : "#ffffff"}
          />

          {/* Inner Glowing Water Droplet */}
          <path
            d="M120 44 C120 44 132 64 132 74 C132 81 127 86 120 86 C113 86 108 81 108 74 C108 64 120 44 120 44 Z"
            fill="url(#dropGrad)"
          />
          {/* Light reflection gleam on droplet */}
          <ellipse cx="117" cy="68" rx="2" ry="4" fill="#ffffff" opacity="0.8" transform="rotate(-20 117 68)" />

          {/* Water ripples inside droplet base */}
          <path
            d="M104 82 C110 78 116 85 122 81 C128 78 134 83 136 85"
            stroke="url(#cyanWaveGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-black tracking-tight ${isLarge ? 'text-2xl' : isSmall ? 'text-lg' : 'text-xl'} ${invert ? 'text-white' : 'text-slate-900'}`}>
            RO <span className="text-sky-600">POINT</span>
          </span>
          <span className="inline-block px-1.5 py-0.5 text-[9px] font-bold uppercase rounded bg-sky-100 text-sky-700 tracking-wider">
            Water Purifier
          </span>
        </div>
        {showSubtitle && (
          <span className={`text-[10px] sm:text-[11px] font-medium tracking-wide mt-0.5 ${invert ? 'text-slate-300' : 'text-slate-600'}`}>
            Water Purifier & RO Solutions
          </span>
        )}
      </div>
    </div>
  );
}
