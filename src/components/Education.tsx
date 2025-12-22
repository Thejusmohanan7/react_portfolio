import { motion, useScroll, useTransform } from "framer-motion";

const education = [
  {
    degree: "B.Tech",
    institute: "KMEA Engineering College, Aluva",
    period: "2018–2021"
  },
  {
    degree: "Higher Secondary",
    institute: "SNV SKT HSS",
    period: "2015–2017"
  },
  {
    degree: "High School",
    institute: "Samooha HS",
    period: "2014–2015"
  }
];

const Education = () => {
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
          Education
        </motion.h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="bg-neutral-900/70 backdrop-blur-md p-6 rounded-xl border border-neutral-700"
            >
              <h3 className="text-xl sm:text-2xl font-semibold">{edu.degree}</h3>
              <p className="text-neutral-400">{edu.institute}</p>
              <p className="text-neutral-500 text-sm">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
