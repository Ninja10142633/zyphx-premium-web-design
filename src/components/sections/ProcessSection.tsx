"use client";

import { motion } from "framer-motion";
import { PrecisionIcon, InnovationIcon, SpeedIcon, ExcellenceIcon } from "@/components/icons/CustomIcons";

export default function ProcessSection() {
  const processes = [
    {
      icon: PrecisionIcon,
      title: "Discovery",
      description:
        "We dive deep into your vision, goals, and target audience to understand what makes your brand unique.",
    },
    {
      icon: InnovationIcon,
      title: "Strategy",
      description:
        "We craft a comprehensive roadmap that aligns with your objectives and sets the foundation for success.",
    },
    {
      icon: SpeedIcon,
      title: "Development",
      description:
        "Our expert team brings your vision to life with clean code, stunning design, and seamless functionality.",
    },
    {
      icon: ExcellenceIcon,
      title: "Launch",
      description:
        "We deploy your project with precision and provide ongoing support to ensure continued excellence.",
    },
  ];

  return (
    <section id="process" className="relative py-40 overflow-hidden">
      {/* Minimal Divider */}
      <div className="absolute top-0 left-0 w-full minimal-line"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-28"
        >
          <h2 className="text-xs font-medium text-white/40 mb-6 uppercase tracking-widest">
            How We Work
          </h2>
          <h3 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Our process
          </h3>
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
            A proven methodology that transforms ideas into excellence
          </p>
        </motion.div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="group relative"
            >
              <div className="luxury-glass p-10 rounded-3xl text-center hover:bg-white/[0.02] transition-all duration-500 premium-hover">
                {/* Number Badge - Minimal */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-8 flex justify-center">
                  <process.icon className="w-12 h-12 text-white/80 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h4 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                  {process.title}
                </h4>
                <p className="text-white/50 leading-relaxed font-light text-sm">
                  {process.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}