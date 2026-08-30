import React from 'react';
import { Compass, Target, Shield, HeartHandshake, Users, BookOpen, CheckCircle, MapPin, Building2 } from 'lucide-react';
import { ORG_DETAILS } from '../data/b2mData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-stone-50 text-stone-900 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16 text-left">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-stone-400">
            About &bull; 053-899 NPO
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-stone-900 tracking-tight font-display leading-[1.15]">
            Restoring fatherhood & shaping{' '}
            <span className="italic font-serif">future leaders</span> in KwaZulu-Natal.
          </h2>
          <p className="text-base sm:text-lg text-stone-500 font-normal leading-relaxed">
            Established in 2022 by three dedicated female community leaders to address the critical needs 
            of adolescent boys in fatherless households across KwaZulu-Natal.
          </p>
        </div>

        {/* 2-Column Story & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left: Origin Story & Mandate */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4 text-stone-600 font-normal leading-relaxed">
              <p className="text-base">
                <strong className="text-stone-900 font-semibold">Boys 2 Men South Africa (053-899 NPO)</strong> was 
                born from a deep realization: fatherless boys are among the most vulnerable populations in our country. 
                Without positive adult male role models, young boys navigating the fragile journey from childhood to manhood 
                frequently fall prey to delinquent behavior, substance abuse, and academic disengagement.
              </p>
              <p className="text-base">
                Rather than letting boys dwell in the hurt of their father’s absence, we provide them with an empowering, 
                supportive environment where they learn behavioural discipline, trade crafts, 4IR technology, and 
                moral leadership.
              </p>
            </div>

            {/* Strategic Alignment Callout */}
            <div className="p-6 rounded-2xl bg-stone-100/70 border border-stone-200/80 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                National & Provincial Alignment
              </span>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Our operations proactively address the KwaZulu-Natal provincial government goal to{' '}
                <em className="font-serif">"provide social protection to vulnerable groups, especially in rural areas"</em> and South Africa's{' '}
                <strong className="font-semibold text-stone-800">National Development Plan Priority #5: Social Cohesion & Safe Communities</strong>.
              </p>
            </div>

            {/* Key Organization Info Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs flex items-start gap-3">
                <Building2 className="w-4 h-4 text-stone-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-900 block">NPO Registered</span>
                  <span className="text-stone-500">Department of Social Dev #{ORG_DETAILS.npoRegistration}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs flex items-start gap-3">
                <MapPin className="w-4 h-4 text-stone-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-900 block">Headquarters</span>
                  <span className="text-stone-500">Ndwedwe Ward 18, Thafamasi Area, KZN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Vision & Mission Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Vision Card */}
            <div className="p-8 rounded-2xl bg-stone-900 text-stone-100 shadow-xl space-y-4 text-left">
              <div className="w-9 h-9 rounded-full bg-stone-800 text-stone-200 flex items-center justify-center border border-stone-700">
                <Target className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-semibold text-white font-display tracking-tight">Our Vision</h3>
              <p className="text-sm text-stone-400 font-normal leading-relaxed">
                Creating a wholesome, cohesive, and healthy society through developing and nurturing boys into becoming 
                responsible, empathetic leaders and fathers of tomorrow.
              </p>
            </div>

            {/* Mission Card */}
            <div className="p-8 rounded-2xl bg-white border border-stone-200/80 shadow-xs space-y-4 text-left">
              <div className="w-9 h-9 rounded-full bg-stone-100 text-stone-700 flex items-center justify-center">
                <Compass className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 font-display tracking-tight">Our Mission</h3>
              <p className="text-sm text-stone-500 font-normal leading-relaxed">
                To mentor 40+ adolescent boys (ages 9–18) annually with adult male role models, equipping them with an 
                inner compass, trade proficiencies, 4IR STEM competencies, and educational guidance to transcend perceived 
                limitations.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values 4-Pillars Grid */}
        <div className="pt-12 border-t border-stone-200">
          <div className="mb-10 text-left">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-stone-400 mb-2">
              Foundational Principles
            </span>
            <h3 className="text-2xl font-light text-stone-900 font-display">The B2M South Africa Value Set</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-stone-400">
                01 / Integrity
              </span>
              <h4 className="text-sm font-semibold text-stone-900">Moral Compass & Honesty</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Nurturing internal fortitude, honesty, self-respect, and the ability to make righteous decisions even when unsupervised.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-stone-400">
                02 / Masculinity
              </span>
              <h4 className="text-sm font-semibold text-stone-900">Positive Role Modeling</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Redefining manhood around gentleness, respect for women and girls, active GBV prevention, and healthy emotional expression.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-stone-400">
                03 / Dignity
              </span>
              <h4 className="text-sm font-semibold text-stone-900">Practical Self-Sufficiency</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Mastering plumbing, mechanics, cooking, first aid, and STEM coding to build dignity through tangible craftsmanship.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-stone-400">
                04 / Community
              </span>
              <h4 className="text-sm font-semibold text-stone-900">Family & Stewardship</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Encouraging young men to become protective brothers, supportive sons, and active stewards of their communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
