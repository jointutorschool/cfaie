import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-icon.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={logoIcon} alt="VYGOT Logo" className="h-8 w-8" />
          <span className="text-xl font-heading font-bold text-foreground">
            VYGOT<span className="text-primary">™</span>
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-foreground/70 hover:text-foreground transition-colors">Problem</a>
          <a href="#engine" className="text-foreground/70 hover:text-foreground transition-colors">How It Works</a>
          <a href="#for-whom" className="text-foreground/70 hover:text-foreground transition-colors">For Whom</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;