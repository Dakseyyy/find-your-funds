import { ClipboardList, Search, Banknote } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Fill Out Your Info",
    description: "Enter your basic information like name and previous addresses. It only takes 3 minutes.",
  },
  {
    icon: Search,
    step: "02",
    title: "We Search For You",
    description: "Our system scans federal and state databases to find any unclaimed funds in your name.",
  },
  {
    icon: Banknote,
    step: "03",
    title: "Claim Your Money",
    description: "We guide you through the simple process to claim any money that belongs to you.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 lg:py-20 bg-navy-light">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Finding your unclaimed money is quick, easy, and completely free.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="relative text-center"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl gradient-hero flex items-center justify-center shadow-card">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="inline-block text-xs font-bold text-accent uppercase tracking-wider mb-2">
                  Step {item.step}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
