
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Stateless Ingestion",
      desc: "Connect via API or CSV. Data is stored only in volatile memory and never written to disk.",
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      )
    },
    {
      number: "02",
      title: "JIT Handshake",
      desc: "Our engine opens a real-time SMTP connection with the recipient's mail server to confirm existence.",
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Immediate Purge",
      desc: "Return the valid/invalid verdict. The data is instantly wiped for maximum PII compliance.",
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    }
  ];

  return (
    <section id="protocol" className="py-32 scroll-mt-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-emerald-600 font-bold tracking-[0.25em] uppercase text-[10px] mb-4">The Methodology</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">The Handshake Architecture</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Stateless protocol designed for security-first enterprises, replacing outdated database caches with live server requests.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-slate-200 -z-10"></div>
          
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-8 group-hover:border-emerald-200 transition-all shadow-md group-hover:shadow-lg">
                {step.icon}
              </div>
              <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase mb-3">Protocol Step {step.number}</span>
              <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{step.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed font-light px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;