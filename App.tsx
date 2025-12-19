import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { TheShift } from './components/TheShift';
import { Features } from './components/Features';
import { Phases } from './components/Phases';
import { Guarantee } from './components/Guarantee';
import { WhoIsThisFor } from './components/WhoIsThisFor';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ParticleBackground';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-zinc-300 font-body selection:bg-brand-yellow selection:text-brand-black relative">
      <ParticleBackground />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <PainPoints />
        <TheShift />
        <Features />
        <Phases />
        <Guarantee />
        <WhoIsThisFor />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default App;