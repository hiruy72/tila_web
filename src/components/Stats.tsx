"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, Users, Cpu, HeartHandshake, Globe2, Award } from "lucide-react";

interface StatItemProps {
  label: string;
  value: number;
  suffix?: string;
  Icon: React.ComponentType<{ className?: string }>;
}

function Counter({ value, suffix = "", duration = 1.5 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    const end = value;
    const totalFrames = Math.round((duration * 1000) / (1000 / 60));
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      setCount(Math.round(end * (progress * (2 - progress))));
      if (frame === totalFrames) { clearInterval(counter); setCount(end); }
    }, 1000 / 60);
    return () => clearInterval(counter);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl font-black text-primary">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const statsList: StatItemProps[] = [
    { label: "Projects Completed", value: 150, suffix: "+", Icon: Layers },
    { label: "Happy Clients", value: 80, suffix: "+", Icon: HeartHandshake },
    { label: "Software Solutions", value: 45, suffix: "+", Icon: Cpu },
    { label: "Developers", value: 25, suffix: "+", Icon: Users },
    { label: "Years Experience", value: 4, suffix: "+", Icon: Award },
    { label: "Countries Served", value: 8, suffix: "+", Icon: Globe2 },
  ];

  return (
    <section className="py-12 border-y border-gray-100 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {statsList.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="flex flex-col items-center text-center p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-full bg-primary/8 group-hover:scale-110 transition-transform mb-3 text-primary">
                <stat.Icon className="w-5 h-5" />
              </div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <span className="text-[12px] font-semibold text-slate-500 mt-1.5 leading-tight text-center">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
