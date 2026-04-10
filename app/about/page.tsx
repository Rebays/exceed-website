import Image from "next/image";
import { ArrowUpRight, Trophy, Users, Compass } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { label: "Founded", value: "2015" },
    { label: "Global Offices", value: "8" },
    { label: "Enterprise Clients", value: "150+" },
    { label: "Industry Awards", value: "24" },
  ];

  const leaders = [
    { name: "Simbi Jama", role: "Chief Executive Officer", image: "/placeholder-1.jpg", bio: "CEO of Exceed Enterprise Limited with 15 years in enterprise strategy." },
    { name: "Bradon Tupiti", role: "Chief Technology Officer", image: "/placeholder-2.jpg", bio: "Pioneer in distributed systems and cloud architecture." },
    { name: "Carlos Saliga", role: "Head of Global Operations", image: "/placeholder-3.jpg", bio: "Expert in operational scaling and cross-border expansion." },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16 relative">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-32 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <p className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Our Story</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
            Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Excellence</span> <br />
            in the Digital Age.
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            Exceed Enterprise Limited was founded on the principle that businesses should never have to settle for "good enough."
            We push the boundaries of what's possible in strategy, technology, and operations.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="glass p-12 rounded-[2.5rem] border-border/50 relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Compass className="w-32 h-32 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">Our Vision</h3>
            <p className="text-foreground/70 text-lg leading-relaxed relative z-10">
              To be trusted, innovative and profitable.
            </p>
          </div>
          <div className="glass p-12 rounded-[2.5rem] border-border/50 relative overflow-hidden group hover:border-secondary/30 transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Trophy className="w-32 h-32 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">Our Mission</h3>
            <p className="text-foreground/70 text-lg leading-relaxed relative z-10">
              To deliver and exceed customers expectation.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
          {stats.map((stat, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl text-center border-border/30 hover:border-primary/20 transition-colors">
              <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-2">
                {stat.value}
              </p>
              <p className="text-foreground/60 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Leadership */}
        <div>
          <div className="text-center mb-16">
            <Users className="w-12 h-12 text-primary mx-auto mb-4 opacity-50" />
            <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-foreground/60 text-lg">Guided by industry veterans with a proven track record.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="w-full relative h-[400px] rounded-[2rem] overflow-hidden mb-6 glass border-border/40">
                  <div className="absolute inset-0 bg-accent/50 z-0" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-10 transition-opacity z-10">
                    <Users className="w-24 h-24" />
                  </div>
                  {/* <Image src={leader.image} layout="fill" objectFit="cover" alt={leader.name} /> */}
                </div>
                <h4 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors flex items-center gap-2">
                  {leader.name}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
                <p className="text-secondary text-sm font-bold uppercase tracking-wider mb-3">{leader.role}</p>
                <p className="text-foreground/60 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
