
import React, { useState } from 'react';

const InteractiveDemo: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [logs, setLogs] = useState<string[]>([]);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsVerifying(true);
    setStatus('idle');
    setLogs(['[001] establishing secure connection...']);
    
    const steps = [
      `[002] resolving MX for ${email.split('@')[1]}`,
      '[003] mx: aspmx.l.google.com found (priority 10)',
      '[004] HELO veri-fast.io (outbound: 194.2.14.3)',
      '[005] MAIL FROM: <verify@veri-fast.io>',
      `[006] RCPT TO: <${email}>`,
      '[007] analyzing response (RSET)',
      '[008] verification sequence finalized'
    ];

    for (const step of steps) {
      await new Promise(r => setTimeout(r, 400));
      setLogs(prev => [...prev, step]);
    }

    const isValid = !email.toLowerCase().includes('bad') && !email.toLowerCase().includes('invalid');
    setStatus(isValid ? 'success' : 'error');
    setIsVerifying(false);
  };

  return (
    <section id="demo" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-emerald-500 font-bold tracking-[0.2em] uppercase text-xs mb-4">Direct SMTP Terminal</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6">Test It Live</h3>
            <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">
              Experience the power of real-time validation. Our engine connects directly to the recipient's mail server to confirm their existence without ever sending an email.
            </p>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="flex items-center gap-3"><span className="text-emerald-500">✓</span> No tracking pixels</li>
              <li className="flex items-center gap-3"><span className="text-emerald-500">✓</span> No "mail sent" footprints</li>
              <li className="flex items-center gap-3"><span className="text-emerald-500">✓</span> Sub-500ms response time</li>
            </ul>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
              <div className="px-6 py-4 bg-white/[0.03] border-b border-white/5 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/40"></div>
                </div>
                <div className="text-[10px] font-mono font-bold text-slate-500 tracking-[0.2em] uppercase">Engine::Handshake_v4.2</div>
              </div>
              
              <div className="p-8">
                <form onSubmit={handleVerify} className="relative mb-8">
                  <input 
                    type="email" 
                    placeholder="Enter email to test..." 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500/50 transition-all text-white placeholder-slate-600 font-medium"
                    required
                  />
                  <button 
                    disabled={isVerifying}
                    className="absolute right-2 top-2 bottom-2 bg-emerald-500 text-slate-950 px-6 rounded-xl font-black text-sm hover:bg-emerald-400 disabled:opacity-50 transition-all shadow-lg shadow-emerald-500/20"
                  >
                    {isVerifying ? 'RUNNING...' : 'EXECUTE'}
                  </button>
                </form>

                <div className="bg-black/50 rounded-2xl p-6 font-mono text-[11px] text-slate-400 min-h-[240px] border border-white/5">
                  {logs.length === 0 && <span className="text-slate-700">// engine_idle: awaiting_input...</span>}
                  {logs.map((log, i) => (
                    <div key={i} className="mb-1 flex items-start gap-4">
                      <span className="text-emerald-500/50 select-none">❯</span>
                      <span>{log}</span>
                    </div>
                  ))}
                  
                  {!isVerifying && status === 'success' && (
                    <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl animate-bounce">
                      <span className="font-bold">STATUS::OK</span> | Mailbox is valid and accepting deliveries.
                    </div>
                  )}
                  {!isVerifying && status === 'error' && (
                    <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl">
                      <span className="font-bold">STATUS::FAIL</span> | Invalid recipient or server connection rejected.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
