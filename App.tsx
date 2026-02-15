
import React from 'react';
import { StrategyTool } from './components/StrategyTool';

const App: React.FC = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center p-4 md:p-8 lg:p-12 overflow-hidden">
      <main className="bg-[var(--c-bg-main)] w-full max-w-[1600px] h-full rounded-[32px] grid grid-rows-[auto,1fr] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
        
        {/* Header */}
        <header className="p-8 flex justify-between items-start z-10 text-[0.85rem] font-medium tracking-tight">
          <div 
            className="text-[1rem] uppercase tracking-[-0.02em] font-bold"
            style={{ fontFamily: 'var(--f-mono)' }}
          >
            ArtifactLabs
          </div>
          <nav>
            <ul className="text-right space-y-1">
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Architectures</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Engineering</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Advisory</a></li>
            </ul>
          </nav>
        </header>

        {/* Scrollable Body */}
        <div className="overflow-y-auto px-8 pb-8 flex flex-col gap-16 scroll-smooth">
          
          {/* Hero Section */}
          <section className="pt-8 flex flex-col gap-8">
            <h1 className="text-[clamp(3rem,8vw,7.5rem)] leading-[0.85] font-extrabold tracking-[-0.04em] lowercase max-w-[95%]">
              engineering strategy <br />
              for modern <br />
              founders
            </h1>
            <div className="max-w-[450px] ml-auto">
              <p className="text-[0.95rem] leading-relaxed opacity-70">
                The fractional CTO agency that bridges the gap between high-level architectural vision and rapid product execution. We don't just write code; we build durable tech organizations.
              </p>
            </div>
          </section>

          {/* Bento Grid Section */}
          <section className="grid grid-cols-1 md:grid-cols-12 auto-rows-[minmax(320px,auto)] gap-6">
            
            {/* Card 1: Core Service */}
            <div className="md:col-span-4 bg-[var(--c-bg-card)] rounded-[24px] p-8 flex flex-col justify-between group transition-transform duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="text-[0.75rem] uppercase tracking-widest opacity-60 flex justify-between relative z-10">
                <span>Infrastructure</span>
                <span>01</span>
              </div>
              <div className="absolute -right-20 -bottom-20 w-[120%] aspect-square bg-gradient-to-tr from-[#8A9691] to-[#CBD3CF] rounded-full blur-[40px] opacity-60" />
              <div className="relative z-10">
                <h3 className="text-3xl font-medium tracking-tighter leading-none mb-4">Scalable<br />Foundations</h3>
                <p className="text-sm leading-relaxed opacity-70 max-w-[25ch]">Kubernetes, serverless, and cloud-native architecture designed for 10x growth.</p>
              </div>
            </div>

            {/* Card 2: Interactive AI Tool */}
            <div className="md:col-span-4 bg-[#0F1210] text-[var(--c-bg-main)] rounded-[24px] p-8 flex flex-col justify-between group">
              <StrategyTool />
            </div>

            {/* Card 3: Visual/Asterisk */}
            <div className="md:col-span-4 bg-[var(--c-bg-outer)] text-white rounded-[24px] flex flex-col items-center justify-center p-8 transition-transform duration-300 hover:-translate-y-1">
              <svg className="w-32 h-32 animate-spin-slow" viewBox="0 0 100 100">
                <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="2" />
                <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="2" />
                <line x1="22" y1="22" x2="78" y2="78" stroke="currentColor" strokeWidth="2" />
                <line x1="78" y1="22" x2="22" y2="78" stroke="currentColor" strokeWidth="2" />
              </svg>
              <div className="mt-6 text-sm italic mix-serif opacity-80">systemic stability</div>
            </div>

            {/* Card 4: Long Card / Methodology */}
            <div className="md:col-span-8 border border-[rgba(15,18,16,0.1)] rounded-[24px] p-8 flex flex-col md:flex-row gap-8 items-end justify-between transition-transform duration-300 hover:-translate-y-1">
              <div className="flex flex-col h-full justify-between">
                <div className="text-[0.75rem] uppercase tracking-widest opacity-60 mb-4">Methodology</div>
                <h3 className="text-4xl md:text-5xl font-medium tracking-tighter leading-none m-0">
                  The engineering <br />
                  of optimism.
                </h3>
              </div>
              <div className="md:max-w-[300px]">
                <p className="text-[0.9rem] leading-relaxed opacity-70 mb-6">
                  We implement engineering culture, CI/CD pipelines, and rigorous code standards that allow your team to move fast without breaking things.
                </p>
                <a 
                  href="#" 
                  style={{ color: 'var(--c-cta)', borderColor: 'var(--c-cta)' }}
                  className="inline-flex items-center gap-4 text-[0.85rem] uppercase font-extrabold tracking-tight border-b pb-1 hover:gap-6 transition-all"
                >
                  Our Playbook
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Card 5: Case Study (Replaced Artifact) */}
            <div className="md:col-span-4 bg-black text-white rounded-[24px] p-8 flex flex-col justify-between group transition-transform duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0H60V60H0V0Z" fill="url(#grid-pattern)" />
                  <defs>
                    <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                </svg>
              </div>

              <div className="z-10">
                <div className="text-[0.6rem] uppercase tracking-[0.2em] mb-4 opacity-40">Case Study // Project 08</div>
                <h3 className="text-2xl font-bold tracking-tight mb-2">Carbon Ledger</h3>
                <p className="text-sm opacity-60 leading-relaxed max-w-[28ch]">
                  Built a high-throughput transaction engine for the world's first decentralized carbon credit exchange.
                </p>
              </div>

              <div className="z-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Rust', 'Kafka', 'Postgres'].map((tech) => (
                    <span key={tech} className="text-[0.6rem] px-2 py-1 border border-white/20 rounded-md font-mono uppercase">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-[1.5rem] font-bold tracking-tighter">-420ms</div>
                    <div className="text-[0.6rem] uppercase tracking-widest opacity-40">p99 Latency Reduced</div>
                  </div>
                  <div className="text-[0.7rem] uppercase font-bold border-b border-white/40 pb-1 cursor-pointer hover:border-white transition-all">
                    View Specs
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/* Footer Action Row */}
          <section className="pt-8 border-t border-[rgba(15,18,16,0.1)] mb-8 flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="text-[0.85rem] opacity-50 font-medium">
              © 2024 ArtifactLabs Engineering Agency<br />
              Precision-built in SF & Zurich.
            </div>
            
            <a 
              href="mailto:hello@artifactlabs.agency" 
              style={{ color: 'var(--c-cta)', borderColor: 'var(--c-cta)' }}
              className="text-2xl md:text-3xl font-extrabold tracking-tight border-b-2 pb-2 group flex items-center gap-4 hover:gap-8 transition-all"
            >
              Initiate Discovery <span className="mix-serif group-hover:translate-x-2 transition-transform">→</span>
            </a>
          </section>

        </div>
      </main>
    </div>
  );
};

export default App;
