import React, { useState } from 'react';
import Hero from './components/Hero';
import CertificateGenerator from './components/CertificateGenerator';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [friendName, setFriendName] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleReset = () => {
    setIsGenerating(false);
    setUserName('');
    setFriendName('');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-yellow-500/30 overflow-hidden">
      <main className="flex-grow flex flex-col items-center p-3 justify-center">
        {!isGenerating ? (
          <div className="w-full max-w-sm animate-fade-in flex flex-col items-center">
            <Hero />
            <div className="w-full glass-card p-5 rounded-[1.8rem] shadow-2xl mt-2">
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-zinc-500 uppercase ml-1 tracking-[0.2em]">Seu Nome Completo</label>
                  <input type="text" placeholder="Quem assina o termo?" className="w-full bg-zinc-900/50 p-3.5 rounded-xl outline-none focus:ring-2 ring-yellow-500/50 border border-white/5 font-bold transition-all text-white text-sm" value={userName} onChange={e => setUserName(e.target.value)} />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-zinc-500 uppercase ml-1 tracking-[0.2em]">Nome do Amigo(a)</label>
                  <input type="text" placeholder="Para quem é a honraria?" className="w-full bg-zinc-900/50 p-3.5 rounded-xl outline-none focus:ring-2 ring-yellow-500/50 border border-white/5 font-bold transition-all text-white text-sm" value={friendName} onChange={e => setFriendName(e.target.value)} />
                </div>
                <button onClick={() => userName && friendName ? setIsGenerating(true) : alert('Preencha os dois nomes!')} className="w-full bg-yellow-500 text-black font-black py-4 rounded-xl shadow-xl shadow-yellow-500/10 uppercase text-sm active:scale-95 transition-all mt-1 border-b-4 border-yellow-700 hover:brightness-110">Emitir Registro Oficial</button>
              </div>
            </div>
            <Footer />
          </div>
        ) : (
          <div className="w-full max-w-sm animate-fade-in flex flex-col items-center">
            <button onClick={() => setIsGenerating(false)} className="mb-4 text-zinc-500 font-black text-[9px] uppercase flex items-center gap-2 tracking-[0.2em] bg-zinc-900/30 px-3 py-1.5 rounded-full border border-white/5 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Corrigir Nomes
            </button>
            <CertificateGenerator userName={userName} friendName={friendName} onReset={handleReset} />
          </div>
        )}
      </main>
    </div>
  );
};
export default App;