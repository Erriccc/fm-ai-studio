"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Building2, UserX, Zap, CheckCircle } from "lucide-react";

const problems = [
  {
    icon: Building2,
    title: "The Agency Shuffle",
    description:
      "You've hired agencies that over-promised and under-delivered. Bloated timelines. Budget overruns. Code that breaks in production.",
  },
  {
    icon: UserX,
    title: "The Freelancer Gamble",
    description:
      "Freelancers disappear mid-project. No accountability. You're left debugging someone else's spaghetti code.",
  },
  {
    icon: Zap,
    title: '"Move Fast, Break Things"',
    description:
      "Silicon Valley mantras don't work when you need software that handles real money, real users, real scale.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-24 md:py-32 bg-navy-900">
      <Container>
        <SectionHeader
          eyebrow="The Problem"
          headline="Building Software Is Hard. Finding the Right Partner Is Harder."
        />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="bordered" className="h-full hover:border-red-500/30">
                <problem.icon className="w-10 h-10 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-steel-100 mb-3">
                  {problem.title}
                </h3>
                <p className="text-steel-400">{problem.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card variant="elevated" className="max-w-2xl mx-auto bg-gradient-to-br from-navy-800 to-navy-900 border-electric-500/30">
            <CheckCircle className="w-12 h-12 text-electric-500 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-steel-50 mb-3">
              There&apos;s a Better Way.
            </h3>
            <p className="text-lg text-steel-400">
              Midwest engineering. Ship it right the first time.{" "}
              <span className="text-electric-500 font-medium">
                8 hackathon wins
              </span>{" "}
              prove I can build fast AND build well.
            </p>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
