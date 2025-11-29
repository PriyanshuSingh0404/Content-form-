export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border border-primary/30 p-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Ready to Transform Your Writing?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of writers already using WriteFlow to create better content faster.
        </p>
        <a href="/login" className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition">
          Start Your Free Trial
        </a>
      </div>
    </section>
  )
}
