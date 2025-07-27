import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import BrandLogos from "@/components/BrandLogos";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import SignupForm from "@/components/SignupForm";
import FAQ from "@/components/FAQ";
import PreFooterCTA from "@/components/PreFooterCTA";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <VideoSection />
      <BrandLogos />
      <CategoriesSection />
      <div id="about">
        <FeaturesSection />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <PricingSection />
      <div id="get-early-access">
        <SignupForm />
      </div>
      <FAQ />
      <BenefitsSection />
      <PreFooterCTA />
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
