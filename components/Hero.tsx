"use client";

import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* === BOLD GRADIENT LAYERS === */}

      {/* Layer 1: Strong diagonal sweep — cyan top-left to purple bottom-right */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-secondary/20 to-transparent -z-10" />

      {/* Layer 2: Counter-diagonal accent — purple top-right to transparent */}
      <div className="absolute inset-0 bg-gradient-to-bl from-secondary/30 via-transparent to-primary/20 -z-10" />

      {/* Layer 3: Radial glow at top-center — pure cyan bloom */}
      <div
        className="absolute -z-10"
        style={{
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "600px",
          background: "radial-gradient(ellipse at center, rgba(19,181,211,0.28) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Layer 4: Purple bloom — bottom-left */}
      <div
        className="absolute bottom-[-15%] left-[-10%] -z-10"
        style={{
          width: "700px",
          height: "700px",
          background: "radial-gradient(ellipse at center, rgba(99,102,241,0.35) 0%, transparent 65%)",
          filter: "blur(80px)",
          animation: "pulse-slow 12s ease-in-out infinite",
        }}
      />

      {/* Layer 5: Subtle grid texture */}
      <div className="absolute inset-0 bg-grid opacity-[0.06] -z-10" />

      {/* Layer 6: Bottom fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent -z-10" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 bg-accent/50 border border-border px-4 py-2 rounded-full w-fit backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
            <span className="text-xs font-bold tracking-wider uppercase text-foreground/70">
              Enterprise Excellence
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
            Exceed Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Potential
            </span>{" "}
            with <br />
            Innovation
          </h1>

          <p className="text-lg md:text-xl text-foreground/60 max-w-xl leading-relaxed">
            Exceed Enterprise Limited provides world-class consulting and 
            technological solutions designed to scale your business and 
            outpace the competition.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="group relative bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-cyan-500/20 active:scale-95 flex items-center justify-center gap-2 overflow-hidden">
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
            <button className="flex items-center justify-center gap-2 group glass px-8 py-4 rounded-full font-bold text-foreground/80 hover:text-foreground transition-all hover:border-primary/50">
              Our Solutions
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <div className="flex items-center gap-4 pt-8 border-t border-border/50">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-accent overflow-hidden">
                  <Image
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="User"
                    width={40}
                    height={40}
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-foreground/50">
              Trusted by <span className="text-foreground font-bold font-mono">500+</span> global enterprises
            </p>
          </div>
        </div>

        <div className="relative aspect-square lg:aspect-auto h-[600px] animate-in fade-in slide-in-from-right duration-1000">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-[4rem] rotate-3 blur-3xl opacity-20" />
          <div className="relative h-full w-full rounded-[3rem] overflow-hidden border border-border shadow-2xl">
            <Image
              src="/hero-image.png"
              alt="Enterprise Solution"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            
            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl border-white/20 shadow-xl flex items-center gap-4 animate-bounce-slow">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                <ArrowRight className="rotate-[-45deg]" />
              </div>
              <div>
                <p className="text-sm font-bold">Performance Boost</p>
                <p className="text-xs text-foreground/60">+124% Efficiency this quarter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
