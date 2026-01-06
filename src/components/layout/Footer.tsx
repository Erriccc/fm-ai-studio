import { Container } from "@/components/ui/Container";
import { Github, Linkedin, FileText, Trophy } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/Erriccc", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/ojure-osborn", icon: Linkedin, label: "LinkedIn" },
  { href: "https://medium.com/@NFAblog", icon: FileText, label: "Medium" },
  { href: "https://devpost.com/Erriccc", icon: Trophy, label: "DevPost" },
];

const footerLinks = {
  services: [
    { href: "#services", label: "Full-Stack Development" },
    { href: "#services", label: "AI Integration" },
    { href: "#services", label: "Web3 Development" },
  ],
  company: [
    { href: "#about", label: "About" },
    { href: "#work", label: "Portfolio" },
    { href: "https://cal.com/osborn/1-hr-meeting", label: "Book a Call" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-navy-800 py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-steel-50">
                FM<span className="text-electric-500">.</span>AI
              </span>
              <span className="text-sm text-steel-500 font-medium">Studio</span>
            </div>
            <p className="text-steel-400 text-sm max-w-sm mb-6">
              Fulton Market AI Studio. Building production-ready software for startups and enterprises from Chicago&apos;s innovation district.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-steel-500 hover:text-electric-500 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-steel-200 uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-steel-400 hover:text-steel-100 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-steel-200 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-steel-400 hover:text-steel-100 text-sm transition-colors"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-steel-500 text-sm">
            &copy; {new Date().getFullYear()} Fulton Market AI Studio. All rights reserved.
          </p>
          <p className="text-steel-600 text-xs">
            Chicago, IL &bull; Fulton Market District
          </p>
        </div>
      </Container>
    </footer>
  );
}
