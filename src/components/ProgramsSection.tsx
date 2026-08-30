import React, { useState } from 'react';
import { 
  ArrowRight
} from 'lucide-react';
import { PROGRAMS } from '../data/b2mData';
import { ProgramItem } from '../types';

interface ProgramsSectionProps {
  onOpenDonate: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenDonate }) => {
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem>(PROGRAMS[0]);

  return (
    <section id="programs" className="py-20 sm:py-28 bg-stone-50 text-stone-900 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16 text-left">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-stone-400">
            Core Curriculum
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-stone-900 tracking-tight font-display leading-[1.15]">
            Holistic programs for <span className="italic font-serif">every stage</span> of growth.
          </h2>
          <p className="text-base sm:text-lg text-stone-500 font-normal leading-relaxed">
            Our multi-disciplinary curriculum integrates technical trades, 4IR STEM competencies, 
            athletic character formation, and emotional resilience to raise well-rounded young men.
          </p>
        </div>

        {/* Desktop & Tablet: Interactive Program Selector + Spotlight Pane */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Program Navigation List */}
          <div className="lg:col-span-5 space-y-2">
            {PROGRAMS.map((prog, idx) => {
              const isSelected = selectedProgram.id === prog.id;
              return (
                <button
                  key={prog.id}
                  onClick={() => setSelectedProgram(prog)}
                  className={`w-full text-left p-4 rounded-xl transition-all flex items-start gap-3.5 border ${
                    isSelected
                      ? 'bg-white border-stone-900 shadow-sm'
                      : 'bg-white/60 hover:bg-white border-stone-200/70 hover:border-stone-300'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-mono font-bold transition-colors ${
                      isSelected
                        ? 'bg-stone-900 text-white'
                        : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    0{idx + 1}
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-sm font-semibold ${isSelected ? 'text-stone-950' : 'text-stone-700'}`}>
                        {prog.title}
                      </h3>
                    </div>
                    <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
                      {prog.summary}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Deep Dive Pane */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200/80 p-7 sm:p-9 shadow-xs space-y-6 text-left">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-stone-100">
              <div>
                <span className="text-xs font-bold text-stone-400 uppercase tracking-widest block">
                  Core Program Module
                </span>
                <h3 className="text-xl sm:text-2xl font-light text-stone-900 font-display">
                  {selectedProgram.title}
                </h3>
              </div>
              <span className="text-xs font-medium text-stone-500 bg-stone-100 px-3 py-1 rounded-full border border-stone-200/60">
                {selectedProgram.duration}
              </span>
            </div>

            {/* Description & Narrative */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                Program Overview
              </h4>
              <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
                {selectedProgram.description}
              </p>
            </div>

            {/* Strategic Highlight Quote without icon */}
            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200/80">
              <span className="text-xs font-semibold text-stone-900 block">Key Strategic Intent</span>
              <p className="text-xs text-stone-600 leading-relaxed mt-1">
                {selectedProgram.highlight}
              </p>
            </div>

            {/* Skills Taught Chips without check icon */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                Key Competencies & Practical Modules
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedProgram.skillsTaught.map((skill, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-stone-50 border border-stone-200/60 text-xs font-medium text-stone-800 flex items-center gap-2.5"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-400 flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Meta Attributes: Age & Duration without icons */}
            <div className="pt-5 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-stone-600">
              <div>
                <span className="text-stone-400 block text-[11px] uppercase tracking-wider">Target Cohort</span>
                <span className="font-semibold text-stone-900 text-xs">{selectedProgram.ageGroup}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[11px] uppercase tracking-wider">Cadence</span>
                <span className="font-semibold text-stone-900 text-xs">{selectedProgram.duration}</span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={onOpenDonate}
                className="px-6 py-2.5 rounded-full bg-stone-900 text-white font-semibold text-xs flex items-center gap-2 hover:bg-stone-800 transition-all"
              >
                <span>Sponsor This Program</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
