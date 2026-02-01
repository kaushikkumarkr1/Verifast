
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 overflow-hidden bg-slate-50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] mb-8 text-slate-900">
          Real-Time Verification.<br />
          <span className="text-slate-400">Zero-Storage Security.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed font-normal mb-14">
          Eliminate B2B bounce rates with a just-in-time SMTP handshake protocol. A stateless verification layer engineered for privacy-conscious outreach teams.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#waitlist" 
            className="w-full sm:w-auto px-10 py-4 bg-emerald-600 text-white rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200"
          >
            Join the Waitlist
          </a>
          <a 
            href="#protocol" 
            className="w-full sm:w-auto px-10 py-4 bg-white text-slate-600 rounded-xl font-bold text-lg hover:bg-slate-50 border border-slate-200 transition-all"
          >
            Technical Protocol
          </a>
        </div>

        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
          {[
            { label: "Accuracy", val: "99.9%" },
            { label: "Latency", val: "<200ms" },
            { label: "Retention", val: "0-Days" },
            { label: "Architecture", val: "SOC2 Ready" }
          ].map((stat, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm group hover:shadow-md transition-all">
              <div className="text-2xl font-bold text-slate-900 mb-1 tracking-tight">{stat.val}</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;