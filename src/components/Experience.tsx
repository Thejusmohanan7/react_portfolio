import { motion, useScroll, useTransform } from "framer-motion";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Frontend Developer",
    company: "ABC Tech Solutions",
    period: "Jan 2024 - Present",
    description:
      "Developed responsive web applications using React, TypeScript, and Tailwind CSS. Focused on accessibility, performance, and scalable UI components.",
  },
  {
    role: "React Developer Intern",
    company: "XYZ Labs",
    period: "Jun 2023 - Dec 2023",
    description:
      "Contributed to internal tools using React and Next.js, implementing reusable components and improving front-end performance.",
  },
];

const Experience = () => {
  const { scrollY } = useScroll();
  const yContent = useTransform(scrollY, [0, 500], [30, -30]);

  return (
    <section className="relative min-h-screen bg-black text-white flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-neutral-900 opacity-90" />

      <motion.div
        style={{ y: yContent }}
        className="relative z-10 max-w-4xl mx-auto px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-8"
        >
          Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="border-l-2 border-neutral-700 pl-6 relative"
            >
              <span className="absolute -left-3 top-1.5 w-3 h-3 rounded-full bg-white" />
              <h3 className="text-xl sm:text-2xl font-semibold">{exp.role}</h3>
              <p className="text-sm text-neutral-400">{exp.company} · {exp.period}</p>
              <p className="mt-2 text-neutral-500 leading-relaxed text-sm sm:text-base">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
