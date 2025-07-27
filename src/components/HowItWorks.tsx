import { Button } from "@/components/ui/button";
import { Calendar, Truck, CheckCircle } from "lucide-react";
import processIcons from "@/assets/process-icons.jpg";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: <Calendar className="w-8 h-8" />,
      title: "Book a Pickup",
      description: "File the return with the brand. Get your return label confirmation from the store's website",
      highlight: "No packaging needed"
    },
    {
      step: "02", 
      icon: <Truck className="w-8 h-8" />,
      title: "Pickup from your doorstep",
      description: "Upload your return and choose a time for pick up — no box or label needed",
      highlight: "No need to travel around"
    },
    {
      step: "03",
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Dropped off and confirmed",
      description: "Leave your return in a safe spot. We pick it up and return it to the right place and send you a confirmation.",
      highlight: "You get your time (and your refund) back"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            From your door to done - here's how it works.
          </h2>
          <p className="text-xl text-muted-foreground">
            3 Simple steps less than an hour to complete your whole return process. baccksee makes it happen.
          </p>
        </div>
        
        {/* Process Icons */}
        <div className="mb-16 text-center">
          <img 
            src={processIcons} 
            alt="Process icons showing the three-step return process" 
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg"
          />
        </div>
        
        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((stepItem, index) => (
            <div key={index} className="relative">
              
              {/* Step Number */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-bright text-white rounded-full text-2xl font-bold mb-4">
                  {stepItem.step}
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  STEP {stepItem.step}
                </div>
              </div>
              
              {/* Content Card */}
              <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-primary">
                    {stepItem.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {stepItem.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {stepItem.description}
                </p>
                
                <div className="inline-block bg-pink-bright/10 text-pink-bright px-4 py-2 rounded-full text-sm font-medium">
                  {stepItem.highlight}
                </div>
              </div>
              
              {/* Connecting Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-pink-bright to-transparent transform translate-x-4"></div>
              )}
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default HowItWorks;