import React, { Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

const Footer: React.FC = () => (
  <footer className="bg-darker py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
    <div className="container mx-auto px-6">
      <p>© {new Date().getFullYear()} Inam Ullah. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://github.com" className="hover:text-primary transition-colors">GitHub</a>
        <a href="https://linkedin.com" className="hover:text-primary transition-colors">LinkedIn</a>
        <a href="mailto:inamkhan.alpari@gmail.com" className="hover:text-primary transition-colors">Email</a>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-darker text-slate-200">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;