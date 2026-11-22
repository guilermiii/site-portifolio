import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PipelineViewer from './components/PipelineViewer';
import InteractiveTerminal from './components/InteractiveTerminal';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#0a0e17] text-slate-100 flex flex-col font-sans transition-colors duration-200">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-1">
        <Hero />
        <PipelineViewer />
        <InteractiveTerminal />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
