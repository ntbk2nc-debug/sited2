import React, { useState } from 'react';
import { Menu, X, Heart, Phone, Mail, Award, ChevronRight, ShieldCheck } from 'lucide-react';
import { ORG_DETAILS } from '../data/b2mData';

interface NavbarProps {
  onOpenDonate: () => void;
  onOpenMentorModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDonate, onOpenMentorModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'What We Have Done', href: '#fieldwork' },
    { name: 'About', href: '#about' },
    { name: 'Research & Crisis', href: '#impact' },
    { name: 'Programs', href: '#programs' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Camp Schedule', href: '#camp' },
    { name: 'Career Guidance', href: '#career-guidance' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/60 text-stone-900 transition-all">
      {/* Top governance strip */}
      <div className="border-b border-stone-200/40 bg-stone-100/60 text-stone-500 text-[11px] py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-stone-700 tracking-wider uppercase text-[10px]">
              NPO {ORG_DETAILS.npoRegistration}
            </span>
            <span className="hidden sm:inline text-stone-400">&bull;</span>
            <span className="hidden sm:inline text-stone-600">
              Official Registered Non-Profit Organisation &bull; Ndwedwe, KwaZulu-Natal
            </span>
          </div>
          <div className="flex items-center gap-4 font-medium text-stone-600">
            <a
              href={`tel:${ORG_DETAILS.contacts.treasurer.phone.replace(/\s+/g, '')}`}
              className="hover:text-stone-900 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-stone-400" />
              <span>{ORG_DETAILS.contacts.treasurer.phone}</span>
            </a>
            <span className="text-stone-300 hidden md:inline">|</span>
            <a
              href={`mailto:${ORG_DETAILS.contacts.generalEmail}`}
              className="hover:text-stone-900 transition-colors flex items-center gap-1.5 hidden md:flex"
            >
              <Mail className="w-3 h-3 text-stone-400" />
              <span>{ORG_DETAILS.contacts.generalEmail}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-stone-900 rounded-full flex items-center justify-center text-white font-bold text-xs tracking-wider shadow-sm group-hover:bg-stone-800 transition-colors">
              B2M
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-base sm:text-lg tracking-tight text-stone-900">
                  Boys 2 Men South Africa
                </span>
              </div>
              <p className="text-[11px] text-stone-400 font-normal tracking-wide">
                Grooming Boys into Upright Leaders
              </p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors py-1 tracking-tight"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenMentorModal}
              id="btn-nav-mentor"
              className="text-xs font-medium px-4 py-2.5 rounded-full border border-stone-200 text-stone-800 hover:border-stone-400 hover:text-stone-950 transition-all flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-stone-500" />
              <span>Volunteer / Mentor</span>
            </button>
            <button
              onClick={onOpenDonate}
              id="btn-nav-donate"
              className="text-xs font-semibold px-5 py-2.5 rounded-full bg-stone-900 text-white hover:bg-stone-800 hover:shadow-lg hover:shadow-stone-200/50 transition-all flex items-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Banking Details</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenDonate}
              className="sm:hidden text-xs font-medium px-3.5 py-1.5 rounded-full bg-stone-900 text-white flex items-center gap-1"
            >
              <Heart className="w-3 h-3 fill-white" />
              <span>Donate</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200/80 bg-stone-50 px-5 pt-3 pb-6 space-y-4">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-200/60 grid grid-cols-1 gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMentorModal();
              }}
              className="w-full py-2.5 px-4 rounded-full border border-stone-300 text-stone-800 font-medium text-xs flex items-center justify-center gap-2 hover:border-stone-500 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-stone-500" />
              <span>Volunteer as Adult Male Mentor</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDonate();
              }}
              className="w-full py-2.5 px-4 rounded-full bg-stone-900 text-white font-medium text-xs flex items-center justify-center gap-2 hover:bg-stone-800 transition-colors"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Direct Banking Details</span>
            </button>
          </div>

          <div className="pt-2 text-[11px] text-stone-400 space-y-1">
            <p className="flex items-center gap-1.5 text-stone-500">
              <Award className="w-3 h-3 text-stone-400" />
              <span>NPO Reg: {ORG_DETAILS.npoRegistration} &bull; SARS: {ORG_DETAILS.incomeTaxNumber}</span>
            </p>
            <p className="text-stone-400">D1510 Shangase Village, Thafamasi, Ndwedwe, KZN</p>
          </div>
        </div>
      )}
    </header>
  );
};
