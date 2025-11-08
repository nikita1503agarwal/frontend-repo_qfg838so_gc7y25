import { Check, CreditCard } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$9',
    period: 'mo',
    highlight: false,
    features: [
      'Up to 1,000 customers',
      'Virtual cards',
      'Basic analytics',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    price: '$29',
    period: 'mo',
    highlight: true,
    features: [
      '10,000 customers',
      'Physical + virtual cards',
      'Advanced analytics',
      'Priority support',
    ],
  },
  {
    name: 'Scale',
    price: '$99',
    period: 'mo',
    highlight: false,
    features: [
      'Unlimited customers',
      'All card products',
      'Custom limits & controls',
      'Dedicated CSM',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 text-sky-700 px-3 py-1 text-sm">Pricing</div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-800">Simple, transparent plans</h2>
          <p className="mt-2 text-slate-600">Pick a plan that grows with your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl border ${t.highlight ? 'border-sky-300 bg-white shadow-xl' : 'border-slate-200 bg-white/70'} p-6 backdrop-blur`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-800">{t.name}</h3>
                <CreditCard className="h-5 w-5 text-slate-400" />
              </div>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-bold text-slate-900">{t.price}</span>
                <span className="text-slate-500">/{t.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-600">
                    <Check className="h-4 w-4 text-emerald-500" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-xl py-2.5 font-medium transition ${t.highlight ? 'bg-slate-900 text-white hover:shadow-md' : 'bg-white text-slate-800 border border-slate-200 hover:shadow'}`}>
                Choose {t.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
