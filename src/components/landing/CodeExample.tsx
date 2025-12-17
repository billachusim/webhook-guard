const CodeExample = () => {
  const codeSnippet = `// Before: Point Stripe webhooks to your server
webhook_url: "https://yourapp.com/webhooks/stripe"

// After: Point to WebhookShield (we forward to you)
webhook_url: "https://hooks.webhookshield.io/wh_abc123"

// That's it. We handle retries, logging, and error analysis.`;

  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium mb-3">INTEGRATION</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              One line change. That's it.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              No SDKs. No code changes. Just update your webhook URL in Stripe's dashboard.
            </p>
          </div>
          
          {/* Code block */}
          <div className="rounded-xl border border-border overflow-hidden">
            {/* Header */}
            <div className="px-4 py-3 bg-background border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
              </div>
              <span className="text-xs text-muted-foreground font-mono">stripe-webhook-config.js</span>
            </div>
            
            {/* Code */}
            <div className="p-6 bg-background/50">
              <pre className="font-mono text-sm leading-relaxed overflow-x-auto">
                <code>
                  {codeSnippet.split('\n').map((line, i) => (
                    <div key={i} className={line.startsWith('//') ? 'text-muted-foreground' : 'text-foreground'}>
                      {line.includes('webhookshield') ? (
                        <>
                          {line.split('webhookshield').map((part, j) => (
                            <span key={j}>
                              {part}
                              {j < line.split('webhookshield').length - 1 && (
                                <span className="text-primary">webhookshield</span>
                              )}
                            </span>
                          ))}
                        </>
                      ) : (
                        line
                      )}
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;
