import React, { useState } from 'react';
import { 
  CheckCircle, 
  ArrowRight
} from 'lucide-react';

export const CareerGuidanceHub: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const careerSteps = [
    {
      title: '1. Self-Discovery & Assessment',
      subtitle: 'Unlocking strengths, natural talents & personal values',
      desc: 'Through psychometric assessments and mentor interviews, we help boys identify their core strengths and break free from limiting beliefs about what youth can achieve.',
      activities: ['Personality & Career Match Questionnaires', 'Values Exploration Circles', 'Strengths-Based Feedback'],
    },
    {
      title: '2. CAO & NSFAS Direct Application Drive',
      subtitle: 'Guaranteeing admission access and funding registration',
      desc: 'Many boys miss out on tertiary education simply due to lack of internet, data, or knowledge of CAO application deadlines. We provide hands-on computer hubs to complete all forms.',
      activities: ['CAO Registration & Course Selection', 'NSFAS Financial Aid Submission', 'Document Certification Support'],
    },
    {
      title: '3. TVET, Artisan Trades & Universities',
      subtitle: 'Multi-pathway tertiary navigation',
      desc: 'Whether an artisan trade (welding, plumbing, electrical engineering at TVET) or a 4-year degree at UKZN/DUT, we demystify APS scores, entry requirements, and vocational paths.',
      activities: ['TVET College Artisan Roadshows', 'University Faculty Tours', 'Bursary & Learnership Matching'],
    },
    {
      title: '4. Employability & CV Workshops',
      subtitle: 'Building professional polish and interview confidence',
      desc: 'Boys craft their very first professional CV, undergo simulated job interviews with corporate executives, and learn professional email etiquette and workplace conduct.',
      activities: ['Professional CV Formatting', 'Mock Interview Drills', 'Workplace Ethics & Communication'],
    },
    {
      title: '5. 4IR Tech & Edutainment Expos',
      subtitle: 'Drones, VR simulations, and entrepreneurship',
      desc: 'Igniting curiosity through hands-on drone flight simulations, VR vocational previews (welding, aviation, medicine), 360 photo booths, and meetings with local tech startups.',
      activities: ['Hands-on Drone Piloting', 'VR Career Simulators', 'Startup & SME Pitch Sessions'],
    },
  ];

  return (
    <section id="career-guidance" className="py-20 sm:py-28 bg-white text-stone-900 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16 text-left">
          <h2 className="text-3xl sm:text-5xl font-light text-stone-900 tracking-tight font-display leading-[1.15]">
            KwaZulu-Natal <span className="italic font-serif font-normal">career guidance weeks</span>.
          </h2>
          <p className="text-base sm:text-lg text-stone-500 font-normal leading-relaxed">
            Reversing the trend of Grade 10 school dropouts by building tangible bridges 
            from high school classrooms to universities, TVET colleges, and sustainable careers.
          </p>
        </div>

        {/* Interactive 5-Step Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Steps Navigation */}
          <div className="lg:col-span-5 space-y-2">
            {careerSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all border flex items-center justify-between gap-3 ${
                    isActive
                      ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                      : 'bg-stone-50 text-stone-700 hover:bg-stone-100/80 border-stone-200/70'
                  }`}
                >
                  <div className="space-y-0.5">
                    <h3 className="text-xs sm:text-sm font-semibold">{step.title}</h3>
                    <p className={`text-[11px] ${isActive ? 'text-stone-300 font-normal' : 'text-stone-500'}`}>
                      {step.subtitle}
                    </p>
                  </div>
                  <ArrowRight className={`w-3.5 h-3.5 flex-shrink-0 ${isActive ? 'text-white' : 'text-stone-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase Card */}
          <div className="lg:col-span-7 bg-stone-50 rounded-2xl border border-stone-200/80 p-7 sm:p-9 shadow-xs space-y-6 text-left">
            <div className="space-y-2 pb-4 border-b border-stone-200/60">
              <span className="text-[11px] font-bold text-stone-400 uppercase tracking-widest">
                Step 0{activeStep + 1} of 05 &bull; Career Pathway Roadmap
              </span>
              <h3 className="text-xl sm:text-2xl font-light text-stone-900 font-display">
                {careerSteps[activeStep].title}
              </h3>
              <p className="text-xs font-medium text-stone-500">
                {careerSteps[activeStep].subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
              {careerSteps[activeStep].desc}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                Key Initiatives & Outcomes
              </h4>
              <div className="space-y-2">
                {careerSteps[activeStep].activities.map((act, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-stone-200/70 text-xs sm:text-sm text-stone-800">
                    <CheckCircle className="w-4 h-4 text-stone-900 flex-shrink-0" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200/80 text-xs text-stone-600">
              <span>
                <strong className="text-stone-900 font-semibold">Outcome:</strong> Higher Grade 12 pass rates, increased tertiary admission, and empowered young breadwinners for families.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
