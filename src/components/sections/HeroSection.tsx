"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight, MapPin, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/osborn-banner.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/90 to-navy-900" />

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,58,95,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,95,0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_20%,transparent_100%)]" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-navy-500/20 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-500/10 border border-electric-500/30 text-electric-500 text-sm font-mono">
              <Zap size={14} className="fill-electric-500" />
              ENTERPRISE SOFTWARE SOLUTIONS
            </span>
            <span className="hidden sm:flex items-center gap-1 text-steel-500 text-sm">
              <MapPin size={14} />
              Chicago
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-steel-50 tracking-tight leading-[1.1] mb-6"
          >
            Automate Your Business.{" "}
            <span className="text-electric-500">Scale Without Limits.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-steel-400 max-w-2xl mb-8"
          >
            Fulton Market AI Studio builds production-ready automation systems for startups and enterprises. From AI-powered workflows to Meta marketing integrations—we ship software that drives real business results.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="https://cal.com/osborn/1-hr-meeting" size="lg">
              Book Your Free Strategy Call
              <ArrowRight size={20} />
            </Button>
            <Button href="#work" variant="ghost" size="lg">
              View Our Work
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 pt-8 border-t border-navy-800 grid grid-cols-3 gap-8"
          >
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-electric-500">50+</div>
              <div className="text-sm text-steel-500 mt-1">Projects Shipped</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-steel-50">8x</div>
              <div className="text-sm text-steel-500 mt-1">Award Winner</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-steel-50">100%</div>
              <div className="text-sm text-steel-500 mt-1">Delivery Rate</div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
