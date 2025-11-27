"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PortfolioSection() {
  const projects = [
    {
      id: "apexfit",
      title: "ApexFit",
      category: "Fitness & Wellness",
      description:
        "Revolutionary fitness platform with AI-powered workout tracking and real-time performance analytics.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=90",
      tags: ["Next.js", "AI Integration", "Real-time Data"],
    },
    {
      id: "lumen-studio",
      title: "Lumen Studio",
      category: "Creative Agency",
      description:
        "Immersive portfolio experience for a leading creative studio with stunning 3D interactions.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90",
      tags: ["3D Design", "WebGL", "Brand Identity"],
    },
    {
      id: "nordwave",
      title: "NordWave",
      category: "E-commerce",
      description:
        "Premium e-commerce platform with seamless checkout and personalized shopping experiences.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=90",
      tags: ["E-commerce", "Payment Integration", "UX Design"],
    },
  ];

  return (
    <section id="portfolio" className="relative py-40 overflow-hidden">
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
            Featured Work
          </h2>
          <h3 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Recent projects
          </h3>
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
            Innovation, creativity, and technical excellence
          </p>
        </motion.div>

        {/* Portfolio Grid - Large Cards */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="group relative luxury-glass rounded-[2rem] overflow-hidden hover:bg-white/[0.02] transition-all duration-500"
            >
              <Link href={`/portfolio/${project.id}`}>
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Project Image */}
                  <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:bg-gradient-to-r"></div>
                  </div>

                  {/* Project Info */}
                  <div className="flex flex-col justify-center p-12 lg:p-16">
                    <div className="text-xs font-medium text-white/40 mb-4 uppercase tracking-widest">
                      {project.category}
                    </div>
                    <h4 className="text-5xl font-bold text-white mb-6 tracking-tight group-hover:text-gradient-aqua transition-all">
                      {project.title}
                    </h4>
                    <p className="text-lg text-white/50 leading-relaxed mb-8 font-light">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 luxury-glass rounded-full text-xs text-white/60 font-light"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="inline-flex items-center space-x-2 text-white/80 font-medium group/btn">
                      <span>View Case Study</span>
                      <ArrowRight
                        size={18}
                        className="group-hover/btn:translate-x-1 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}