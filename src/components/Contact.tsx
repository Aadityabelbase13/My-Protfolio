import { useRef, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { Send, Facebook, Instagram, Linkedin, Github } from 'lucide-react';

const socials = [
  { icon: Facebook, href: 'https://www.facebook.com/aaditya.belbase.377080', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/aadi_tya5567/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/aaditya-belbase-aa8768304/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/Aadityabelbase13', label: 'GitHub' },
];

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = useScrollReveal(sectionRef, 0.15);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 text-center">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-md mx-auto">Have a project in mind? Let's talk.</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className={`glass rounded-3xl p-8 md:p-12 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary/50 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary/50 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="hero-glow-btn w-full inline-flex items-center justify-center gap-2 text-sm"
              >
                {submitted ? 'Message Sent! ✓' : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>
            </form>

            {/* Social icons */}
            <div className="flex justify-center gap-3 mt-10">
              {socials.map((s) => (
                
                <a  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="social-icon"
                >
                  <s.icon size={18} className="text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;