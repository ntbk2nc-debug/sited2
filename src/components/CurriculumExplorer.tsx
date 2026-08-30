import React from 'react';

export const CurriculumExplorer: React.FC = () => {
  const mainTopics = [
    {
      id: 'vocational-trade',
      title: 'Vocational & Trade',
      description: 'Practical, hands-on trade skills traditionally passed down from father to son to build household self-sufficiency, craftsmanship, and technical independence.',
      focusAreas: 'Plumbing basics, auto mechanics, carpentry, nutrition, cooking, certified first aid, and outdoor survival.',
    },
    {
      id: 'stem-innovation',
      title: '4IR & STEM Innovation',
      description: 'Democratizing Fourth Industrial Revolution digital literacy and engineering logic for youth to build technological competitiveness.',
      focusAreas: 'Artificial intelligence concepts, robotics assembly, applied mathematics, engineering design, drone piloting, and computer literacy.',
    },
    {
      id: 'personal-character',
      title: 'Personal Character & Grooming',
      description: 'Fostering moral fortitude, positive masculinity, emotional regulation, and active prevention of Gender-Based Violence (GBV).',
      focusAreas: "Male grooming & hygiene, mental wellness, GBV prevention, relationship dynamics, digital ethics, and youth circle safe spaces.",
    },
    {
      id: 'sports-athletic',
      title: 'Sports & Athletic Mastery',
      description: 'Channeling adolescent energy into structured athletic discipline, team cohesion, and physical endurance as a metaphor for overcoming life adversity.',
      focusAreas: 'Soccer agility, touch rugby, field hockey clinics, archery precision, and golf fundamentals.',
    },
  ];

  return (
    <section id="curriculum" className="py-20 sm:py-28 bg-white text-stone-900 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-14 text-left">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-stone-400">
            Core Curriculum
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-stone-900 tracking-tight font-display leading-[1.15]">
            Comprehensive skills & <span className="italic font-serif font-normal">trade syllabus</span>.
          </h2>
          <p className="text-base sm:text-lg text-stone-500 font-normal leading-relaxed">
            Every topic is designed to replace learned helplessness with self-reliance, 
            technical dexterity, and moral clarity.
          </p>
        </div>

        {/* Main Topics Grid without icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {mainTopics.map((topic, idx) => (
            <div
              key={topic.id}
              className="p-8 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-5 hover:border-stone-400 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-stone-400">
                    TOPIC 0{idx + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-stone-900 font-display">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-stone-600 font-normal leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200/60 space-y-1 text-xs">
                <span className="text-stone-400 font-bold uppercase tracking-wider block text-[10px]">
                  Core Focus:
                </span>
                <p className="text-stone-700 font-medium leading-relaxed">
                  {topic.focusAreas}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
