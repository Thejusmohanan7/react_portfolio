import { motion, useScroll, useTransform } from "framer-motion";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "Responsive Design",
  "Redux Toolkit",
  "Node.js",
  "Django",
  "Python",
  "MongoDB",
  "SQL",
  "Git, GitHub",
  "CI/CD, Vercel",
  "REST API Integration",
  "Agile Methodologies"
];

const Skills = () => {
  const { scrollY } = useScroll();
  const yContent = useTransform(scrollY, [0, 500], [30, -30]);

  return (
    <section className="relative min-h-screen bg-black text-white flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-neutral-900 opacity-90" />
      <motion.div
        style={{ y: yContent }}
        className="relative z-10 max-w-4xl mx-auto px-6 py-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-12 text-center"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="bg-neutral-900/70 backdrop-blur-md p-3 rounded-lg text-center border border-neutral-700"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
