import React from 'react';
import { Phone, Mail, Instagram, Twitter, Youtube } from 'lucide-react';

interface TopBarProps {
  onOpenConsultation: () => void;
  onOpenPortal: (title: string) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenConsultation, onOpenPortal }) => {
  return (
    <div className="bg-[#001f11] text-[#e0e8e3] text-xs font-manrope border-b border-[#0a3622]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
        {/* Left Contacts */}
        <div className="flex items-center space-x-5">
          <a
            href="tel:081122334455"
            className="flex items-center gap-1.5 hover:text-[#fdaa3d] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#fdaa3d]" />
            <span>Hotline 0811 2233 4455</span>
          </a>
          <span className="text-[#0a3622] hidden sm:inline">|</span>
          <a
            href="mailto:info@asihputera.sch.id"
            className="hidden sm:flex items-center gap-1.5 hover:text-[#fdaa3d] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#fdaa3d]" />
            <span>info@asihputera.sch.id</span>
          </a>
        </div>

        {/* Right Links & Socials */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <div className="flex items-center space-x-3 sm:space-x-4 text-[11px] sm:text-xs">
            <button
              onClick={() => onOpenPortal('Portal Orang Tua')}
              className="hover:text-[#fdaa3d] transition-colors cursor-pointer"
            >
              Orang Tua
            </button>
            <span className="text-white/20">•</span>
            <button
              onClick={() => onOpenPortal('Portal Alumni')}
              className="hover:text-[#fdaa3d] transition-colors cursor-pointer"
            >
              Alumni
            </button>
            <span className="text-white/20">•</span>
            <button
              onClick={() => onOpenPortal('Karier & Rekrutmen Guru')}
              className="hover:text-[#fdaa3d] transition-colors cursor-pointer"
            >
              Karier
            </button>
            <span className="text-white/20">•</span>
            <button
              onClick={() => onOpenPortal('Donasi & Wakaf Pendidikan')}
              className="hover:text-[#fdaa3d] transition-colors cursor-pointer"
            >
              Donasi
            </button>
          </div>

          <div className="flex items-center space-x-2 text-white/80 pl-2 border-l border-[#0a3622]">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-[#fdaa3d] transition-colors p-1"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="hover:text-[#fdaa3d] transition-colors p-1"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Youtube"
              className="hover:text-[#fdaa3d] transition-colors p-1"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
