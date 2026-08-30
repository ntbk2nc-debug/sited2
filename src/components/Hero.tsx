import React from 'react';
import { ArrowRight, ShieldCheck, Heart, CheckCircle2, ChevronRight } from 'lucide-react';
import { KEY_METRICS, ORG_DETAILS } from '../data/b2mData';

interface HeroProps {
  onOpenDonate: () => void;
  onOpenMentorModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDonate, onOpenMentorModal }) => {
  return (
    <section className="relative bg-stone-50 text-stone-900 py-16 sm:py-24 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Core Narrative */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Minimal Eyebrow */}
            <div className="space-y-3">
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-stone-400">
                053-899 NPO &bull; Ndwedwe, KwaZulu-Natal
              </span>

              {/* Main Editorial Headline */}
              <h1 className="text-4xl sm:text-6xl xl:text-6xl font-light tracking-tight leading-[1.1] text-stone-900 font-display">
                Grooming boys into{' '}
                <span className="italic font-serif font-normal">upright</span> leaders.
              </h1>
            </div>

            {/* Subtitle & Value Proposition */}
            <p className="text-base sm:text-lg text-stone-500 font-normal leading-relaxed max-w-xl">
              Targeting adolescent boys (ages 9–18) growing up in fatherless homes across KwaZulu-Natal. 
              We bridge the guidance gap through dedicated adult male mentors, practical trade crafts, 
              4IR STEM robotics, and career pathways.
            </p>

            {/* Clean Feature Tags */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-600">
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200/70">
                <CheckCircle2 className="w-3.5 h-3.5 text-stone-700" />
                <span>Fatherhood Gap Intervention</span>
              </span>
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200/70">
                <CheckCircle2 className="w-3.5 h-3.5 text-stone-700" />
                <span>Trade & 4IR STEM Skills</span>
              </span>
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200/70">
                <CheckCircle2 className="w-3.5 h-3.5 text-stone-700" />
                <span>Grade 10 Dropout Prevention</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenDonate}
                id="btn-hero-donate"
                className="px-8 py-3.5 rounded-full bg-stone-900 text-white font-semibold text-sm hover:bg-stone-800 hover:shadow-xl hover:shadow-stone-200/60 transition-all flex items-center gap-2 transform active:scale-95"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Direct Banking Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenMentorModal}
                id="btn-hero-mentor"
                className="px-6 py-3.5 rounded-full bg-white text-stone-900 font-semibold text-sm border border-stone-200 hover:border-stone-400 transition-all flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-stone-600" />
                <span>Become a Male Mentor</span>
              </button>

              <a
                href="#programs"
                className="px-3 py-3.5 text-stone-500 hover:text-stone-900 text-sm font-medium transition-colors flex items-center gap-1"
              >
                <span>View Programs</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Provincial Goal alignment footnote */}
            <p className="text-xs text-stone-400 pt-3 border-t border-stone-200">
              Supporting the Provincial Social Protection Goal &bull; SA National Development Plan Priority #5
            </p>
          </div>

          {/* Right Column: Clean Minimalist Spotlight Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl bg-white border border-stone-200/80 p-7 shadow-sm text-left">
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div>
                  <h2 className="text-sm font-semibold text-stone-900 font-display">The B2M SA Model</h2>
                  <p className="text-xs text-stone-400">Multi-year Holistic Transformation</p>
                </div>
                <span className="text-[11px] px-3 py-1 rounded-full bg-stone-100 text-stone-700 font-medium border border-stone-200/60">
                  Annual Cohort: 40 Boys
                </span>
              </div>

              {/* 4 Pillars Mini-grid */}
              <div className="grid grid-cols-2 gap-3 my-5 text-left">
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-100 hover:border-stone-200 transition-colors">
                  <div className="text-stone-900 mb-1">
                    <span className="text-xs font-semibold block">Male Mentors</span>
                  </div>
                  <p className="text-[11px] text-stone-500 leading-snug">
                    Dedicated adult male role models journeying for several years.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-100 hover:border-stone-200 transition-colors">
                  <div className="text-stone-900 mb-1">
                    <span className="text-xs font-semibold block">4IR & STEM</span>
                  </div>
                  <p className="text-[11px] text-stone-500 leading-snug">
                    AI, robotics, drone piloting, and maths for young learners.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-100 hover:border-stone-200 transition-colors">
                  <div className="text-stone-900 mb-1">
                    <span className="text-xs font-semibold block">Trade & Crafts</span>
                  </div>
                  <p className="text-[11px] text-stone-500 leading-snug">
                    Plumbing, auto mechanics, carpentry, cooking, and first aid.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-100 hover:border-stone-200 transition-colors">
                  <div className="text-stone-900 mb-1">
                    <span className="text-xs font-semibold block">Career & CAO</span>
                  </div>
                  <p className="text-[11px] text-stone-500 leading-snug">
                    NSFAS bursary drives, TVET partnerships & CV building.
                  </p>
                </div>
              </div>

              {/* Genuine quote teaser */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/60 text-left">
                <p className="text-xs italic font-serif text-stone-700 leading-relaxed">
                  "He now takes pride in his appearance, is open to talking about issues, and his school marks improved drastically."
                </p>
                <div className="mt-2.5 flex items-center justify-between text-[11px] text-stone-400 font-medium">
                  <span>— Mother of 14-year-old beneficiary</span>
                  <span className="text-stone-600 font-semibold">Ndwedwe, KZN</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Key Metrics Strip */}
        <div className="mt-16 pt-10 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
          {KEY_METRICS.map((metric, idx) => (
            <div key={idx} className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-stone-400">
                0{idx + 1} / {metric.label}
              </span>
              <div className="text-3xl sm:text-4xl font-light text-stone-900 font-display tracking-tight">
                {metric.number}
              </div>
              <p className="text-xs text-stone-500 leading-relaxed">{metric.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
