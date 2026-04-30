import ParticleBackground from '../components/ParticleBackground';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
