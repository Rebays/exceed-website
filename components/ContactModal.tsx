"use client";

import { X, Mail, Phone, MapPin } from "lucide-react";
import { useEffect } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg glass rounded-3xl border border-border p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-accent/50 hover:bg-accent text-foreground/60 hover:text-foreground transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
        <p className="text-foreground/60 text-sm mb-8">
          Reach out to our global strategy team for customized enterprise solutions.
        </p>

        <div className="flex flex-col gap-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm">Email Us</p>
              <a href="mailto:simbi@exceed.com.sb" className="text-foreground/60 text-sm hover:text-primary transition-colors">simbi@exceed.com.sb</a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm">Call Us</p>
              <a href="tel:+15551234567" className="text-foreground/60 text-sm hover:text-primary transition-colors">+677 7421687 | 39333</a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm">Visit Us</p>
              <p className="text-foreground/60 text-sm">
                Room 19 Level 1<br />
                Captial Park<br />
                Honiara, Solomon Islands
              </p>
            </div>
          </div>
        </div>

        {/* <a href="mailto:hello@exceed.example.com" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-xl transition-all active:scale-95 shadow-lg shadow-primary/20 text-center inline-block">
          Book a Consultation
        </a> */}
      </div>
    </div>
  );
}
