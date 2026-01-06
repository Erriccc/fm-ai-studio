"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink, Github, Mic, Share2, Shield, Search } from "lucide-react";

const projects = [
  {
    title: "Osborn Voice AI",
    description:
      "Open-source Siri for developers. Voice-enabled AI coding assistant with real-time communication, natural language commands, and Claude integration. R&D project pushing the boundaries of developer tooling.",
    category: "R&D / Open Source",
    icon: Mic,
    techStack: ["TypeScript", "LiveKit", "Claude API", "WebRTC"],
    links: {
      github: "https://github.com/Erriccc/osborn",
    },
    highlight: true,
    badge: "Featured R&D",
  },
  {
    title: "Meta MCP Server",
    description:
      "Enterprise-grade MCP Server for Meta Marketing API. Enables AI agents to manage Facebook and Instagram ad campaigns, automate reporting, and optimize marketing spend.",
    category: "Enterprise / Marketing",
    icon: Share2,
    techStack: ["TypeScript", "Meta API", "MCP Protocol", "Node.js"],
    links: {
      live: "https://meta-mcp.com",
      github: "https://github.com/Erriccc/meta-mcp-javascript",
    },
  },
  {
    title: "Meta Policy Scanner",
    description:
      "CLI tool that automatically scans codebases for Meta API policy violations. Ensures compliance with Facebook, Instagram, Messenger, and WhatsApp platform policies before deployment.",
    category: "Enterprise / Compliance",
    icon: Shield,
    techStack: ["TypeScript", "CLI", "Meta Policies", "AST"],
    links: {
      github: "https://github.com/Erriccc/meta-policy-scanner",
    },
  },
  {
    title: "Fulton Market Business Finder",
    description:
      "Local business discovery platform for Chicago's Fulton Market district. Helps startups and enterprises find vendors, services, and partners in the innovation corridor.",
    category: "Distribution / Local",
    icon: Search,
    techStack: ["Next.js", "PostgreSQL", "Maps API", "Supabase"],
    links: {},
    comingSoon: true,
  },
];

export function PortfolioSection() {
  return (
    <section id="work" className="py-24 md:py-32 bg-navy-800/50">
      <Container>
        <SectionHeader
          eyebrow="Our Work"
          headline="Built to Ship. Open to Explore."
          subheadline="Production systems and R&D projects. Real code solving real business problems."
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                variant="bordered"
                className={`h-full hover:border-electric-500/50 ${
                  project.highlight ? "border-electric-500/30 bg-electric-500/5" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-navy-700 rounded-xl">
                    <project.icon className="w-6 h-6 text-electric-500" />
                  </div>
                  {project.badge && (
                    <Badge variant="electric">{project.badge}</Badge>
                  )}
                  {project.comingSoon && (
                    <Badge variant="outline">Coming Soon</Badge>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-steel-50 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-electric-500 mb-3">{project.category}</p>
                <p className="text-steel-400 mb-6">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-navy-700">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-steel-400 hover:text-electric-500 text-sm transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-steel-400 hover:text-electric-500 text-sm transition-colors"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  )}
                  {project.comingSoon && (
                    <span className="text-steel-600 text-sm">
                      In Development
                    </span>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Erriccc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-steel-400 hover:text-electric-500 transition-colors"
          >
            <Github size={20} />
            <span>Explore all 77 open source repositories</span>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
