import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-slate-50 border-t border-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div>
            <div className="text-xl font-extrabold tracking-tight text-slate-900">Pastel Bank</div>
            <p className="mt-2 text-sm text-slate-600 max-w-sm">A clean, minimalist suite for issuing cards, accepting payments, and managing customers with delightful pastel UI.</p>
          </div>
          <div className="flex items-center gap-4 text-slate-600">
            <a href="#" aria-label="Twitter" className="hover:text-slate-900"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="GitHub" className="hover:text-slate-900"><Github className="h-5 w-5" /></a>
            <a href="#contact" aria-label="Email" className="hover:text-slate-900"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} Pastel Bank, Inc. All rights reserved.</div>
      </div>
    </footer>
  );
}
