import { useRef, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const artists = [
  { id: 1, name: "ELIAS VOID", style: "Dark Realism", image: "/images/artist-1.png" },
  { id: 2, name: "SARAH GRAVE", style: "Fine Line Gothic", image: "/images/artist-2.png" },
  { id: 3, name: "KAI ZEN", style: "Abstract Blackwork", image: "/images/artist-3.png" },
  { id: 4, name: "ONYX", style: "Cyber Sigilism", image: "/images/artist-4.png" },
];

export const FlashlightGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    const element = containerRef.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="relative bg-background py-24 border-b border-white/10 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="font-display text-4xl md:text-5xl text-white mb-2">RESIDENT ARTISTS</h2>
        <p className="font-mono text-muted-foreground">Explore the shadows to find your artist.</p>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full max-w-7xl mx-auto h-[600px] cursor-none overflow-hidden"
      >
        {/* Base Layer: Dimmed/Obscured */}
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-0">
          {artists.map((artist) => (
            <div key={artist.id} className="relative w-full h-full border border-white/5 group">
              <img 
                src={artist.image} 
                alt={artist.name} 
                className="w-full h-full object-cover opacity-20 grayscale brightness-50"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="font-display text-xl text-white/40">{artist.name}</h3>
                <p className="font-mono text-xs text-white/20 uppercase">{artist.style}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Flashlight Layer: The Mask */}
        <div 
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, rgba(10, 10, 12, 0.98) 100%)`,
            opacity: opacity,
          }}
        />

        {/* Reveal Layer: Clear content that only shows "under" the transparent part of the mask above? 
            Actually, the mask above covers the "clear" content. 
            Better approach: The layer BELOW is the clear one. The layer ABOVE is black with a hole. 
            
            Let's restart the layering logic for the effect:
            1. Bottom Layer: Full color, sharp images (The "Reveal").
            2. Top Layer: Dark overlay with radial gradient transparency (The "Flashlight").
        */}
        
        {/* CORRECTED IMPLEMENTATION */}
        {/* 1. The Colorful/Sharp Layer (Bottom) */}
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-0 z-0">
          {artists.map((artist) => (
            <div key={`sharp-${artist.id}`} className="relative w-full h-full border-r border-white/10">
              <img 
                src={artist.image} 
                alt={artist.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-display text-2xl text-white">{artist.name}</h3>
                <p className="font-mono text-xs text-primary uppercase tracking-widest mb-2">{artist.style}</p>
                <div className="flex items-center gap-2 text-xs font-mono text-white/80">
                  <span>VIEW PORTFOLIO</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. The Shadow Layer (Top) - Covers everything except the mouse position */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, #0a0a0c 100%)`,
          }}
        >
             {/* Optional: Add some noise grain to the dark parts for texture */}
             <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>
        </div>

      </div>
      
      <div className="text-center mt-8 font-mono text-xs text-muted-foreground">
        HOVER TO REVEAL WORK
      </div>
    </section>
  );
};

export default FlashlightGallery;
