"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, Calendar, Users, Target, TrendingUp } from "lucide-react";

const portfolioData: Record<string, any> = {
  apexfit: {
    title: "ApexFit",
    category: "Fitness & Wellness",
    description: "Revolutionary fitness platform with AI-powered workout tracking and real-time performance analytics.",
    year: "2024",
    duration: "4 months",
    team: "6 specialists",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80",
    challenge: "ApexFit needed a platform that could compete with industry leaders while offering unique AI-powered features. The challenge was to create an intuitive interface that could handle complex data visualization without overwhelming users.",
    solution: "We designed a clean, modern interface with progressive disclosure principles. AI insights are presented in digestible cards, and real-time data is visualized through custom charts. The result is a powerful platform that feels effortless to use.",
    results: [
      { metric: "300%", label: "User Engagement Increase" },
      { metric: "4.9/5", label: "App Store Rating" },
      { metric: "150K+", label: "Active Users" },
      { metric: "92%", label: "Retention Rate" },
    ],
    technologies: ["Next.js 14", "TypeScript", "TensorFlow.js", "PostgreSQL", "WebSocket", "Tailwind CSS"],
    features: [
      "AI-powered workout recommendations",
      "Real-time performance tracking",
      "Social fitness challenges",
      "Nutrition planning integration",
      "Progress analytics dashboard",
      "Wearable device sync",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    ],
  },
  "lumen-studio": {
    title: "Lumen Studio",
    category: "Creative Agency",
    description: "Immersive portfolio experience for a leading creative studio with stunning 3D interactions.",
    year: "2024",
    duration: "3 months",
    team: "5 specialists",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
    challenge: "Lumen Studio, a creative powerhouse, needed a portfolio that showcased their work in a way that felt as innovative as the projects themselves. Traditional galleries wouldn't cut it—they wanted an experience.",
    solution: "We created an immersive 3D portfolio with WebGL-powered transitions. Each project exists in its own visual space, and navigation feels like exploring an art gallery. Smooth parallax effects and micro-interactions add layers of depth.",
    results: [
      { metric: "500%", label: "Inquiry Rate Increase" },
      { metric: "12min", label: "Average Session Time" },
      { metric: "15+", label: "Industry Awards" },
      { metric: "98%", label: "Client Satisfaction" },
    ],
    technologies: ["Next.js 14", "Three.js", "GSAP", "Framer Motion", "WebGL", "React Three Fiber"],
    features: [
      "3D project showcases",
      "Interactive gallery navigation",
      "Parallax storytelling",
      "Custom cursor effects",
      "Smooth page transitions",
      "Case study deep-dives",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80",
    ],
  },
  nordwave: {
    title: "NordWave",
    category: "E-commerce",
    description: "Premium e-commerce platform with seamless checkout and personalized shopping experiences.",
    year: "2024",
    duration: "5 months",
    team: "8 specialists",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80",
    challenge: "NordWave wanted to stand out in the crowded e-commerce space with a luxury shopping experience that matched their premium products. The focus was on creating a frictionless checkout while maintaining a high-end aesthetic.",
    solution: "We built a sophisticated e-commerce platform with AI-powered product recommendations, one-click checkout, and an elegant product showcase. Every detail, from animations to typography, reinforces the premium brand identity.",
    results: [
      { metric: "250%", label: "Conversion Rate Boost" },
      { metric: "$2.5M", label: "First Month Revenue" },
      { metric: "45%", label: "Cart Abandonment Drop" },
      { metric: "4.8/5", label: "Customer Reviews" },
    ],
    technologies: ["Next.js 14", "Stripe", "Shopify", "Vercel", "Redis", "Algolia Search"],
    features: [
      "One-click express checkout",
      "AI product recommendations",
      "Virtual try-on (AR)",
      "Wishlist & favorites",
      "Multi-currency support",
      "Advanced filtering system",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    ],
  },
};

export default function PortfolioDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const project = portfolioData[id];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="relative min-h-screen bg-[#030014] overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none"></div>
      <div className="fixed inset-0 aurora-bg pointer-events-none"></div>

      <Navigation />

      <main className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/#portfolio"
              className="inline-flex items-center space-x-2 text-white/60 hover:text-[#00f5ff] transition-colors mb-12 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Portfolio</span>
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="text-sm font-semibold text-[#00f5ff] mb-4 uppercase tracking-wider">
              {project.category}
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              {project.title}
            </h1>
            <p className="text-2xl text-white/60 max-w-4xl mb-8">
              {project.description}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-8 text-white/60">
              <div className="flex items-center space-x-2">
                <Calendar size={20} className="text-[#00f5ff]" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users size={20} className="text-[#00f5ff]" />
                <span>{project.team}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target size={20} className="text-[#00f5ff]" />
                <span>{project.duration}</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] rounded-3xl overflow-hidden mb-20 neon-glow-aqua"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent"></div>
          </motion.div>

          {/* Challenge & Solution */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                The <span className="text-[#00f5ff]">Challenge</span>
              </h2>
              <p className="text-white/60 leading-relaxed text-lg">
                {project.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                The <span className="text-[#0b6cff]">Solution</span>
              </h2>
              <p className="text-white/60 leading-relaxed text-lg">
                {project.solution}
              </p>
            </motion.div>
          </div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              The <span className="text-gradient-aqua">Results</span>
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {project.results.map((result: any, index: number) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="glass-effect p-8 rounded-2xl text-center"
                >
                  <div className="text-5xl font-bold text-gradient-aqua mb-3">
                    {result.metric}
                  </div>
                  <div className="text-white/60">{result.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features & Technologies */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                Key Features
              </h2>
              <div className="space-y-4">
                {project.features.map((feature: string, index: number) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-3 glass-effect p-4 rounded-xl"
                  >
                    <div className="w-2 h-2 bg-[#00f5ff] rounded-full mt-2"></div>
                    <span className="text-white/80">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech: string, index: number) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 glass-effect rounded-xl text-white/80 font-medium border border-white/10 hover:border-[#00f5ff]/30 transition-all"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Project <span className="text-gradient-aqua">Gallery</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {project.gallery.map((image: string, index: number) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative h-80 rounded-2xl overflow-hidden glass-effect"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-3xl p-12 text-center neon-glow-aqua"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Like What You See?
            </h2>
            <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Get in touch to start your project.
            </p>
            <Link href="/#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#00f5ff] to-[#0b6cff] text-[#030014] font-semibold rounded-xl inline-flex items-center space-x-2"
              >
                <span>Start Your Project</span>
                <ExternalLink size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
