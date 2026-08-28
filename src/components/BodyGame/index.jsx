import React from 'react';

export function BodyGame() {
  return (
    <>
      <p className="game-instructions">Toque nas áreas destacadas da ilustração para saber o que é uma área privada.</p>
      <div className="body-game" id="bodyGame">
        <svg viewBox="0 0 240 380" className="body-figure" aria-hidden="true" style={{ overflow: 'visible' }}>
          <defs>
            <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000" floodOpacity="0.08" />
            </filter>
          </defs>

          {/* Corpo Base */}
          <g filter="url(#softShadow)">
            <rect x="75" y="95" width="22" height="100" rx="11" fill="#F0D0B5" transform="rotate(12, 86, 95)" />
            <rect x="143" y="95" width="22" height="100" rx="11" fill="#F0D0B5" transform="rotate(-12, 154, 95)" />

            <rect x="92" y="190" width="24" height="120" rx="12" fill="#F0D0B5" />
            <rect x="124" y="190" width="24" height="120" rx="12" fill="#F0D0B5" />

            <rect x="110" y="75" width="20" height="25" rx="5" fill="#F0D0B5" />
            <rect x="85" y="90" width="70" height="120" rx="28" fill="#F0D0B5" />
            <circle cx="120" cy="50" r="32" fill="#F0D0B5" />
          </g>

          {/* Rosto Amigável */}
          <g fill="#8B5A40">
            <circle cx="108" cy="48" r="3.5" />
            <circle cx="132" cy="48" r="3.5" />
            <path d="M 112 60 Q 120 66 128 60" fill="none" stroke="#8B5A40" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* Maiô Didático (Indicando áreas privadas) */}
          <g fill="#3B82F6">
            <path d="M 85 125 C 100 135, 140 135, 155 125 L 155 155 C 140 165, 100 165, 85 155 Z" />
            <rect x="94" y="90" width="8" height="40" rx="2" />
            <rect x="138" y="90" width="8" height="40" rx="2" />
            <path d="M 85 185 C 85 185, 120 175, 155 185 L 155 205 C 135 220, 105 220, 85 205 Z" />
          </g>

          {/* Estilo para as zonas interativas */}
          <style>
            {`
              @keyframes pulseHint {
                0% { opacity: 0.6; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.03); }
                100% { opacity: 0.6; transform: scale(1); }
              }
              .zone-indicator {
                cursor: pointer;
                fill: transparent;
                stroke: #EF4444;
                stroke-width: 2.5px;
                stroke-dasharray: 6 4;
                animation: pulseHint 2s infinite ease-in-out;
                transform-origin: center;
                transition: all 0.2s ease;
              }
              .zone-indicator:hover {
                fill: rgba(239, 68, 68, 0.15);
                stroke-width: 3px;
                animation: none;
                opacity: 1;
              }
            `}
          </style>

          {/* Zonas Interativas (Circundando as áreas) */}
          <g className="zone zone--private" data-zone="mouth" tabIndex="0" role="button" aria-label="Área privada: boca">
            <ellipse cx="120" cy="62" rx="18" ry="12" className="zone-indicator" style={{ transformOrigin: '120px 62px' }} />
          </g>
          <g className="zone zone--private" data-zone="chest" tabIndex="0" role="button" aria-label="Área privada: peito">
            <rect x="80" y="120" width="80" height="40" rx="16" className="zone-indicator" style={{ transformOrigin: '120px 140px' }} />
          </g>
          <g className="zone zone--private" data-zone="genitals" tabIndex="0" role="button" aria-label="Área privada: genitais">
            <rect x="80" y="180" width="80" height="32" rx="14" className="zone-indicator" style={{ transformOrigin: '120px 196px' }} />
          </g>
          <g className="zone zone--private" data-zone="back" tabIndex="0" role="button" aria-label="Área privada: nádegas">
            <rect x="80" y="218" width="80" height="28" rx="12" className="zone-indicator" style={{ transformOrigin: '120px 232px' }} />
          </g>
        </svg>
        <p className="game-caption">As áreas em destaque representam partes privadas — clique nelas.</p>
      </div>
    </>
  );
}
