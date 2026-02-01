
import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm'
      : 'bg-transparent border-b border-transparent py-6'
      }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <div
          className="flex items-center gap-2.5 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center font-bold text-white shadow-md">
            V
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">VeriFast</span>
        </div>

        <div className="hidden md:flex items-center gap-10 text-[11px] font-bold tracking-[0.2em] text-slate-500 uppercase">
          <a href="#problem" className="hover:text-emerald-600 transition-colors">Problem</a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#waitlist"
            className="px-6 py-2 rounded-lg bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-700 transition-all active:scale-95 shadow-sm shadow-emerald-200"
          >
            Get Early Access
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;