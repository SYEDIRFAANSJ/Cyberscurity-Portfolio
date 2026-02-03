import { useEffect } from 'react';
import './index.css';
import MatrixRain from './components/MatrixRain';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Observe all sections and cards
    const elements = document.querySelectorAll(
      'section, .card, .project-card, .about-card, .timeline-item, .skill-category, .cert-card, .blog-card'
    );
    elements.forEach((el) => {
      el.classList.add('animate-hidden');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <MatrixRain />
      <div className="grid-bg"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Blog />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
