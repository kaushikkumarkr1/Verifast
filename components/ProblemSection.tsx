
import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-32 scroll-mt-28 relative border-y border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="w-12 h-1 bg-emerald-600 mb-8 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
              Email data is <br/><span className="text-slate-400">deteriorating in real-time.</span>
            </h2>
            <p className="text-lg text-slate-600 font-normal leading-relaxed mb-10">
              The B2B sector suffers from massive data decay. Traditional verification tools rely on static, cached databases that are weeks old. Every bounce damages your sender reputation and domain health.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Static Decay", text: "Standard tools sell validation based on stale scraping runs from months ago." },
                { title: "Reputation Damage", text: "Hard bounces signal major ESPs like Outlook and Gmail to flag your IP." },
                { title: "Live Handshake", text: "VeriFast performs live handshakes when you need them, never saving your data." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-1 border border-emerald-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600"></div>
                  </div>
                  <p className="text-slate-600 text-sm"><span className="text-slate-900 font-bold">{item.title}:</span> {item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
             <div className="relative bg-slate-50 border border-slate-100 rounded-3xl p-10 shadow-lg">
                <div className="flex items-center justify-between mb-10">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Industry Benchmark</h4>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                  </div>
                </div>
                
                <div className="space-y-12">
                  <div className="space-y-3">
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      <span>Legacy Database Tools</span>
                      <span className="text-red-500">~22% Failure</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-red-400 w-[68%] rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                      <span>VeriFast Handshake</span>
                      <span>&lt;0.1% Failure</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[99%] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.2)]"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-100 text-center">
                   <p className="text-[11px] text-slate-500 font-medium leading-relaxed italic">
                    Internal study based on SMTP session consistency across 1M random verification requests.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;