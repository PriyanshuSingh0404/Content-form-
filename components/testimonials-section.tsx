import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Content Creator",
    content: "WriteFlow has completely transformed how I approach writing. What used to take hours now takes minutes.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Marketing Manager",
    content:
      "The AI suggestions are incredibly smart. It feels like having a professional editor by your side at all times.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Student",
    content: "I went from B grades to A's. WriteFlow helps me structure my thoughts and express them clearly.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Loved by Writers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">See what our users have to say</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="p-8 rounded-xl border border-border bg-card">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
