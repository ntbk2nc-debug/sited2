import React, { useState } from 'react';
import { HeartHandshake } from 'lucide-react';
import { CAMP_SCHEDULE } from '../data/b2mData';

export const CampTimeline: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = ['All', 'Fitness', 'Life Skills', 'STEM', 'Personal Development', 'Reflection'];

  const filteredSlots = CAMP_SCHEDULE.filter((slot) => {
    if (activeFilter === 'All') return true;
    return slot.pillar === activeFilter;
  });

  return (
    <section id="camp" className="py-20 sm:py-28 bg-stone-50 text-stone-900 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-12 text-left">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-stone-400">
            Residential Immersion
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-stone-900 tracking-tight font-display leading-[1.15]">
            A day in the life at <span className="italic font-serif font-normal">mentorship camp</span>.
          </h2>
          <p className="text-base sm:text-lg text-stone-500 font-normal leading-relaxed">
            Our 5-day annual residential camp balances physical discipline, trade mastery, 
            high-tech STEM exploration, and emotional healing youth circles.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-10 scrollbar-none">
          <span className="text-xs font-semibold text-stone-400 mr-2">
            Categories:
          </span>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeFilter === f
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-200/70 text-stone-600 hover:bg-stone-300/70'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Timeline Grid without time intervals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {filteredSlots.map((slot, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-stone-200/80 space-y-3 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider">
                    MODULE 0{idx + 1}
                  </span>
                  <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-200/60">
                    {slot.pillar}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-stone-900">
                  {slot.activity}
                </h3>
              </div>

              <p className="text-xs text-stone-500 font-normal leading-relaxed">
                {slot.description}
              </p>
            </div>
          ))}
        </div>

        {/* Evening Youth Circle Highlight Banner without "every evening at 19:30" */}
        <div className="mt-12 p-8 sm:p-10 rounded-2xl bg-stone-900 text-stone-100 shadow-md text-left space-y-3">
          <div className="flex items-center gap-2 text-stone-400 text-xs font-bold uppercase tracking-widest">
            <HeartHandshake className="w-4 h-4 text-stone-300" />
            <span>Nightly Youth Circle</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-light text-white font-display">
            Where true <span className="italic font-serif">brotherhood & healing</span> happens.
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 font-normal max-w-3xl leading-relaxed">
            Surrounded by mentors and peers around the campfire, boys are given the safe space to acknowledge 
            the grief and absence of their fathers, formulate life goals, and form an unbreakable brotherhood.
          </p>
        </div>
      </div>
    </section>
  );
};
