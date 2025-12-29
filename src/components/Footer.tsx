import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-[hsl(210,50%,10%)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={logoIcon} alt="VYGOT Logo" className="h-6 w-6" />
            <span className="text-lg font-heading font-bold text-white">
              VYGOT<span className="text-primary">™</span>
            </span>
          </div>
          
          <p className="text-sm text-white/50 text-center">
            © {new Date().getFullYear()} VYGOT. All rights reserved. Powered by Unique Learning Fingerprint.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;