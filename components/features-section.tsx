"use client"
import { Zap, BookOpen, Brain, ShieldCheck, Sparkles, Globe2 } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get AI suggestions in real-time as you type. No waiting, no distractions.",
  },
  {
    icon: BookOpen,
    title: "Multiple Writing Styles",
    description: "Adapt your tone from professional to creative. Perfect for any context.",
  },
  {
    icon: Brain,
    title: "Intelligent Insights",
    description: "Understand your writing patterns and improve your skills over time.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    description: "Your content stays yours. No data sharing, no tracking, full control.",
  },
  {
    icon: Sparkles,
    title: "Smart Templates",
    description: "Kickstart drafts with curated templates and AI-powered prompts.",
  },
  {
    icon: Globe2,
    title: "Multilingual",
    description: "Write and translate across languages with consistent tone and style.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Powerful Features
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to write better content, faster
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="relative p-6 sm:p-8 rounded-2xl border border-border bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/60 shadow-sm hover:shadow-md ring-1 ring-transparent hover:ring-primary/20 transition-all duration-300 group overflow-hidden"
                style={{
                  animation: `fadeInUp 0.6s ease ${(idx + 1) * 80}ms both`,
                }}
              >
                <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-primary/5 blur-2xl transition-opacity group-hover:opacity-80" />

                <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
