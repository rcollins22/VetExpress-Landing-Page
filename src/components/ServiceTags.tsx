import React from 'react';
import { Heart, Shield, Ban as Bandage, Pill, Stethoscope, Syringe } from 'lucide-react';

const ServiceTags = () => {
  const services = [
    { name: 'Triage House Calls', icon: Stethoscope, color: 'bg-[#24CBC2]' },
    { name: 'End-of-Life Care', icon: Heart, color: 'bg-[#8FC993]' },
    { name: 'Wound & Skin Management', icon: Bandage, color: 'bg-[#24CBC2]' },
    { name: 'Pain & Palliative Support', icon: Shield, color: 'bg-[#8FC993]' },
    { name: 'GI & Urinary Symptom Relief', icon: Pill, color: 'bg-[#24CBC2]' },
    { name: 'Vaccination Services', icon: Syringe, color: 'bg-[#8FC993]' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#232323] mb-4">
            Our Mobile Veterinary Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive urgent care services delivered directly to your home, ensuring your pet receives expert treatment in their comfort zone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                <div className={`${service.color} hover:opacity-90 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg leading-snug">{service.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gray-100 hover:bg-gray-200 text-[#232323] px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center space-x-2"
          >
            <span>Learn More About Our Services</span>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceTags;