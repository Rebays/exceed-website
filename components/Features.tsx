"use client";

import { 
  Zap, 
  Shield, 
  BarChart3, 
  Globe, 
  Cpu, 
  Rocket 
} from "lucide-react";

const features = [
  {
    title: "Strategic Consulting",
    desc: "Bespoke strategies to navigate complex enterprise challenges and drive sustainable growth.",
    icon: <Globe className="w-8 h-8" />,
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Advanced Technology",
    desc: "Next-generation software and infrastructure solutions built for scale and security.",
    icon: <Cpu className="w-8 h-8" />,
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Data Intelligence",
    desc: "Turn your raw data into actionable insights with our premium analytics engine.",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Cyber Resilience",
    desc: "Enterprise-grade security protocols to protect your most valuable digital assets.",
    icon: <Shield className="w-8 h-8" />,
    color: "from-purple-500 to-rose-500"
  },
  {
    title: "Operational Velocity",
    desc: "Optimize your workflows and accelerate time-to-market with automated processes.",
    icon: <Zap className="w-8 h-8" />,
    color: "from-rose-500 to-orange-500"
  },
  {
    title: "Scale Engineering",
    desc: "Grow without limits using our cloud-native architecture and distributed systems.",
    icon: <Rocket className="w-8 h-8" />,
    color: "from-orange-500 to-cyan-500"
  }
];

export default function Features() {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
            Our Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Solutions that Drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Value</span>
          </h3>
          <p className="text-foreground/60 max-w-2xl text-lg">
            We deliver a comprehensive suite of services designed to address the unique 
            demands of modern enterprise environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="group glass p-8 rounded-[2.5rem] border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                {feature.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
              <p className="text-foreground/60 leading-relaxed">
                {feature.desc}
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Learn more 
                <div className="w-4 h-px bg-primary group-hover:w-8 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
