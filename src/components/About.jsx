export default function About() {
  return (
    <section id="about" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-900/60 p-8 backdrop-blur-xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-white">About</h2>
              <p className="mt-3 text-slate-300/90">
                I create soulful digital experiences at the edge of design and engineering. My craft blends motion, 3D and systems thinking to build interfaces that feel alive.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-slate-200/90">UI/UX Design</div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-slate-200/90">Frontend Engineering</div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-slate-200/90">Motion + 3D</div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-slate-200/90">Creative Direction</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-full rounded-xl border border-white/10 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(99,102,241,0.2),transparent)] p-6 text-slate-200/90">
                <p className="text-sm">Open to roles:</p>
                <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                  <li>Senior Frontend Engineer</li>
                  <li>Product Designer</li>
                  <li>Creative Technologist</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
