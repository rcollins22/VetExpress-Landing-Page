import React from 'react';
import { Phone, Home, Heart, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: Phone,
      title: 'Contact Us',
      description: 'Call or text us about your pet\'s condition. We\'ll assess the urgency and schedule an immediate visit.',
      details: ['24/7 availability', 'Quick response time', 'Initial assessment over phone'],
      color: 'bg-[#24CBC2]'
    },
    {
      step: 2,
      icon: Home,
      title: 'Home Visit & Triage',
      description: 'Dr. Blake arrives at your home with a fully equipped mobile setup to examine and treat your pet.',
      details: ['Complete physical exam', 'On-site diagnostics', 'Immediate stabilization'],
      color: 'bg-[#8FC993]'
    },
    {
      step: 3,
      icon: Heart,
      title: 'Immediate Care or Referral',
      description: 'Receive treatment on-site or get referred to specialized facilities with detailed care instructions.',
      details: ['In-home treatment', 'Medication administration', 'Follow-up care plan'],
      color: 'bg-[#24CBC2]'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-[#F0FAF9] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#232323] mb-4">
            How VetExpress Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting expert veterinary care for your pet is simple. We've streamlined the process to ensure 
            quick, efficient, and compassionate care when your pet needs it most.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between mb-12">
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center text-center flex-1 max-w-sm">
                    {/* Step Circle */}
                    <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg transform transition-transform duration-300 hover:scale-110`}>
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    
                    {/* Step Number */}
                    <div className="bg-white border-4 border-gray-200 w-12 h-12 rounded-full flex items-center justify-center mb-4 -mt-8 relative z-10">
                      <span className="text-xl font-bold text-[#232323]">{step.step}</span>
                    </div>
                    
                    {/* Step Content */}
                    <h3 className="text-xl font-bold text-[#232323] mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                    
                    {/* Step Details */}
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-[#24CBC2] rounded-full"></div>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="flex-shrink-0 mx-8">
                      <ArrowRight className="h-8 w-8 text-[#24CBC2]" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex flex-col items-center">
                  <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center shadow-lg`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="bg-white border-4 border-gray-200 w-10 h-10 rounded-full flex items-center justify-center -mt-4 relative z-10">
                    <span className="text-lg font-bold text-[#232323]">{step.step}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-16 bg-gray-200 mt-4"></div>
                  )}
                </div>
                
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold text-[#232323] mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-[#24CBC2] rounded-full"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#232323] mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Don't wait when your pet is in distress. Contact VetExpress now for immediate mobile veterinary care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+14706103033"
                className="bg-[#24CBC2] hover:bg-[#1BAFA8] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now: (470) 610-3033</span>
              </a>
              <a 
                href="#contact"
                className="bg-[#8FC993] hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105"
              >
                <span>Schedule Online</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;