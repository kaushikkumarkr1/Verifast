
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center font-bold text-white shadow-sm">V</div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">VeriFast</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-8">
              Architecting the future of B2B lead verification through stateless handshake protocols. Engineered for the privacy-first enterprise.
            </p>
          </div>
          
          <div>
            <h4 className="text-slate-900 text-xs font-bold uppercase tracking-widest mb-6">Architecture</h4>
            <ul className="space-y-4 text-slate-500 text-xs font-medium uppercase tracking-wider">
              <li><a href="#problem" className="hover:text-emerald-600 transition-colors">The Problem</a></li>
              <li><a href="#protocol" className="hover:text-emerald-600 transition-colors">The Protocol</a></li>
              <li><a href="#capabilities" className="hover:text-emerald-600 transition-colors">Capabilities</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 text-xs font-bold uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 text-slate-500 text-xs font-medium uppercase tracking-wider">
              <li><a href="#waitlist" className="hover:text-emerald-600 transition-colors">Waitlist</a></li>
              <li><a href="#hero" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="hover:text-emerald-600 transition-colors">Home</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 text-xs font-bold uppercase tracking-widest mb-6">Compliance</h4>
            <ul className="space-y-4 text-slate-500 text-xs font-medium uppercase tracking-wider">
              <li><a href="#" className="hover:text-emerald-600 transition-colors pointer-events-none opacity-50">Privacy Center</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors pointer-events-none opacity-50">Legal Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} VeriFast Core. All rights reserved.
          </div>
          <div className="flex gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span>Enterprise License</span>
            <span>Security Framework</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;