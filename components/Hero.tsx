import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#020617]">
      {/* Abstract Wave Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <svg className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] animate-spin-slow opacity-20" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#6366f1', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
                </linearGradient>
            </defs>
            <path d="M500,500 m-450,0 a450,450 0 1,0 900,0 a450,450 0 1,0 -900,0" fill="none" stroke="url(#grad1)" strokeWidth="1" strokeDasharray="20 10" />
            <path d="M500,500 m-400,0 a400,400 0 1,0 800,0 a400,400 0 1,0 -800,0" fill="none" stroke="url(#grad1)" strokeWidth="1" strokeDasharray="15 15" />
            <path d="M500,500 m-350,0 a350,350 0 1,0 700,0 a350,350 0 1,0 -700,0" fill="none" stroke="url(#grad1)" strokeWidth="1" strokeDasharray="10 20" />
            <path d="M500,500 m-300,0 a300,300 0 1,0 600,0 a300,300 0 1,0 -600,0" fill="none" stroke="url(#grad1)" strokeWidth="1.5" strokeDasharray="25 25" />
            <path d="M500,500 m-250,0 a250,250 0 1,0 500,0 a250,250 0 1,0 -500,0" fill="none" stroke="url(#grad1)" strokeWidth="2" strokeDasharray="30 30" />
        </svg>
        
        {/* Right side glow */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -mr-32"></div>
        {/* Left side glow */}
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] -ml-20"></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10 flex flex-col items-center">
        {/* Profile Image */}
        <div className="mb-8 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-70 blur group-hover:opacity-100 transition duration-500"></div>
          <img 
            src="/inam.jpg" 
            alt="Inam Ullah" 
            className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-[#020617] object-cover object-top shadow-2xl"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://ui-avatars.com/api/?name=Inam+Ullah&background=0f172a&color=6366f1&size=200";
            }}
          />
        </div>
        
        {/* Typography - Matching Reference */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
          Inam Ullah
        </h1>
        
        <h2 className="text-2xl md:text-4xl text-slate-300 font-light mb-8">
          I'm a <span className="text-white font-semibold border-b-4 border-primary pb-1">DevOps Engineer</span>.
        </h2>
        
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
           Specializing in Cloud Automation, CI/CD, and Resilient Infrastructure.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
           <a 
            href="/resume.pdf" 
            download="Inam_Ullah_Resume.pdf"
            className="px-8 py-3.5 bg-[#4c1d95] hover:bg-[#5b21b6] text-white font-semibold rounded-lg transition-all shadow-lg shadow-primary/25 flex items-center border border-primary/20 hover:scale-105 transform duration-200"
            onClick={(e) => {
                  e.preventDefault();
                  alert("In a real environment, this would download the PDF file provided.");
            }}
          >
            Download Resume
          </a>
        </div>

         {/* Social Icons */}
         <div className="flex justify-center space-x-8 mt-16">
          <a href="https://github.com/inam-09" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors transform hover:-translate-y-1">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com/in/inam-devops99" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors transform hover:-translate-y-1">
            <Linkedin size={28} />
          </a>
          <a href="mailto:inamkhan.alpari@gmail.com" className="text-slate-400 hover:text-white transition-colors transform hover:-translate-y-1">
            <Mail size={28} />
          </a>
         </div>
      </div>
    </section>
  );
};

export default Hero;