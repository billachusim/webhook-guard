import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For side projects and testing",
    features: [
      "100 events / month",
      "Basic logging",
      "7-day log retention",
      "Community support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Starter",
    price: "$9",
    period: "/ month",
    description: "For indie hackers and small apps",
    features: [
      "10,000 events / month",
      "Automatic retries",
      "Full request/response logs",
      "30-day log retention",
      "Email support",
    ],
    cta: "Get Early Access",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/ month",
    description: "For growing SaaS products",
    features: [
      "100,000 events / month",
      "Everything in Starter",
      "AI error explanations",
      "Email alerts on failures",
      "90-day log retention",
      "Priority support",
    ],
    cta: "Get Early Access",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium mb-3">PRICING</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Start free. Scale as you grow. No hidden fees.
          </p>
        </div>
        
        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-6 rounded-xl border ${
                plan.highlighted 
                  ? 'border-primary bg-card glow' 
                  : 'border-border bg-card/50'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${plan.highlighted ? 'glow-sm' : ''}`}
                variant={plan.highlighted ? 'default' : 'outline'}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
