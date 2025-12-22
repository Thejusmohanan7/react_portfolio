import { motion, useScroll, useTransform } from "framer-motion";

interface Project {
  name: string;
  description: string;
  url: string;
}

const projects: Project[] = [
  {
    name: "Homora Interiors",
    description:
      "Responsive interior design website using Next.js & Tailwind CSS.",
    url: "https://next-js-slxb.vercel.app/home",
  },
  {
    name: "Own Media – Wedding Photography",
    description:
      "Photography portfolio created using React & Next.js.",
    url: "https://own-media-phi.vercel.app",
  },
  {
    name: "Portfolio (HTML/Tailwind)",
    description: "Static responsive personal portfolio website.",
    url: "https://portv1-five.vercel.app",
  },
];

const Projects = () => {
  const { scrollY } = useScroll();
  const yContent = useTransform(scrollY, [0, 500], [30, -30]);

  return (
    <section id="projects" className="relative min-h-screen bg-black text-white flex flex-col items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-neutral-900 opacity-90" />

      <motion.div
        style={{ y: yContent }}
        className="relative z-10 max-w-5xl w-full px-6 py-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="bg-neutral-900/70 backdrop-blur-md p-6 rounded-xl border border-neutral-700 hover:border-white transition-colors cursor-pointer"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
              <p className="mt-2 text-xs text-neutral-500 truncate">{project.url}</p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
