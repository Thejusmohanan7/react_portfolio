import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { 
  Cpu,
  Database,
  Settings,
  TrendingUp
} from "lucide-react";

interface SkillCategory {
  category: string;
  skills: string[];
  icon: React.ReactNode;
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Framer Motion"],
    icon: <Cpu className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    category: "Backend & Databases",
    skills: ["Node.js", "Python", "Django", "MongoDB", "SQL", "REST APIs", "Authentication", "API Integration"],
    icon: <Database className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    category: "Tools & Methodologies",
    skills: ["Git, GitHub", "CI/CD", "Vercel", "Agile", "Responsive Design", "Performance", "Accessibility", "Testing"],
    icon: <Settings className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500"
  }
];

const Skills = () => {
  const { scrollY } = useScroll();
  const yContent = useTransform(scrollY, [0, 500], [30, -30]);
  const opacityBg = useTransform(scrollY, [0, 500], [1, 0.6]);
  const scaleBg = useTransform(scrollY, [0, 500], [1, 1.05]);

  // State for hover effects - only hoveredCategory is used
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <section id="skills" className="relative min-h-screen bg-black text-white flex items-center overflow-hidden">
      {/* Animated Background with scroll effects */}
      <motion.div
        style={{ opacity: opacityBg, scale: scaleBg }}
        className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black"
      />

      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: useTransform(scrollY, [0, 500], [0, 100]) }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{ 
            x: ["0%", "5%", "0%"],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          style={{ y: useTransform(scrollY, [0, 500], [0, -80]) }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{ 
            y: ["0%", "-5%", "0%"],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            duration: 11,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          style={{ y: useTransform(scrollY, [0, 500], [0, 60]) }}
          className="absolute top-2/3 left-1/3 w-56 h-56 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{ 
            scale: [1, 1.3, 1],
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
        className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full"
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
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Skills</span>
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
            Technologies and tools I work with to build modern web applications
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: catIndex * 0.2, ease: "easeOut" }}
              onMouseEnter={() => setHoveredCategory(catIndex)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="group cursor-default"
            >
              {/* Category Card */}
              <motion.div
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                }}
                className="h-full bg-gradient-to-br from-neutral-900 to-black rounded-xl border border-neutral-800 p-6 relative group-hover:border-blue-500/50 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    animate={{ 
                      rotate: hoveredCategory === catIndex ? [0, 10, -10, 0] : 0,
                      scale: hoveredCategory === catIndex ? 1.2 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-blue-400"
                  >
                    {category.icon}
                  </motion.div>
                  <div>
                    <motion.h3
                      animate={{ 
                        color: hoveredCategory === catIndex ? "#ffffff" : "#f3f4f6"
                      }}
                      className="text-xl font-semibold"
                    >
                      {category.category}
                    </motion.h3>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className={`h-0.5 bg-gradient-to-r ${category.color} mt-2`}
                    />
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (catIndex * 0.1) + (skillIndex * 0.05) }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -3,
                        backgroundColor: "rgba(59, 130, 246, 0.2)",
                        borderColor: "rgb(59, 130, 246)"
                      }}
                      className="p-3 text-sm bg-neutral-900/50 text-neutral-300 rounded-lg border border-neutral-800 text-center transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Gradient Border */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className={`h-0.5 bg-gradient-to-r ${category.color} mt-6`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Continuous Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="p-8 rounded-xl bg-gradient-to-br from-neutral-900 to-black border border-neutral-800"
          >
            <div className="flex items-center gap-4 mb-6">
              <TrendingUp className="w-8 h-8 text-yellow-400" />
              <div>
                <h4 className="text-2xl font-semibold">Continuous Learning</h4>
                <p className="text-neutral-400">Always expanding my skillset</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                { 
                  topic: "Advanced TypeScript", 
                  description: "Deepening knowledge of advanced TypeScript patterns and best practices" 
                },
                { 
                  topic: "Performance Optimization", 
                  description: "Learning advanced techniques for web performance and Core Web Vitals" 
                },
                { 
                  topic: "Testing (Jest, Cypress)", 
                  description: "Mastering testing methodologies for robust application development" 
                },
                { 
                  topic: "Web3 Basics", 
                  description: "Exploring blockchain technology and decentralized applications" 
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + (index * 0.1) }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-neutral-900/50 hover:bg-neutral-800/50 transition-colors duration-300"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    className="w-3 h-3 rounded-full bg-yellow-500 mt-2 flex-shrink-0"
                  />
                  <div>
                    <h5 className="font-medium text-neutral-200">{item.topic}</h5>
                    <p className="text-sm text-neutral-400 mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;