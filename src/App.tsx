/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCard } from './components/HeroCard';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { ParallaxBackground } from './components/ParallaxBackground';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleContactClick = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="portfolio-app-root" className="min-h-screen text-zinc-100 font-sans selection:bg-zinc-700 selection:text-white relative">
      {/* Geometric Parallax Background from v1 */}
      <ParallaxBackground />

      {/* Top Navbar */}
      <Navbar onContactClick={handleContactClick} />

      {/* Main Page Layout */}
      <main id="main-content" className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-6 relative z-10">
        {/* Profile Card Header */}
        <HeroCard onNotify={showNotification} />

        {/* 01. About & Technical Focus */}
        <AboutSection />

        {/* 02. Projects */}
        <ProjectsSection />

        {/* 03. Technical Competencies */}
        <SkillsSection />

        {/* 04. Education */}
        <EducationSection />

        {/* 05. Certifications */}
        <CertificationsSection onNotify={showNotification} />

        {/* 06. Contact & Connect */}
        <ContactSection onNotify={showNotification} />

        {/* Footer */}
        <Footer onContactClick={handleContactClick} />
      </main>

      {/* Interactive Toast Notifications */}
      <Toast message={toastMessage} />

      {/* Vercel Analytics & Speed Insights Tracking */}
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
