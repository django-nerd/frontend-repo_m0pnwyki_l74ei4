import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-start justify-center px-6">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />

        <div className="relative max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/90 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(217,70,239,0.9)]" />
            Available for freelance projects
          </span>
          <h1 className="mt-5 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
            Futuristic portfolio for bold creators
          </h1>
          <p className="mt-4 text-slate-300/90 text-lg max-w-xl">
            A premium, cyberpunk-inspired template with immersive 3D motion. Built for designers, engineers, and founders who want their work to stand out.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-lg px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 shadow-[0_10px_40px_-10px_rgba(99,102,241,0.7)]">
              View Projects
            </a>
            <a href="#contact" className="rounded-lg px-5 py-3 text-sm font-medium text-white/90 border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
