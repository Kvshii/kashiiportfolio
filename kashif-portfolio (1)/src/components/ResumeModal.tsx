import React from 'react';
import { FileText, X } from 'lucide-react';

interface ResumeModalProps { isOpen: boolean; onClose: () => void; }

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="resume-missing-title">
      <div className="w-full max-w-lg rounded-3xl bg-white dark:bg-[#111422] border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 relative">
        <button onClick={onClose} aria-label="Close resume dialog" className="absolute top-4 right-4 p-2 rounded-xl text-slate-500 hover:text-cyan-500 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"><X className="w-5 h-5" /></button>
        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-500 mb-5"><FileText className="w-7 h-7" /></div>
        <p className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-2">Missing data</p>
        <h2 id="resume-missing-title" className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Resume not publicly listed</h2>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">Kashif’s source portfolio does not provide a resume or CV download. No replacement document has been invented.</p>
        <button onClick={onClose} className="mt-6 min-h-[44px] px-5 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 transition-colors">Close</button>
      </div>
    </div>
  );
}
