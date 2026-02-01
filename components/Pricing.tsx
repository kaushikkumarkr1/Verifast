
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-emerald-900/10 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-emerald-500 font-bold tracking-[0.2em] uppercase text-xs mb-4">Planned Roadmap</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6">Proposed Service Tiers</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">Early waitlist members will receive a <span className="text-white font-bold">50% lifetime discount</span> on all tiers below.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Free Tier */}
          <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex flex-col items-center text-center">
            <h4 className="text-slate-400 font-bold mb-4 uppercase tracking-widest text-xs">Starter</h4>
            <div className="text-4xl font-black text-white mb-6">$0<span className="text-lg font-normal text-slate-600">/mo</span></div>
            <ul className="space-y-4 mb-10 text-slate-500 text-sm">
              <li>100 Verifications / mo</li>
              <li>Basic MX Discovery</li>
              <li>Waitlist Priority 3</li>
            </ul>
            <a href="#waitlist" className="w-full py-4 rounded-2xl border border-white/10 text-white font-bold hover:bg-white/5 transition-all">Join Waitlist</a>
          </div>

          {/* Pro Tier */}
          <div className="p-10 rounded-[2.5rem] bg-white/[0.05] border border-emerald-500/30 flex flex-col items-center text-center relative shadow-[0_20px_60px_-15px_rgba(16,185,129,0.2)] scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900">Recommended</div>
            <h4 className="text-emerald-400 font-bold mb-4 uppercase tracking-widest text-xs">Professional</h4>
            <div className="text-4xl font-black text-white mb-6">$49<span className="text-lg font-normal text-slate-600">/mo</span></div>
            <ul className="space-y-4 mb-10 text-slate-300 text-sm">
              <li>10,000 Verifications / mo</li>
              <li>JIT Handshake Engine</li>
              <li>Full API Access</li>
              <li>Waitlist Priority 1</li>
            </ul>
            <a href="#waitlist" className="w-full py-4 rounded-2xl bg-emerald-500 text-slate-950 font-black hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20">Reserve Spot</a>
          </div>

          {/* Enterprise Tier */}
          <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex flex-col items-center text-center">
            <h4 className="text-slate-400 font-bold mb-4 uppercase tracking-widest text-xs">Custom</h4>
            <div className="text-4xl font-black text-white mb-6">Contact</div>
            <ul className="space-y-4 mb-10 text-slate-500 text-sm">
              <li>Unlimited Checks</li>
              <li>Custom Infrastructure</li>
              <li>SLA & Legal Sovereignty</li>
              <li>Early Design Partner</li>
            </ul>
            <a href="#waitlist" className="w-full py-4 rounded-2xl border border-white/10 text-white font-bold hover:bg-white/5 transition-all">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
