import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah Mitchell",
    location: "Austin, TX",
    amount: "$847",
    review: "I was skeptical at first, but decided to try it anyway. Turns out I had money from an old utility deposit I completely forgot about from 8 years ago. The process was so simple!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    location: "Seattle, WA",
    amount: "$1,234",
    review: "Found money from my late father's estate that we didn't know existed. This service helped us navigate the claim process seamlessly. Truly grateful.",
    rating: 5,
  },
  {
    name: "Jennifer Rodriguez",
    location: "Miami, FL",
    amount: "$312",
    review: "Three minutes of my time and I discovered an uncashed paycheck from a job I had in college. Easiest money I've ever made. Highly recommend to everyone!",
    rating: 5,
  },
  {
    name: "David Thompson",
    location: "Denver, CO",
    amount: "$2,156",
    review: "Had no idea my grandmother left money in an old savings account. The search found it and the claiming process was straightforward. Thank you!",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-card">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-success-light text-accent text-sm font-medium mb-4">
            Real Results
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Join millions of Americans who have already found their unclaimed money.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="relative p-6 rounded-2xl bg-background border border-border shadow-soft hover:shadow-card transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-muted/30" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Review text */}
              <p className="text-foreground mb-4 leading-relaxed">
                "{review.review}"
              </p>
              
              {/* Author info */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.location}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Claimed</div>
                  <div className="text-lg font-bold text-accent">{review.amount}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
