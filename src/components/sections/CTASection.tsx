"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Calendar, ArrowRight, MessageSquare } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-500/20 via-navy-800 to-navy-900" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,230,118,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,230,118,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-500/10 border border-electric-500/30 text-electric-500 text-sm font-mono mb-6">
            <Calendar size={16} />
            Free 1-Hour Strategy Call
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-steel-50 mb-6">
            Ready to Ship Something{" "}
            <span className="text-electric-500">Real?</span>
          </h2>

          <p className="text-lg md:text-xl text-steel-400 mb-8 max-w-2xl mx-auto">
            Book a free 1-hour strategy call. We&apos;ll discuss your project, timeline, and whether we&apos;re a good fit. No sales pitch. No pressure. Just a conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              href="https://cal.com/osborn/1-hr-meeting"
              size="lg"
              className="text-lg"
            >
              Book Your Free Strategy Call
              <ArrowRight size={20} />
            </Button>
          </div>

          <p className="text-steel-500 text-sm flex items-center justify-center gap-2">
            <MessageSquare size={16} />
            Prefer email? Reach out via LinkedIn
          </p>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-navy-700 max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-electric-500">100%</div>
              <div className="text-sm text-steel-500">Response Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-steel-50">&lt;24h</div>
              <div className="text-sm text-steel-500">Response Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-steel-50">Free</div>
              <div className="text-sm text-steel-500">Initial Call</div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
