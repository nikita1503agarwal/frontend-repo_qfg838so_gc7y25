import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, ArrowRight, User } from 'lucide-react';

export default function Hero() {
  const [mode, setMode] = useState('signin');

  return (
    <section className="relative w-full h-[88vh] overflow-hidden bg-gradient-to-b from-pink-50 via-sky-50 to-violet-50">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil so text pops, but keep pointer events on Spline */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex items-center">
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-slate-600 shadow-sm backdrop-blur">
              <Shield className="h-4 w-4 text-emerald-500" />
              Secure, modern, pastel fintech vibes
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-[800] tracking-tight text-slate-800">
              The simplest way to launch your digital banking SaaS
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-prose">
              Accept payments, issue virtual cards, and manage customers with a clean, minimalist dashboard. Built for speed, wrapped in soft pastels.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-5 py-3 shadow hover:shadow-md transition">
                <Rocket className="h-4 w-4" />
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#blog" className="inline-flex items-center gap-2 rounded-xl bg-white/80 text-slate-700 px-5 py-3 shadow hover:shadow-md transition">
                Learn More
              </a>
            </div>
          </div>

          {/* Auth card */}
          <div className="w-full max-w-md ml-auto">
            <div className="rounded-2xl bg-white/80 backdrop-blur-md shadow-xl p-6 border border-white/60">
              <div className="mb-5 flex items-center gap-2">
                <User className="h-5 w-5 text-slate-500" />
                <p className="text-sm text-slate-500">Welcome back</p>
              </div>
              <div className="mb-6 inline-flex rounded-full bg-slate-100 p-1">
                <button
                  className={`px-4 py-1.5 rounded-full text-sm transition ${mode === 'signin' ? 'bg-white shadow text-slate-900' : 'text-slate-600'}`}
                  onClick={() => setMode('signin')}
                  type="button"
                >
                  Sign in
                </button>
                <button
                  className={`px-4 py-1.5 rounded-full text-sm transition ${mode === 'signup' ? 'bg-white shadow text-slate-900' : 'text-slate-600'}`}
                  onClick={() => setMode('signup')}
                  type="button"
                >
                  Create account
                </button>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(`${mode === 'signin' ? 'Signed in' : 'Account created'} (demo)`);
                }}
                className="space-y-4"
              >
                {mode === 'signup' && (
                  <div>
                    <label className="block text-sm text-slate-600 mb-1">Full name</label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
                      placeholder="Alex Doe"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Password</label>
                  <input
                    type="password"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
                    placeholder="••••••••"
                  />
                </div>
                <button type="submit" className="w-full rounded-xl bg-slate-900 text-white py-2.5 font-medium shadow hover:shadow-md transition">
                  {mode === 'signin' ? 'Sign in' : 'Create account'}
                </button>
                <p className="text-xs text-slate-500 text-center">By continuing you agree to our Terms and Privacy Policy.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
