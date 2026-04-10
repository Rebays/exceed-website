import { Cpu, Globe, Rocket, Zap, Shield, BarChart3 } from "lucide-react";
import Image from "next/image";

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Design & Brand Services",
      desc: "Comprehensive branding and design services to elevate your corporate identity and engage your audience effectively.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      features: ["Design & Corporate Rebranding", "Social Media Marketing & Management", "Photography & High Res Scanning", "Sport Venue Branding & Consultancy", "Welding & Fabrication", "Billboard & Signage Installation"]
    },
    {
      title: "Premium Products",
      desc: "High-quality physical products ranging from large-scale signs and billboards to bespoke merchandise and apparel.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      features: ["Signs, Banners & Billboards", "LEDs & LED Lightboxes", "Channel Letters & Vehicle/Boat Wraps", "Flyers, Posters, and Books", "PVC ID/Business Cards & T-Shirts", "WaveLight Media Displays"]
    },
    {
      title: "Software Development",
      desc: "Cutting-edge software engineering tailored to your business needs, from enterprise applications to custom development.",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      features: ["Custom Software Solutions", "Web & Mobile Applications", "Enterprise Systems"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16 relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Enterprise <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Solutions.</span>
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            We deliver a comprehensive suite of high-impact services designed to address the unique 
            demands of modern global enterprise environments.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {solutions.map((solution, idx) => (
            <div 
              key={idx}
              className={`glass rounded-[3rem] p-8 md:p-12 border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1 space-y-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center text-white shadow-lg`}>
                  {solution.icon}
                </div>
                <h3 className="text-3xl font-bold">{solution.title}</h3>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  {solution.desc}
                </p>
                <ul className="space-y-3 pt-4 border-t border-border/50">
                  {solution.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden glass border border-border/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent to-background opacity-80 z-10" />
                {/* Fallback pattern since we don't have images ready for everything */}
                <div className="absolute inset-0 bg-grid z-0 opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${solution.color} blur-[60px] opacity-60`} />
                  <div className={`w-full h-full flex items-center justify-center text-white opacity-20`}>
                    {solution.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
