import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Minimize2, Send, Bot } from 'lucide-react';
import { createSystemInstruction, sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, Project, Experience, Skill } from '../types';

// Data derived from Inam Ullah's Resume
const MOCK_DATA = {
  name: "Inam Ullah",
  bio: "Accomplished Linux System Administrator and DevOps professional with 2 years of experience in cloud infrastructure management, automation, and system optimization. Skilled in Linux, CI/CD, Bash, and Container Orchestration. Specializes in AWS Solutions Architecture and DevSecOps.",
  skills: [
    { name: 'Cloud Platforms (AWS, Azure, GCP)', level: 90 }, 
    { name: 'DevOps & Automation (Terraform, Ansible, Jenkins)', level: 92 },
    { name: 'Containers (Docker, Kubernetes, EKS, AKS)', level: 90 },
    { name: 'Monitoring (Prometheus, Grafana, ELK)', level: 85 },
    { name: 'Scripting (Bash, Python)', level: 95 },
    { name: 'Security (SonarQube, OWASP, ISO 27001)', level: 88 }
  ] as Skill[],
  projects: [
    { title: "DevSecOps Pipeline", description: "Fully mechanized CI/CD pipeline for Travel Blog app using Jenkins, Docker, K8s", tags: ["DevOps", "Security"] },
    { title: "Django Notes App", description: "Deployment with Docker Compose and Nginx optimization", tags: ["Docker", "Python"] }
  ] as Project[],
  experience: [
    { role: "Linux System Administrator", company: "AL Nafi Private Ltd", period: "Dec 2023-Dec 2024", description: "Managed 15+ servers, automated tasks, improved security posture.", skills: ["Linux", "Bash", "Nagios", "Zabbix", "Security Hardening"] },
    { role: "Intern", company: "Al-Nafi E-Learning", period: "Dec 2023-Dec 2024", description: "Training in Linux, Python, Ethical Hacking.", skills: ["Ethical Hacking", "Python", "ISO 27001", "Vulnerability Assessment"] }
  ] as Experience[]
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Inam's AI assistant. Ask me about his DevOps experience, skills in AWS/Kubernetes, or his DevSecOps projects!", timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const systemInstruction = createSystemInstruction(
      MOCK_DATA.name,
      MOCK_DATA.bio,
      MOCK_DATA.skills,
      MOCK_DATA.projects,
      MOCK_DATA.experience
    );

    // Prepare history for API
    const historyForApi = messages.map(m => ({ role: m.role, text: m.text }));

    const responseText = await sendMessageToGemini(userMessage.text, systemInstruction, historyForApi);

    const botMessage: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen ? (
        <div className="w-80 sm:w-96 bg-card border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in mb-4 max-h-[500px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-2">
              <Bot size={20} />
              <span className="font-semibold">Inam's Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded transition-colors">
              <Minimize2 size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-darker h-80">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-lg text-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-3 rounded-lg rounded-tl-none border border-slate-700 flex space-x-1 items-center">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-card border-t border-slate-700">
            <div className="flex items-center bg-darker rounded-full border border-slate-700 px-4 py-2 focus-within:border-primary transition-colors">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about DevOps skills..."
                className="bg-transparent flex-1 text-sm text-white focus:outline-none"
              />
              <button 
                onClick={handleSend} 
                disabled={isLoading || !input.trim()}
                className="text-primary hover:text-white transition-colors disabled:opacity-50 ml-2"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="text-[10px] text-center text-slate-500 mt-2">
              Powered by Google Gemini API
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
        >
          <MessageSquare size={24} />
          <span className="absolute right-0 top-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
          </span>
          <span className="absolute right-[60px] bg-white text-darker text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat with AI
          </span>
        </button>
      )}
    </div>
  );
};

export default ChatBot;