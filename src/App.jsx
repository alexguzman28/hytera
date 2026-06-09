import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px', // Trigger slightly before entering fully
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative bg-black text-white min-h-screen selection:bg-neutral-800 selection:text-white">
      {/* Fixed top navigation bar */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main>
        <Hero />
        <Services />
        <About />
        <HowItWorks />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
