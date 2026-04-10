import { ArrowRight, ImageIcon, MapPin } from "lucide-react";
import Link from "next/link";

export default function PortfolioPage() {
  const projects = [
    {
      category: "Rebranding & Signage",
      title: "Complete Corporate Identity Overhaul",
      client: "Global Retail Co",
      imageColor: "from-blue-500 to-indigo-500",
      excerpt: "Executed full corporate rebranding including high-resolution signage installation, storefront channel letters, and WaveLight Media Displays."
    },
    {
      category: "Software Development",
      title: "Custom Inventory & Logistics Portal",
      client: "TransNational Freight",
      imageColor: "from-purple-500 to-rose-500",
      excerpt: "Engineered a bespoke web application optimizing real-time tracking, reducing processing delays by 34%."
    },
    {
      category: "Vehicle Fleet Wraps",
      title: "Nationwide Fleet Branding",
      client: "City Services Group",
      imageColor: "from-cyan-500 to-blue-500",
      excerpt: "Designed, printed, and installed high-durability vehicle wraps for a fleet of 500+ commercial vans and trucks."
    },
    {
      category: "Sports Venue Branding",
      title: "Stadium LED & Branding Installation",
      client: "Metro Sports Arena",
      imageColor: "from-orange-500 to-cyan-500",
      excerpt: "Procured and installed massive LED lightboxes, A-Frames, and stadium-wide one-way vision frosting under a tight deadline."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16 relative">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <ImageIcon className="w-12 h-12 text-primary mb-6 opacity-80" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Portfolio.</span>
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            A showcase of our premium physical fabrication, high-quality printing, immersive branding, and custom software solutions.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Featured Work
          </h2>
          <div className="glass rounded-[2.5rem] border-border/50 overflow-hidden group hover:border-primary/30 transition-all duration-500 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[400px] bg-gradient-to-br from-secondary/20 to-primary/20 overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-30 mix-blend-overlay" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-primary/30 blur-[60px] group-hover:scale-150 transition-transform duration-1000" />
              </div>
            </div>
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex gap-3 mb-6">
                <span className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Full Service
                </span>
                <span className="text-foreground/50 text-sm flex items-center gap-1 font-medium">
                  <MapPin className="w-4 h-4" /> Global Tech HQ
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors">
                Integrated Digital & Physical Branding Experience
              </h3>
              <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
                From high-end LED lightboxes and architectural frosting to custom merchandising and a tailor-made digital check-in system, we provided a complete holistic solution for their headquarters opening.
              </p>

            </div>
          </div>
        </div>

        {/* Selected Works Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Selected Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((item, idx) => (
              <div key={idx} className="glass rounded-[2rem] p-8 border-border/40 hover:border-primary/30 transition-all duration-500 group flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-secondary text-xs font-bold uppercase tracking-wider">{item.category}</span>
                  <span className="text-foreground/40 text-sm font-medium">{item.client}</span>
                </div>
                {/* Visual Placeholder */}
                <div className={`w-full h-48 rounded-2xl mb-6 bg-gradient-to-tr ${item.imageColor} opacity-20 group-hover:opacity-40 transition-opacity`} />
                
                <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-foreground/60 leading-relaxed mb-8 flex-grow">
                  {item.excerpt}
                </p>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
