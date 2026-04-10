import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Services/Features Section */}
      <Features />

      {/* Trust/Social Proof Section */}
      <section className="py-24 bg-accent/20 border-y border-border/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-secondary/60 text-sm font-bold uppercase tracking-[0.2em] mb-12">
            Strategic Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {/* Using text logos for now as placeholders for partner icons */}
            {["FORBES", "TECHCRUNCH", "WIRED", "BLOOMBERG", "VERGE"].map((partner) => (
              <span key={partner} className="text-2xl font-black tracking-tighter">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] -z-10" />

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
              We're on a mission to redefine <br />
              <span className="text-secondary">Enterprise Excellence</span>
            </h2>
            <p className="text-xl text-foreground/60 leading-relaxed mb-12">
              Exceed Enterprise Limited was founded on the principle that
              businesses should never have to settle for "good enough."
              We push the boundaries of what's possible in strategy and technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                { label: "Vision", value: "To be trusted, innovative and profitable." },
                { label: "Mission", value: "To deliver and exceed customers expectation." },
                { label: "Impact", value: "Delivering measurable results for our clients." }
              ].map((item, i) => (
                <div key={i} className="glass p-8 rounded-3xl border-border/40">
                  <p className="text-primary font-bold text-sm uppercase mb-2">{item.label}</p>
                  <p className="text-foreground/70">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -z-0 translate-x-1/2 -translate-y-1/2" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Exceed your potential?</h2>
              <p className="text-cyan-50 text-lg opacity-90">
                Join hundreds of industry leaders who have already transformed their enterprise operations.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="mailto:simbi@exceed.com.sb" className="bg-white text-primary hover:bg-cyan-50 px-10 py-5 rounded-full font-bold transition-all shadow-xl active:scale-95 inline-block">
                Contact Strategy Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
