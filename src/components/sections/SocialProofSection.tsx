"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Award, Rocket, Users, Code } from "lucide-react";

const achievements = [
  { name: "Jump Trading Chicago", category: "Innovation Award" },
  { name: "Chainlink", category: "Best Integration" },
  { name: "Filecoin", category: "Storage Prize" },
  { name: "I'm Not Art Chicago", category: "Creative Tech" },
  { name: "Polygon BUIDL IT", category: "Grand Prize" },
];

const stats = [
  {
    icon: Award,
    value: "8x",
    label: "Competition Winner",
    description: "Awards from Jump Trading, Chainlink, Filecoin, and more",
  },
  {
    icon: Rocket,
    value: "50+",
    label: "Projects Shipped",
    description: "From MVPs to enterprise production systems",
  },
  {
    icon: Users,
    value: "mHUB",
    label: "Member",
    description: "Chicago's premier innovation hub in Fulton Market",
  },
  {
    icon: Code,
    value: "77",
    label: "Open Source Repos",
    description: "Public code you can explore and learn from",
  },
];

export function SocialProofSection() {
  return (
    <section className="py-24 md:py-32 bg-navy-900 overflow-hidden">
      <Container>
        <SectionHeader
          eyebrow="Track Record"
          headline="Proven Results. Real Credibility."
          subheadline="Competition wins, shipped products, and open source contributions that speak for themselves."
        />

        {/* Achievement Marquee */}
        <div className="relative mb-16">
          <div className="flex gap-6 animate-marquee">
            {[...achievements, ...achievements].map((achievement, index) => (
              <div
                key={`${achievement.name}-${index}`}
                className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-navy-800 border border-navy-700 rounded-xl"
              >
                <Award className="w-5 h-5 text-electric-500" />
                <div>
                  <div className="text-steel-100 font-medium whitespace-nowrap">
                    {achievement.name}
                  </div>
                  <div className="text-steel-500 text-sm">{achievement.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="bordered" className="text-center p-6 h-full">
                <stat.icon className="w-8 h-8 text-electric-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-steel-50 mb-1">
                  {stat.value}
                </div>
                <div className="text-electric-500 font-medium mb-2">
                  {stat.label}
                </div>
                <p className="text-steel-500 text-sm">{stat.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
