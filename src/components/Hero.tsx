import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, Code2, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden bg-[#030712] px-6 pt-28 text-white sm:px-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_24%,rgba(96,165,250,.18),transparent_30%),radial-gradient(circle_at_22%_72%,rgba(168,85,247,.14),transparent_26%)]" />
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl items-center gap-14 py-16 lg:grid-cols-[1.15fr_.85fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium">
            <span className="uppercase tracking-[.18em] text-blue-300">Thejus Mohanan</span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-500 sm:block" />
            <span className="text-slate-400">Frontend Developer</span>
            <span className="flex items-center gap-2 text-emerald-300"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Available</span>
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">I build thoughtful web experiences that feel <span className="bg-gradient-to-r from-blue-300 to-violet-400 bg-clip-text text-transparent">effortless.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">I’m a frontend developer focused on responsive React and Next.js products, polished interfaces, and dependable user journeys.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button onClick={() => scrollTo("projects")} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-100">Explore my work <ArrowRight className="h-4 w-4" /></button>
            <button onClick={() => scrollTo("contact")} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-blue-300/70 hover:bg-white/5">Let’s talk <Mail className="h-4 w-4" /></button>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
            <a className="inline-flex items-center gap-2 transition hover:text-white" href="https://github.com/Thejusmohanan7" target="_blank" rel="noreferrer"><Github className="h-4 w-4" /> GitHub</a>
            <a className="inline-flex items-center gap-2 transition hover:text-white" href="https://linkedin.com/in/thejus-mohanan" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <a className="inline-flex items-center gap-2 transition hover:text-white" href="mailto:thejusmohanan0@gmail.com"><Mail className="h-4 w-4" /> Email</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.12 }} className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-blue-500/30 to-violet-500/20 blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-blue-950/50 backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4"><div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-rose-400" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /></div><span className="text-xs text-slate-500">thejus.dev</span></div>
            <div className="space-y-5 p-6"><div className="flex items-start justify-between"><div><p className="text-xs uppercase tracking-[.2em] text-blue-300">Currently building</p><h2 className="mt-2 text-2xl font-semibold">FlowAI</h2></div><Code2 className="h-8 w-8 text-violet-300" /></div><p className="text-sm leading-6 text-slate-400">One focused workspace for tasks, habits, notes, and calendar planning.</p><div className="grid grid-cols-2 gap-3"><div className="rounded-2xl bg-white/5 p-4"><p className="text-xs text-slate-400">Stack</p><p className="mt-1 font-medium">Next.js + AI</p></div><div className="rounded-2xl bg-white/5 p-4"><p className="text-xs text-slate-400">Focus</p><p className="mt-1 font-medium">Useful UX</p></div></div><div className="flex items-center justify-between rounded-2xl border border-blue-400/20 bg-blue-400/10 p-4 text-sm text-blue-100"><span>Explore selected work</span><ArrowDownRight className="h-5 w-5" /></div></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
