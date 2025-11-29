import React from 'react';
import SectionHeading from './SectionHeading';
import { SectionId } from '../types';
import { GraduationCap, Award, Calendar, ShieldCheck, Server, BookOpen } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section id={SectionId.RESUME} className="py-20 bg-darker relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Education" 
          subtitle="My academic background, professional certifications, and technical coursework."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column: Education Timeline */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Education History</h3>
            </div>

            <div className="relative border-l-2 border-slate-800 ml-3.5 space-y-10 py-2">
              
              {/* Timeline Item 1 */}
              <div className="relative pl-10">
                <div className="absolute -left-[9px] top-1.5 w-5 h-5 rounded-full bg-darker border-4 border-primary shadow-lg shadow-primary/20"></div>
                <div className="bg-card p-6 rounded-xl border border-slate-800 hover:border-primary/30 transition-all shadow-lg group hover:translate-x-1 duration-300">
                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                      <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">Certificate in Cloud Cyber Security</h4>
                      <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap w-fit">
                        <Calendar size={12} className="mr-1.5" />
                        2024
                      </span>
                   </div>
                   <p className="text-slate-300 font-medium mb-2">AL Nafi International College</p>
                   <p className="text-sm text-slate-400 leading-relaxed">
                     Specialized training focusing on cloud infrastructure security, threat analysis, and ISO compliance frameworks.
                   </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative pl-10">
                <div className="absolute -left-[9px] top-1.5 w-5 h-5 rounded-full bg-darker border-4 border-secondary shadow-lg shadow-secondary/20"></div>
                <div className="bg-card p-6 rounded-xl border border-slate-800 hover:border-secondary/30 transition-all shadow-lg group hover:translate-x-1 duration-300">
                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                      <h4 className="text-lg font-bold text-white group-hover:text-secondary transition-colors">Associate Degree in Computer Science</h4>
                       <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20 whitespace-nowrap w-fit">
                        <Calendar size={12} className="mr-1.5" />
                        2023
                      </span>
                   </div>
                   <p className="text-slate-300 font-medium mb-2">Govt Graduate College</p>
                   <p className="text-sm text-slate-400 leading-relaxed">
                     Foundational degree covering computer science principles, software development lifecycle, and database management systems.
                   </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Coursework & Certifications */}
          <div className="flex flex-col h-full">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <Award className="text-secondary" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Professional Coursework</h3>
            </div>

            <div className="grid gap-6 flex-grow">
              {/* Card 1: Security & Compliance */}
              <div className="bg-card p-6 rounded-xl border border-slate-800 hover:border-slate-600 transition-all hover:shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <ShieldCheck size={20} className="text-emerald-400" />
                  <h4 className="font-bold text-slate-200">Security & Compliance Standards</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                   {[
                     'CISSP', 'Ethical Hacking', 'ISO 27001', 'ISO 27017', 
                     'ISO 27018', 'PCI DSS', 'GDPR', 'HIPAA'
                   ].map((tag) => (
                      <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded bg-slate-800 text-slate-300 border border-slate-700 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors cursor-default">
                        {tag}
                      </span>
                   ))}
                </div>
              </div>

              {/* Card 2: Infrastructure & Operations */}
               <div className="bg-card p-6 rounded-xl border border-slate-800 hover:border-slate-600 transition-all hover:shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Server size={20} className="text-blue-400" />
                  <h4 className="font-bold text-slate-200">Infrastructure & Operations</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                   {[
                     'RHEL Intensive', 'Linux System Admin', 'SCADA', 
                     'ICS Security 101', 'NIST 800-82', 'Incident Response'
                   ].map((tag) => (
                      <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded bg-slate-800 text-slate-300 border border-slate-700 hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default">
                        {tag}
                      </span>
                   ))}
                </div>
              </div>
              
              {/* Card 3: Additional */}
              <div className="bg-card p-6 rounded-xl border border-slate-800 hover:border-slate-600 transition-all hover:shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <BookOpen size={20} className="text-purple-400" />
                  <h4 className="font-bold text-slate-200">Development & Tools</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                   {[
                     'Python Deep Dive', 'LinkedIn Optimization', 'DevOps Methodologies'
                   ].map((tag) => (
                      <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded bg-slate-800 text-slate-300 border border-slate-700 hover:border-purple-500/50 hover:text-purple-400 transition-colors cursor-default">
                        {tag}
                      </span>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;