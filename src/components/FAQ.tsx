"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Why choose Tila Technology?",
      answer: "We deliver world-class digital solutions combining engineering excellence, security-first coding standards, and agile development lifecycle. We are committed to transparency, scalability, and long-term partnership with our clients.",
    },
    {
      question: "How long does software development take?",
      answer: "Development timelines vary based on project scale and complexity. A simple website or landing page can take 2-3 weeks, while comprehensive ERP systems, custom software platforms, or mobile apps typically range from 2 to 6 months.",
    },
    {
      question: "What industries do you serve?",
      answer: "We support startups, medium enterprises, and large scale companies in Education, Healthcare, Finance, Retail, Logistics, Real Estate, Manufacturing, Agriculture, Government agencies, and NGOs.",
    },
    {
      question: "Do you provide software maintenance and support?",
      answer: "Yes, we offer flexible post-deployment service agreements covering periodic security updates, database tuning, API updates, feature requests, and system monitoring.",
    },
    {
      question: "Can you build custom software for our business?",
      answer: "Absolutely. We specialize in custom software development tailored to your exact business flows, ensuring seamless compatibility with your existing databases and operations.",
    },
    {
      question: "Do you offer artificial intelligence & machine learning integration?",
      answer: "Yes, we build intelligent software. We integrate Generative AI models, Retrieval Augmented Generation (RAG), custom NLP parsing, and computer vision utilities to automate complex operational decisions.",
    },
    {
      question: "Do you provide cybersecurity auditing services?",
      answer: "Yes, our cybersecurity team performs vulnerability scanning, penetration testing, infrastructure auditing, data backup consultations, and compliance checks to keep your systems secure.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[13px] font-bold tracking-[0.25em] text-primary uppercase mb-4"
          >
            Got Questions?
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900"
          >
            Frequently Asked Questions
          </motion.h3>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-100 bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/40 shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors"
                >
                  <span className="font-bold text-slate-900 md:text-lg">
                    {faq.question}
                  </span>
                  <span className="text-primary shrink-0 ml-4">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
