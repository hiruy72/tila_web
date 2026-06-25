"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const servicesList = [
    "Website Development",
    "Application Development",
    "ERP System Integration",
    "Customer Support Systems",
    "Cybersecurity Auditing",
    "AI & Machine Learning Solution",
    "SaaS Development",
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000+",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <p className="text-[13px] font-bold tracking-[0.25em] text-primary uppercase mb-4">
                  Partner with Us
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                  Let&apos;s Build Something <span className="text-primary">Exceptional</span> Together
                </h2>
              </div>
              <p className="text-[16px] text-slate-500 leading-relaxed max-w-md">
                Ready to take your business to the next level? Share your project details with us, and we will get back to you with an execution plan.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-primary/20 transition-all">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Email Us</span>
                    <a href="mailto:tilatechnology21@gmail.com" className="text-sm font-bold text-slate-800 hover:text-primary">
                      tilatechnology21@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-primary/20 transition-all">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Call Us</span>
                    <a href="tel:+251939776522" className="text-sm font-bold text-slate-800 hover:text-primary">
                      +251 939 776 522
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-primary/20 transition-all">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Our Office</span>
                    <span className="text-sm font-bold text-slate-800">
                      Addis Ababa, Ethiopia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl border border-gray-100 bg-gray-50/50 shadow-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto text-2xl">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                  <p className="text-sm text-slate-500 max-w-sm mx-auto">
                    Thank you for reaching out. A senior technology strategist from Tila will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline pt-2"
                  >
                    Send another message
                    <ArrowRight size={14} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full p-3 rounded-xl border border-gray-200 bg-white text-slate-800 text-sm focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full p-3 rounded-xl border border-gray-200 bg-white text-slate-800 text-sm focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+251 912 345 678"
                        className="w-full p-3 rounded-xl border border-gray-200 bg-white text-slate-800 text-sm focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        placeholder="e.g. Acme Corp"
                        className="w-full p-3 rounded-xl border border-gray-200 bg-white text-slate-800 text-sm focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Service Needed *
                      </label>
                      <select
                        required
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full p-3 rounded-xl border border-gray-200 bg-white text-slate-800 text-sm focus:border-primary focus:outline-none transition-colors"
                      >
                        <option value="">Select a service</option>
                        {servicesList.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Estimated Budget *
                      </label>
                      <select
                        required
                        value={formState.budget}
                        onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                        className="w-full p-3 rounded-xl border border-gray-200 bg-white text-slate-800 text-sm focus:border-primary focus:outline-none transition-colors"
                      >
                        <option value="">Select a budget range</option>
                        {budgetRanges.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Project Details
                    </label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Please describe your requirements, timeline constraints, or system challenges..."
                      className="w-full p-3 rounded-xl border border-gray-200 bg-white text-slate-800 text-sm focus:border-primary focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 p-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-[15px] shadow-lg shadow-primary/10 transition-all duration-300 disabled:opacity-50"
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
