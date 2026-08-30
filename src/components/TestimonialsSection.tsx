import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/b2mData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 sm:py-28 bg-stone-50 text-stone-900 border-b border-stone-200/80 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16 text-left">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-stone-400">
            Stories of Transformation
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-stone-900 tracking-tight font-display leading-[1.15]">
            Voices from our community & <span className="italic font-serif font-normal">families</span>.
          </h2>
          <p className="text-base sm:text-lg text-stone-500 font-normal leading-relaxed">
            Real testimonies demonstrating how male mentorship, trade skills, and emotional 
            safe spaces change lives at home, in the classroom, and across KwaZulu-Natal.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto bg-white border border-stone-200/80 rounded-2xl p-8 sm:p-12 shadow-xs relative text-left">
          {/* Highlight Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-medium mb-6 border border-stone-200/60">
            <span>{current.highlight}</span>
          </div>

          {/* Quote Body */}
          <blockquote className="text-lg sm:text-2xl text-stone-900 font-serif font-normal leading-relaxed mb-8 italic">
            "{current.quote}"
          </blockquote>

          {/* Author Details & Carousel Controls */}
          <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-stone-900 font-display">
                {current.author}
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                <span className="text-stone-700 font-medium">{current.role}</span>
                <span>&bull;</span>
                <span>{current.location}</span>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors flex items-center justify-center border border-stone-200/60"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-semibold text-stone-400 px-2">
                0{currentIndex + 1} / 0{TESTIMONIALS.length}
              </span>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors flex items-center justify-center border border-stone-200/60"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Testimonials Quick Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-left">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-6 rounded-2xl text-left transition-all border ${
                currentIndex === idx
                  ? 'bg-white border-stone-900 shadow-sm'
                  : 'bg-white/60 border-stone-200/70 hover:bg-white hover:border-stone-300'
              }`}
            >
              <div className="text-stone-900 text-xs font-semibold mb-2">
                <span className="truncate block">{t.highlight}</span>
              </div>
              <p className="text-xs text-stone-600 font-normal line-clamp-3 leading-relaxed mb-3 italic">
                "{t.quote}"
              </p>
              <div className="text-xs font-semibold text-stone-900">
                {t.author}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
