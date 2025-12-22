import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

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
  const opacityBg = useTransform(scrollY, [0, 500], [1, 0.6]);
  const scaleBg = useTransform(scrollY, [0, 500], [1, 1.05]);

  // State for hover effect
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="relative min-h-screen bg-black text-white flex items-center overflow-hidden">
      {/* Animated Background with scroll effects */}
      <motion.div
        style={{ opacity: opacityBg, scale: scaleBg }}
        className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black"
      />

      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: useTransform(scrollY, [0, 500], [0, 100]) }}
          className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{ 
            x: ["0%", "4%", "0%"],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          style={{ y: useTransform(scrollY, [0, 500], [0, -80]) }}
          className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{ 
            y: ["0%", "-4%", "0%"],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            duration: 11,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div
        style={{ y: yContent }}
        className="relative z-10 max-w-5xl mx-auto px-6 py-20 w-full"
      >
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
            />
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
            >
              Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Experience</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg text-neutral-400 max-w-3xl"
          >
            My professional journey through various roles and responsibilities
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 opacity-50"
          />

          {/* Experience Items */}
          <div className="space-y-12 pl-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group cursor-default"
              >
                {/* Timeline Node */}
                <motion.div
                  animate={{ 
                    scale: hoveredIndex === index ? 1.3 : 1,
                    boxShadow: hoveredIndex === index ? "0 0 20px rgba(59, 130, 246, 0.5)" : "none"
                  }}
                  className="absolute -left-11 top-1.5 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 z-10"
                />

                {/* Glow Effect on Hover */}
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -left-12 -top-2 w-8 h-8 rounded-full bg-blue-500 opacity-20 blur-sm"
                  />
                )}

                {/* Content Card */}
                <motion.div
                  whileHover={{ 
                    x: 10,
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    borderColor: "rgba(59, 130, 246, 0.3)"
                  }}
                  className="p-6 rounded-xl border border-neutral-800 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <motion.h3
                        animate={{ 
                          color: hoveredIndex === index ? "#ffffff" : "#f3f4f6"
                        }}
                        className="text-xl sm:text-2xl font-semibold"
                      >
                        {exp.role}
                      </motion.h3>
                      <motion.p
                        animate={{ 
                          color: hoveredIndex === index ? "#d1d5db" : "#9ca3af"
                        }}
                        className="text-sm text-neutral-400"
                      >
                        {exp.company}
                      </motion.p>
                    </div>
                    
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-1 text-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30 w-fit"
                    >
                      {exp.period}
                    </motion.span>
                  </div>

                  {/* Description Items */}
                  <ul className="space-y-3 mt-4">
                    {exp.description.map((desc, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (idx * 0.1) }}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-3 text-neutral-300 text-sm sm:text-base leading-relaxed"
                      >
                        <motion.div
                          animate={{ 
                            scale: hoveredIndex === index ? 1.2 : 1,
                            rotate: hoveredIndex === index ? [0, 10, -10, 0] : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"
                        />
                        <span>{desc}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech Tags (for development roles) */}
                  {index === 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                      className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-neutral-800"
                    >
                      {["Next.js", "React", "Node.js", "MongoDB", "TypeScript", "Tailwind", "Git", "Vercel"].map((tech, techIdx) => (
                        <motion.span
                          key={techIdx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.9 + (techIdx * 0.05) }}
                          whileHover={{ 
                            scale: 1.1,
                            y: -3,
                            backgroundColor: "rgba(59, 130, 246, 0.2)",
                            borderColor: "rgb(59, 130, 246)"
                          }}
                          className="px-3 py-1 text-xs bg-neutral-900 text-neutral-300 rounded-full border border-neutral-800 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;