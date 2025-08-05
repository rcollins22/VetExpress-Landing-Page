import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Atlanta, GA',
      rating: 5,
      text: 'Dr. Blake saved our dog Max when he was having breathing difficulties at 2 AM. She arrived within 30 minutes and provided immediate care. The fact that Max could be treated at home made all the difference in his recovery.',
      pet: 'Golden Retriever, Max',
      image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Michala Wright',
      location: 'Buckhead, Atlanta',
      rating: 5,
      text: 'When our elderly cat Luna needed end-of-life care, Dr. Blake provided the most compassionate service. She helped Luna pass peacefully at home surrounded by family. We are forever grateful for her kindness during such a difficult time.',
      pet: 'Persian Cat, Luna',
      image: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Savi Patel',
      location: 'Midtown, Atlanta',
      rating: 5,
      text: 'VetExpress is a game-changer! My anxious rescue dog Bella gets extremely stressed at vet clinics. Having Dr. Blake come to our home meant Bella could receive treatment without the trauma. Professional, caring, and thorough!',
      pet: 'Mixed Breed, Bella',
      image: 'https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#232323] mb-4">
            What Pet Families Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what Atlanta pet owners have to say about their VetExpress experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[#24CBC2]/20">
                <Quote className="h-8 w-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-[#232323]">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                  <p className="text-sm text-[#24CBC2] font-medium">{testimonial.pet}</p>
                </div>
              </div>

              {/* Accent Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#24CBC2] to-[#8FC993] rounded-b-2xl"></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#F0FAF9] to-white p-8 rounded-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-[#24CBC2] mb-2">100+</div>
                <div className="text-sm text-gray-600">Happy Families</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#24CBC2] mb-2">24/7</div>
                <div className="text-sm text-gray-600">Availability</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#24CBC2] mb-2">5★</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#24CBC2] mb-2">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;