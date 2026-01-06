"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Layers, Brain, Megaphone } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Full-Stack Development",
    tagline: "From concept to production in weeks, not months.",
    description:
      "Custom web applications and mobile apps built with modern, scalable architectures. No WordPress templates. No Webflow hacks. Real engineering.",
    techStack: ["Next.js", "React Native", "Node.js", "PostgreSQL", "TypeScript"],
    deliverables: [
      "Production-ready code with CI/CD",
      "Responsive design that works",
      "Performance optimization built-in",
      "Documentation your team can use",
    ],
  },
  {
    icon: Brain,
    title: "AI Integration & Automation",
    tagline: "Make your software smarter, not just faster.",
    description:
      "Integrate Claude, GPT, and custom AI models into your existing systems. Automate workflows. Build intelligent features that actually add value—not just hype.",
    techStack: ["Claude API", "OpenAI", "LangChain", "Python", "MCP Servers"],
    deliverables: [
      "Custom AI agents and chatbots",
      "Intelligent document processing",
      "Voice-enabled interfaces",
      "Business process automation",
    ],
  },
  {
    icon: Megaphone,
    title: "Business & Marketing Automation",
    tagline: "Enterprise-grade Meta integrations that scale.",
    description:
      "End-to-end marketing automation using Meta Business SDK. Automated ad campaigns, multi-platform messaging, compliance scanning, and social commerce solutions.",
    techStack: ["Meta Business SDK", "Facebook API", "Instagram API", "WhatsApp API", "Node.js"],
    deliverables: [
      "Automated ad campaign management",
      "Multi-platform messaging systems",
      "Policy compliance automation",
      "Social commerce integrations",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-navy-800/50">
      <Container>
        <SectionHeader
          eyebrow="Services"
          headline="What We Build"
          subheadline="Three core competencies. One focus: automation that drives real business results."
        />

        <div className="space-y-8 md:space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="elevated" className="p-8 md:p-10">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left: Info */}
                  <div>
                    <service.icon className="w-12 h-12 text-electric-500 mb-4" />
                    <h3 className="text-2xl md:text-3xl font-bold text-steel-50 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-electric-500 font-medium mb-4">
                      {service.tagline}
                    </p>
                    <p className="text-steel-400 mb-6">{service.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Right: Deliverables */}
                  <div className="bg-navy-900/50 rounded-xl p-6">
                    <h4 className="text-sm font-semibold text-steel-300 uppercase tracking-wider mb-4">
                      What You Get
                    </h4>
                    <ul className="space-y-3">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-steel-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-electric-500 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
