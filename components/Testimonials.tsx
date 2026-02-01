
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "VeriFast cut our bounce rate from 18% to 0.4% in one week. The JIT verification is a complete game changer for cold outreach.",
      author: "Marcus Thorne",
      role: "VP of Sales, ScaleFlow",
      image: "https://i.pravatar.cc/150?u=marcus"
    },
    {
      quote: "The API is incredibly fast. We integrated it into our signup flow, and it's blocked thousands of fake leads without any user friction.",
      author: "Elena Rodriguez",
      role: "CTO, LeadGen Pro",
      image: "https://i.pravatar.cc/150?u=elena"
    },
    {
      quote: "Zero storage was the selling point for our legal team. Finally a tool that respects PII while delivering top-tier results.",
      author: "David Chen",
      role: "Head of Operations, FinTech Global",
      image: "https://i.pravatar.cc/150?u=david"
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all">
              <p className="text-xl text-slate-300 font-light italic leading-relaxed mb-10">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full border border-emerald-500/50" />
                <div>
                  <h5 className="text-white font-bold text-sm">{t.author}</h5>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
