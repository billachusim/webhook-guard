const audiences = [
  "Indie Hackers",
  "SaaS Startups",
  "Backend Engineers",
  "DevOps Teams",
  "Stripe Users",
  "Shopify Developers",
  "GitHub Integrators",
  "PayPal Merchants",
];

const Audience = () => {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-primary text-sm font-medium mb-3">BUILT FOR</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Who uses WebhookShield?
          </h2>
          
          {/* Audience tags */}
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {audiences.map((audience, index) => (
              <span 
                key={index}
                className="px-4 py-2 rounded-full border border-border bg-background text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
