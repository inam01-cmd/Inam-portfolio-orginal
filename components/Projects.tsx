import React from 'react';
import SectionHeading from './SectionHeading';
import { SectionId, Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: "DevSecOps CI/CD Pipeline (Travel Blog)",
    description: "Designed & deployed a fully mechanized DevSecOps CI/CD pipeline for a containerized full-stack Travel Blog application. Eliminated 95%+ high-severity vulnerabilities before release through automated security scanning.",
    tags: ["Jenkins", "Docker", "Kubernetes", "SonarQube", "Trivy"],
    imageUrl: "https://images.unsplash.com/photo-1667372393119-c85c02088947?auto=format&fit=crop&q=80&w=800",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 2,
    title: "Django Notes App Deployment",
    description: "Orchestrated deployment using Docker Compose and Nginx reverse proxy. Reduced downtime by 70% and improved app performance by 40% using Gunicorn optimization.",
    tags: ["Django", "Docker Compose", "Nginx", "Python", "Gunicorn"],
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 3,
    title: "Linux Server Hardening",
    description: "Implemented comprehensive security protocols for 15+ production servers, including firewalls, user access controls, and patch management systems.",
    tags: ["Linux", "Security", "Bash", "SSH"],
    imageUrl: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800",
    githubUrl: "#",
    demoUrl: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id={SectionId.PROJECTS} className="py-20 bg-darker">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Key projects showcasing my expertise in DevOps and Cloud Architecture."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-card rounded-xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-all hover:shadow-xl hover:-translate-y-2 group">
              <div className="relative overflow-hidden h-48">
                <div className="absolute inset-0 bg-darker/50 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center space-x-4">
                  <a href={project.githubUrl} className="p-2 bg-white rounded-full text-dark hover:bg-primary hover:text-white transition-colors" title="View Code">
                    <Github size={20} />
                  </a>
                  <a href={project.demoUrl} className="p-2 bg-white rounded-full text-dark hover:bg-primary hover:text-white transition-colors" title="View Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-white font-medium transition-colors">
            View more on Github <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;