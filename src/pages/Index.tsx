import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import HowItWorks from "@/components/HowItWorks";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";
import ClaimForm from "@/components/ClaimForm";
import Footer from "@/components/Footer";

const Index = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <HeroSection onStartClaim={() => setFormOpen(true)} />
      <StatsSection />
      <HowItWorks />
      <ReviewsSection />
      <CTASection onStartClaim={() => setFormOpen(true)} />
      <Footer />
      
      <ClaimForm open={formOpen} onOpenChange={setFormOpen} />
    </main>
  );
};

export default Index;
