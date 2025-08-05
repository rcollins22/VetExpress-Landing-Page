import React, { useState } from 'react';
import { Heart, Shield, Ban as Bandage, Pill, Stethoscope, Syringe, Clock, Home, Award } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: 'Triage House Calls',
      icon: Stethoscope,
      description: 'Comprehensive initial assessment and emergency triage performed in the comfort of your home. We evaluate your pet\'s condition and determine the best course of action.',
      features: ['24/7 availability', 'Complete physical exam', 'Treatment recommendations', 'Emergency stabilization'],
      image: 'https://images.pexels.com/photos/6816859/pexels-photo-6816859.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      title: 'End-of-Life Care',
      icon: Heart,
      description: 'Compassionate hospice and end-of-life services that allow your beloved pet to pass peacefully in familiar surroundings, surrounded by family.',
      features: ['Pain management', 'Quality of life assessment', 'Peaceful euthanasia', 'Grief support'],
      image: 'https://images.pexels.com/photos/6234635/pexels-photo-6234635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Wound & Skin Management',
      icon: Bandage,
      description: 'Expert treatment of cuts, abrasions, hot spots, and skin conditions using advanced wound care techniques and medications.',
      features: ['Wound cleaning & dressing', 'Infection treatment', 'Skin condition diagnosis', 'Follow-up care plans'],
      image: 'https://images.pexels.com/photos/6816862/pexels-photo-6816862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Pain & Palliative Support',
      icon: Shield,
      description: 'Comprehensive pain management and comfort care for pets with chronic conditions, post-surgical recovery, or age-related issues.',
      features: ['Pain assessment', 'Medication management', 'Comfort care planning', 'Quality of life improvement'],
      image: 'https://images.pexels.com/photos/7083557/pexels-photo-7083557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'GI & Urinary Symptom Relief',
      icon: Pill,
      description: 'Treatment for digestive issues, urinary problems, and related symptoms that require immediate attention and ongoing management.',
      features: ['Symptom evaluation', 'Diagnostic testing', 'Treatment protocols', 'Dietary recommendations'],
      image: 'https://images.pexels.com/photos/6816861/pexels-photo-6816861.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Vaccination Services',
      icon: Syringe,
      description: 'Complete vaccination programs including core vaccines, boosters, and specialized immunizations tailored to your pet\'s lifestyle and risk factors.',
      features: ['Core vaccinations', 'Lifestyle-based vaccines', 'Titer testing', 'Vaccination schedules'],
      image: 'https://images.pexels.com/photos/6816869/pexels-photo-6816869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#232323] mb-4">
            Comprehensive Mobile Veterinary Care
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From emergency triage to end-of-life care, we provide complete veterinary services in the comfort of your home, reducing stress for both you and your pet.
          </p>
        </div>

        {/* Service Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-[#24CBC2] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#232323] mb-2">At-Home Comfort</h3>
            <p className="text-gray-600">Your pet receives care in their familiar environment, reducing anxiety and stress.</p>
          </div>
          <div className="text-center">
            <div className="bg-[#8FC993] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#232323] mb-2">Immediate Response</h3>
            <p className="text-gray-600">No waiting rooms or long delays - we come to you when your pet needs help most.</p>
          </div>
          <div className="text-center">
            <div className="bg-[#24CBC2] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#232323] mb-2">Expert Care</h3>
            <p className="text-gray-600">Board-certified emergency veterinary care with over a decade of experience.</p>
          </div>
        </div>

        {/* Service Tabs */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`p-4 rounded-xl transition-all duration-300 text-center ${
                    activeService === index
                      ? 'bg-[#24CBC2] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-sm font-medium leading-tight">{service.title}</div>
                </button>
              );
            })}
          </div>

          {/* Active Service Details */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                {React.createElement(services[activeService].icon, { 
                  className: "h-8 w-8 text-[#24CBC2]" 
                })}
                <h3 className="text-2xl font-bold text-[#232323]">{services[activeService].title}</h3>
              </div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {services[activeService].description}
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-[#232323] mb-3">What's Included:</h4>
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#24CBC2] rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-8">
              <img 
                src={services[activeService].image} 
                alt={services[activeService].title}
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact"
            className="bg-[#24CBC2] hover:bg-[#1BAFA8] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-3 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>Schedule Your Visit</span>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;