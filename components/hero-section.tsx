"use client"

import Aurora from './Aurora';

import Link from 'next/link'
import { useState } from 'react'

export function HeroSection() {
  const [open, setOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
          <span className="w-2 h-2 bg-accent rounded-full"></span>
          <span className="text-sm text-accent">AI-Powered Writing</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Write Better,
          <br />
          <span className="gradient-text">Faster Than Ever</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Transform your writing with AI-powered suggestions, real-time editing, and intelligent insights. From emails
          to essays, WriteFlow helps you write with confidence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/login" className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition">
            Start Writing Free
          </Link>
          <button onClick={() => setOpen(true)} className="px-8 py-3 rounded-full border border-border hover:bg-muted transition text-foreground font-semibold">
            Watch Demo
          </button>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-16">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-primary/10 to-transparent border border-border p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center animate-float">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <p className="text-muted-foreground">Interactive Demo Coming Soon</p>
              <button
                onClick={() => setLoginOpen(true)}
                className="mt-6 px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
              >
                Start your free trial
              </button>
            </div>
          </div>
        </div>
      {/* Demo Modal */}
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
            <div className="relative z-10 w-full max-w-lg rounded-2xl border border-border bg-card/90 backdrop-blur p-6 sm:p-8 shadow-2xl text-center">
              <h3 className="text-2xl font-bold mb-2">Demo coming soon</h3>
              <p className="text-muted-foreground mb-6">We're polishing the interactive demo. Meanwhile, start your free trial and explore the app.</p>
              <button
                onClick={() => { setOpen(false); setLoginOpen(true); }}
                className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
              >
                Start your free trial
              </button>
              <button
                onClick={() => setOpen(false)}
                className="mt-4 block mx-auto text-sm text-muted-foreground hover:text-foreground"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Login Modal */}
        {loginOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60" onClick={() => setLoginOpen(false)} />
            <div className="relative z-10 w-full max-w-lg rounded-2xl border border-border bg-card/95 backdrop-blur p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Sign in</h3>
                <button
                  onClick={() => setLoginOpen(false)}
                  className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 text-foreground/90 flex items-center justify-center"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <button className="h-10 rounded-md border border-border hover:bg-muted/50 transition text-sm">
                  Continue with Google
                </button>
                <button className="h-10 rounded-md border border-border hover:bg-muted/50 transition text-sm">
                  Continue with GitHub
                </button>
              </div>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border" /></div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">or continue with email</span>
                </div>
              </div>

              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="modal-email" className="text-sm font-medium">Email</label>
                  <input id="modal-email" type="email" required placeholder="you@example.com" className="w-full h-11 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/40" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="modal-password" className="text-sm font-medium">Password</label>
                  <input id="modal-password" type="password" required placeholder="••••••••" className="w-full h-11 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/40" />
                </div>
                <button type="submit" className="w-full h-11 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition">Sign in</button>
              </form>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                Prefer full page? <a href="/login" className="text-primary hover:underline">Open login page</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
