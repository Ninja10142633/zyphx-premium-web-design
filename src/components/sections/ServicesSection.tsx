"use client";

import { motion } from "framer-motion";
import { 
  SpeedIcon, 
  CraftIcon, 
  AdaptiveIcon, 
  PerformanceIcon, 
  BrandIcon, 
  IntegrateIcon 
} from "@/components/icons/CustomIcons";

export default function ServicesSection() {
  const services = [
    {
      icon: SpeedIcon,
      title: "Web Development",
      description:
        "Lightning-fast, scalable web applications built with precision and cutting-edge technology.",
    },
    {
      icon: CraftIcon,
      title: "UI/UX Design",
      description:
        "Stunning, intuitive interfaces that captivate users and deliver exceptional experiences.",
    },
    {
      icon: AdaptiveIcon,
      title: "Mobile-First Design",
      description:
        "Responsive designs that look flawless on every device, from smartphones to ultra-wide displays.",
    },
    {
      icon: PerformanceIcon,
      title: "Performance Optimization",
      description:
        "Blazing-fast load times and buttery-smooth interactions that keep users engaged.",
    },
    {
      icon: BrandIcon,
      title: "Brand Identity",
      description:
        "Cohesive brand systems that tell your story and resonate with your audience.",
    },
    {
      icon: IntegrateIcon,
      title: "AI Integration",
      description:
        "Next-gen AI-powered features that give your platform a competitive edge.",
    },
  ];

  return (
    <section id="services" className="relative py-40 overflow-hidden">
      {/* Minimal Divider */}
      <div className="absolute top-0 left-0 w-full minimal-line"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header - Apple Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-28"
        >
          <h2 className="text-xs font-medium text-white/40 mb-6 uppercase tracking-widest">
            Capabilities
          </h2>
          <h3 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            What we create
          </h3>
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
            End-to-end solutions that transform vision into reality
          </p>
        </motion.div>

        {/* Services Grid - Minimal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="group relative luxury-glass p-10 rounded-3xl hover:bg-white/[0.02] transition-all duration-500 premium-hover"
            >
              {/* Icon */}
              <div className="mb-8">
                <service.icon className="w-10 h-10 text-white/90 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h4 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                {service.title}
              </h4>
              <p className="text-white/50 leading-relaxed font-light">
                {service.description}
              </p>

              {/* Subtle Hover Line */}
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/20 group-hover:w-full transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}