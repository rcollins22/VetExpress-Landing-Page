import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send, MessageCircle, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petName: '',
    petType: '',
    breed: '',
    address: '',
    lastVetVisit: '',
    preferredDate: '',
    preferredTime: '',
    urgency: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We\'ll contact you shortly!');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#F0FAF9] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#232323] mb-4">
            Contact VetExpress
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to provide your pet with compassionate mobile veterinary care? Get in touch with us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#232323] mb-6">Get in Touch</h3>
              
              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 p-6 rounded-xl mb-6">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-red-500 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-red-700">Emergency Line</h4>
                </div>
                <p className="text-red-600 font-semibold text-lg">(470) 610-6133</p>
                <p className="text-red-600 text-sm">Available 24/7 for urgent pet care</p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#24CBC2] p-3 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#232323] mb-1">Text Us</h4>
                    <p className="text-gray-600">(470) 610-6133</p>
                    <p className="text-sm text-gray-500">Fastest response for non-emergencies</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#8FC993] p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#232323] mb-1">Email</h4>
                    <p className="text-gray-600">hello@vetexpress.net</p>
                    <p className="text-sm text-gray-500">For general inquiries and appointments</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#24CBC2] p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#232323] mb-1">Hours</h4>
                    <p className="text-gray-600">24/7 Emergency Services</p>
                    <p className="text-sm text-gray-500">Scheduled visits: 8 AM - 8 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#8FC993] p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#232323] mb-1">Service Area</h4>
                    <p className="text-gray-600">Greater Atlanta Area</p>
                    <p className="text-sm text-gray-500">Including Buckhead, Midtown, Decatur, and surrounding areas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="font-semibold text-[#232323]">Quick Actions</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="tel:+14706103033"
                  className="bg-[#24CBC2] hover:bg-[#1BAFA8] text-white px-6 py-3 rounded-full font-semibold transition-colors flex items-center justify-center space-x-2 flex-1"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Now</span>
                </a>
                <a 
                  href="sms:+14706103033"
                  className="bg-[#8FC993] hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors flex items-center justify-center space-x-2 flex-1"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Text Us</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <Calendar className="h-6 w-6 text-[#24CBC2]" />
              <h3 className="text-2xl font-bold text-[#232323]">Schedule a Visit</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
  {/* Name & Phone */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#24CBC2]"
        placeholder="Pet Lover"
      />
    </div>
    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        required
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#24CBC2]"
        placeholder="(281) 330-8004"
      />
    </div>
  </div>

  {/* Email */}
  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
    <input
      type="email"
      id="email"
      name="email"
      required
      value={formData.email}
      onChange={handleChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#24CBC2]"
      placeholder="puppyfever@example.com"
    />
  </div>

  {/* Pet Name & Type */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <label htmlFor="petName" className="block text-sm font-medium text-gray-700 mb-2">Pet's Name</label>
      <input
        type="text"
        id="petName"
        name="petName"
        value={formData.petName}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#24CBC2]"
        placeholder="Bella"
      />
    </div>
    <div>
      <label htmlFor="petType" className="block text-sm font-medium text-gray-700 mb-2">Pet Type</label>
      <select
        id="petType"
        name="petType"
        value={formData.petType}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#24CBC2]"
      >
        <option value="">Select</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </select>
    </div>
  </div>

  {/* Conditional Breed (Full Width) */}
  {formData.petType === 'dog' && (
    <div>
      <label htmlFor="breed" className="block text-sm font-medium text-gray-700 mb-2">Dog's Breed</label>
      <input
        type="text"
        id="breed"
        name="breed"
        value={formData.breed}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#24CBC2]"
        placeholder="e.g., Golden Retriever"
      />
    </div>
  )}

  {/* Address */}
  <div>
    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Address Where Visit Is Needed *</label>
    <input
      type="text"
      id="address"
      name="address"
      required
      value={formData.address}
      onChange={handleChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#24CBC2]"
      placeholder="123 Pet Lane, Atlanta, GA"
    />
  </div>

  {/* Last Vet Visit */}
  <div>
    <label htmlFor="lastVetVisit" className="block text-sm font-medium text-gray-700 mb-2">When Was Your Pet’s Last Vet Visit?</label>
    <input
      type="text"
      id="lastVetVisit"
      name="lastVetVisit"
      value={formData.lastVetVisit}
      onChange={handleChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#24CBC2]"
      placeholder="e.g., 3 months ago, 1 year ago, never"
    />
  </div>

  {/* Preferred Time */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div>
    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
    <input
      type="date"
      id="preferredDate"
      name="preferredDate"
      value={formData.preferredDate}
      onChange={handleChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#24CBC2]"
    />
  </div>
  <div>
    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
    <input
      type="time"
      id="preferredTime"
      name="preferredTime"
      value={formData.preferredTime}
      onChange={handleChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#24CBC2]"
    />
  </div>
</div>

  {/* Urgency */}
  <div>
    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">Urgency Level *</label>
    <select
      id="urgency"
      name="urgency"
      required
      value={formData.urgency}
      onChange={handleChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#24CBC2]"
    >
      <option value="">Select urgency level</option>
      <option value="urgent">Within 24 hours</option>
      <option value="routine">Next few days</option>
    </select>
  </div>

  {/* Additional Info */}
  <div>
    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Info or Concerns</label>
    <textarea
      id="message"
      name="message"
      rows={4}
      value={formData.message}
      onChange={handleChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#24CBC2] resize-none"
      placeholder="Describe your pet’s condition, behavior changes, medications, etc."
    ></textarea>
  </div>

  {/* Submit */}
  <button
    type="submit"
    className="w-full bg-[#24CBC2] hover:bg-[#1BAFA8] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-3 transform hover:scale-105"
  >
    <Send className="h-5 w-5" />
    <span>Schedule Visit</span>
  </button>

  <p className="text-sm text-gray-500 text-center">
    For emergencies, please call: <strong>(470) 610-3033</strong>
  </p>
</form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;