import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-16">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row justify-center items-center text-center lg:text-left gap-8">
          
          {/* Left Side - Branding */}
          <div className="space-y-4">
            <div className="text-3xl font-bold text-foreground">
              Bacck<span className="text-pink-bright">see</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Currently in early rollout (Toronto only). Not affiliated with any retailers mentioned. baccksee — early access test in progress
            </p>
          </div>
          
          {/* Right Side - Contact and Social */}
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Contact :</h4>
              <a href="mailto:hello@baccksee.com" className="text-muted-foreground hover:text-foreground transition-colors">
                hello@baccksee.com
              </a>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center text-background hover:opacity-80 transition-opacity">
                <span className="text-sm font-bold">in</span>
              </a>
              <a href="#" className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center text-background hover:opacity-80 transition-opacity">
                <span className="text-sm font-bold">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center text-background hover:opacity-80 transition-opacity">
                <span className="text-sm font-bold">@</span>
              </a>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Border and Copyright */}
        <div className="border-t border-border mt-12 pt-8">
          <p className="text-sm text-muted-foreground text-center">
            (c) 2025 baccksee. All rights Reserved
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;