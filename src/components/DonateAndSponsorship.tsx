import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  ShieldCheck
} from 'lucide-react';
import { ORG_DETAILS } from '../data/b2mData';

export const DonateAndSponsorship: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="donate" className="py-20 sm:py-28 bg-white text-stone-900 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-14 text-left">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-stone-400">
            Institutional Contributions
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-stone-900 tracking-tight font-display leading-[1.15]">
            Direct banking <span className="italic font-serif font-normal">details</span>.
          </h2>
          <p className="text-base sm:text-lg text-stone-500 font-normal leading-relaxed">
            Support the educational mentorship camps, trade materials, and STEM equipment for fatherless boys 
            across KwaZulu-Natal through our verified non-profit banking account.
          </p>
        </div>

        {/* Centered Direct Banking Details Card */}
        <div className="max-w-3xl mx-auto bg-stone-900 text-stone-100 p-8 sm:p-10 rounded-3xl shadow-xl border border-stone-800 space-y-6 text-left">
          <div className="flex items-center justify-between pb-5 border-b border-stone-800">
            <div>
              <h3 className="text-xl font-semibold text-white font-display">
                Direct Banking Details
              </h3>
              <p className="text-xs text-stone-400 mt-0.5">
                Official FNB Non-Profit Business Account &bull; Ndwedwe, KZN
              </p>
            </div>
            <span className="text-[11px] px-3 py-1 rounded-full bg-stone-800 text-stone-300 font-medium border border-stone-700">
              EFT & Mobile Banking
            </span>
          </div>

          {/* Account Details Rows with 1-Click Copy */}
          <div className="space-y-3.5 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-stone-950/60 border border-stone-800/80 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-stone-400 block">Account Holder</span>
                <span className="font-semibold text-stone-100">{ORG_DETAILS.name}</span>
              </div>
              <button
                onClick={() => copyToClipboard(ORG_DETAILS.name, 'name')}
                className="p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
                title="Copy Account Holder"
              >
                {copiedField === 'name' ? <Check className="w-3.5 h-3.5 text-stone-200" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-stone-950/60 border border-stone-800/80 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-stone-400 block">Bank Name</span>
                <span className="font-semibold text-stone-100">{ORG_DETAILS.banking.bankName}</span>
              </div>
              <span className="text-xs text-stone-400 font-normal">{ORG_DETAILS.banking.accountType}</span>
            </div>

            <div className="p-4 rounded-2xl bg-stone-950/60 border border-stone-800/80 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-stone-400 block">Account Number</span>
                <span className="font-mono text-lg font-semibold text-white tracking-wider">
                  {ORG_DETAILS.banking.accountNumber}
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(ORG_DETAILS.banking.accountNumber, 'acc')}
                className="px-4 py-2 rounded-full bg-white hover:bg-stone-100 text-stone-900 font-semibold text-xs flex items-center gap-1.5 transition-colors shadow-xs"
              >
                {copiedField === 'acc' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-stone-900" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Number</span>
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-stone-950/60 border border-stone-800/80 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-stone-400 block">Branch Name</span>
                  <span className="font-medium text-stone-200">{ORG_DETAILS.banking.branchName}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-950/60 border border-stone-800/80 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-stone-400 block">Branch Code</span>
                  <span className="font-mono font-semibold text-stone-200">{ORG_DETAILS.banking.branchCode}</span>
                </div>
                <button
                  onClick={() => copyToClipboard(ORG_DETAILS.banking.branchCode, 'branch')}
                  className="p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
                  title="Copy Branch Code"
                >
                  {copiedField === 'branch' ? <Check className="w-3.5 h-3.5 text-stone-200" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-stone-800/50 border border-stone-700/60 text-stone-300 space-y-1">
              <span className="text-[11px] text-stone-300 font-semibold uppercase tracking-wider block">
                Recommended EFT Reference:
              </span>
              <p className="text-xs text-stone-300">
                <strong className="text-white">"B2M + Your Name / Contact"</strong> (e.g. <em>B2M Donor 0761234567</em>)
              </p>
            </div>
          </div>

          {/* Tax & Governance Transparency */}
          <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-[11px] text-stone-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-stone-400" />
              <span>SARS Income Tax: {ORG_DETAILS.incomeTaxNumber}</span>
            </span>
            <span>NPO Reg: {ORG_DETAILS.npoRegistration}</span>
            <span>CSD: {ORG_DETAILS.csdNumber}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
