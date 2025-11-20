import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-4 py-3 shadow-[0_0_60px_rgba(120,119,198,0.25)]">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 shadow-[0_0_30px_rgba(168,85,247,0.6)]" />
            <span className="text-white font-semibold tracking-tight">Your Name</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-slate-200/80 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="text-sm px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10">
              Get in touch
            </a>
          </nav>

          <button aria-label="Toggle menu" className="md:hidden text-white" onClick={() => setOpen(v => !v)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-4">
            <div className="flex flex-col gap-3">
              {links.map(l => (
                <a key={l.href} href={l.href} className="text-slate-200/90 hover:text-white" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="mt-2 inline-flex justify-center rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-white" onClick={() => setOpen(false)}>
                Get in touch
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
