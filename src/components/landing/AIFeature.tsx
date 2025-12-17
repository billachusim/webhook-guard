import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AIFeature = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-accent/50 text-accent">
              <Sparkles className="w-3 h-3 mr-1" />
              Pro Feature
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Error Explanations
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              When a webhook fails, we analyze the response and explain the issue in plain English. 
              Stop digging through logs.
            </p>
          </div>
          
          {/* Example card */}
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <span className="text-sm font-medium">Failed Webhook</span>
              </div>
              <span className="text-xs text-muted-foreground font-mono">POST /api/webhooks/stripe</span>
            </div>
            
            {/* Error response */}
            <div className="px-6 py-4 border-b border-border bg-background/50">
              <p className="text-xs text-muted-foreground mb-2">Response (401 Unauthorized)</p>
              <pre className="font-mono text-sm text-destructive">
{`{
  "error": "Invalid API key provided",
  "code": "api_key_invalid"
}`}
              </pre>
            </div>
            
            {/* AI explanation */}
            <div className="px-6 py-4 bg-accent/5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-accent mb-1">AI Explanation</p>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">401 Unauthorized</strong> — Your endpoint rejected the request 
                    because the API key in the request header is invalid or expired. Check your webhook 
                    signature verification code and ensure your API keys are up to date.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeature;
