"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BannerSection() {
  return (
    <section className="relative h-64 md:h-80 overflow-hidden">
      {/* Banner Image */}
      <Image
        src="/osborn-banner.jpg"
        alt="Fulton Market Chicago"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/70 to-navy-900" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center px-4"
        >
          <p className="text-electric-500 font-mono text-sm mb-2">BASED IN</p>
          <h3 className="text-3xl md:text-4xl font-bold text-steel-50">
            Fulton Market, Chicago
          </h3>
          <p className="text-steel-400 mt-2">Where innovation meets industry</p>
        </motion.div>
      </div>
    </section>
  );
}
