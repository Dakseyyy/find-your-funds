import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";

interface CTASectionProps {
  onStartClaim: () => void;
}

const CTASection = ({ onStartClaim }: CTASectionProps) => {
  return (
    <section className="py-16 lg:py-20 gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Find Your Money?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Join 5.2 million Americans who have already discovered their unclaimed funds. Your search is completely free.
          </p>

          <a
            href="https://gloffers.org/aff_c?offer_id=3577&aff_id=158638"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="gradient-accent text-accent-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-glow hover:scale-105 transition-transform duration-300"
            >
              Start Your Free Search Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>


          <div className="flex items-center justify-center gap-2 mt-6 text-primary-foreground/70">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-sm">Your information is secure and never shared</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
