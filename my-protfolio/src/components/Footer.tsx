import { Facebook, Instagram, Linkedin, Github } from 'lucide-react';

const socials = [
  { icon: Facebook, href: 'https://www.facebook.com/aaditya.belbase.377080', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/aadi_tya5567/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/aaditya-belbase-aa8768304/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/Aadityabelbase13', label: 'GitHub' },
];

const Footer = () => (
  <footer className="border-t border-border/50 py-12 relative">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground text-center md:text-left max-w-sm" style={{ textWrap: 'pretty' }}>
          Designing modern experiences with code and creativity.
        </p>

        <div className="flex gap-3">
          {socials.map((s) => (
            
             <a key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="social-icon"
            >
              <s.icon size={16} className="text-muted-foreground" />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border/30 text-center">
        <p className="text-xs text-muted-foreground">
          © 2026 Aaditya Belbase. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;