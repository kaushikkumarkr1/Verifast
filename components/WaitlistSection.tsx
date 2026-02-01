
import React, { useState } from 'react';

const WaitlistSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    try {
      const response = await fetch("https://formsubmit.co/ajax/krkaushikkumar@zoho.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="waitlist" className="py-40 relative bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative bg-white border border-slate-200 rounded-[2.5rem] p-12 md:p-20 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 blur-[100px] rounded-full -z-0"></div>

          {!isSubmitted ? (
            <div className="relative z-10 text-center">
              <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] mb-6">
                Phase 1 Enrollment Open
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Join the Private Beta.
              </h2>
              <p className="text-lg text-slate-600 mb-12 font-normal leading-relaxed max-w-xl mx-auto">
                We are admitting a limited group of high-volume teams into our protocol testing phase. Reserve your spot for <span className="text-emerald-600 font-bold">priority API access</span>.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 max-w-lg mx-auto">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Waitlist Application!" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white border border-slate-200 rounded-xl px-6 py-4 text-slate-900 text-base focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold text-base hover:bg-emerald-700 transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-emerald-100"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    "Apply Now"
                  )}
                </button>
              </form>

              <p className="mt-8 text-[11px] text-slate-400 font-bold uppercase tracking-widest">
                Trusted by 40+ engineering teams in waitlist.
              </p>
            </div>
          ) : (
            <div className="relative z-10 text-center py-8">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-emerald-100">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-3">You're on the list.</h3>
              <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">
                Thank you. We will reach out to <b>{email}</b> shortly with your technical onboarding package.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-emerald-600 text-sm font-bold hover:underline"
              >
                Use another email
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;