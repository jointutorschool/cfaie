import { Brain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-navy">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="text-lg font-heading font-bold text-primary-foreground">
              VYGOT<span className="text-primary">™</span>
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} VYGOT. All rights reserved. Powered by Cognitive Fingerprint AI.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
