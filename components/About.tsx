import React from 'react';
import SectionHeading from './SectionHeading';
import { SectionId } from '../types';
import { Cloud, Settings, Box, Activity, Code, CheckCircle2 } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Designing Scalable & Secure Cloud Architectures",
    icon: <Cloud className="text-primary" size={24} />,
    items: [
      "VPC & Network Design",
      "IAM & Security Architecture",
      "Auto Scaling & Load Balancing",
      "CloudFront, Route 53, CloudFormation",
      "EC2, S3, EBS, EFS, Lambda, ECS, EKS",
      "Auto Scaling, Load Balancers, Route53",
      "Monitoring (CloudWatch, CloudTrail)",
      "Cost & Performance Optimization",
    ]
  },
  {
    title: "DevOps & Automation",
    icon: <Settings className="text-primary" size={24} />,
    items: [
      "IaC: Terraform, Ansible, CloudFormation",
      "CI/CD: Jenkins, GitHub Actions, GitLab CI/CD, AWS DevOps",
      "DataBase: MySQL, MongoDB",
      "Security: SonarQube, OWASP, Trivy"
    ]
  },
  {
    title: "Containers & Orchestration",
    icon: <Box className="text-primary" size={24} />,
    items: [
      "Docker, Kubernetes (Minikube, KIND, Kubeadm, EKS, AKS, GKE)",
      "DockerHub, ECR, ACR, GCR"
    ]
  },
  {
    title: "Monitoring & Observability",
    icon: <Activity className="text-primary" size={24} />,
    items: [
      "Prometheus, Grafana, Loki",
      "ELK Stack, DataDog",
      "Nagios, Zabbix"
    ]
  },
  {
    title: "Programming & Scripting",
    icon: <Code className="text-primary" size={24} />,
    items: [
      "Shell scripting, Python automation",
      "Git, Infrastructure as Code practices"
    ]
  }
];

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="About Me & Skills" 
          subtitle="Specializing in DevOps, Cloud Architecture, and Cyber Security."
        />

        {/* About Me Text - Full Width */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
           <h3 className="text-2xl font-semibold text-white mb-6">
              Bridging the gap between Development, Operations, and Security.
            </h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              I am a dedicated DevOps Engineer and Cloud Solutions Architect with a strong foundation in Linux System Administration and Cyber Security. My passion lies in designing scalable, secure, and resilient infrastructure that accelerates delivery while maintaining the highest standards of compliance.
            </p>
        </div>

        {/* Skills Grid - Matching Screenshot Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Render the first 4 categories in the top row */}
          {skillCategories.slice(0, 4).map((category, index) => (
            <div key={index} className="bg-card border border-slate-700 p-6 rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-darker rounded-lg border border-slate-700">
                  {category.icon}
                </div>
                <h4 className="font-bold text-lg text-white leading-tight">{category.title}</h4>
              </div>
              <ul className="space-y-4">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="shrink-0 text-secondary mt-0.5" size={16} />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Second Row for Programming & Scripting + Spacer/Layout handling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {/* Programming & Scripting Card */}
           <div className="bg-card border border-slate-700 p-6 rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-darker rounded-lg border border-slate-700">
                  {skillCategories[4].icon}
                </div>
                <h4 className="font-bold text-lg text-white leading-tight">{skillCategories[4].title}</h4>
              </div>
              <ul className="space-y-4">
                {skillCategories[4].items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="shrink-0 text-secondary mt-0.5" size={16} />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
        </div>

        {/* Bottom Quote Banner */}
        <div className="mt-12 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 text-center shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
            I am committed to helping organizations achieve <span className="text-white font-bold">zero downtime</span> deployments, 
            implement <span className="text-white font-bold">auto-scaling architectures</span>, and build <span className="text-white font-bold">resilient systems</span> that support rapid business growth.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;