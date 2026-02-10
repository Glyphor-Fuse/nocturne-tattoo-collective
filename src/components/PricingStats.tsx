import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const rates = [
  { label: "SHOP MINIMUM", price: "$150", detail: "Simple line work / symbols" },
  { label: "HOURLY RATE", price: "$220", detail: "Custom large scale work" },
  { label: "FULL DAY", price: "$1500", detail: "7-8 Hours dedicated session" },
  { label: "DEPOSIT", price: "$100", detail: "Non-refundable booking fee" },
];

export const PricingStats = () => {
  return (
    <section className="py-24 bg-background border-b border-white/10">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-primary text-xs tracking-widest mb-2 block">TRANSPARENCY</span>
            <h2 className="font-display text-4xl text-white">STUDIO RATES</h2>
            <p className="font-mono text-sm text-muted-foreground mt-4 leading-relaxed">
              We believe in transparent pricing. All bookings require a consultation. 
              Custom pieces are quoted individually based on complexity and placement.
            </p>
          </div>
          <Button variant="outline" className="rounded-none font-mono border-primary text-primary hover:bg-primary hover:text-white">
            READ BOOKING POLICY
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {rates.map((rate, i) => (
            <div key={i} className="bg-background p-8 flex flex-col gap-4 hover:bg-white/5 transition-colors group">
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{rate.label}</span>
              <div className="font-display text-5xl text-white group-hover:text-primary transition-colors">
                {rate.price}
              </div>
              <div className="h-px w-8 bg-white/20 my-2" />
              <p className="font-mono text-xs text-white/60">{rate.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 border border-white/10 bg-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
             <div className="p-3 bg-primary/10 rounded-full">
                <Check className="w-6 h-6 text-primary" />
             </div>
             <div>
               <h4 className="font-display text-white text-lg">VEGAN INK ONLY</h4>
               <p className="font-mono text-xs text-muted-foreground">We use exclusively plant-based, non-toxic pigments.</p>
             </div>
          </div>
           <div className="flex items-center gap-4">
             <div className="p-3 bg-primary/10 rounded-full">
                <Check className="w-6 h-6 text-primary" />
             </div>
             <div>
               <h4 className="font-display text-white text-lg">HOSPITAL GRADE STERILIZATION</h4>
               <p className="font-mono text-xs text-muted-foreground">Single-use needles and autoclave sterilization.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingStats;
