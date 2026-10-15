import React from 'react';
import { Link } from 'react-router-dom';
import { VISI_SECTION_DATA, type PillarItem } from '../lib/data/Visisection';

interface MakeItPopSectionProps {
  id?: string;
  className?: string;
}

export const MakeItPopSection: React.FC<MakeItPopSectionProps> = ({
  id = 'make-it-pop',
  className = '',
}) => {
  const { pillars } = VISI_SECTION_DATA;

  const renderIcon = (iconType: PillarItem['iconType']) => {
    switch (iconType) {
      case 'collaborative':
        return (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case 'creative':
        return (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fd47d6"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18h6" />
            <path d="M10 22h4" />
            <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
          </svg>
        );
      case 'impactful':
        return (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#e0ff00"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </svg>
        );
      case 'energetic':
        return (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffbb37"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        );
    }
  };

  const getIconBoxStyle = (iconType: PillarItem['iconType']) => {
    switch (iconType) {
      case 'collaborative':
        return 'bg-[#182348] border-[#344477]';
      case 'creative':
        return 'bg-[#281533] border-[#5a2152]';
      case 'impactful':
        return 'bg-[#132838] border-[#265352]';
      case 'energetic':
        return 'bg-[#2b1f24] border-[#5e3f2c]';
    }
  };

  const getTitleColor = (iconType: PillarItem['iconType']) => {
    switch (iconType) {
      case 'creative':
        return 'text-[#fd47d6]';
      case 'impactful':
        return 'text-[#e0ff00]';
      case 'energetic':
        return 'text-[#ffbb37]';
      case 'collaborative':
      default:
        return 'text-white';
    }
  };

  const renderDescription = (pillar: PillarItem) => {
    if (pillar.iconType === 'impactful') {
      return (
        <p className="text-[13.5px] md:text-[14px] text-[#cbd5e1] leading-relaxed font-['Aileron',sans-serif] m-0">
          Mendorong setiap potensi menjadi karya nyata yang berani tampil dan memberi dampak positif (<em>Make It Pop</em>).
        </p>
      );
    }
    return (
      <p className="text-[13.5px] md:text-[14px] text-[#cbd5e1] leading-relaxed font-['Aileron',sans-serif] m-0">
        {pillar.shortDescription}
      </p>
    );
  };

  return (
    <section
      id={id}
      className={`w-full max-w-[1020px] mx-auto px-4 sm:px-6 py-12 md:py-20 ${className}`}
    >
      {/* Header - Pixel perfect with Canva Brand Guidelines */}
      <div className="text-center max-w-[860px] mx-auto mb-10 md:mb-12">
        <h2 className="font-black text-2xl sm:text-3xl md:text-[38px] tracking-tight mb-3.5 font-['Aileron',sans-serif] text-white leading-tight">
          MAKE IT POP:{' '}
          <span className="text-[#fd47d6]">TURN YOUR SPARK</span>{' '}
          <span className="text-[#e0ff00]">INTO IMPACT</span>
        </h2>
        <p className="text-[#cbd5e1] text-[13.5px] sm:text-[14.5px] md:text-[15px] leading-relaxed max-w-[760px] mx-auto font-['Aileron',sans-serif]">
          Cakfest Vol.2 memadukan 4 pilar penggerak untuk menciptakan wadah kolaborasi, ruang kreativitas, dan<br className="hidden sm:inline" /> kompetisi bergengsi bagi generasi muda.
        </p>
      </div>

      {/* 2x2 Grid of 4 Pillar Cards - Exact match to reference screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {pillars.map((pillar) => {
          return (
            <Link
              key={pillar.id}
              to={`/pillars/${pillar.slug}`}
              className="relative rounded-2xl p-6 md:p-7 bg-[#111736]/90 hover:bg-[#151e44]/95 border border-[#2a3460] hover:border-[#fd47d6]/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(253,71,214,0.16)] flex flex-col justify-start text-left no-underline cursor-pointer group overflow-hidden"
              title={`Eksplorasi Pilar ${pillar.title}`}
            >
              {/* Top Accent Gradient Line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2.5px] transition-all duration-300 group-hover:h-[3.5px]"
                style={{
                  background: 'linear-gradient(90deg, #fd47d6 0%, #e0ff00 100%)',
                }}
              />

              {/* Icon Box */}
              <div
                className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-105 shadow-md ${getIconBoxStyle(
                  pillar.iconType
                )}`}
              >
                {renderIcon(pillar.iconType)}
              </div>

              {/* Title */}
              <h3
                className={`font-['Space_Grotesk',sans-serif] text-lg md:text-[19px] font-bold tracking-wide mb-2.5 leading-snug ${getTitleColor(
                  pillar.iconType
                )}`}
              >
                {pillar.title}
              </h3>

              {/* Description */}
              {renderDescription(pillar)}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default MakeItPopSection;
