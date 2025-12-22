import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const { scrollY } = useScroll();
  const yContent = useTransform(scrollY, [0, 400], [40, -40]);

  return (
    <section id="about" className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-neutral-900 opacity-90" />

      <motion.div
        style={{ y: yContent }}
        className="relative z-10 max-w-4xl mx-auto px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
        >
          Professional Summary
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 space-y-4 text-neutral-400 text-sm sm:text-base leading-relaxed"
        >
          <p>
            Front-End Developer skilled in building responsive, modern web
            applications using React, Next.js, TypeScript, and Tailwind CSS.
          </p>
          <p>
            Experienced in API integration, authentication, performance
            optimization, and clean UI development. Dedicated to delivering
            scalable and maintainable code in Agile environments.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
