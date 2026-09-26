import React, { useState } from 'react';

/**
 * SafeImage Component - Amazon & Flipkart Clean Style
 * Displays product images on a crisp studio background with instant, high-definition
 * photo-style SVG fallbacks matching the exact equipment:
 * - Domestic RO (Kent, Aquaguard, Livpure, Aqua Tejas, RO Point)
 * - Commercial RO Plants (25 to 10000 LPH stainless steel skid plants)
 * - Storage & Instant Geysers
 * - RO Membranes, Booster Pumps, SMPS, Inline Filters, UV, Valves
 */
export default function SafeImage({
  src,
  alt,
  category = '',
  subcategory = '',
  brand = '',
  className = '',
  imgClassName = '',
  showZoomHint = false
}) {
  const [hasError, setHasError] = useState(!src);

  if (hasError || !src) {
    return (
      <div className={`relative flex items-center justify-center bg-white p-3 select-none overflow-hidden ${className}`}>
        {/* Amazon/Flipkart Clean Studio Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white to-sky-50/30 pointer-events-none" />

        {renderCategoryIllustration(category, subcategory, brand)}

        {/* Brand Stamp Watermark */}
        <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded text-[11px] font-black uppercase tracking-wider bg-slate-900/90 text-white shadow-xs">
          {brand || 'RO POINT'}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden flex items-center justify-center bg-white ${className}`}>
      <img
        src={src}
        alt={alt || 'Product Image'}
        loading="lazy"
        onError={() => setHasError(true)}
        className={`w-full h-full object-contain transition-transform duration-500 ${imgClassName}`}
      />
      {showZoomHint && (
        <span className="absolute bottom-2 right-2 text-xs font-semibold text-slate-500 bg-white/90 px-2 py-0.5 rounded border border-slate-200 shadow-2xs pointer-events-none">
          🔍 Hover to zoom
        </span>
      )}
    </div>
  );
}

function renderCategoryIllustration(category = '', subcategory = '', brand = '') {
  const lowerCat = (category + ' ' + subcategory).toLowerCase();

  // 1. Commercial RO Plant (Stainless Steel Skid with Vessels & Vertical Multistage Pump)
  if (lowerCat.includes('commercial') || lowerCat.includes('plant') || lowerCat.includes('lph')) {
    return (
      <svg viewBox="0 0 200 170" className="w-full h-full max-h-48 drop-shadow-md" fill="none">
        {/* Base Skid Frame (SS 304) */}
        <rect x="15" y="138" width="170" height="14" rx="3" fill="#475569" stroke="#334155" strokeWidth="1.5" />
        <rect x="25" y="152" width="16" height="8" rx="2" fill="#1e293b" />
        <rect x="159" y="152" width="16" height="8" rx="2" fill="#1e293b" />
        <rect x="92" y="152" width="16" height="8" rx="2" fill="#1e293b" />

        {/* Vertical Frame Pillars */}
        <rect x="18" y="25" width="8" height="113" fill="#94a3b8" />
        <rect x="174" y="25" width="8" height="113" fill="#94a3b8" />
        <rect x="18" y="25" width="164" height="8" fill="#cbd5e1" />

        {/* Dual FRP Media Columns (Sand & Carbon) */}
        {/* Vessel 1 */}
        <rect x="36" y="33" width="28" height="95" rx="8" fill="url(#frpVessel1)" stroke="#0369a1" strokeWidth="1.5" />
        <ellipse cx="50" cy="33" rx="14" ry="5" fill="#38bdf8" />
        <rect x="46" y="20" width="8" height="14" fill="#0f172a" />
        <circle cx="50" cy="20" r="5" fill="#38bdf8" />

        {/* Vessel 2 */}
        <rect x="72" y="33" width="28" height="95" rx="8" fill="url(#frpVessel2)" stroke="#0284c7" strokeWidth="1.5" />
        <ellipse cx="86" cy="33" rx="14" ry="5" fill="#38bdf8" />
        <rect x="82" y="20" width="8" height="14" fill="#0f172a" />
        <circle cx="86" cy="20" r="5" fill="#38bdf8" />

        {/* Horizontal Industrial RO Membrane Pressure Vessels (SS / FRP 4040/8040) */}
        <rect x="110" y="38" width="60" height="18" rx="5" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
        <rect x="110" y="62" width="60" height="18" rx="5" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
        <circle cx="115" cy="47" r="3" fill="#0284c7" />
        <circle cx="115" cy="71" r="3" fill="#0284c7" />
        <rect x="125" y="44" width="30" height="6" rx="1" fill="#0284c7" />
        <rect x="125" y="68" width="30" height="6" rx="1" fill="#0284c7" />

        {/* High-Pressure Vertical Multistage Pump */}
        <rect x="118" y="92" width="22" height="42" rx="4" fill="#1e293b" />
        <rect x="122" y="84" width="14" height="8" fill="#0284c7" />
        <circle cx="129" cy="108" r="4" fill="#38bdf8" />
        <line x1="120" y1="118" x2="138" y2="118" stroke="#38bdf8" strokeWidth="1.5" />

        {/* Electronic Control Panel Box with Pressure Gauges */}
        <rect x="148" y="90" width="22" height="34" rx="3" fill="#0f172a" stroke="#334155" strokeWidth="1" />
        <circle cx="159" cy="100" r="4.5" fill="#ffffff" stroke="#ef4444" strokeWidth="1.5" />
        <circle cx="159" cy="114" r="4.5" fill="#ffffff" stroke="#10b981" strokeWidth="1.5" />

        <defs>
          <linearGradient id="frpVessel1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0369a1" />
            <stop offset="50%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#075985" />
          </linearGradient>
          <linearGradient id="frpVessel2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 2. Geyser & Water Heaters
  if (lowerCat.includes('geyser') || lowerCat.includes('heater')) {
    return (
      <svg viewBox="0 0 200 170" className="w-full h-full max-h-48 drop-shadow-md" fill="none">
        {/* Outer Cylindrical Geyser Body */}
        <rect x="52" y="18" width="96" height="120" rx="22" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2.5" />
        <rect x="60" y="24" width="80" height="108" rx="18" fill="url(#geyserBodyGrad)" />

        {/* Front Control Panel */}
        <rect x="80" y="45" width="40" height="58" rx="8" fill="#0f172a" />
        {/* Digital Temp Display */}
        <rect x="86" y="52" width="28" height="16" rx="4" fill="#020617" stroke="#334155" strokeWidth="1" />
        <text x="91" y="64" fill="#22c55e" fontSize="11" fontWeight="bold" fontFamily="monospace">65°C</text>

        {/* Heating Indicator LEDs */}
        <circle cx="93" cy="80" r="3.5" fill="#ef4444" />
        <circle cx="107" cy="80" r="3.5" fill="#22c55e" />

        {/* Rotary Thermostat Knob */}
        <circle cx="100" cy="92" r="6" fill="#64748b" stroke="#cbd5e1" strokeWidth="1.5" />
        <line x1="100" y1="88" x2="100" y2="92" stroke="#ffffff" strokeWidth="2" />

        {/* Hot & Cold Inlet/Outlet Brass Nipples */}
        <rect x="75" y="138" width="10" height="16" rx="2" fill="#0284c7" />
        <rect x="115" y="138" width="10" height="16" rx="2" fill="#ef4444" />
        <text x="73" y="165" fill="#0284c7" fontSize="8" fontWeight="bold" fontFamily="sans-serif">COLD</text>
        <text x="115" y="165" fill="#ef4444" fontSize="8" fontWeight="bold" fontFamily="sans-serif">HOT</text>

        {/* 5-Star Energy Label Emblem */}
        <rect x="118" y="30" width="20" height="12" rx="2" fill="#f59e0b" />
        <text x="120" y="39" fill="#ffffff" fontSize="7" fontWeight="black" fontFamily="sans-serif">5 STAR</text>

        <defs>
          <linearGradient id="geyserBodyGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 3. RO Membrane (Dow Filmtec Spiral Wound)
  if (lowerCat.includes('membrane')) {
    return (
      <svg viewBox="0 0 200 170" className="w-full h-full max-h-48 drop-shadow-md" fill="none">
        {/* Central Permeate Tube */}
        <rect x="18" y="79" width="164" height="12" rx="3" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
        {/* Blue Membrane Sheet Spiral Wrap */}
        <rect x="42" y="48" width="116" height="74" rx="10" fill="#0284c7" stroke="#0369a1" strokeWidth="2.5" />
        {/* High-Gloss Authentic Label */}
        <rect x="68" y="48" width="64" height="74" fill="#ffffff" />
        <rect x="75" y="58" width="50" height="8" rx="2" fill="#0284c7" />
        <rect x="75" y="70" width="36" height="5" rx="1" fill="#64748b" />
        <rect x="75" y="78" width="42" height="5" rx="1" fill="#10b981" />
        <text x="75" y="100" fill="#0f172a" fontSize="10" fontWeight="900" fontFamily="sans-serif">80 GPD TFC</text>
        <text x="75" y="112" fill="#0369a1" fontSize="7" fontWeight="bold" fontFamily="sans-serif">HIGH REJECTION</text>
        {/* Black O-Rings */}
        <circle cx="34" cy="85" r="7" fill="#0f172a" />
        <circle cx="166" cy="85" r="7" fill="#0f172a" />
      </svg>
    );
  }

  // 4. Heavy Booster Pump (100 GPD 100% Pure Copper)
  if (lowerCat.includes('pump')) {
    return (
      <svg viewBox="0 0 200 170" className="w-full h-full max-h-48 drop-shadow-md" fill="none">
        {/* Anti-Vibration Heavy Rubber Base */}
        <rect x="35" y="125" width="130" height="12" rx="4" fill="#0f172a" />
        <rect x="45" y="137" width="20" height="6" rx="2" fill="#334155" />
        <rect x="135" y="137" width="20" height="6" rx="2" fill="#334155" />

        {/* Heavy Pure Copper Motor Body */}
        <rect x="40" y="52" width="76" height="72" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="2" />
        {/* Cooling Ribs */}
        <line x1="52" y1="56" x2="52" y2="120" stroke="#334155" strokeWidth="3" />
        <line x1="64" y1="56" x2="64" y2="120" stroke="#334155" strokeWidth="3" />
        <line x1="76" y1="56" x2="76" y2="120" stroke="#334155" strokeWidth="3" />
        <line x1="88" y1="56" x2="88" y2="120" stroke="#334155" strokeWidth="3" />
        <line x1="100" y1="56" x2="100" y2="120" stroke="#334155" strokeWidth="3" />

        {/* Chrome / High-Pressure Pump Head */}
        <rect x="116" y="48" width="46" height="80" rx="8" fill="#0284c7" stroke="#0369a1" strokeWidth="2.5" />
        <circle cx="139" cy="88" r="14" fill="#38bdf8" />
        <circle cx="139" cy="88" r="6" fill="#ffffff" />
        {/* 3/8 or 1/4 push ports */}
        <rect x="133" y="34" width="12" height="14" fill="#64748b" />
        <rect x="133" y="128" width="12" height="14" fill="#64748b" />
      </svg>
    );
  }

  // 5. SMPS Power Supply
  if (lowerCat.includes('smps') || lowerCat.includes('adapter')) {
    return (
      <svg viewBox="0 0 200 170" className="w-full h-full max-h-48 drop-shadow-md" fill="none">
        <rect x="45" y="45" width="110" height="80" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="2.5" />
        <rect x="58" y="58" width="84" height="32" rx="6" fill="#1e293b" />
        <circle cx="72" cy="74" r="4.5" fill="#22c55e" />
        <text x="84" y="78" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">24V DC SMPS</text>
        <rect x="58" y="100" width="60" height="8" rx="2" fill="#334155" />
        <line x1="155" y1="85" x2="182" y2="85" stroke="#0f172a" strokeWidth="5" strokeLinecap="round" />
        <line x1="18" y1="85" x2="45" y2="85" stroke="#0f172a" strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  }

  // 6. Domestic Water Purifiers (Kent, Aquaguard, Livpure, Aqua Tejas, RO POINT)
  return (
    <svg viewBox="0 0 200 170" className="w-full h-full max-h-48 drop-shadow-md" fill="none">
      {/* Outer Purifier Cabinet */}
      <rect x="48" y="15" width="104" height="136" rx="18" fill="#ffffff" stroke="#93c5fd" strokeWidth="2.5" />

      {/* Upper Filtration Compartment with Metallic Gradient */}
      <rect x="56" y="22" width="88" height="52" rx="10" fill="url(#purifierUpperGrad2)" />
      {/* LED Indicator Lights */}
      <circle cx="70" cy="38" r="4" fill="#22c55e" />
      <circle cx="82" cy="38" r="4" fill="#38bdf8" />
      <circle cx="94" cy="38" r="4" fill="#f59e0b" />
      {/* Brand Plaque */}
      <rect x="105" y="33" width="32" height="9" rx="3" fill="#0f172a" />
      <text x="108" y="40" fill="#38bdf8" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">RO+UV+UF</text>

      {/* Lower Transparent Water Storage Tank */}
      <rect x="56" y="78" width="88" height="66" rx="10" fill="#f0f9ff" stroke="#bae6fd" strokeWidth="2" />
      {/* Water Waves Level */}
      <path
        d="M58 112 Q80 106, 100 112 T142 112 L142 140 Q142 142, 140 142 L60 142 Q58 142, 58 140 Z"
        fill="#38bdf8"
        opacity="0.8"
      />
      <path
        d="M58 116 Q80 110, 100 116 T142 116 L142 140 Q142 142, 140 142 L60 142 Q58 142, 58 140 Z"
        fill="#0284c7"
      />

      {/* Chrome Water Dispenser Tap */}
      <rect x="95" y="125" width="10" height="18" rx="3" fill="#64748b" />
      <rect x="91" y="125" width="18" height="5" rx="2" fill="#1e293b" />

      <defs>
        <linearGradient id="purifierUpperGrad2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>
    </svg>
  );
}
