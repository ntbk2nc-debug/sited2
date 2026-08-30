import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Building2,
  FileText
} from 'lucide-react';
import { ORG_DETAILS } from '../data/b2mData';

export const ContactAndTransparency: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-stone-50 text-stone-900 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16 text-left">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-stone-400">
            Official Directory & Governance
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-stone-900 tracking-tight font-display leading-[1.15]">
            Contact & institutional <span className="italic font-serif font-normal">credentials</span>.
          </h2>
          <p className="text-base sm:text-lg text-stone-500 font-normal leading-relaxed">
            Reach our leadership team directly in Ndwedwe, KwaZulu-Natal. We maintain fully transparent 
            NPO and SARS governance records.
          </p>
        </div>

        {/* 2-Column Grid: Leadership Directory + Governance Compliance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          {/* Left Column: Executive Leadership Contacts */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest">
              Executive Secretariat & Leadership
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Treasurer Mandisi Nkala */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700 font-medium">Treasurer</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-stone-900">{ORG_DETAILS.contacts.treasurer.name}</h3>
                  <p className="text-xs text-stone-500 font-normal">{ORG_DETAILS.contacts.treasurer.role}</p>
                </div>
                <div className="pt-3 border-t border-stone-100 space-y-2 text-xs">
                  <a
                    href={`tel:${ORG_DETAILS.contacts.treasurer.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-stone-400" />
                    <span>{ORG_DETAILS.contacts.treasurer.phone}</span>
                  </a>
                  <a
                    href={`mailto:${ORG_DETAILS.contacts.treasurer.email}`}
                    className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-stone-400" />
                    <span className="truncate">{ORG_DETAILS.contacts.treasurer.email}</span>
                  </a>
                </div>
              </div>

              {/* Secretary Zamamvula Cebekhulu */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700 font-medium">Secretary</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-stone-900">{ORG_DETAILS.contacts.secretary.name}</h3>
                  <p className="text-xs text-stone-500 font-normal">{ORG_DETAILS.contacts.secretary.role}</p>
                </div>
                <div className="pt-3 border-t border-stone-100 space-y-2 text-xs">
                  <a
                    href={`tel:${ORG_DETAILS.contacts.secretary.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-stone-400" />
                    <span>{ORG_DETAILS.contacts.secretary.phone}</span>
                  </a>
                  <a
                    href={`mailto:${ORG_DETAILS.contacts.secretary.email}`}
                    className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-stone-400" />
                    <span className="truncate">{ORG_DETAILS.contacts.secretary.email}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* General Enquiries Card */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-xs space-y-3 text-xs">
              <span className="text-stone-400 block font-semibold uppercase tracking-wider text-[11px]">
                Direct Official Enquiries
              </span>
              <p className="text-stone-600 leading-relaxed">
                For institutional partnerships, provincial coordination, or mentee enrolment, contact the Secretariat at{' '}
                <a href={`mailto:${ORG_DETAILS.contacts.generalEmail}`} className="font-semibold text-stone-900 underline">
                  {ORG_DETAILS.contacts.generalEmail}
                </a>.
              </p>
            </div>
          </div>

          {/* Right Column: Official Compliance & Registration Block */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest">
              Official Compliance & Registration
            </h3>

            <div className="p-7 rounded-2xl bg-white border border-stone-200/80 shadow-xs space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <span className="text-stone-400 block">Organisation Name:</span>
                  <span className="font-semibold text-stone-900">{ORG_DETAILS.name}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-stone-400 block">Chairperson:</span>
                  <span className="font-semibold text-stone-900">{ORG_DETAILS.chairperson}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-stone-400 block">NPO Registration:</span>
                  <span className="font-mono font-semibold text-stone-900">{ORG_DETAILS.npoRegistration}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-stone-400 block">SARS Income Tax:</span>
                  <span className="font-mono font-semibold text-stone-900">{ORG_DETAILS.incomeTaxNumber}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-stone-400 block">CSD Supplier Number:</span>
                  <span className="font-mono font-semibold text-stone-900">{ORG_DETAILS.csdNumber}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-stone-400 block">Founded:</span>
                  <span className="text-stone-700">2022 by 3 Female Community Leaders</span>
                </div>
              </div>

              {/* Physical Address */}
              <div className="pt-4 border-t border-stone-100 flex items-start gap-2.5 text-xs text-stone-600">
                <MapPin className="w-4 h-4 text-stone-900 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block font-semibold">Physical Headquarters:</strong>
                  <span>{ORG_DETAILS.address.street}, {ORG_DETAILS.address.municipality}, {ORG_DETAILS.address.province}, {ORG_DETAILS.address.postalCode}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
