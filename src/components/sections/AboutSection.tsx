"use client";

import { motion } from "framer-motion";
import { ExcellenceIcon, GlobalIcon, PrecisionIcon, PerformanceIcon } from "@/components/icons/CustomIcons";

export default function AboutSection() {
  const highlights = [
    {
      icon: ExcellenceIcon,
      title: "Award-Winning",
      description: "50+ industry awards",
    },
    {
      icon: GlobalIcon,
      title: "Global Reach",
      description: "15+ countries served",
    },
    {
      icon: PrecisionIcon,
      title: "Client-Focused",
      description: "98% satisfaction rate",
    },
    {
      icon: PerformanceIcon,
      title: "Results-Driven",
      description: "300% average ROI",
    },
  ];

  return (
    <section id="about" className="relative py-40 overflow-hidden">
      {/* Minimal Divider */}
      <div className="absolute top-0 left-0 w-full minimal-line"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-xs font-medium text-white/40 mb-6 uppercase tracking-widest">
              About ZyphX
            </h2>
            <h3 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.05]">
              Redefining
              <br />
              <span className="text-gradient-aqua">digital excellence</span>
            </h3>
            <div className="space-y-6 text-lg text-white/50 leading-relaxed font-light">
              <p>
                At Neo Zyphorixweb, we're architects of the digital future. Every project is a masterpiece. Every pixel is intentional. Every interaction is crafted to perfection.
              </p>
              <p>
                Our team combines creativity with cutting-edge technology to deliver experiences that don't just meet expectations—they shatter them.
              </p>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mt-10 px-10 py-4 bg-white text-black font-medium rounded-full"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Right Content - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="luxury-glass p-8 rounded-3xl hover:bg-white/[0.02] transition-all duration-500 premium-hover"
              >
                <div className="mb-6">
                  <highlight.icon className="w-10 h-10 text-white/80" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2 tracking-tight">
                  {highlight.title}
                </h4>
                <p className="text-white/50 text-sm font-light">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}