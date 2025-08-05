import React from 'react';
import { Award, Heart, Shield, Clock, Star, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Doctor Photo and Info */}
          <div className="space-y-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-[#24CBC2]/20 to-[#8FC993]/20 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-[#24CBC2] to-[#8FC993] rounded-full mb-6 flex items-center justify-center">
                    <div className="w-44 h-44 bg-white rounded-full flex items-center justify-center">
                      <img 
                        src="/djb.png" 
                        alt="Dr. Jacqueline Blake"
                        className="w-40 h-40 rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#232323] mb-2">Dr. Jacqueline Blake</h3>
                    <p className="text-[#24CBC2] font-semibold mb-4">Emergency Veterinarian & Founder</p>
                    <div className="flex justify-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <GraduationCap className="h-8 w-8 text-[#24CBC2] mx-auto mb-2" />
                <div className="text-xl font-bold text-[#232323]">DVM</div>
                <div className="text-sm text-gray-600">North Carolina State University</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <Award className="h-8 w-8 text-[#24CBC2] mx-auto mb-2" />
                <div className="text-xl font-bold text-[#232323]">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - About Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#232323] mb-4">
                Meet Dr. Jacqueline Blake
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Dr. Blake is an experienced emergency veterinarian who founded VetExpress to bring timely, 
                compassionate care to pets in their most vulnerable moments. With over a decade of field 
                experience and a deep love for animals, she blends expertise with empathy to ensure pets 
                feel safe and supported—right at home.
              </p>
            </div>

            {/* Key Qualities */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-[#24CBC2] p-2 rounded-lg flex-shrink-0">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#232323] mb-1">Compassionate Care</h4>
                  <p className="text-gray-600">Every pet receives individualized attention with genuine empathy and understanding.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#8FC993] p-2 rounded-lg flex-shrink-0">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#232323] mb-1">Emergency Expertise</h4>
                  <p className="text-gray-600">Specialized training in emergency and critical care with advanced life support capabilities.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#24CBC2] p-2 rounded-lg flex-shrink-0">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#232323] mb-1">Available When Needed</h4>
                  <p className="text-gray-600">Committed to being there for Atlanta pet families during their most challenging moments.</p>
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-[#F0FAF9] p-6 rounded-xl border-l-4 border-[#24CBC2]">
              <h4 className="font-semibold text-[#232323] mb-3">Our Philosophy</h4>
              <p className="text-gray-700 italic">
                "Every pet deserves to receive care in an environment where they feel safe and loved. 
                By bringing veterinary services directly to your home, we eliminate the stress of travel 
                and unfamiliar surroundings, allowing me to focus entirely on what matters most—your pet's health and comfort."
              </p>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="font-semibold text-[#232323] mb-3">Certifications & Memberships</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-[#24CBC2] rounded-full"></div>
                  <span>Georgia Veterinary License</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-[#24CBC2] rounded-full"></div>
                  <span>AVMA Member</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-[#24CBC2] rounded-full"></div>
                  <span>Emergency & Critical Care</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-[#24CBC2] rounded-full"></div>
                  <span>Pain Management Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;