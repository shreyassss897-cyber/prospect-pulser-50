import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    postalCode: "",
    agreeToTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      toast({
        title: "Please agree to terms",
        description: "You must agree to the terms & conditions to continue.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Thanks for submitting!",
      description: "We'll be in touch soon with early access details."
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      postalCode: "",
      agreeToTerms: false
    });
    setIsSubmitting(false);
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <section id="get-early-access" className="py-20 bg-gradient-to-br from-secondary to-background">
      <div className="container mx-auto px-4">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          
          {/* Left Side - Header and Benefits */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Returns shouldn't steal your time. Let baccksee handle it
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join baccksee's early access list and get:
              </p>
              
              
            </div>
            
            {/* Left Side Benefits */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <span className="text-foreground font-medium">Priority pickup access in Toronto</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <span className="text-foreground font-medium">Flat $12 pricing for up to 5 items or 15 kgs</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <span className="text-foreground font-medium">$2 off your first pickup (limited to first 50)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <span className="text-foreground font-medium">Done-for-you returns from your door</span>
              </div>
            </div>
            
            {/* Join Early Button */}
            <div className="pt-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-xl px-12 py-6"
                onClick={() => scrollToSection("get-early-access")}
              >
                Join Early
              </Button>
            </div>
          </div>
          
          {/* Right Side - Benefits and Form */}
          <div className="space-y-8">
            {/* Right Side Benefits */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-pink-bright rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-foreground font-medium">Serving Toronto</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-pink-bright rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-foreground font-medium">Cancel anytime</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-pink-bright rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-foreground font-medium">No printer needed</span>
              </div>
            </div>
            
            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-xl space-y-6">
                
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" value={formData.firstName} onChange={e => handleInputChange("firstName", e.target.value)} required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" value={formData.lastName} onChange={e => handleInputChange("lastName", e.target.value)} required className="mt-1" />
                  </div>
                </div>
                
                {/* Email */}
                <div>
                  <Label htmlFor="email">Email or WhatsApp</Label>
                  <Input id="email" type="email" value={formData.email} onChange={e => handleInputChange("email", e.target.value)} required className="mt-1" />
                </div>
                
                {/* Postal Code */}
                <div>
                  <Label htmlFor="postalCode">Postal Code</Label>
                  <Input id="postalCode" value={formData.postalCode} onChange={e => handleInputChange("postalCode", e.target.value)} required className="mt-1" />
                </div>
                
                {/* Terms Checkbox */}
                <div className="flex items-start space-x-3">
                  <Checkbox id="terms" checked={formData.agreeToTerms} onCheckedChange={checked => setFormData(prev => ({
                  ...prev,
                  agreeToTerms: checked === true
                }))} />
                  <Label htmlFor="terms" className="text-sm leading-relaxed">
                    I agree to the{" "}
                    <a href="#" className="text-pink-bright hover:underline">
                      terms & conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-pink-bright hover:underline">
                      privacy policy
                    </a>
                  </Label>
                </div>
                
                {/* Submit Button */}
                <Button type="submit" variant="pink" size="lg" className="w-full text-lg py-6" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Get Early Access"}
                </Button>
                
              </form>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>;
};
export default SignupForm;