
import React, { useState } from 'react';
import { generateTechnicalStrategy } from '../services/geminiService';
import { StrategyResponse } from '../types';

export const StrategyTool: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<StrategyResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    try {
      const data = await generateTechnicalStrategy(input);
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full gap-4 text-left">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[0.7rem] uppercase tracking-widest opacity-60">AI Strategy Lab</span>
        <span className="text-[0.7rem] uppercase tracking-widest opacity-60">Beta v1.0</span>
      </div>
      
      {!result ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-grow justify-center text-left">
          <h3 className="text-xl font-medium leading-tight text-left">Instant Technical Roadmap</h3>
          <p className="text-sm opacity-70 text-left">Describe your product idea to get an architectural breakdown from our AI engine.</p>
          <textarea 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g., A high-frequency trading platform for renewable energy credits..."
            className="bg-[rgba(255,255,255,0.05)] border border-transparent focus:border-[var(--c-bg-main)] text-[var(--c-bg-main)] outline-none rounded-xl p-3 text-sm h-24 resize-none transition-all placeholder:opacity-30"
          />
          <button 
            type="submit"
            disabled={loading}
            style={{ backgroundColor: 'var(--c-cta)' }}
            className="text-[var(--c-bg-main)] py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:opacity-90 disabled:opacity-50 transition-all shadow-lg shadow-[#FF1F1F33]"
          >
            {loading ? 'Synthesizing...' : 'Generate Roadmap →'}
          </button>
        </form>
      ) : (
        <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2 duration-700 text-left">
          <div className="border-b border-[rgba(255,255,255,0.1)] pb-2">
            <h4 className="text-[0.65rem] uppercase font-bold mb-1 opacity-50">Recommended Architecture</h4>
            <p className="text-sm font-medium">{result.architecture}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-[0.65rem] uppercase font-bold mb-1 opacity-50">Tech Stack</h4>
              <ul className="text-[0.75rem] list-disc list-inside opacity-80">
                {result.techStack.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-[0.65rem] uppercase font-bold mb-1 opacity-50">Milestones</h4>
              <ul className="text-[0.75rem] list-decimal list-inside opacity-80">
                {result.roadmap.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
          <button 
            onClick={() => setResult(null)}
            className="text-[0.7rem] uppercase font-bold border-t border-[rgba(255,255,255,0.1)] pt-4 text-left hover:opacity-60 transition-opacity"
          >
            New Analysis
          </button>
        </div>
      )}
    </div>
  );
};
