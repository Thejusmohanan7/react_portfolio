import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();
  const yTitle = useTransform(scrollY, [0, 300], [0, -60]);
  const ySubtitle = useTransform(scrollY, [0, 300], [0, -30]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-neutral-900 opacity-90" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 text-center">
        <motion.h1
          style={{ y: yTitle }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white"
        >
          Thejus Mohanan
        </motion.h1>

        <motion.p
          style={{ y: ySubtitle }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-base sm:text-lg md:text-xl text-neutral-400 leading-relaxed"
        >
          Front-End / Next.js Developer · React · TypeScript · Tailwind CSS
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="mt-8 max-w-2xl mx-auto text-sm sm:text-base text-neutral-500"
        >
          Skilled in building responsive, modern web applications with clean
          and maintainable code. Dedicated to delivering high-quality, scalable
          solutions in Agile environments.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 text-neutral-500 text-xs tracking-widest"
      >
        SCROLL
      </motion.div>
    </section>
  );
};

export default Hero;
