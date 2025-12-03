import { DollarSign, Users, Percent, Timer } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "5.2M+",
    label: "People Found Claims",
    description: "Americans have already discovered money owed to them",
  },
  {
    icon: DollarSign,
    value: "$100",
    label: "Average Claim",
    description: "The average person qualifies for in unclaimed funds",
  },
  {
    icon: Percent,
    value: "99%",
    label: "Qualification Rate",
    description: "Of people who search qualify for unclaimed money",
  },
  {
    icon: Timer,
    value: "3 min",
    label: "Quick Process",
    description: "Is all it takes to complete your free search",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-card">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Billions in Unclaimed Money
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every year, money from forgotten bank accounts, uncashed checks, and old deposits goes unclaimed. See if any of it belongs to you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative p-6 rounded-2xl bg-background border border-border shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-base font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
