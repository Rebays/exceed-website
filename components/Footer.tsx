"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Globe, 
  Link2, 
  Mail, 
  ArrowUpRight 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-accent/30 border-t border-border pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block relative w-32 h-10">
              <Image
                src="/logo.png"
                alt="Exceed Logo"
                fill
                className="object-contain"
              />
            </Link>
            <p className="text-foreground/50 text-sm leading-relaxed max-w-xs">
              Empowering global enterprises with innovative consulting and technological卓越 solutions.
            </p>
            <div className="flex gap-4">
              {[Globe, Link2, Mail].map((Icon, idx) => (
                <Link 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/50 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary">Company</h5>
            <ul className="flex flex-col gap-4 text-foreground/60 text-sm">
              {["About Us", "Careers", "Press", "Partners"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-primary transition-colors flex items-center gap-1 group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary">Services</h5>
            <ul className="flex flex-col gap-4 text-foreground/60 text-sm">
              {["Consulting", "Cloud Solutions", "Cyber Security", "AI & Analytics"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-primary transition-colors flex items-center gap-1 group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass p-8 rounded-3xl border-border/50">
            <h5 className="font-bold mb-4 text-lg">Newsletter</h5>
            <p className="text-xs text-foreground/50 mb-6">
              Get the latest insights on enterprise innovation delivered to your inbox.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="bg-background border border-border px-4 py-3 rounded-xl text-xs focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all ml-0"
              />
              <button className="bg-foreground text-background font-bold py-3 rounded-xl text-xs hover:bg-foreground/90 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-border/50 gap-6">
          <p className="text-xs text-foreground/40 italic">
            &copy; {new Date().getFullYear()} Exceed Enterprise Limited. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-foreground/40">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
