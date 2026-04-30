import { useRef } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const technicalSkills = [
  { name: 'HTML & CSS', level: 90 },
  { name: 'JavaScript', level: 75 },
  { name: 'React', level: 55 },
  { name: 'C Programming', level: 85 },
  { name: 'Unity', level: 45 },
];

const designSkills = [
  { name: 'UI/UX Design', level: 80 },
  { name: 'Figma', level: 85 },
  { name: 'Photoshop', level: 75 },
  { name: 'Branding', level: 65 },
];

const softSkills = ['Problem Solving', 'Creativity', 'Communication', 'Team Collaboration'];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useScrollReveal(ref, 0.3);

  return (
    <div ref={ref} className="mb-4" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground tabular-nums">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full skill-bar-fill transition-all duration-1000 ease-out"
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
};

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = useScrollReveal(sectionRef, 0.15);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 text-center">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-md mx-auto">A glimpse into who I am and what I do</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: intro */}
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="glass rounded-2xl p-8">
              <h3 className="font-heading text-xl font-semibold mb-4">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed mb-4" style={{ textWrap: 'pretty' }}>
                I'm Aaditya Belbase — a web developer, graphic designer, app developer, and 3D designer driven by a passion for crafting beautiful, functional digital products.
              </p>
              <p className="text-muted-foreground leading-relaxed" style={{ textWrap: 'pretty' }}>
                My focus lies at the intersection of clean code and striking visuals. I believe great design is invisible — it just works. From responsive websites to brand identities, I bring ideas to life with precision and creativity.
              </p>
            </div>
          </div>

          {/* Right: skills */}
          <div className={`space-y-8 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="glass rounded-2xl p-8">
              <h3 className="font-heading text-lg font-semibold mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                Technical Skills
              </h3>
              {technicalSkills.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 100} />
              ))}
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="font-heading text-lg font-semibold mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Design Skills
              </h3>
              {designSkills.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 100} />
              ))}
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="font-heading text-lg font-semibold mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <span key={s} className="px-4 py-2 rounded-full text-sm font-medium bg-muted text-foreground border border-border/50 transition-all duration-300 hover:border-secondary/50 hover:shadow-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
