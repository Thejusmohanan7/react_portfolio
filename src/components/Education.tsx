import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { 
  GraduationCap,
  BookOpen,
  School,
  Info
} from "lucide-react";

const education = [
  {
    degree: "B.Tech",
    institute: "KMEA Engineering College, Aluva",
    period: "2018–2021",
    description: "Bachelor of Technology in Computer Science",
    icon: <GraduationCap className="w-8 h-8" />
  },
  {
    degree: "Higher Secondary",
    institute: "SNV SKT HSS",
    period: "2015–2017",
    description: "Computer Science Stream",
    icon: <BookOpen className="w-8 h-8" />
  },
  {
    degree: "High School",
    institute: "Samooha HS",
    period: "2014–2015",
    description: "SSLC Completion",
    icon: <School className="w-8 h-8" />
  }
];

const Education = () => {
  const { scrollY } = useScroll();
  const yContent = useTransform(scrollY, [0, 500], [30, -30]);
  const opacityBg = useTransform(scrollY, [0, 500], [1, 0.6]);
  const scaleBg = useTransform(scrollY, [0, 500], [1, 1.05]);

  // State for hover effect
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="education" className="relative bg-black text-white overflow-hidden py-8">
      {/* Animated Background with scroll effects */}
      <motion.div
        style={{ opacity: opacityBg, scale: scaleBg }}
        className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black"
      />

      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: useTransform(scrollY, [0, 500], [0, 90]) }}
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{ 
            x: ["0%", "4%", "0%"],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          style={{ y: useTransform(scrollY, [0, 500], [0, -70]) }}
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{ 
            y: ["0%", "-4%", "0%"],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          style={{ y: useTransform(scrollY, [0, 500], [0, 50]) }}
          className="absolute top-2/3 left-1/3 w-56 h-56 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5
          }}
        />
      </div>

      <motion.div
        style={{ y: yContent }}
        className="relative z-10 max-w-5xl mx-auto px-6 py-16 w-full"
      >
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-4 mb-6">
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
              Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Qualifications</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg text-neutral-400 max-w-2xl mx-auto"
          >
            My academic background that laid the foundation for my career in technology
          </motion.p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 opacity-50 hidden md:block"
          />

          {/* Education Items */}
          <div className="space-y-12 md:pl-12">
            {education.map((edu, index) => (
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
                {/* Timeline Node (Desktop only) */}
                <motion.div
                  animate={{ 
                    scale: hoveredIndex === index ? 1.3 : 1,
                    boxShadow: hoveredIndex === index ? "0 0 20px rgba(59, 130, 246, 0.5)" : "none"
                  }}
                  className="absolute -left-12 top-6 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 z-10 hidden md:block"
                />

                {/* Glow Effect on Hover (Desktop only) */}
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -left-13 top-5 w-9 h-9 bg-blue-500 opacity-20 blur-sm hidden md:block"
                  />
                )}

                {/* Education Card */}
                <motion.div
                  whileHover={{ 
                    x: 10,
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    borderColor: "rgba(147, 51, 234, 0.3)"
                  }}
                  className="p-6 rounded-xl border border-neutral-800 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon Section */}
                    <div className="flex-shrink-0">
                      <motion.div
                        animate={{ 
                          scale: hoveredIndex === index ? 1.2 : 1,
                          rotate: hoveredIndex === index ? [0, 5, -5, 0] : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-blue-400"
                      >
                        {edu.icon}
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                        <div>
                          <motion.h3
                            animate={{ 
                              color: hoveredIndex === index ? "#ffffff" : "#f3f4f6"
                            }}
                            className="text-xl sm:text-2xl font-semibold"
                          >
                            {edu.degree}
                          </motion.h3>
                          <motion.p
                            animate={{ 
                              color: hoveredIndex === index ? "#d1d5db" : "#9ca3af"
                            }}
                            className="text-neutral-400 text-lg"
                          >
                            {edu.institute}
                          </motion.p>
                        </div>
                        
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className="px-4 py-1 text-sm bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full border border-purple-500/30 w-fit"
                        >
                          {edu.period}
                        </motion.span>
                      </div>

                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + (index * 0.1) }}
                        className="text-neutral-300 mt-4"
                      >
                        {edu.description}
                      </motion.p>

                      {/* Achievement Indicators */}
                      {index === 0 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 }}
                          className="mt-6 pt-6 border-t border-neutral-800"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-blue-500" />
                              <span className="text-sm text-neutral-400">Computer Science Focus</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Bottom Gradient Border */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mt-4"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 text-neutral-400">
            <Info className="w-5 h-5" />
            <span>Continuously learning through online courses and self-study</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
