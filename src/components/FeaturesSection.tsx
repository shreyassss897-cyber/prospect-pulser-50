import { MapPin, Package, Clock } from "lucide-react";
import serviceGallery from "@/assets/service-gallery.jpg";
const FeaturesSection = () => {
  const features = [{
    icon: <MapPin className="w-8 h-8" />,
    title: "Returns picked up from your door",
    description: "baccksee will come to your doorstep for every return order"
  }, {
    icon: <Package className="w-8 h-8" />,
    title: "Support for 100+ online stores",
    description: "From Amazon to Zara, we've got you covered."
  }, {
    icon: <Clock className="w-8 h-8" />,
    title: "Most pickups completed in under 2 minutes",
    description: "No lines. No tape. Just done."
  }];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            We come to your door
          </h2>
          <p className="text-xl text-muted-foreground">
            Every return, picked up on your time.
          </p>
        </div>
        
        {/* Features Grid */}
        
        
        {/* Service Gallery */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img src={serviceGallery} alt="Service gallery showing happy customers and delivery process" className="w-full h-96 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/30 to-transparent backdrop-blur-[2px] flex items-center before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t before:from-primary/20 before:to-transparent before:opacity-50 after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_20%_80%,_rgba(255,255,255,0.1)_0%,_transparent_50%)] after:animate-pulse">
            <div className="p-12 text-white">
              <p className="text-2xl lg:text-3xl font-bold mb-4">
                1 in 3 people never return an online item even if they want to.
              </p>
              <p className="text-lg opacity-90">
                baccksee exists to fix that.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>;
};
export default FeaturesSection;