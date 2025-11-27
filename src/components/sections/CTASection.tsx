"use client";

import { motion } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="relative py-40 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#00f5ff] rounded-full blur-[250px] opacity-5"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          {/* Minimal Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center luxury-glass px-5 py-2.5 rounded-full mb-12"
          >
            <span className="text-xs font-medium text-white/80 tracking-wide uppercase">
              Let's Create Together
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.05]"
          >
            Ready to build
            <br />
            <span className="text-gradient-aqua">the future?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/50 max-w-2xl mx-auto mb-14 font-light"
          >
            Let's transform your vision into a digital masterpiece. Get in touch and start crafting something extraordinary.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href="mailto:hello@zyphx.studio"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="group px-10 py-4 bg-white text-black font-medium rounded-full flex items-center space-x-2"
            >
              <span>Start a Project</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </motion.a>

            <motion.a
              href="https://instagram.com/neozyphorixweb"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="group px-10 py-4 luxury-glass text-white font-medium rounded-full hover:bg-white/5 transition-all duration-300 flex items-center space-x-2"
            >
              <Instagram size={18} />
              <span>Follow on Instagram</span>
            </motion.a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-12 border-t border-white/5"
          >
            <p className="text-white/30 text-xs mb-4 uppercase tracking-widest font-light">
              Or reach us directly
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <a
                href="mailto:hello@zyphx.studio"
                className="text-white/60 hover:text-white transition-colors font-light"
              >
                hello@zyphx.studio
              </a>
              <span className="hidden sm:inline text-white/20">•</span>
              <a
                href="https://instagram.com/neozyphorixweb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors font-light flex items-center space-x-2"
              >
                <Instagram size={14} />
                <span>@neozyphorixweb</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}