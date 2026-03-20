import { useState, useEffect } from 'react';
import { ChevronDown, Flame, FileText } from 'lucide-react';

const roles = ['Web Developer', 'Graphic Designer', 'Creative Builder'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Glass card behind content */}
          <div className="glass rounded-3xl p-8 md:p-14 relative overflow-hidden">
            {/* Light sweep */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-secondary/5 to-transparent animate-light-sweep" />
            </div>

            <p
              className="text-sm md:text-base font-medium tracking-widest uppercase text-muted-foreground mb-4 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.2s' }}
            >
              Hello, I'm
            </p>

            <h1
              className="font-heading text-4xl sm:text-5xl md:text-7xl font-900 tracking-tight leading-[0.95] mb-4 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.4s', lineHeight: '1.05' }}
            >
              Aaditya<br />
              <span className="text-gradient">Belbase</span>
            </h1>

            <div
              className="h-8 mb-6 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.6s' }}
            >
              <span className="text-secondary font-medium text-lg">
                {displayed}
              </span>
              <span className="border-r-2 ml-0.5 animate-typing-cursor border-secondary">&nbsp;</span>
            </div>

            <p
              className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto mb-10 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.8s', textWrap: 'pretty' }}
            >
              I design and build modern, high-performance digital experiences.
            </p>

            <div
              className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: '1s' }}
            >
              <a href="#projects" className="hero-glow-btn inline-flex items-center gap-2 text-sm">
                <Flame size={16} />
                View Projects
              </a>
              <a href="#resume" className="inline-flex items-center gap-2 text-sm px-6 py-3 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-black font-medium transition-all duration-300 active:scale-95">
                <FileText size={16} />
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-scroll-hint" />
      </a>
    </section>
  );
};

export default Hero;
