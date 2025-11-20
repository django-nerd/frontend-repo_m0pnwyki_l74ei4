export default function Projects() {
  const items = [
    {
      title: 'Neon Commerce',
      desc: 'Headless storefront with cinematic 3D transitions and blazing fast DX.',
      tags: ['Next.js', 'Three.js', 'Stripe'],
    },
    {
      title: 'Orbit OS',
      desc: 'Futuristic dashboard with real-time telemetry and motion-driven UI.',
      tags: ['React', 'WebSockets', 'Framer Motion'],
    },
    {
      title: 'Signal Studio',
      desc: 'Generative visuals for music producers powered by WebGL + shaders.',
      tags: ['Canvas', 'GLSL', 'Audio API'],
    },
  ]

  return (
    <section id="projects" className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_10%,rgba(168,85,247,0.12),transparent),radial-gradient(50%_50%_at_80%_0%,rgba(56,189,248,0.12),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Work</h2>
            <p className="mt-2 text-slate-300/80 max-w-xl">A mix of product builds, motion experiments, and client work. Each crafted with care.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10">Start a project</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <article key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/60 to-slate-900/60 p-6 shadow-[0_0_60px_rgba(120,119,198,0.15)]">
              <div className="h-40 rounded-xl bg-gradient-to-tr from-indigo-500/30 via-fuchsia-500/25 to-cyan-400/30 ring-1 ring-inset ring-white/10 transition-transform duration-300 group-hover:scale-105" />
              <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-300/90">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-200/90">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
