import { motion, useScroll, useTransform } from "framer-motion";
import { 
  GraduationCap,
  Target,
  Users,
  TrendingUp,
  Brain,
  Palette
} from "lucide-react";

const About = () => {
  const { scrollY } = useScroll();
  const yContent = useTransform(scrollY, [0, 400], [40, -40]);
  const opacityBg = useTransform(scrollY, [0, 400], [1, 0.6]);
  const scaleBg = useTransform(scrollY, [0, 400], [1, 1.05]);

  return (
    <section id="about" className="relative bg-black text-white overflow-hidden py-8">
      {/* Animated Background with scroll effects */}
      <motion.div
        style={{ opacity: opacityBg, scale: scaleBg }}
        className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black"
      />

      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: useTransform(scrollY, [0, 400], [0, 80]) }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{ 
            x: ["0%", "5%", "0%"],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          style={{ y: useTransform(scrollY, [0, 400], [0, -60]) }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{ 
            y: ["0%", "-5%", "0%"],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          style={{ y: useTransform(scrollY, [0, 400], [0, 40]) }}
          className="absolute top-2/3 left-1/3 w-48 h-48 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>

      {/* Content Container */}
      <motion.div
        style={{ y: yContent }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-16"
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
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Me</span>
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
            Get to know my journey, what I'm looking for, and what excites me about development
          </motion.p>
        </motion.div>

        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - My Learning Journey */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-semibold flex items-center gap-3"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 rounded-full border-2 border-blue-400"
              />
              My Learning Journey
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-4"
            >
              <p className="text-neutral-300 text-lg leading-relaxed cursor-default">
                My coding journey started with simple HTML pages, fascinated by how websites worked. 
                What began as curiosity turned into late nights debugging CSS and celebrating when 
                animations finally worked. There's something magical about watching code come to life 
                on screen.
              </p>

              <p className="text-neutral-300 text-lg leading-relaxed cursor-default">
                Every project taught me something new - whether it was figuring out responsive design 
                for mobile devices or learning how state management works in React. The "aha!" moments 
                when concepts click are what keep me going. I'm always the developer who asks "why" 
                and "how can this be better?"
              </p>
            </motion.div>

            {/* What Drives Me */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pt-6"
            >
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                What Keeps Me Going
              </h4>
              <div className="space-y-3">
                {[
                  "That satisfying feeling when a complex feature works perfectly",
                  "Seeing users enjoy something I built",
                  "Learning from mistakes - every bug is a lesson",
                  "Collaborating with others and growing together"
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3 text-neutral-300 group cursor-default"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      className="w-2 h-2 rounded-full bg-blue-400"
                    />
                    <span className="group-hover:text-blue-300 transition-colors duration-300">
                      {value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Roles & Problem Solving */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-semibold flex items-center gap-3"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
              />
              Looking Forward
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-4"
            >
              <p className="text-neutral-300 text-lg leading-relaxed cursor-default">
                <span className="font-medium text-white">Roles I'm excited about:</span> I'm looking for 
                Frontend Developer roles where I can build products that people actually use. 
                I thrive in teams that value clean code, user experience, and continuous improvement. 
                Junior positions or apprenticeships are perfect - I want to grow with a team.
              </p>

              <p className="text-neutral-300 text-lg leading-relaxed cursor-default">
                <span className="font-medium text-white">Real-world problem solving:</span> What gets me 
                out of bed is solving actual problems. Like when I built Homora Interiors and helped 
                showcase their designs online, or created Own Media to help photographers share their 
                work. I love building things that make someone's day easier or more beautiful.
              </p>
            </motion.div>

            {/* What I'm Looking For */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pt-6"
            >
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                What I'm Looking For
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { text: "Mentorship", icon: <GraduationCap className="w-4 h-4" />, color: "text-blue-400" },
                  { text: "Real Impact", icon: <Target className="w-4 h-4" />, color: "text-red-400" },
                  { text: "Collaboration", icon: <Users className="w-4 h-4" />, color: "text-green-400" },
                  { text: "Growth", icon: <TrendingUp className="w-4 h-4" />, color: "text-purple-400" },
                  { text: "Learning", icon: <Brain className="w-4 h-4" />, color: "text-yellow-400" },
                  { text: "Creativity", icon: <Palette className="w-4 h-4" />, color: "text-pink-400" }
                ].map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                    whileHover={{ 
                      scale: 1.1,
                      y: -3,
                      backgroundColor: "rgba(147, 51, 234, 0.2)",
                      borderColor: "rgb(147, 51, 234)"
                    }}
                    className="px-4 py-2 text-sm bg-neutral-900 text-neutral-300 rounded-full border border-neutral-800 transition-all duration-300 cursor-default select-none flex items-center gap-2"
                  >
                    <span className={`${item.color}`}>
                      {item.icon}
                    </span>
                    <span>{item.text}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Human Touch Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto">
            
            <motion.p
              whileHover={{ scale: 1.02 }}
              className="text-xl text-neutral-300 mb-4 cursor-default italic"
            >
              "I believe the best code comes from understanding people, not just computers. 
              That's why I focus on building things that are both technically sound and 
              genuinely useful."
            </motion.p>
            
            {/* Fun Fact */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="mt-8 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20 max-w-md mx-auto"
            >
              <p className="text-neutral-300 text-sm flex items-center justify-center gap-2">
                <span className="text-blue-400">💡 Fun fact:</span> 
                My first website was a fan page for my favorite football team - 
                complete with blinking text and auto-playing background music!
              </p>
            </motion.div>
            
            <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto opacity-50 mt-6" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
