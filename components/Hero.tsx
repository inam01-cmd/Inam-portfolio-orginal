import React from 'react';
import { ArrowDown, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById(SectionId.PROJECTS);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.HOME} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="mb-8 relative inline-block group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 blur"></div>
          <img 
            src="/inam.jpg" 
            alt="Inam Ullah" 
            className="relative w-56 h-56 rounded-full border-4 border-darker object-cover object-top mx-auto shadow-2xl shadow-primary/20"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://ui-avatars.com/api/?name=Inam+Ullah&background=0f172a&color=6366f1&size=200";
            }}
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Inam Ullah</span>
        </h1>
        
        <h2 className="text-xl md:text-3xl text-slate-200 font-semibold mb-6">
          DevOps Engineer | Cloud Solutions Architect
        </h2>
        
        <p className="text-lg text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          Accomplished Linux System Administrator and DevOps professional with 2 years of experience in cloud infrastructure management, automation, and system optimization. 
          Skilled in CI/CD pipelines, Bash scripting, container orchestration, and security compliance (ISO 27001).
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com/inam-09" target="_blank" rel="noopener noreferrer" className="p-3 bg-card hover:bg-slate-700 rounded-full transition-colors text-slate-300 hover:text-white border border-slate-700" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/inam-devops99" target="_blank" rel="noopener noreferrer" className="p-3 bg-card hover:bg-slate-700 rounded-full transition-colors text-slate-300 hover:text-white border border-slate-700" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="mailto:inamkhan.alpari@gmail.com" className="p-3 bg-card hover:bg-slate-700 rounded-full transition-colors text-slate-300 hover:text-white border border-slate-700" aria-label="Email">
            <Mail size={24} />
          </a>
        </div>

        <button 
          onClick={scrollToProjects}
          className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:-translate-y-1"
        >
          View My Projects
        </button>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-slate-500" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;