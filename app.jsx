// ============================================
// APP — root, composes all sections, hosts tweaks
// ============================================

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "atmosphere": "off",
  "motion": "cinematic",
  "surface": "frosted"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useReveal();
  useScrollTriggers();
  useSpotlightCards();

  // Apply body classes for motion + surface treatment
  React.useEffect(() => {
    document.body.dataset.motion = t.motion;
    document.body.dataset.surface = t.surface;
    document.body.dataset.atmosphere = t.atmosphere;
  }, [t.motion, t.surface, t.atmosphere]);

  // Soft fade on load
  React.useEffect(() => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity .6s ease';
    requestAnimationFrame(() => { document.body.style.opacity = '1'; });
  }, []);

  // Atmosphere → which background layers are visible
  const showOrbs    = t.atmosphere !== 'off';
  const showGrid    = t.atmosphere === 'standard' || t.atmosphere === 'cinematic';
  const showStreaks = t.atmosphere === 'cinematic';

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

      <TweaksPanel>
        <TweakSection label="Atmosphere" />
        <TweakRadio
          label="Background"
          value={t.atmosphere}
          options={['off', 'minimal', 'standard', 'cinematic']}
          onChange={(v) => setTweak('atmosphere', v)}
        />

        <TweakSection label="Motion" />
        <TweakRadio
          label="Intensity"
          value={t.motion}
          options={['calm', 'cinematic', 'kinetic']}
          onChange={(v) => setTweak('motion', v)}
        />

        <TweakSection label="Surface" />
        <TweakRadio
          label="Treatment"
          value={t.surface}
          options={['frosted', 'matte', 'hologram']}
          onChange={(v) => setTweak('surface', v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
