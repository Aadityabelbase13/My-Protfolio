import { useState, useRef } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern, animated portfolio built with React and Tailwind CSS, featuring glassmorphism and particle effects.',
    tags: ['React', 'Tailwind', 'TypeScript'],
    category: 'Web',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Brand Identity — Vertex Studio',
    description: 'Complete brand identity design including logo, typography, color palette, and brand guidelines.',
    tags: ['Figma', 'Photoshop', 'Branding'],
    category: 'Design',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A clean productivity app with drag-and-drop, real-time updates, and dark mode support.',
    tags: ['React', 'JavaScript', 'CSS'],
    category: 'Web',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'E-commerce Landing Page',
    description: 'High-converting landing page design with micro-interactions and responsive layout.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Social Media Kit',
    description: 'A cohesive social media design kit with templates for posts, stories, and banners.',
    tags: ['Photoshop', 'Figma'],
    category: 'Design',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: '2D Platformer Game',
    description: 'A fun platformer game built with Unity, featuring custom sprites and level design.',
    tags: ['Unity', 'C#', 'Game Design'],
    category: 'Other',
    liveUrl: '#',
    githubUrl: '#',
  },
];

const filters = ['All', 'Web', 'Design', 'Other'];

const Projects = () => {
  const [active, setActive] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = useScrollReveal(sectionRef, 0.1);

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" ref={sectionRef} className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 text-center">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-md mx-auto">Selected work that showcases my skills</p>

          {/* Filters */}
          <div className="flex justify-center gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 active:scale-95 ${
                  active === f
                    ? 'bg-secondary text-secondary-foreground shadow-md'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={`glass rounded-2xl overflow-hidden card-hover transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              {/* Color bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-secondary to-accent" />

              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={13} /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={13} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
