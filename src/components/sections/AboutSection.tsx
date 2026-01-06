"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { MapPin, Building2, Trophy, FileText } from "lucide-react";

const highlights = [
  { icon: Trophy, label: "8x Hackathon Winner" },
  { icon: Building2, label: "mHUB Member" },
  { icon: MapPin, label: "Fulton Market, Chicago" },
  { icon: FileText, label: "15+ Technical Articles" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-navy-900">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Profile photo */}
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-navy-700 to-navy-800 border border-navy-600 overflow-hidden">
                <Image
                  src="/osborn-profile.jpg"
                  alt="Osborn Ojure - Full Stack Developer"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Location badge */}
              <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-electric-500 text-navy-900 rounded-xl font-medium text-sm flex items-center gap-2">
                <MapPin size={16} />
                Chicago, IL
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-4 text-sm font-mono font-medium tracking-wider text-electric-500 uppercase">
              About
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-steel-50 mb-6">
              Built in the Midwest.{" "}
              <span className="text-electric-500">Shipping Worldwide.</span>
            </h2>

            <div className="space-y-4 text-steel-400 text-lg mb-8">
              <p>
                I&apos;m Osborn Ojure, a full-stack developer based in Chicago&apos;s Fulton Market district. I work out of{" "}
                <span className="text-steel-200">mHUB</span>, where hardware meets software in the city&apos;s most innovative neighborhood.
              </p>
              <p>
                After winning{" "}
                <span className="text-electric-500 font-medium">8 hackathons</span>, I realized something: the skills that win competitions—building fast, solving hard problems, shipping under pressure—are exactly what startups and enterprises need.
              </p>
              <p>
                No corporate bureaucracy. No offshore teams you can&apos;t reach. Just direct collaboration with someone who&apos;s been in the trenches and knows how to ship.
              </p>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mb-8">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-4 py-2 bg-navy-800 border border-navy-700 rounded-lg"
                >
                  <item.icon className="w-4 h-4 text-electric-500" />
                  <span className="text-steel-300 text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://medium.com/@NFAblog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-electric-500 hover:text-electric-400 text-sm font-medium transition-colors"
              >
                Read my articles →
              </a>
              <a
                href="https://devpost.com/Erriccc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-electric-500 hover:text-electric-400 text-sm font-medium transition-colors"
              >
                View hackathon projects →
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
