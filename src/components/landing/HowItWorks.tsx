import { ArrowRight, Webhook, Shield, Server } from "lucide-react";

const steps = [
  {
    icon: Webhook,
    step: "01",
    title: "Point your webhook to us",
    description: "Replace your endpoint URL with your WebhookShield URL. Takes 30 seconds.",
  },
  {
    icon: Shield,
    step: "02",
    title: "We forward and retry",
    description: "We deliver to your real endpoint with automatic retries on failure.",
  },
  {
    icon: Server,
    step: "03",
    title: "Get logs and insights",
    description: "Full request/response logs and AI-powered error explanations.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium mb-3">HOW IT WORKS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple setup. Instant reliability.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Get started in under a minute. No code changes required.
          </p>
        </div>
        
        {/* Flow diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-card border border-border">
            <span className="text-sm font-medium">Stripe / GitHub / Shopify</span>
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90 md:rotate-0" />
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 border border-primary/30 glow-sm">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">WebhookShield</span>
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90 md:rotate-0" />
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-card border border-border">
            <span className="text-sm font-medium">Your API</span>
          </div>
        </div>
        
        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <span className="text-5xl font-bold text-muted/30 absolute top-4 right-4">
                {step.step}
              </span>
              <step.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
