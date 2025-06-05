import React, { useState } from 'react';
import Contact from './Contact';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    if (!validate()) {
      e.preventDefault(); // Prevent form submission if validation fails
    }
    // If validation passes, the form submits naturally to Formspree
  };

  return (
    <section id="contact" className="py-20 bg-[#FEEEDE]">
      <div className="container mx-auto px-6 max-w-lg mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#624A58] mb-4">Contact Me</h2>
          <div className="w-24 h-1 bg-[#624A58] mx-auto"></div>
        </div>
        <form
          action="https://formspree.io/f/mzzgpqog"
          method="POST"
          className="flex flex-col gap-6"
          onSubmit={handleSubmit}
          noValidate
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={`border-2 rounded-lg px-4 py-3 text-[#624A58] focus:outline-none focus:ring-2 focus:ring-[#624A58] ${
                errors.name ? 'border-red-500' : 'border-[#624A58]'
              }`}
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={`border-2 rounded-lg px-4 py-3 text-[#624A58] focus:outline-none focus:ring-2 focus:ring-[#624A58] ${
                errors.email ? 'border-red-500' : 'border-[#624A58]'
              }`}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className={`border-2 rounded-lg px-4 py-3 text-[#624A58] focus:outline-none focus:ring-2 focus:ring-[#624A58] ${
                errors.message ? 'border-red-500' : 'border-[#624A58]'
              }`}
              required
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#624A58] text-[#FEEEDE] px-6 py-3 rounded-lg font-semibold hover:bg-[#4a3743] transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
        
        {selectedImage && (
  <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm transition-all duration-300">
    <div className="max-w-4xl max-h-[90vh] mx-4">
      <img
        src={selectedImage}
        alt="Full View"
        className="w-full h-auto object-contain rounded-xl shadow-2xl border-4 border-[#FEEEDE]"
      />
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute top-6 right-6 text-[#FEEEDE] text-4xl hover:text-white transition"
        aria-label="Close"
      >
        &times;
      </button>
    </div>
  </div>
)}


      </div>
    </section>
  );
}
