import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 text-violet-700 px-3 py-1 text-sm">Contact</div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-800">We'd love to hear from you</h2>
          <p className="mt-2 text-slate-600">Questions about pricing, onboarding, or features? Send us a note.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-pink-50 p-6 border border-slate-100">
            <div className="flex items-center gap-2 text-slate-600">
              <Mail className="h-5 w-5 text-sky-500" />
              <span className="text-sm">Response within 1 business day</span>
            </div>
            <ul className="mt-4 space-y-2 text-slate-600 text-sm">
              <li>• Sales: sales@pastelsaas.dev</li>
              <li>• Support: support@pastelsaas.dev</li>
              <li>• Partnerships: partners@pastelsaas.dev</li>
            </ul>
            <p className="mt-6 text-slate-500 text-sm">Prefer a quick message? Use the form and we’ll route it to the right team.</p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thanks! Your message has been sent (demo).');
            }}
            className="rounded-2xl bg-white/80 backdrop-blur p-6 border border-white/60 shadow-sm space-y-4"
          >
            <div>
              <label className="block text-sm text-slate-600 mb-1">Name</label>
              <input
                type="text"
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Message</label>
              <textarea
                required
                rows={5}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
                placeholder="How can we help?"
              />
            </div>
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white px-5 py-2.5 font-medium shadow hover:shadow-md transition">
              Send message <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
