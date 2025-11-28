import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { SectionId } from '../types';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(SectionId.HOME);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine active section for highlighting
      const sections = Object.values(SectionId);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const navLinks = [
    { name: 'Home', id: SectionId.HOME },
    { name: 'About', id: SectionId.ABOUT },
    { name: 'Projects', id: SectionId.PROJECTS },
    { name: 'Experience', id: SectionId.EXPERIENCE },
    { name: 'Resume', id: SectionId.RESUME },
    { name: 'Contact', id: SectionId.CONTACT },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-darker/90 backdrop-blur-md shadow-lg border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 text-2xl font-bold text-white cursor-pointer"
            onClick={() => scrollTo(SectionId.HOME)}
          >
            <Code2 className="text-primary" />
            <span>Inam<span className="text-primary">Dev</span></span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === link.id ? 'text-primary' : 'text-slate-300'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-card border-b border-slate-700 shadow-xl animate-fade-in">
            <div className="flex flex-col py-4 px-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-left text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === link.id ? 'text-primary' : 'text-slate-300'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;