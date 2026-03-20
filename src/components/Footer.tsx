import { Facebook, Instagram, Linkedin, Github } from 'lucide-react';

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
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
            <a key={s.label} href={s.href} aria-label={s.label} className="social-icon">
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
