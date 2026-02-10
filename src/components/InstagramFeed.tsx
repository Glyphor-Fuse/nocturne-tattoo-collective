import { Instagram } from "lucide-react";

const feedImages = [
  { src: "/images/feed-1.png", alt: "Fine line floral tattoo", span: "col-span-1 row-span-1" },
  { src: "/images/feed-2.png", alt: "Dark gothic backpiece", span: "col-span-1 row-span-2" },
  { src: "/images/feed-3.png", alt: "Geometric sleeve", span: "col-span-1 row-span-1" },
  { src: "/images/feed-4.png", alt: "Portrait realism", span: "col-span-2 row-span-1" },
  { src: "/images/feed-5.png", alt: "Hand poke detail", span: "col-span-1 row-span-1" },
];

export const InstagramFeed = () => {
  return (
    <section className="py-24 bg-background border-b border-white/10">
      <div className="container px-6 mx-auto">
        <div className="flex justify-between items-center mb-12">
           <h2 className="font-display text-3xl md:text-4xl text-white">LATEST WORKS</h2>
           <a href="#" className="flex items-center gap-2 text-white hover:text-primary transition-colors font-mono text-sm">
             <Instagram className="w-4 h-4" />
             @NOCTURNE_TATTOO
           </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {feedImages.map((img, idx) => (
            <div key={idx} className={`relative group overflow-hidden ${img.span}`}>
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <span className="font-mono text-xs text-white uppercase tracking-widest border border-white/30 px-3 py-1">View Post</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
