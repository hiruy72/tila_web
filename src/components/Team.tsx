"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

interface TeamMember {
  name: string;
  roles: string[];
  description: string;
  initials: string;
  colorClass: string;
  linkedin: string;
}

export default function Team() {
  const team: TeamMember[] = [
    {
      name: "Haimanot Beka Mekonnen",
      roles: ["Co-Founder & CEO", "DevOps Team Lead"],
      description: "Visionary leader responsible for strategy, leadership, company growth, and innovation.",
      initials: "HB",
      colorClass: "bg-[#E53935]", // Red logo color
      linkedin: "https://www.linkedin.com/company/135764096",
    },
    {
      name: "Hiruy Legesse Adane",
      roles: ["Co-Founder & CTO", "Backend Team Lead"],
      description: "Responsible for software architecture, backend engineering, APIs, cloud systems, databases, and engineering excellence.",
      initials: "HL",
      colorClass: "bg-[#1565C0]", // Blue logo color
      linkedin: "https://www.linkedin.com/company/135764096",
    },
    {
      name: "MikreSelasie Abiy",
      roles: ["Co-Founder & COO", "Application Developer", "Creative & Social Media Lead"],
      description: "Responsible for operations, branding, execution, mobile applications, and creative direction.",
      initials: "MA",
      colorClass: "bg-[#2E7D32]", // Green logo color
      linkedin: "https://www.linkedin.com/company/135764096",
    },
    {
      name: "Medan Abebe",
      roles: ["Co-Founder & CMO", "Frontend Team Lead"],
      description: "Responsible for marketing strategy, UI development, customer acquisition, and user experience.",
      initials: "MA",
      colorClass: "bg-[#D81B60]", // Pink logo color
      linkedin: "https://www.linkedin.com/company/135764096",
    },
  ];

  return (
    <section id="team" className="py-20 sm:py-24 bg-gray-50 scroll-mt-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[13px] font-bold tracking-[0.25em] text-primary uppercase mb-4"
          >
            Leadership
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900"
          >
            Meet Our Founding Team
          </motion.h3>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-8 rounded-2xl border border-gray-100 bg-white hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Profile Placeholder Avatar */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-24 h-24 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-inner select-none ${member.colorClass} group-hover:scale-105 transition-transform`}
                  >
                    {member.initials}
                  </div>
                </div>

                <div className="text-center mb-4">
                  <h4 className="text-lg font-bold text-slate-900">
                    {member.name}
                  </h4>
                  {member.roles.map((role, idx) => (
                    <span
                      key={idx}
                      className="block text-xs font-bold text-primary mt-1"
                    >
                      {role}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-slate-500 text-center leading-relaxed mb-6">
                  {member.description}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-3 border-t border-border/40 pt-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full border border-border/50 text-slate-gray hover:text-primary dark:hover:text-white hover:bg-light-blue dark:hover:bg-light-gray transition-all"
                  aria-label={`${member.name} LinkedIn Profile`}
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="mailto:tilatechnology21@gmail.com"
                  className="p-2 rounded-full border border-border/50 text-slate-gray hover:text-primary dark:hover:text-white hover:bg-light-blue dark:hover:bg-light-gray transition-all"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
