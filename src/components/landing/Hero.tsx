import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 rounded-full blur-[120px]" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 mb-8">
          <Shield className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Webhook reliability, simplified</span>
        </div>
        
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Never Lose a{" "}
          <span className="text-gradient">Webhook</span>{" "}
          Again.
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Reliable webhook delivery with automatic retries, logging, and AI-powered error explanations. 
          Stop debugging failed webhooks.
        </p>
        
        {/* Email capture */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mb-6">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="h-12 bg-card border-border text-foreground placeholder:text-muted-foreground"
          />
          <Button size="lg" className="h-12 px-6 glow-sm">
            Get Early Access
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
        
        {/* Secondary CTA */}
        <a 
          href="#how-it-works" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          View API Docs →
        </a>
      </div>
    </section>
  );
};

export default Hero;
