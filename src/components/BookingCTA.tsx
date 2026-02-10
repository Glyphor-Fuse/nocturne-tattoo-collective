import { Button } from "@/components/ui/button";

export const BookingCTA = () => {
  return (
    <section className="py-32 bg-background flex justify-center items-center px-6">
      <div className="w-full max-w-4xl border border-white/10 bg-secondary/5 p-8 md:p-16 text-center relative overflow-hidden group">
        
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-primary/50 transition-all group-hover:w-full group-hover:h-full group-hover:border-primary/20" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-primary/50 transition-all group-hover:w-full group-hover:h-full group-hover:border-primary/20" />

        <div className="relative z-10">
          <h2 className="font-display text-5xl md:text-6xl text-white mb-6">CLAIM YOUR SKIN</h2>
          <p className="font-mono text-muted-foreground mb-10 max-w-lg mx-auto">
            Books are currently open for next month. 
            Submit your concept for review. We accept limited projects to ensure quality.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
             <Button className="h-14 px-10 text-lg rounded-none bg-primary text-white hover:bg-primary/80 font-mono">
               START BOOKING REQUEST
             </Button>
             <span className="font-mono text-xs text-white/30 uppercase tracking-widest mt-4 md:mt-0">
               OR EMAIL HELLO@NOCTURNE.CO
             </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookingCTA;
