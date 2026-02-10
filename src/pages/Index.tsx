
import { Hero } from "@/components/Hero";
import { FlashlightGallery } from "@/components/FlashlightGallery";
import { PricingStats } from "@/components/PricingStats";
import { InstagramFeed } from "@/components/InstagramFeed";
import { AftercareFAQ } from "@/components/AftercareFAQ";
import { StudioVibe } from "@/components/StudioVibe";
import { BookingCTA } from "@/components/BookingCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      {/* 1. Atmospheric hero */}
      <Hero />
      
      {/* 2. Signature Feature: Flashlight Artist Reveal */}
      <FlashlightGallery />
      
      {/* 3. Pricing */}
      <PricingStats />
      
      {/* 4. Instagram Feed */}
      <InstagramFeed />
      
      {/* 5. Aftercare Info */}
      <AftercareFAQ />
      
      {/* 6. Studio Vibe Parallax */}
      <StudioVibe />
      
      {/* 7. Final Booking CTA */}
      <BookingCTA />

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black text-center">
        <div className="font-display text-2xl text-white mb-4">
            NOCTURNE<span className="text-primary italic">&</span>CO
        </div>
        <div className="font-mono text-xs text-white/40 space-y-2">
            <p>128 FLINDERS LN, MELBOURNE VIC 3000</p>
            <p>© MMXXIV NOCTURNE TATTOO COLLECTIVE. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
