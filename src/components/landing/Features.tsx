import { RefreshCw, FileText, Settings, Globe, CheckCircle, Zap } from "lucide-react";

const features = [
  {
    icon: RefreshCw,
    title: "Automatic Retries",
    description: "Failed deliveries are retried with exponential backoff. No lost events.",
  },
  {
    icon: FileText,
    title: "Full Request Logs",
    description: "Complete request and response logs for every webhook event.",
  },
  {
    icon: Settings,
    title: "Zero Configuration",
    description: "Works out of the box. Just change your webhook URL.",
  },
  {
    icon: Globe,
    title: "Any Provider",
    description: "Works with Stripe, PayPal, GitHub, Shopify, Zapier, and more.",
  },
  {
    icon: CheckCircle,
    title: "No Lost Events",
    description: "Every webhook is stored and delivered, even if your server is down.",
  },
  {
    icon: Zap,
    title: "Low Latency",
    description: "Sub-100ms forwarding. Your webhooks arrive fast.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium mb-3">FEATURES</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why developers use WebhookShield
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need for reliable webhook delivery. Nothing you don't.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
