import { motion, useScroll, useTransform } from "framer-motion";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Front End Developer",
    company: "Hippozxtech Solutions",
    period: "Feb 2025 – Present",
    description: [
      "Built full-stack web apps using Next.js, React, Node.js, MongoDB.",
      "Implemented REST APIs, authentication, and secure DB operations.",
      "Improved performance, responsiveness, and accessibility.",
      "Deployed apps using Git, CI/CD pipelines, and Vercel.",
    ],
  },
  {
    role: "Customer Support Executive",
    company: "Takyon",
    period: "2022 – 2023",
    description: [
      "Resolved customer issues with 95% success rate.",
      "Documented frequent technical issues to improve workflow.",
      "Reduced escalations by 30%.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Shiash",
    period: "2021, 5 months",
    description: [
      "Developed and debugged Django applications.",
      "Participated in code reviews and quality improvements.",
      "Assisted in deployments and issue fixes.",
    ],
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
          Work Experience
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
              <p className="text-sm text-neutral-400">
                {exp.company} · {exp.period}
              </p>
              <ul className="mt-2 text-neutral-500 leading-relaxed text-sm sm:text-base list-disc list-inside space-y-1">
                {exp.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
