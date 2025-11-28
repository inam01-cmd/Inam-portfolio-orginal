import React from 'react';
import SectionHeading from './SectionHeading';
import { SectionId, Experience as ExperienceType } from '../types';
import { Briefcase } from 'lucide-react';

const experiences: ExperienceType[] = [
  {
    id: 1,
    role: "Linux System Administrator",
    company: "AL Nafi Private Ltd",
    period: "Dec 2023 – Dec 2024",
    description: "Managed and maintained 15+ Linux servers ensuring 99.9% uptime. Automated 20+ repetitive administrative tasks using Bash scripting, reducing manual effort by 40%. Implemented proactive monitoring using Nagios/Zabbix and performed server hardening and patch management.",
    skills: ["Linux", "Bash", "Nagios", "Zabbix", "Security Hardening"]
  },
  {
    id: 2,
    role: "Intern - Network & Security",
    company: "AL Nafi E-Learning Pvt. Ltd",
    period: "Dec 2023 – Dec 2024",
    description: "Completed intensive training in Linux, Python, Ethical Hacking, and ISO 27001 standards. Demonstrated ability to identify and address vulnerabilities and focused on CISSP and RHEL intensive tracks.",
    skills: ["Ethical Hacking", "Python", "ISO 27001", "Vulnerability Assessment"]
  }
];

const Experience: React.FC = () => {
  return (
    <section id={SectionId.EXPERIENCE} className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Work Experience" 
          subtitle="My professional journey in System Administration and DevOps."
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-slate-700 ml-3 md:ml-6 space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-8 md:pl-12">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-darker border-4 border-primary"></div>
                
                <div className="bg-card p-6 rounded-xl border border-slate-800 hover:border-slate-600 transition-all shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <div className="text-primary font-medium flex items-center mt-1">
                        <Briefcase size={16} className="mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700 inline-block w-fit">
                      {exp.period}
                    </div>
                  </div>
                  
                  <p className="text-slate-400 mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 rounded bg-dark text-slate-400 border border-slate-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;