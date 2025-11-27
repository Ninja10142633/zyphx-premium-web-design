"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle Background Glow */}
      <motion.div
        animate={{
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[#00f5ff] rounded-full blur-[200px] pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-32 text-center">
        {/* Minimal Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="inline-flex items-center space-x-2 luxury-glass px-5 py-2.5 rounded-full mb-12"
        >
          <span className="text-xs font-medium text-white/80 tracking-wide uppercase">
            Premium Digital Experiences
          </span>
        </motion.div>

        {/* Main Heading - Apple Style */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.95] tracking-tighter"
        >
          <span className="text-white">Designed to</span>
          <br />
          <span className="text-gradient-aqua">inspire.</span>
        </motion.h1>

        {/* Subtitle - Refined */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-14 leading-relaxed font-light"
        >
          Where precision meets artistry. Crafting digital masterpieces that define excellence.
        </motion.p>

        {/* Minimal CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="#contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="group relative px-10 py-4 bg-white text-black font-medium rounded-full overflow-hidden flex items-center space-x-2"
            >
              <span className="relative z-10">Start a Project</span>
              <ArrowRight
                size={18}
                className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
              />
            </motion.button>
          </Link>

          <Link href="#portfolio">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="px-10 py-4 luxury-glass text-white font-medium rounded-full hover:bg-white/5 transition-all duration-300"
            >
              View Work
            </motion.button>
          </Link>
        </motion.div>

        {/* Refined Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-32 pt-16 border-t border-white/5"
        >
          {[
            { value: "200+", label: "Projects" },
            { value: "98%", label: "Satisfaction" },
            { value: "50+", label: "Awards" },
            { value: "15+", label: "Countries" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-white/40 text-sm font-light tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-1.5 bg-white/60 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}