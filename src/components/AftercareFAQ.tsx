import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const AftercareFAQ = () => {
  return (
    <section className="py-24 bg-secondary/5">
      <div className="container px-6 mx-auto flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-1/3">
          <span className="font-mono text-primary text-xs tracking-widest mb-2 block">HEALING PROCESS</span>
          <h2 className="font-display text-4xl text-white mb-6">AFTERCARE PROTOCOL</h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-8">
            The longevity of your tattoo depends on how you treat it during the first two weeks. 
            Follow our strict protocol to ensure optimal healing and pigment retention.
          </p>
          <div className="p-6 bg-primary/5 border border-primary/20">
            <h4 className="font-display text-primary text-lg mb-2">EMERGENCY?</h4>
            <p className="font-mono text-xs text-muted-foreground mb-4">
              If you notice extreme redness, swelling, or heat after 48 hours, contact us immediately.
            </p>
            <a href="mailto:help@nocturne.co" className="text-white underline font-mono text-sm decoration-primary underline-offset-4">
              help@nocturne.co
            </a>
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "IMMEDIATE CARE (0-4 HOURS)", a: "Leave the bandage on for at least 3 hours. Remove gently under warm water. Do not re-bandage unless instructed." },
              { q: "CLEANSING RITUAL", a: "Wash with fragrance-free anti-bacterial soap. Use your fingertips only. Pat dry with a clean paper towel. Never rub." },
              { q: "HYDRATION (DAYS 2-14)", a: "Apply a thin layer of recommended aftercare balm 2-3 times daily. The tattoo should breathe; do not over-saturate." },
              { q: "THE PEELING PHASE", a: "Peeling and itching is normal. Do not pick, scratch, or peel the skin. Let the scabs fall off naturally to avoid ink loss." },
              { q: "LONG TERM MAINTENANCE", a: "Sun exposure fades tattoos. Always use SPF 50+ on healed tattoos when exposed to direct sunlight." }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 bg-background px-4">
                <AccordionTrigger className="font-display text-lg text-white hover:text-primary hover:no-underline py-6">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="font-mono text-muted-foreground leading-relaxed pb-6">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default AftercareFAQ;
