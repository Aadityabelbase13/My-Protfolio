import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
      setShowTop(scrolled > 400);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-[60]">
        <div className="h-full scroll-progress-bar transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center glass transition-all duration-500 active:scale-95 ${
          showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={18} className="text-foreground" />
      </button>
    </>
  );
};

export default ScrollProgress;
