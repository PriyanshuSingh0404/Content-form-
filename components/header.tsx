"use client"

import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">WF</span>
            </div>
            <span className="font-bold text-lg text-foreground">WriteFlow</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition">
              Features
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition">
              Testimonials
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition">
              Pricing
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
              <span
                className={`h-0.5 bg-foreground transition transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
              <span className={`h-0.5 bg-foreground transition ${isOpen ? "opacity-0" : ""}`}></span>
              <span
                className={`h-0.5 bg-foreground transition transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#features" className="block px-4 py-2 text-muted-foreground hover:text-foreground">
              Features
            </a>
            <a href="#testimonials" className="block px-4 py-2 text-muted-foreground hover:text-foreground">
              Testimonials
            </a>
            <a href="#pricing" className="block px-4 py-2 text-muted-foreground hover:text-foreground">
              Pricing
            </a>
            <button className="w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
