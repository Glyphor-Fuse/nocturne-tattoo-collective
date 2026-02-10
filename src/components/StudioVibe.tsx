export const StudioVibe = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/images/studio-interior.png')" }}
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      
      <div className="relative z-10 text-center max-w-3xl px-6">
        <span className="font-mono text-white/50 text-xs tracking-[0.5em] uppercase mb-4 block">
          Sanctuary
        </span>
        <h2 className="font-display text-5xl md:text-7xl text-white mb-8 leading-tight">
          A CATHEDRAL <br />
          FOR THE <span className="text-primary">FLESH</span>
        </h2>
        <p className="font-mono text-lg text-white/80 leading-relaxed">
          Located in a repurposed 1920s textile warehouse. 
          Private booths. High ceilings. Sterile precision meets old-world gothic charm.
        </p>
      </div>
      
      {/* Decorative border frame */}
      <div className="absolute inset-8 border border-white/10 pointer-events-none" />
      <div className="absolute inset-10 border border-white/5 pointer-events-none" />
    </section>
  );
};

export default StudioVibe;
