import React from 'react';

interface MIAsihPuteraLogoProps {
  className?: string;
  variant?: 'full' | 'emblem';
  textColor?: string;
}

export const MIAsihPuteraLogo: React.FC<MIAsihPuteraLogoProps> = ({
  className = 'h-10',
  variant = 'full',
  textColor = '#0d7e62',
}) => {
  if (variant === 'emblem') {
    return (
      <svg
        viewBox="0 0 140 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Silhouette & Book */}
        <g fill={textColor}>
          {/* Boy Songkok / Peci */}
          <rect x="80" y="4" width="38" height="26" rx="2" fill={textColor} />
          
          {/* Boy Body & Head */}
          <path
            d="M72,36 C72,20 126,20 126,36 C126,48 132,65 132,95 L72,95 Z"
            fill={textColor}
          />

          {/* Girl Hijab Head & Drape */}
          <path
            d="M63,16 C40,16 34,42 36,65 C26,67 12,72 12,95 L88,95 C88,68 86,16 63,16 Z"
            fill={textColor}
          />

          {/* Open Book Pages */}
          <path
            d="M0,64 C12,64 36,75 58,95 L134,95 L134,100 L56,100 C34,80 10,70 0,70 Z"
            fill={textColor}
          />
          <path
            d="M4,70 C16,70 38,80 58,97 L134,97 L134,101 L56,101 C34,83 14,73 4,73 Z"
            fill={textColor}
          />
          {/* Book Spine scalloped base */}
          <path
            d="M18,95 C20,90 26,90 30,95 C32,90 38,90 42,95 C44,90 50,90 54,95 L0,95 C4,90 12,90 18,95 Z"
            fill={textColor}
          />
        </g>

        {/* Face Cutouts */}
        <ellipse cx="63" cy="38" rx="14" ry="17" fill="#ffffff" />
        <ellipse cx="99" cy="42" rx="14" ry="17" fill="#ffffff" />
      </svg>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* 1. Left Emblem Icon */}
      <svg
        viewBox="0 0 140 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto shrink-0 aspect-[140/105]"
        preserveAspectRatio="xMidYMid meet"
      >
        <g fill={textColor}>
          {/* Boy Peci */}
          <rect x="80" y="4" width="38" height="26" rx="2" fill={textColor} />
          {/* Boy Body */}
          <path
            d="M72,36 C72,20 126,20 126,36 C126,48 132,65 132,95 L72,95 Z"
            fill={textColor}
          />
          {/* Girl Hijab */}
          <path
            d="M63,16 C40,16 34,42 36,65 C26,67 12,72 12,95 L88,95 C88,68 86,16 63,16 Z"
            fill={textColor}
          />
          {/* Open Book */}
          <path
            d="M0,64 C12,64 36,75 58,95 L134,95 L134,100 L56,100 C34,80 10,70 0,70 Z"
            fill={textColor}
          />
          <path
            d="M4,70 C16,70 38,80 58,97 L134,97 L134,101 L56,101 C34,83 14,73 4,73 Z"
            fill={textColor}
          />
          <path
            d="M18,95 C20,90 26,90 30,95 C32,90 38,90 42,95 C44,90 50,90 54,95 L0,95 C4,90 12,90 18,95 Z"
            fill={textColor}
          />
        </g>
        {/* Face Cutouts */}
        <ellipse cx="63" cy="38" rx="14" ry="17" fill="#ffffff" />
        <ellipse cx="99" cy="42" rx="14" ry="17" fill="#ffffff" />
      </svg>

      {/* 2. Vertical Divider Bar */}
      <div 
        className="w-[2.5px] self-stretch my-0.5 rounded-full shrink-0" 
        style={{ backgroundColor: textColor }}
      />

      {/* 3. Text Block: MADRASAH IBTIDAIYAH / ASIH PUTERA (No clipping, completely visible) */}
      <div className="flex flex-col justify-center whitespace-nowrap min-w-0 pr-1">
        <span 
          className="text-[10px] sm:text-[11px] md:text-[11.5px] font-extrabold tracking-[0.22em] leading-tight uppercase font-manrope"
          style={{ color: textColor }}
        >
          MADRASAH IBTIDAIYAH
        </span>
        <span 
          className="text-[18px] sm:text-[21px] md:text-[24px] font-black tracking-[-0.02em] leading-none uppercase font-manrope"
          style={{ color: textColor }}
        >
          ASIH PUTERA
        </span>
      </div>
    </div>
  );
};
