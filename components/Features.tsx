
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Handshake Engine",
      description: "Proprietary SMTP logic mimicking real servers for definitive verification without email delivery.",
      icon: "⚡",
      status: "Core"
    },
    {
      title: "MX Intelligence",
      description: "Automatic regional routing to minimize handshake latency and bypass local server blocks.",
      icon: "🌍",
      status: "Operational"
    },
    {
      title: "Stateless Storage",
      description: "Hardware-level architecture ensuring your lead data never touches any physical disk storage.",
      icon: "🛡️",
      status: "Security"
    },
    {
      title: "CRM Sync",
      description: "Integrations for HubSpot and Salesforce to perform background validation of incoming leads.",
      icon: "🔄",
      status: "Bridge"
    },
    {
      title: "Retry Optimization",
      description: "Logic that differentiates between temporary server graylisting and permanent mailbox failure.",
      icon: "⏳",
      status: "AI-Driven"
    },
    {
      title: "Enterprise API",
      description: "High-concurrency REST API built for processing millions of verifications in minutes.",
      icon: "📦",
      status: "V1.0"
    }
  ];

  return (
    <section id="capabilities" className="py-32 scroll-mt-28 relative border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-emerald-600 font-bold tracking-[0.25em] uppercase text-[10px] mb-4">Core Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Enterprise Infrastructure</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Stateless verification engineered to handle global outbound operations with 100% data privacy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="group p-10 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">{f.icon}</div>
                <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded bg-white text-slate-400 border border-slate-100 group-hover:text-emerald-600 transition-all">
                  {f.status}
                </span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-4 tracking-tight">{f.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-light transition-colors">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;