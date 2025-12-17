import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-semibold">WebhookShield</span>
          </div>
          
          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">API Docs</a>
            <a href="#" className="hover:text-foreground transition-colors">Status</a>
            <a href="mailto:hello@webhookshield.io" className="hover:text-foreground transition-colors">
              hello@webhookshield.io
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2024 WebhookShield
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
