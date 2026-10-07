import { motion } from "framer-motion";
import { Braces, Database, Wrench } from "lucide-react";

const groups = [
  { title: "Core frontend", description: "I use these to build responsive, component-driven interfaces.", icon: Braces, items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion"] },
  { title: "Backend & AI", description: "Tools I use when a product needs data, automation, or intelligence.", icon: Database, items: ["Node.js", "MongoDB", "REST APIs", "Clerk", "Gemini AI", "Resend"] },
  { title: "Delivery", description: "The practices that help projects stay maintainable and reliable.", icon: Wrench, items: ["Git & GitHub", "CI/CD", "Vercel", "Responsive design", "Performance", "Accessibility"] },
];

const Skills = () => (
  <section id="skills" className="bg-slate-950 px-6 py-24 text-white sm:px-10">
    <div className="mx-auto max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[.18em] text-blue-300">Toolbox</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Technology with a purpose.</h2>
        <p className="mt-5 text-lg leading-8 text-slate-400">A focused toolkit for building fast, accessible web applications and shipping them with confidence.</p>
      </motion.div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {groups.map((group, index) => { const Icon = group.icon; return <motion.article key={group.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="rounded-2xl border border-white/10 bg-white/[.03] p-6 transition hover:-translate-y-1 hover:border-blue-400/40">
          <Icon className="h-6 w-6 text-blue-300" />
          <h3 className="mt-6 text-xl font-semibold">{group.title}</h3><p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">{group.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">{group.items.map(item => <span key={item} className="rounded-full border border-white/10 bg-slate-900 px-3 py-1.5 text-sm text-slate-300">{item}</span>)}</div>
        </motion.article>; })}
      </div>
    </div>
  </section>
);

export default Skills;
