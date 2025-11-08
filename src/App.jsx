import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-inter text-slate-800 bg-white">
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-white/60">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-lg font-extrabold tracking-tight">Pastel Bank</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#blog" className="hover:text-slate-900">Blog</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
            <a href="#" className="rounded-lg bg-slate-900 text-white px-3 py-1.5 font-medium">Sign in</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Pricing />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
