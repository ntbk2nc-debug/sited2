import React, { useState, useEffect, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Maximize2, 
  X, 
  MapPin, 
  Calendar, 
  Sliders,
  Image as ImageIcon 
} from 'lucide-react';

import seedGrantImg from '../assets/images/seed_grant_check_1787938669062.jpg';
import roboticsImg from '../assets/images/robotics_workshop_table_1787938684668.jpg';
import cohortImg from '../assets/images/mentorship_cohort_group_1787938698041.jpg';
import campfireImg from '../assets/images/campfire_boys_circle_1788010077088.jpg';
import classroom1Img from '../assets/images/classroom_hand_raising_1787938730821.jpg';
import classroom2Img from '../assets/images/boys_in_classroom_session_1787938745164.jpg';

export interface SlideItem {
  id: string;
  image: string;
  category: string;
  tagline: string;
  title: string;
  description: string;
  date: string;
  location: string;
  impactMetric: string;
  tags: string[];
}

export const SLIDES: SlideItem[] = [
  {
    id: 'sponsorship-2022',
    image: seedGrantImg,
    category: 'Institutional Milestone',
    tagline: 'Sihle Zikalala Development Trust Grant',
    title: 'Official Seed Funding & Foundation Launch',
    description: 'Founding leaders of Boys 2 Men South Africa receiving a R10,000 seed grant sponsorship from the Sihle Zikalala Development Trust, establishing our initial equipment fund, branded pull-up banners, and launching our community hubs across KwaZulu-Natal.',
    date: '28 June 2022',
    location: 'Ndwedwe Community Center, KZN',
    impactMetric: 'R10,000 Seed Grant Procured',
    tags: ['Governance', 'Sponsorship', 'Founding']
  },
  {
    id: 'stem-robotics-workshop',
    image: roboticsImg,
    category: '4IR & STEM Skills',
    tagline: 'Robotics, Coding & Mechanical Engineering',
    title: 'Hands-on 4IR Robotics & Automation Workshop',
    description: 'Adolescent boys building and programming mechanical rovers and PLAY 700 robotics kits. Demystifying technology, sensor mechanics, and motorized robotics for young boys who previously lacked computer access.',
    date: 'Quarterly Skills Workshop',
    location: 'B2M Technology & Skills Hub',
    impactMetric: 'Practical Automation Lab',
    tags: ['4IR Tech', 'Robotics', 'STEM']
  },
  {
    id: 'cohort-mentorship-gathering',
    image: cohortImg,
    category: 'Brotherhood & Mentorship',
    tagline: 'Adolescent Cohort & Community Elder Council',
    title: 'Annual Mentorship Cohort & Leadership Gathering',
    description: 'A cohort of over 30 boys in official Boys 2 Men South Africa hoodies and caps gathered with community dignitaries and adult male mentors. Celebrating positive masculinity, emotional maturity, mutual respect, and brotherhood.',
    date: 'Residential Camp Graduation',
    location: 'KwaZulu-Natal, South Africa',
    impactMetric: '30+ Young Men United',
    tags: ['Brotherhood', 'Cohort', 'Leadership']
  },
  {
    id: 'campfire-bushcraft-circle',
    image: campfireImg,
    category: 'Camps & Survival',
    tagline: 'Survival Bushcraft & Vulnerability Circles',
    title: 'Campfire Circles & Outdoor Bushcraft Skills',
    description: 'Nighttime campfire circles during our multi-day wilderness camps. Black adolescent boys and youth gather around the glowing fire to learn open-flame cooking, outdoor survival skills, and share emotions and life goals in a safe space.',
    date: 'Nighttime Campfire Session',
    location: 'Wilderness Camp Grounds, KZN',
    impactMetric: 'Safe Space Brotherhood Circles',
    tags: ['Survival', 'Bushcraft', 'Camp']
  },
  {
    id: 'classroom-empowerment-1',
    image: classroom1Img,
    category: 'Classroom Mentorship',
    tagline: 'Confidence, Public Speaking & Academic Pride',
    title: 'Active Classroom Engagement & Voice Building',
    description: 'Young boys enthusiastically raising their hands during an interactive mentorship and life skills workshop. Mentors foster a psychologically safe space where boys develop confidence, curiosity, and pride in learning.',
    date: 'Weekly Mentorship Hub',
    location: 'Ndwedwe Education Center',
    impactMetric: 'Active Participation',
    tags: ['Education', 'Confidence', 'Workshops']
  },
  {
    id: 'classroom-empowerment-2',
    image: classroom2Img,
    category: 'Youth Development',
    tagline: 'Empowering Young Minds in the Classroom',
    title: 'Curiosity & Peer Encouragement in Action',
    description: 'A close-up view of adolescent boys engaged in group problem-solving. Structured mentorship sessions help replace feelings of abandonment with purpose, academic ambition, and high self-worth.',
    date: 'Life Skills & Mentorship Class',
    location: 'Ndwedwe Ward 18, KZN',
    impactMetric: 'Measurable Academic Rise',
    tags: ['Mindset', 'Growth', 'Mentorship']
  }
];

const CATEGORIES = [
  'All Fieldwork',
  '4IR & STEM Skills',
  'Camps & Survival',
  'Brotherhood & Mentorship',
  'Classroom Mentorship',
  'Institutional Milestone'
];

export const FieldWorkSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Fieldwork');
  const [fitMode, setFitMode] = useState<'contain' | 'cover'>('cover');
  const [progress, setProgress] = useState(0);

  // Filter slides based on active category
  const filteredSlides = selectedCategory === 'All Fieldwork' 
    ? SLIDES 
    : SLIDES.filter(s => s.category === selectedCategory);

  const activeIndex = currentIndex >= filteredSlides.length ? 0 : currentIndex;
  const currentSlide = filteredSlides[activeIndex] || SLIDES[0];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % filteredSlides.length);
    setProgress(0);
  }, [filteredSlides.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + filteredSlides.length) % filteredSlides.length);
    setProgress(0);
  }, [filteredSlides.length]);

  // Autoplay timer with 6-second rotation
  useEffect(() => {
    if (!isPlaying) {
      setProgress(0);
      return;
    }

    const intervalDuration = 6000;
    const stepDuration = 50;
    const progressStep = (stepDuration / intervalDuration) * 100;

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + progressStep;
      });
    }, stepDuration);

    return () => clearInterval(progressTimer);
  }, [isPlaying, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setIsLightboxOpen(false);
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-stone-100 text-stone-900 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-stone-400">
              Photographic Evidence & Field Archive
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-stone-900 tracking-tight font-display leading-[1.15]">
              What we have <span className="italic font-serif font-normal">achieved</span> in the field.
            </h2>
            <p className="text-base sm:text-lg text-stone-500 font-normal leading-relaxed">
              Photographs documenting our journey: from our 2022 founding seed grant to 4IR robotics labs, 
              residential wilderness camps, and interactive classroom mentorship across KwaZulu-Natal.
            </p>
          </div>

          {/* Autoplay & Format Controls */}
          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto">
            {/* Aspect Ratio Format Switcher */}
            <button
              onClick={() => setFitMode(prev => prev === 'contain' ? 'cover' : 'contain')}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-semibold hover:border-stone-400 hover:text-stone-900 transition-all shadow-2xs"
              title="Toggle between Original Natural Aspect Ratio (Fit) and Full-Bleed (Fill)"
            >
              <Sliders className="w-3.5 h-3.5 text-stone-500" />
              <span>Format: {fitMode === 'contain' ? 'Fit Aspect' : 'Fill'}</span>
            </button>

            {/* Play/Pause */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-semibold hover:border-stone-400 hover:text-stone-900 transition-all shadow-2xs"
              title={isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-stone-700" />}
              <span>{isPlaying ? 'Playing' : 'Paused'}</span>
            </button>

            {/* Fullscreen */}
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="p-2 rounded-full bg-white border border-stone-200 text-stone-700 hover:border-stone-400 hover:text-stone-900 transition-colors shadow-2xs"
              title="View Fullscreen"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Filter Category Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentIndex(0);
                setProgress(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white border border-stone-200/80 text-stone-600 hover:text-stone-900 hover:bg-stone-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Interactive Slide Showcase Card */}
        <div className="bg-white rounded-3xl border border-stone-200/80 shadow-sm overflow-hidden text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Large High-Resolution Image Container */}
            <div className="lg:col-span-7 relative bg-stone-950 flex items-center justify-center min-h-[380px] sm:min-h-[480px] lg:min-h-[540px] overflow-hidden group">
              <img
                key={currentSlide.id}
                src={currentSlide.image}
                alt={currentSlide.title}
                referrerPolicy="no-referrer"
                className={`w-full h-full select-none transition-all duration-300 ${
                  fitMode === 'contain' ? 'object-contain max-h-[580px]' : 'object-cover'
                }`}
              />

              {/* Slide Counter Overlay */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md border border-white/10 text-white text-[11px] font-mono font-medium flex items-center gap-1.5">
                <ImageIcon className="w-3 h-3 text-stone-300" />
                <span>{activeIndex + 1} / {filteredSlides.length}</span>
              </div>

              {/* Action buttons on top-right */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="p-1.5 rounded-full bg-stone-900/80 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-stone-900 transition-colors"
                  title="Open Fullscreen Lightbox"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Floating Left/Right Arrows on image */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-900/70 hover:bg-white hover:text-stone-900 text-white flex items-center justify-center backdrop-blur-xs transition-all opacity-0 group-hover:opacity-100 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-900/70 hover:bg-white hover:text-stone-900 text-white flex items-center justify-center backdrop-blur-xs transition-all opacity-0 group-hover:opacity-100 z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Autoplay Progress Bar */}
              {isPlaying && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-stone-900/50 overflow-hidden">
                  <div 
                    className="h-full bg-white transition-all duration-75 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
            </div>

            {/* Right: Rich Contextual Narrative & Provenance Details */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-stone-100">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-stone-600 bg-stone-100 px-3 py-1 rounded-full">
                    {currentSlide.category}
                  </span>
                  <span className="text-xs font-medium text-stone-500 font-mono">
                    Slide {activeIndex + 1} of {filteredSlides.length}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-semibold text-stone-500 block uppercase tracking-wide">
                    {currentSlide.tagline}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-light text-stone-900 font-display leading-tight">
                    {currentSlide.title}
                  </h3>
                </div>

                <p className="text-sm text-stone-600 font-normal leading-relaxed">
                  {currentSlide.description}
                </p>

                {/* Provenance & Field Details Grid */}
                <div className="pt-4 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-start gap-2 text-stone-600">
                    <MapPin className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-stone-400 block uppercase">Location</span>
                      <span className="font-medium text-stone-800">{currentSlide.location}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-stone-600">
                    <Calendar className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-stone-400 block uppercase">Timeline</span>
                      <span className="font-medium text-stone-800">{currentSlide.date}</span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70 text-xs text-stone-700">
                  <span className="font-medium">
                    Key Milestone: <span className="font-semibold text-stone-900">{currentSlide.impactMetric}</span>
                  </span>
                </div>
              </div>

              {/* Slide Navigation Controls */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
                {/* Dots indicator */}
                <div className="flex items-center gap-1.5">
                  {filteredSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setCurrentIndex(idx);
                        setProgress(0);
                      }}
                      className={`h-2 rounded-full transition-all ${
                        activeIndex === idx
                          ? 'w-7 bg-stone-900'
                          : 'w-2 bg-stone-200 hover:bg-stone-400'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-full border border-stone-200 text-stone-700 hover:border-stone-900 hover:text-stone-900 transition-colors"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-full border border-stone-200 text-stone-700 hover:border-stone-900 hover:text-stone-900 transition-colors"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Gallery Row for Direct Selection */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {SLIDES.map((slide) => {
            const isCurrent = currentSlide.id === slide.id;
            return (
              <button
                key={slide.id}
                onClick={() => {
                  const targetIdx = filteredSlides.findIndex(s => s.id === slide.id);
                  if (targetIdx !== -1) {
                    setCurrentIndex(targetIdx);
                  } else {
                    setSelectedCategory('All Fieldwork');
                    const globalIdx = SLIDES.findIndex(s => s.id === slide.id);
                    setCurrentIndex(globalIdx);
                  }
                  setProgress(0);
                }}
                className={`relative rounded-2xl overflow-hidden text-left border-2 transition-all p-1 bg-white group ${
                  isCurrent
                    ? 'border-stone-900 shadow-md ring-2 ring-stone-900/10'
                    : 'border-transparent hover:border-stone-300 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-stone-950">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-1.5 space-y-0.5">
                  <span className="text-[10px] font-semibold text-stone-900 line-clamp-1 block">
                    {slide.title}
                  </span>
                  <span className="text-[9px] text-stone-400 block truncate">
                    {slide.date}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {isLightboxOpen && (
          <div className="fixed inset-0 z-50 bg-stone-950/98 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8">
            {/* Top Bar */}
            <div className="flex items-center justify-between text-white max-w-7xl mx-auto w-full">
              <div className="space-y-0.5 text-left">
                <span className="text-xs text-stone-400 uppercase tracking-widest font-mono">
                  {currentSlide.category} &bull; Slide {activeIndex + 1} of {filteredSlides.length}
                </span>
                <h4 className="text-base sm:text-xl font-light font-display text-white">
                  {currentSlide.title}
                </h4>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
                title="Close Fullscreen (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Centered Large Image in natural aspect ratio */}
            <div className="relative flex-1 flex items-center justify-center my-4 max-w-6xl mx-auto w-full">
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                referrerPolicy="no-referrer"
                className="max-h-[78vh] max-w-full object-contain rounded-xl shadow-2xl"
              />

              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-stone-900/80 hover:bg-white hover:text-stone-900 text-white flex items-center justify-center shadow-xl transition-all"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-stone-900/80 hover:bg-white hover:text-stone-900 text-white flex items-center justify-center shadow-xl transition-all"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption strip */}
            <div className="max-w-4xl mx-auto w-full bg-stone-900/80 border border-stone-800 p-4 rounded-2xl text-center text-xs text-stone-300 space-y-1">
              <p className="font-normal">{currentSlide.description}</p>
              <div className="text-[11px] text-stone-500 flex items-center justify-center gap-4">
                <span>Location: {currentSlide.location}</span>
                <span>&bull;</span>
                <span>Date: {currentSlide.date}</span>
                <span>&bull;</span>
                <span>{currentSlide.impactMetric}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
