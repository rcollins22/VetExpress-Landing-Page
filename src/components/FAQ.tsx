import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, DollarSign, Heart, Building, Car, CreditCard, Home, Calendar } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What areas do you serve?",
      answer: "VetExpress is based in the heart of Atlanta, operating from the Krog Street Market area. While we don't have a formal service map yet, we currently serve clients the greater Metro Atlanta Area.\n\nIf you're unsure whether you're in range, contact us directly—we'll do our best to accommodate or recommend next steps.",
      icon: MapPin,
      color: "bg-[#24CBC2]"
    },
    {
      question: "How much is your travel fee?",
      answer: "We keep travel affordable and transparent:\n\n• Free travel within 2 miles of Krog Street Market\n• $25 base fee for 2–5 miles\n• $40 fee for 5–10 miles\n• Beyond 10 miles: availability-based + quoted at time of request\n\nFees support fuel, time, and mobile setup while we operate from a personal vehicle.",
      icon: DollarSign,
      color: "bg-[#8FC993]"
    },
    {
      question: "Do you provide wellness care as well as emergencies?",
      answer: "Yes! While we focus on urgent and emergency needs, we also offer basic wellness services, such as core vaccinations, physical exams, and preventative care. We're here for both your pet's worst day—and their best.",
      icon: Heart,
      color: "bg-[#24CBC2]"
    },
    {
      question: "Are you a full-service veterinary hospital?",
      answer: "We are a mobile veterinary practice, not a brick-and-mortar hospital. We can treat a wide range of issues in your home, but for advanced diagnostics, surgeries, or hospitalization, we'll help refer or coordinate care at a full-service facility.",
      icon: Building,
      color: "bg-[#8FC993]"
    },
    {
      question: "Can you transport my pet to an ER or hospital?",
      answer: "While we currently do not offer pet transport ourselves, we can assist in coordinating transportation if your pet needs hospital-level care after a VetExpress visit. This may involve riding with you or using third-party pet transport services.",
      icon: Car,
      color: "bg-[#24CBC2]"
    },
    {
      question: "Do you accept pet insurance or offer payment plans?",
      answer: "We don't process insurance directly, but we'll provide detailed invoices you can submit to your provider. We accept all major credit cards and contactless payments. Third-party financing (e.g., CareCredit or Afterpay) may be offered soon.",
      icon: CreditCard,
      color: "bg-[#8FC993]"
    },
    {
      question: "What should I do to prepare for your visit?",
      answer: "Keep your pet in a quiet, accessible space. If they are nervous or reactive, place them in a carrier or small room. Please also have any relevant medical records or medication on hand.",
      icon: Home,
      color: "bg-[#24CBC2]"
    },
    {
      question: "What's your cancellation or no-show policy?",
      answer: "We understand emergencies happen—but because our schedule is built for rapid response, same-day cancellations may incur a $40 fee. No-shows without notice will result in full travel fee being charged.",
      icon: Calendar,
      color: "bg-[#8FC993]"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#232323] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about VetExpress mobile veterinary services, 
            pricing, and what to expect during your visit.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const IconComponent = faq.icon;
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`${faq.color} p-3 rounded-lg flex-shrink-0`}>
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#232323] pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6">
                    <div className="pl-16">
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#F0FAF9] to-white p-8 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold text-[#232323] mb-3">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Don't hesitate to reach out. We're here to help you and your pet get the care you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+14706103033"
                className="bg-[#24CBC2] hover:bg-[#1BAFA8] text-white px-6 py-3 rounded-full font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <span>Call Us: (470) 610-3033</span>
              </a>
              <a 
                href="sms:+14706103033"
                className="bg-[#8FC993] hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <span>Text Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;