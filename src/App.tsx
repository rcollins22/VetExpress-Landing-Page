import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceTags from './components/ServiceTags';
import Services from './components/Services';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ServiceTags />
      <Services />
      <About />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-[#232323] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/VetExpress FF-01.png" 
                  alt="VetExpress"
                  className="h-12 w-auto filter brightness-0 invert"
                />
              </div>
              <p className="text-gray-300 mb-4">
                Compassionate mobile veterinary care serving the Greater Atlanta area with 24/7 emergency services.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#services" className="text-gray-300 hover:text-[#24CBC2] transition-colors block">Services</a>
                <a href="#about" className="text-gray-300 hover:text-[#24CBC2] transition-colors block">About Dr. Blake</a>
                <a href="#how-it-works" className="text-gray-300 hover:text-[#24CBC2] transition-colors block">How It Works</a>
                <a href="#contact" className="text-gray-300 hover:text-[#24CBC2] transition-colors block">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Emergency Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p className="text-lg font-semibold text-[#24CBC2]">(470) 610-3033</p>
                <p>Available 24/7</p>
                <p>hello@vetexpress.net</p>
                <p>Serving Greater Atlanta</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VetExpress Mobile Veterinary Services LLC. All rights reserved. Licensed veterinary practice in Georgia.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;