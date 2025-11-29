import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for getting started",
    features: ["Basic AI suggestions", "1,000 words per month", "Core writing tools", "Email support"],
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    description: "For serious writers",
    featured: true,
    features: [
      "Advanced AI suggestions",
      "Unlimited words",
      "Style customization",
      "Priority support",
      "Writing analytics",
      "Team collaboration",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: ["Everything in Pro", "Dedicated support", "Custom integrations", "Advanced security", "SLA guarantee"],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Choose the plan that works for you</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-8 transition ${
                plan.featured
                  ? "border-primary bg-gradient-to-b from-primary/10 to-transparent shadow-lg shadow-primary/20"
                  : "border-border bg-card"
              }`}
            >
              {plan.featured && (
                <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-4">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition ${
                  plan.featured
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border text-foreground hover:bg-muted"
                }`}
              >
                Get Started
              </button>

              {/* Features List */}
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
