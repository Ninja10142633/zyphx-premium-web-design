"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { label: "Web Design", href: "#services" },
      { label: "Development", href: "#services" },
      { label: "UI/UX Design", href: "#services" },
      { label: "Branding", href: "#services" },
    ],
    Company: [
      { label: "About", href: "#about" },
      { label: "Work", href: "#portfolio" },
      { label: "Process", href: "#process" },
      { label: "Contact", href: "#contact" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-black border-t border-white/5 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <motion.span
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="text-3xl font-bold text-white tracking-tight"
              >
                Zyph<span className="text-[#00f5ff]">X</span>
              </motion.span>
            </Link>
            <p className="text-white/40 mb-8 text-sm leading-relaxed max-w-sm font-light">
              Neo Zyphorixweb — Crafting ultra-premium digital experiences that define the future.
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white/60 font-medium mb-4 text-xs uppercase tracking-widest">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/40 hover:text-white transition-colors text-sm font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Minimal Divider */}
        <div className="minimal-line mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-xs font-light">
            © {currentYear} Neo Zyphorixweb. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-9 h-9 rounded-full luxury-glass flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-all"
                aria-label={social.label}
              >
                <social.icon size={16} />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-6 text-xs text-white/30 font-light">
            <Link href="#" className="hover:text-white/50 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white/50 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}