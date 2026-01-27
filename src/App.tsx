import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import InteractiveDemo from './components/InteractiveDemo';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-slate-900 overflow-x-hidden">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#e5e7eb] bg-white/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="text-sm font-semibold text-slate-800 tracking-tight">
            손사장 · <span className="text-slate-500">AI Application Engineer</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-xs text-slate-500">
            <a href="#about" className="hover:text-slate-900 transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-slate-900 transition-colors">
              Projects
            </a>
            <a href="#demo" className="hover:text-slate-900 transition-colors">
              Demo
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-md border border-[#d1d5db] px-3 py-1.5 text-xs font-medium text-slate-800 hover:bg-slate-100 transition-colors bg-white"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <InteractiveDemo />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
