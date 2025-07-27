import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/70 backdrop-blur-xl border-b border-border/30 shadow-sm" 
        : "bg-background/20 backdrop-blur-lg"
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold hover:opacity-80 transition-all underline brand-name"
            >
              baccksee
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-pink-bright transition-colors text-sm font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-foreground/80 hover:text-pink-bright transition-colors text-sm font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground/80 hover:text-pink-bright transition-colors text-sm font-medium"
            >
              Contact
            </button>
            
            {/* CTA Button */}
            <Button
              onClick={() => scrollToSection("get-early-access")}
              variant="pink"
              size="sm"
              className="shadow-button"
            >
              Join Early
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              onClick={() => scrollToSection("get-early-access")}
              variant="pink"
              size="sm"
            >
              Join Early
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;