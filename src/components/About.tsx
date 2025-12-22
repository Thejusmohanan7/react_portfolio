import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const { scrollY } = useScroll();

  // Parallax effect
  const yContent = useTransform(scrollY, [0, 400], [40, -40]);

  return (
    <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-neutral-900/60" />

      {/* Content */}
      <motion.div
        style={{ y: yContent }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-8 space-y-6 text-neutral-400 text-sm sm:text-base leading-relaxed"
        >
          <p>
            I am a frontend and Next.js developer focused on building clean,
            scalable, and performance-driven web applications. I enjoy working
            at the intersection of design and engineering, turning complex
            requirements into intuitive user experiences.
          </p>

          <p>
            With hands-on experience in React, TypeScript, and modern frontend
            tooling, I prioritize maintainable code, accessibility, and
            responsive design. I am constantly learning and refining my skills
            to stay aligned with evolving web standards.
          </p>

          <p>
            I value simplicity, clarity, and attention to detail — principles
            that guide both my development process and the products I build.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
