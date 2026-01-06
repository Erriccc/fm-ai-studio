"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-900/80 backdrop-blur-lg border-b border-navy-800">
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.jpg"
              alt="Fulton Market AI Studio"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="hidden sm:inline text-lg font-bold text-steel-50">
              FMAI<span className="text-electric-500"> Studio</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-steel-400 hover:text-steel-100 transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button href="https://cal.com/osborn/1-hr-meeting" size="sm">
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-steel-400 hover:text-steel-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-navy-800">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-steel-400 hover:text-steel-100 transition-colors text-sm font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button href="https://cal.com/osborn/1-hr-meeting" size="sm" className="mt-2">
                Book a Call
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
