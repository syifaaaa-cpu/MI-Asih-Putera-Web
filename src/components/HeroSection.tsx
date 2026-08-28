import React from 'react';
import { ArrowRight, MessageSquareText, Shield, BookOpen, Compass, HeartHandshake, Heart } from 'lucide-react';
import heroStudentsImg from '../assets/images/hero_students_custom.jpg';

interface HeroSectionProps {
  onOpenVisit: () => void;
  onOpenConsultation: () => void;
  onOpenPPDB: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenVisit,
  onOpenConsultation,
}) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#fbf7ee] pt-8 pb-16 lg:py-16">
      
      {/* 1. Full-Coverage Rich Islamic Geometric & Arabesque Pattern Layer */}
      <div 
        className="absolute inset-0 bg-islamic-hero-rich pointer-events-none z-0"
      />

      {/* 2. Delicate Radial Ambient Glows for Warmth & Depth */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#fdaa3d]/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#0a3622]/8 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] bg-[#c87a1e]/8 rounded-full blur-3xl pointer-events-none z-0" />

      {/* 3. Top Elaborate Islamic Ornamental Border Ribbon */}
      <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-[#001f11] via-[#c87a1e] to-[#001f11] opacity-85 z-10 flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="w-full h-full opacity-40 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:8px_8px]" />
      </div>

      {/* 4. Four Ornate Islamic Corner Cartouches (Arabesque Flourishes) */}
      {/* Top-Left Corner Arabesque */}
      <div className="absolute top-3 left-3 w-20 h-20 sm:w-28 sm:h-28 text-[#c87a1e] opacity-35 pointer-events-none z-0">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0,0 L40,0 C30,10 25,25 25,40 C25,25 10,30 0,40 Z" fill="currentColor" fillOpacity="0.3" />
          <path d="M0,0 L0,80 C10,60 25,50 45,45 C25,40 15,25 0,0 Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M0,0 L80,0 C60,10 50,25 45,45 C40,25 25,15 0,0 Z" fill="currentColor" fillOpacity="0.2" />
          <circle cx="18" cy="18" r="4" fill="#0a3622" fillOpacity="0.5" />
          <path d="M5,5 Q40,10 50,50 Q10,40 5,5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7" fill="none" />
        </svg>
      </div>

      {/* Top-Right Corner Arabesque */}
      <div className="absolute top-3 right-3 w-20 h-20 sm:w-28 sm:h-28 text-[#c87a1e] opacity-35 pointer-events-none z-0 transform scale-x-[-1]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0,0 L40,0 C30,10 25,25 25,40 C25,25 10,30 0,40 Z" fill="currentColor" fillOpacity="0.3" />
          <path d="M0,0 L0,80 C10,60 25,50 45,45 C25,40 15,25 0,0 Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M0,0 L80,0 C60,10 50,25 45,45 C40,25 25,15 0,0 Z" fill="currentColor" fillOpacity="0.2" />
          <circle cx="18" cy="18" r="4" fill="#0a3622" fillOpacity="0.5" />
          <path d="M5,5 Q40,10 50,50 Q10,40 5,5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7" fill="none" />
        </svg>
      </div>

      {/* Bottom-Left Corner Arabesque */}
      <div className="absolute bottom-3 left-3 w-20 h-20 sm:w-28 sm:h-28 text-[#c87a1e] opacity-35 pointer-events-none z-0 transform scale-y-[-1]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0,0 L40,0 C30,10 25,25 25,40 C25,25 10,30 0,40 Z" fill="currentColor" fillOpacity="0.3" />
          <path d="M0,0 L0,80 C10,60 25,50 45,45 C25,40 15,25 0,0 Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M0,0 L80,0 C60,10 50,25 45,45 C40,25 25,15 0,0 Z" fill="currentColor" fillOpacity="0.2" />
          <circle cx="18" cy="18" r="4" fill="#0a3622" fillOpacity="0.5" />
          <path d="M5,5 Q40,10 50,50 Q10,40 5,5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7" fill="none" />
        </svg>
      </div>

      {/* Bottom-Right Corner Arabesque */}
      <div className="absolute bottom-3 right-3 w-20 h-20 sm:w-28 sm:h-28 text-[#c87a1e] opacity-35 pointer-events-none z-0 transform scale-[-1]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0,0 L40,0 C30,10 25,25 25,40 C25,25 10,30 0,40 Z" fill="currentColor" fillOpacity="0.3" />
          <path d="M0,0 L0,80 C10,60 25,50 45,45 C25,40 15,25 0,0 Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M0,0 L80,0 C60,10 50,25 45,45 C40,25 25,15 0,0 Z" fill="currentColor" fillOpacity="0.2" />
          <circle cx="18" cy="18" r="4" fill="#0a3622" fillOpacity="0.5" />
          <path d="M5,5 Q40,10 50,50 Q10,40 5,5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7" fill="none" />
        </svg>
      </div>

      {/* 5. Islamic Star Illuminated Watermark in negative background space */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-64 h-64 text-[#c87a1e] opacity-[0.07] pointer-events-none z-0">
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-pulse" style={{ animationDuration: '8s' }}>
          <circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
          <rect x="25" y="25" width="70" height="70" stroke="currentColor" strokeWidth="2" />
          <rect x="25" y="25" width="70" height="70" transform="rotate(45 60 60)" stroke="currentColor" strokeWidth="2" />
          <circle cx="60" cy="60" r="22" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="60" cy="60" r="6" fill="currentColor" />
        </svg>
      </div>

      {/* Main Content Container (Preserving Exact Layout & Coordinates) */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Copy & CTAs) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Islamic Bismillah Calligraphy & Header Flourish */}
            <div className="flex items-center gap-2.5 select-none pt-1">
              <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#c87a1e]" />
              <span 
                className="text-[#c87a1e] font-serif text-sm sm:text-base tracking-widest opacity-90 font-medium"
                title="Bismillahir Rahmanir Rahim"
              >
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </span>
              <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#c87a1e]" />
            </div>

            {/* Headline matching exact reference */}
            <div className="space-y-1">
              <h1 className="font-serif-title text-[#001f11] text-4xl sm:text-5xl lg:text-[56px] leading-[1.12] font-bold tracking-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                Menumbuhkan <br />
                <span className="text-[#001f11]">Adab, </span>
                <span className="text-[#c87a1e] italic">Ilmu,</span> <br />
                <span className="text-[#001f11]">dan Kemandirian</span>
              </h1>
            </div>

            {/* Subtitle / Paragraph with crisp readability backing */}
            <p className="font-worksans text-[#303833] text-base sm:text-lg leading-relaxed max-w-xl font-medium">
              MI Asih Putera mendampingi anak menjadi pribadi beriman, bernalar,
              percaya diri, tangguh, dan bermanfaat melalui pendidikan yang
              berlandaskan tauhid, keteladanan, pembelajaran bermakna, dan
              pengalaman hidup nyata.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button
                id="btn-kunjungi-sekolah"
                onClick={onOpenVisit}
                className="bg-[#0a3622] hover:bg-[#001f11] active:scale-95 text-white font-manrope font-semibold text-sm sm:text-base px-6 py-3.5 rounded-lg shadow-md hover:shadow-lg flex items-center gap-2 transition-all cursor-pointer group border border-[#fdaa3d]/30"
              >
                <span>Kunjungi Sekolah</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                id="btn-konsultasi-ppdb"
                onClick={onOpenConsultation}
                className="bg-white hover:bg-[#fbf7ee] active:scale-95 text-[#1c1c18] font-manrope font-medium text-sm sm:text-base px-6 py-3.5 rounded-lg border border-[#c87a1e]/40 shadow-xs flex items-center gap-2 transition-all cursor-pointer hover:border-[#c87a1e]"
              >
                <span>Konsultasi PPDB</span>
                <MessageSquareText className="w-4 h-4 text-[#c87a1e]" />
              </button>
            </div>

            {/* 4 Feature Tags Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#c87a1e]/25">
              <div className="flex items-center gap-2 text-[#414943]">
                <div className="w-8 h-8 rounded-lg bg-[#f4ebd9] border border-[#c87a1e]/25 flex items-center justify-center text-[#c87a1e] shrink-0 shadow-2xs">
                  <Shield className="w-4 h-4" />
                </div>
                <span className="text-xs font-manrope font-semibold leading-tight text-[#1c1c18]">
                  Berbasis Tauhid dan Akhlak
                </span>
              </div>

              <div className="flex items-center gap-2 text-[#414943]">
                <div className="w-8 h-8 rounded-lg bg-[#f4ebd9] border border-[#c87a1e]/25 flex items-center justify-center text-[#c87a1e] shrink-0 shadow-2xs">
                  <BookOpen className="w-4 h-4" />
                </div>
                <span className="text-xs font-manrope font-semibold leading-tight text-[#1c1c18]">
                  Akademik Bermakna
                </span>
              </div>

              <div className="flex items-center gap-2 text-[#414943]">
                <div className="w-8 h-8 rounded-lg bg-[#f4ebd9] border border-[#c87a1e]/25 flex items-center justify-center text-[#c87a1e] shrink-0 shadow-2xs">
                  <Compass className="w-4 h-4" />
                </div>
                <span className="text-xs font-manrope font-semibold leading-tight text-[#1c1c18]">
                  Life Skills Pengalaman Nyata
                </span>
              </div>

              <div className="flex items-center gap-2 text-[#414943]">
                <div className="w-8 h-8 rounded-lg bg-[#f4ebd9] border border-[#c87a1e]/25 flex items-center justify-center text-[#c87a1e] shrink-0 shadow-2xs">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <span className="text-xs font-manrope font-semibold leading-tight text-[#1c1c18]">
                  Kemitraan Orang Tua
                </span>
              </div>
            </div>

          </div>

          {/* Right Column (Hero Photo Collage with Arched Window & Islamic Frame) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px]">
              
              {/* Decorative Islamic Arch Halo / Outline behind the photo */}
              <div className="absolute -inset-2.5 rounded-t-[148px] rounded-b-3xl border-2 border-dashed border-[#c87a1e]/40 pointer-events-none" />

              {/* Arched Top Hero Image Frame */}
              <div className="relative overflow-hidden rounded-t-[140px] rounded-b-2xl border-4 border-white shadow-2xl bg-[#0a3622]/10 aspect-[4/5] w-full">
                <img
                  src={heroStudentsImg}
                  alt="Siswa Siswi MI Asih Putera Belajar Bersama"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge (Belajar dengan Hati, Bertumbuh dengan Makna) */}
              <div className="absolute -bottom-4 right-2 sm:-right-4 bg-[#0a3622] text-white py-3 px-5 rounded-xl shadow-xl border border-[#fdaa3d]/60 flex items-center gap-3 z-20">
                <div className="w-8 h-8 rounded-full bg-[#fdaa3d] flex items-center justify-center text-[#001f11] shrink-0 shadow-xs">
                  <Heart className="w-4 h-4 fill-current text-[#001f11]" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-manrope font-bold text-white leading-tight">
                    Belajar dengan Hati,
                  </p>
                  <p className="text-xs font-manrope font-semibold text-[#fdaa3d] leading-tight">
                    Bertumbuh dengan Makna
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Elaborate Islamic Ornamental Border Ribbon */}
      <div className="absolute bottom-0 inset-x-0 h-2 bg-gradient-to-r from-[#001f11] via-[#c87a1e] to-[#001f11] opacity-75 z-10 pointer-events-none" />
    </section>
  );
};

