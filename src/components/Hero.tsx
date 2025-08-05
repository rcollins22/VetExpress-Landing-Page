import React from 'react';
import { Phone, Calendar, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#F0FAF9] to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Content */}
          <div className="mb-12 lg:mb-0">
            <div className="mb-6">
              <span className="inline-block bg-[#24CBC2]/10 text-[#24CBC2] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🚗 Mobile Vet Services in Atlanta
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-[#232323] mb-6 leading-tight">
              Compassionate Veterinary Services 
              <span className="text-[#24CBC2]"> That Come to You</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              VetExpress brings emergency and urgent pet care directly to your door in Atlanta. 
              No waiting rooms. Just expert, loving care where your pet feels safest—at home.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="tel:+14045551234"
                className="bg-[#24CBC2] hover:bg-[#1BAFA8] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Phone className="h-5 w-5" />
                <span>Text Us</span>
              </a>
              <a 
                href="#contact"
                className="bg-[#8FC993] hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Calendar className="h-5 w-5" />
                <span>Schedule a Visit</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-[#24CBC2]">24/7</div>
                <div className="text-sm text-gray-600">Emergency Care</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#24CBC2]">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#24CBC2]">Atlanta</div>
                <div className="text-sm text-gray-600">Service Area</div>
              </div>
            </div>
          </div>

          {/* Visual/Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#24CBC2]/20 to-[#8FC993]/20 rounded-3xl p-8 lg:p-12">
              {/* Mobile Vet Van Illustration */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-[#24CBC2] p-4 rounded-2xl">
                      <svg className="h-16 w-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 7h-3V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v12a1 1 0 0 0 1 1h1.05A3 3 0 0 0 7 21a3 3 0 0 0 2.95-2h4.1A3 3 0 0 0 17 21a3 3 0 0 0 2.95-2H21a1 1 0 0 0 1-1v-7a3 3 0 0 0-3-3zM7 19a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm10 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm3-2h-.05A3 3 0 0 0 17 15a3 3 0 0 0-2.95 2h-4.1A3 3 0 0 0 7 15a3 3 0 0 0-2.95 2H4V6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5h5a1 1 0 0 1 1 1v5z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center text-[#232323] mb-2">Mobile Vet Van</h3>
                  <p className="text-gray-600 text-center text-sm">Fully equipped for urgent care</p>
                </div>
                
                {/* Floating service icons */}
                <div className="absolute -top-4 -right-4 bg-[#8FC993] p-3 rounded-full shadow-lg animate-bounce">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z"/>
                  </svg>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-[#24CBC2] p-3 rounded-full shadow-lg animate-pulse">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12">
          <button 
            onClick={scrollToServices}
            className="text-[#24CBC2] hover:text-[#1BAFA8] transition-colors animate-bounce"
          >
            <ArrowDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;