import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  onStartClaim: () => void;
}

const HeroSection = ({ onStartClaim }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden gradient-hero py-20 lg:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-2xl" />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 animate-fade-up">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">Trusted by 5.2 million Americans</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            You Could Have Unclaimed Money Waiting for You
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Every year, billions of dollars go unclaimed. Find out in 1 minute if you're owed money from forgotten accounts, refunds, or inheritances.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="https://gloffers.org/aff_c?offer_id=2343&aff_id=158638"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="gradient-accent text-accent-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-glow hover:scale-105 transition-transform duration-300"
              >
                Start Your Free Search
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <Clock className="w-4 h-4 text-accent" />
              <span className="text-sm">3 min to complete</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span className="text-sm">99% qualify</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm">100% Free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
