import { ArrowRight, Calendar, User } from 'lucide-react';

const posts = [
  {
    title: 'Issuing virtual cards with real-time controls',
    date: 'Oct 3, 2025',
    author: 'Team Pastel',
    excerpt: 'Learn how our card issuing API lets you set dynamic limits, merchant categories, and granular controls.',
  },
  {
    title: 'Designing a minimalist fintech dashboard',
    date: 'Sep 12, 2025',
    author: 'Mona Sans',
    excerpt: 'We break down the visual system behind our soft pastel theme and why it helps users focus.',
  },
  {
    title: 'From MVP to scale: infrastructure notes',
    date: 'Aug 28, 2025',
    author: 'Inter Type',
    excerpt: 'A peek behind the scenes at our FastAPI services, monitoring, and cost control tips.',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-sky-50 to-pink-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-pink-100 text-pink-700 px-3 py-1 text-sm">Blog</div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-800">Ideas and updates</h2>
          <p className="mt-2 text-slate-600">Stories from our team about product, design, and growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="rounded-2xl bg-white/80 backdrop-blur border border-white/60 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-slate-800">{p.title}</h3>
              <div className="mt-2 flex items-center gap-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
                <span className="inline-flex items-center gap-1"><User className="h-3.5 w-3.5" /> {p.author}</span>
              </div>
              <p className="mt-3 text-slate-600 text-sm">{p.excerpt}</p>
              <a href="#" className="mt-4 inline-flex items-center gap-2 text-slate-800 font-medium hover:underline">
                Read more <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
