
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import GallerySection from './components/sections/GallerySection';
import StructureSection from './components/sections/StructureSection';
import JoinSection from './components/sections/JoinSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-zinc-900 min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <StructureSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
