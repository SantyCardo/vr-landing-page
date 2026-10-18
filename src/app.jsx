import React from 'react';
import { ScrollProgress, useReveal, useScrollTriggers, useSpotlightCards } from './effects.jsx';
import { SideRail, SectionDivider } from './motion.jsx';
import { Nav } from './nav.jsx';
import { Hero } from './hero.jsx';
import { AboutSection, JustificationSection, ProblemSection } from './sections-a.jsx';
import { QuestionSection, ObjectivesSection, TimelineSection } from './sections-b.jsx';
import { MethodologySection, MechanicsSection } from './sections-c.jsx';
import { ScopeSection, FAQSection, TeamSection, Footer, LegalSection, ResultsSection, StateOfArtSection, ReferencesSection } from './sections-d.jsx';

// Valores fijos que antes venían del panel de tweaks del editor de diseño.
const LOOK = { atmosphere: 'off', motion: 'cinematic', surface: 'frosted' };

export function App() {
  useReveal();
  useScrollTriggers();
  useSpotlightCards();

  React.useEffect(() => {
    document.body.dataset.motion = LOOK.motion;
    document.body.dataset.surface = LOOK.surface;
    document.body.dataset.atmosphere = LOOK.atmosphere;
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity .6s ease';
    requestAnimationFrame(() => { document.body.style.opacity = '1'; });
  }, []);

  return (
    <>
      <ScrollProgress />
      <SideRail />
      <Nav />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <SectionDivider label="002" color="#00b1ff" />
        <AboutSection />
        <SectionDivider label="003" color="#b1a6f6" />
        <ProblemSection />
        <SectionDivider label="004" color="#00ffaa" variant="diamond" />
        <JustificationSection />
        <SectionDivider label="005" color="#00b1ff" variant="plus" />
        <QuestionSection />
        <SectionDivider label="006" color="#00ffaa" />
        <ObjectivesSection />
        <SectionDivider label="006.B" color="#00b1ff" />
        <ScopeSection />
        <SectionDivider label="007" color="#b1a6f6" variant="diamond" />
        <TimelineSection />
        <SectionDivider label="007.B" color="#00b1ff" variant="plus" />
        <LegalSection />
        <SectionDivider label="008" color="#2ee9ff" />
        <MethodologySection />
        <SectionDivider label="009" color="#5350cc" variant="plus" />
        <MechanicsSection />
        <StateOfArtSection />
        <ReferencesSection />
        <SectionDivider label="010" color="#00ffaa" variant="diamond" />
        <ResultsSection />
        <SectionDivider label="011" color="#00ffaa" />
        <FAQSection />
        <SectionDivider label="012" color="#b1a6f6" />
        <TeamSection />
      </main>
      <Footer />

      <div className="grain" aria-hidden="true" />

    </>
  );
}
