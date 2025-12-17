import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stop debugging webhook failures.
          </h2>
          <p className="text-muted-foreground mb-8">
            Join developers who trust WebhookShield for reliable webhook delivery.
          </p>
          
          {/* Email capture */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mb-4">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="h-12 bg-card border-border text-foreground placeholder:text-muted-foreground"
            />
            <Button size="lg" className="h-12 px-6 glow-sm">
              Join the Waitlist
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground">
            Join 100+ developers on the waitlist. We'll notify you when we launch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
