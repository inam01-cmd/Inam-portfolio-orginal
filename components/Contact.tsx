import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { SectionId } from '../types';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id={SectionId.CONTACT} className="py-20 bg-darker">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Looking to optimize your infrastructure or need DevOps expertise? Let's connect."
        />

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Contact Information</h3>
            <p className="text-slate-400">
              I am available for opportunities in DevOps, Cloud Engineering, and System Administration.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:inamkhan.alpari@gmail.com" className="flex items-center space-x-4 text-slate-300 hover:text-primary transition-colors">
                <div className="p-3 bg-card rounded-lg text-primary">
                  <Mail size={24} />
                </div>
                <span>inamkhan.alpari@gmail.com</span>
              </a>
              <div className="flex items-center space-x-4 text-slate-300">
                <div className="p-3 bg-card rounded-lg text-primary">
                  <MapPin size={24} />
                </div>
                <span>Pakistan (Remote Available)</span>
              </div>
              <a href="tel:+923346286316" className="flex items-center space-x-4 text-slate-300 hover:text-primary transition-colors">
                <div className="p-3 bg-card rounded-lg text-primary">
                  <Phone size={24} />
                </div>
                <span>+92 334 6286316</span>
              </a>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl border border-slate-800 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-darker border border-slate-700 rounded-lg focus:outline-none focus:border-primary text-slate-200"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-darker border border-slate-700 rounded-lg focus:outline-none focus:border-primary text-slate-200"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-darker border border-slate-700 rounded-lg focus:outline-none focus:border-primary text-slate-200"
                  placeholder="Tell me about your project or requirement..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center space-x-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : submitted ? (
                  <span className="text-green-200">Message Sent!</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;