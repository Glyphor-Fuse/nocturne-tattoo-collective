import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col md:flex-row w-full bg-background overflow-hidden border-b border-white/10">
      {/* Left: Content */}
      <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center relative z-10 border-r border-white/10 bg-background/95 backdrop-blur-sm">
        <div className="absolute top-8 left-8 md:top-12 md:left-12">
          <span className="font-display font-semibold text-2xl tracking-tight text-white">
            NOCTURNE<span className="text-primary italic">&</span>CO
          </span>
        </div>

        <div className="mt-20 space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-primary text-xs tracking-widest uppercase">
              Est. MMXXIV — Melbourne Underground
            </span>
            <h1 className="font-display text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter text-white">
              INK IN <br />
              THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">VOID</span>
            </h1>
          </div>
          
          <p className="font-mono text-muted-foreground max-w-md text-sm md:text-base border-l-2 border-primary pl-6">
            A private tattoo atelier specializing in fine-line, gothic realism, and abstract geometry. Hidden in the shadows of Melbourne's laneways.
          </p>

          <div className="flex gap-4 pt-4">
            <Button className="rounded-none bg-white text-black hover:bg-primary hover:text-white transition-all font-mono tracking-wider h-12 px-8">
              BOOK CONSULTATION
            </Button>
            <Button variant="outline" className="rounded-none border-white/20 text-white hover:bg-white/10 hover:text-white font-mono h-12 px-8">
              VIEW FLASH
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-8 flex items-center gap-2 text-muted-foreground animate-pulse">
          <ArrowDown className="w-4 h-4" />
          <span className="font-mono text-xs">SCROLL TO REVEAL</span>
        </div>
      </div>

      {/* Right: Image */}
      <div className="w-full md:w-1/2 relative h-[50vh] md:h-auto group">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 md:bg-gradient-to-l" />
        <div className="absolute inset-0 bg-black/20 z-10 mix-blend-multiply" />
        <img 
          src="/images/hero-tattoo.png" 
          alt="Tattoo artist working in dark studio" 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
        />
      </div>
    </section>
  );
};

export default Hero;
