import React from 'react';
import { Heart, ShieldCheck, Phone, Mail, ArrowUp } from 'lucide-react';
import { ORG_DETAILS } from '../data/b2mData';

interface FooterProps {
  onOpenDonate: () => void;
  onOpenMentorModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDonate, onOpenMentorModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white text-stone-900 flex items-center justify-center font-bold text-xs">
                <span>B</span>
              </div>
              <div>
                <span className="font-display font-medium text-base text-white tracking-tight block">
                  BOYS 2 MEN SOUTH AFRICA
                </span>
                <span className="text-[11px] text-stone-400 font-normal">
                  Grooming Boys into Upright Leaders
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 max-w-sm font-normal leading-relaxed">
              A registered Non-Profit Organisation (053-899 NPO) empowering adolescent males 
              in fatherless households across KwaZulu-Natal through mentorship, trade skills, 
              4IR technology, and educational guidance.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <button
                onClick={onOpenDonate}
                className="px-5 py-2.5 rounded-full bg-white hover:bg-stone-100 text-stone-900 font-semibold text-xs flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <Heart className="w-3.5 h-3.5 fill-stone-900" />
                <span>Direct Banking Details</span>
              </button>
              <button
                onClick={onOpenMentorModal}
                className="px-5 py-2.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 font-medium text-xs border border-stone-700 transition-colors"
              >
                <span>Volunteer</span>
              </button>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 font-display">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-stone-300 hover:text-white transition-colors">
                  About & Origin (2022)
                </a>
              </li>
              <li>
                <a href="#programs" className="text-stone-300 hover:text-white transition-colors">
                  Core Programs
                </a>
              </li>
              <li>
                <a href="#fieldwork" className="text-stone-300 hover:text-white transition-colors">
                  What We Have Done (Fieldwork)
                </a>
              </li>
              <li>
                <a href="#camp" className="text-stone-300 hover:text-white transition-colors">
                  Mentorship Camp Schedule
                </a>
              </li>
              <li>
                <a href="#curriculum" className="text-stone-300 hover:text-white transition-colors">
                  Trade & Skills Curriculum
                </a>
              </li>
              <li>
                <a href="#career-guidance" className="text-stone-300 hover:text-white transition-colors">
                  Career Guidance & CAO Drive
                </a>
              </li>
              <li>
                <a href="#impact" className="text-stone-300 hover:text-white transition-colors">
                  Research & Impact Data
                </a>
              </li>
            </ul>
          </div>

          {/* Governance Info */}
          <div className="space-y-3 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 font-display">
              Governance & Tax
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <strong className="text-stone-200 font-normal">NPO Reg:</strong> {ORG_DETAILS.npoRegistration}
              </li>
              <li>
                <strong className="text-stone-200 font-normal">SARS Tax:</strong> {ORG_DETAILS.incomeTaxNumber}
              </li>
              <li>
                <strong className="text-stone-200 font-normal">CSD No:</strong> {ORG_DETAILS.csdNumber}
              </li>
              <li>
                <strong className="text-stone-200 font-normal">Chairperson:</strong> {ORG_DETAILS.chairperson}
              </li>
              <li>
                <strong className="text-stone-200 font-normal">Bank:</strong> FNB Musgrave (221126)
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 font-display">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-stone-400">
              <p>
                <strong className="text-stone-200 block font-normal">Mandisi Nkala (Treasurer):</strong>
                <a href={`tel:${ORG_DETAILS.contacts.treasurer.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {ORG_DETAILS.contacts.treasurer.phone}
                </a>
              </p>
              <p>
                <strong className="text-stone-200 block font-normal">Zamamvula Cebekhulu (Secretary):</strong>
                <a href={`tel:${ORG_DETAILS.contacts.secretary.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {ORG_DETAILS.contacts.secretary.phone}
                </a>
              </p>
              <p className="pt-1">
                <a href={`mailto:${ORG_DETAILS.contacts.generalEmail}`} className="text-stone-300 hover:text-white transition-colors">
                  {ORG_DETAILS.contacts.generalEmail}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} {ORG_DETAILS.name}. All rights reserved. Registered Non-Profit Organisation.
          </p>
          <div className="flex items-center gap-4">
            <span>D1510 Shangase Village, Ndwedwe Ward 18, KZN</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors flex items-center justify-center"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
