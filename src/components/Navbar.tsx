import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-icon.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={logoIcon} alt="VYGOT Logo" className="h-8 w-8" />
          <span className="text-xl font-heading font-bold text-foreground">
            VYGOT<span className="text-primary">™</span>
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-muted-foreground hover:text-foreground transition-colors">Problem</a>
          <a href="#solution" className="text-muted-foreground hover:text-foreground transition-colors">Solution</a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">Benefits</a>
        </div>
        
        <Button className="bg-primary hover:bg-teal-dark text-primary-foreground">
          Request Demo
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
