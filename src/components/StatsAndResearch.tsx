import React from 'react';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';
import { FATHERHOOD_CRISIS_STATS } from '../data/b2mData';

export const StatsAndResearch: React.FC = () => {
  return (
    <section id="impact" className="py-20 sm:py-28 bg-white text-stone-900 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16 text-left">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-stone-400">
            Societal Context & Research
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-stone-900 tracking-tight font-display leading-[1.15]">
            The fatherhood crisis in South Africa: <span className="italic font-serif font-normal">why intervention matters</span>.
          </h2>
          <p className="text-base sm:text-lg text-stone-500 font-normal leading-relaxed">
            Data from national health and human science surveys reveals that father-absent boys are at 
            significantly elevated risk of educational dropout, delinquency, and emotional vulnerability.
          </p>
        </div>

        {/* 4 Research Metric Cards - Sources Removed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 text-left">
          {FATHERHOOD_CRISIS_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-stone-50 border border-stone-200/70 space-y-4 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-stone-400 block mb-2">
                  0{idx + 1} / Metric
                </span>
                <span className="text-3xl sm:text-4xl font-light text-stone-900 font-display block mb-2">
                  {stat.number}
                </span>
                <h3 className="text-sm font-semibold text-stone-900 mb-1.5">{stat.label}</h3>
                <p className="text-xs text-stone-500 leading-relaxed">{stat.sublabel}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dual Comparison: Risk Factors vs B2M SA Counter-Measures */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch text-left">
          {/* Without Intervention (The Crisis) */}
          <div className="p-8 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-stone-200/70 text-stone-700 flex items-center justify-center">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-stone-900 font-display">The Risks of Unaddressed Father Absence</h3>
                <p className="text-xs text-stone-500">Documented outcomes from psychological and field studies</p>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-stone-600">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 flex-shrink-0" />
                <span>
                  <strong className="text-stone-900 font-semibold">Role Confusion & Flawed Attention:</strong> Boys seek adult recognition through delinquency, rule-breaking, or gang affiliations.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 flex-shrink-0" />
                <span>
                  <strong className="text-stone-900 font-semibold">Grade 10 Dropouts:</strong> Lack of career roadmaps leads boys to abandon secondary school to loiter without purpose.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 flex-shrink-0" />
                <span>
                  <strong className="text-stone-900 font-semibold">Internalized Anger & Hostility:</strong> Studies on juvenile offenders highlight higher rates of repressed hurt and vulnerability to substance abuse.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 flex-shrink-0" />
                <span>
                  <strong className="text-stone-900 font-semibold">Generational Perpetuation:</strong> Boys who never experienced healthy male affection often struggle to become nurturing fathers and partners.
                </span>
              </li>
            </ul>
          </div>

          {/* With B2M SA Intervention (The Solution) */}
          <div className="p-8 rounded-2xl bg-stone-900 text-stone-100 shadow-lg space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-stone-800 text-stone-200 flex items-center justify-center border border-stone-700">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white font-display">The B2M South Africa Solution</h3>
                <p className="text-xs text-stone-400">Observation over precept: Walking together</p>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-stone-300">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 flex-shrink-0" />
                <span>
                  <strong className="text-white font-medium">Dedicated Male Mentors:</strong> Adult male mentors commit to walking alongside each cohort for years, modeling emotional health and accountability.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 flex-shrink-0" />
                <span>
                  <strong className="text-white font-medium">Vocational Trades & 4IR STEM:</strong> Boys gain real plumbing, carpentry, mechanics, AI, and robotics skills to unlock tangible economic pathways.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 flex-shrink-0" />
                <span>
                  <strong className="text-white font-medium">Safe Youth Circles:</strong> Creating psychological safety where boys acknowledge past grief without dwelling on it, choosing discipline instead.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 flex-shrink-0" />
                <span>
                  <strong className="text-white font-medium">CAO & NSFAS Direct Pipeline:</strong> Actively submitting university and TVET applications to ensure Grade 12 completion and tertiary employment.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
