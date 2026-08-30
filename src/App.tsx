/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { StatsAndResearch } from './components/StatsAndResearch';
import { ProgramsSection } from './components/ProgramsSection';
import { FieldWorkSlideshow } from './components/FieldWorkSlideshow';
import { CurriculumExplorer } from './components/CurriculumExplorer';
import { CampTimeline } from './components/CampTimeline';
import { CareerGuidanceHub } from './components/CareerGuidanceHub';
import { TestimonialsSection } from './components/TestimonialsSection';
import { DonateAndSponsorship } from './components/DonateAndSponsorship';
import { ContactAndTransparency } from './components/ContactAndTransparency';
import { Footer } from './components/Footer';
import { MentorVolunteerModal } from './components/MentorVolunteerModal';

export default function App() {
  const [isMentorModalOpen, setIsMentorModalOpen] = useState(false);

  const handleOpenDonate = () => {
    const donateElem = document.getElementById('donate');
    if (donateElem) {
      donateElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenMentorModal = () => {
    setIsMentorModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-stone-900 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenDonate={handleOpenDonate}
        onOpenMentorModal={handleOpenMentorModal}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenDonate={handleOpenDonate}
          onOpenMentorModal={handleOpenMentorModal}
        />

        {/* 2. What We Have Done - Fieldwork & Real Photographic Slideshow */}
        <FieldWorkSlideshow />

        {/* 3. About & 2022 Origin Story */}
        <AboutSection />

        {/* 4. The Fatherhood Crisis & Research Data */}
        <StatsAndResearch />

        {/* 5. Core Programs */}
        <ProgramsSection onOpenDonate={handleOpenDonate} />

        {/* 6. Comprehensive Skills & Trade Curriculum */}
        <CurriculumExplorer />

        {/* 7. A Day in the Life at Camp (Timeline) */}
        <CampTimeline />

        {/* 8. Career Guidance Weeks & CAO/NSFAS Hub */}
        <CareerGuidanceHub />

        {/* 9. Testimonials & Community Voices */}
        <TestimonialsSection />

        {/* 10. Direct Banking & Sponsorship Calculator */}
        <DonateAndSponsorship />

        {/* 11. Contact Directory & Governance Transparency */}
        <ContactAndTransparency />
      </main>

      {/* Footer */}
      <Footer
        onOpenDonate={handleOpenDonate}
        onOpenMentorModal={handleOpenMentorModal}
      />

      {/* Mentor / Volunteer Application Modal */}
      <MentorVolunteerModal
        isOpen={isMentorModalOpen}
        onClose={() => setIsMentorModalOpen(false)}
      />
    </div>
  );
}
