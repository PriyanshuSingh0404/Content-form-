export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
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
          <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition">
            Start Writing Free
          </button>
          <button className="px-8 py-3 rounded-full border border-border hover:bg-muted transition text-foreground font-semibold">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
