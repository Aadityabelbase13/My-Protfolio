import { useRef } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { GraduationCap, BookOpen, School } from 'lucide-react';

const timelineData = [
  {
    icon: School,
    title: 'SEE (School Level)',
    subtitle: 'School Leaving Certificate',
    description: 'Completed secondary education with strong foundations in science and mathematics.',
    status: 'Completed',
  },
  {
    icon: BookOpen,
    title: '+2 Science',
    subtitle: 'Higher Secondary Education',
    description: 'Studied science stream with a focus on physics, mathematics, and computer science.',
    status: 'Completed',
  },
  {
    icon: GraduationCap,
    title: 'Bachelor in Computer Engineering',
    subtitle: 'Currently Pursuing',
    description: 'Pursuing a degree in Computer Engineering, building expertise in software development and systems design.',
    status: 'In Progress',
  },
];

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = useScrollReveal(sectionRef, 0.1);

  return (
    <section id="education" ref={sectionRef} className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 text-center">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-md mx-auto">The academic journey that shaped my skills</p>
        </div>

        <div className="max-w-2xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 timeline-glow rounded-full" />

          {timelineData.map((item, i) => {
            const cardRef = useRef<HTMLDivElement>(null);
            const cardVisible = useScrollReveal(cardRef, 0.3);

            return (
              <div
                key={item.title}
                ref={cardRef}
                className={`relative pl-16 md:pl-20 pb-12 last:pb-0 transition-all duration-700 ${
                  cardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Icon dot */}
                <div className="absolute left-3 md:left-5 w-7 h-7 rounded-full bg-card border-2 border-secondary flex items-center justify-center glow-cyan">
                  <item.icon size={14} className="text-secondary" />
                </div>

                <div className="glass rounded-2xl p-6 card-hover">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      item.status === 'In Progress'
                        ? 'bg-secondary/15 text-secondary'
                        : 'bg-accent/15 text-accent-foreground'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{item.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
