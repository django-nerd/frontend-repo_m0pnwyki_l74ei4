export default function Contact() {
  return (
    <section id="contact" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white">Let’s build something</h2>
            <p className="mt-2 text-slate-300/90">Tell me about your project. I’ll get back within 24 hours.</p>
          </div>
          <form className="grid gap-4 md:grid-cols-2">
            <div className="md:col-span-1">
              <label className="block text-sm text-slate-300/90 mb-1">Name</label>
              <input type="text" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="Jane Doe" />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm text-slate-300/90 mb-1">Email</label>
              <input type="email" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="jane@studio.com" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-slate-300/90 mb-1">Message</label>
              <textarea rows="4" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="What are we making?" />
            </div>
            <div className="md:col-span-2">
              <button type="button" className="w-full md:w-auto rounded-lg bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(99,102,241,0.7)]">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
