"use client";

import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Premium Mesh Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-primary),_transparent_70%),radial-gradient(ellipse_at_bottom_left,_var(--color-secondary),_transparent_70%),radial-gradient(circle_at_center,_var(--color-primary),_transparent_80%)] opacity-[0.12] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background -z-10" />
      <div className="absolute inset-0 bg-grid opacity-[0.05] -z-10" />
      
      {/* Dynamic Background Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/25 rounded-full blur-[140px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-secondary/25 rounded-full blur-[160px] -z-10 animate-pulse-slow delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-10 rotate-45" />

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
