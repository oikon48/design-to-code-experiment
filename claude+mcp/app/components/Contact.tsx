"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    budget: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: "📍", title: "Address", content: "New York, USA" },
    { icon: "📧", title: "Email", content: "hello@brooklyn.com" },
    { icon: "📞", title: "Phone", content: "+1 234 567 890" },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-[1920px] mx-auto px-[300px]">
        <div className="flex gap-20">
          {/* Left: Contact Info */}
          <div className="flex-shrink-0 w-[481px]">
            <h2 className="text-[38px] font-semibold leading-[50px] text-gray-900 mb-8">
              Let's discuss your Project
            </h2>
            <p className="text-base text-gray-600 mb-12">
              There are many variations of passages of Lorem Ipsu available. but the majority have suffered alte.
            </p>

            {/* Contact Cards */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <span className="text-3xl">{info.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                    <p className="text-base text-gray-600">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              {["F", "T", "L", "G", "I"].map((social, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded-full bg-gray-100 hover:bg-primary-500 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                >
                  <span className="font-medium">{social}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="flex-1">
            <p className="text-base text-gray-600 mb-8">
              There are many variations of passages of Lorem Ipsu available, but the majority have suffered alte.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name*"
                  className="w-full bg-transparent border-b border-gray-300 pb-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  className="w-full bg-transparent border-b border-gray-300 pb-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                  required
                />
              </div>

              {/* Location */}
              <div>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Location"
                  className="w-full bg-transparent border-b border-gray-300 pb-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                />
              </div>

              {/* Budget & Subject */}
              <div className="flex gap-6">
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="Budget*"
                  className="flex-1 bg-transparent border-b border-gray-300 pb-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject*"
                  className="flex-1 bg-transparent border-b border-gray-300 pb-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message*"
                  className="w-full bg-transparent border-b border-gray-300 pb-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-10 py-3 bg-primary-500 text-white text-base font-medium rounded-lg hover:bg-primary-900 transition-colors"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
