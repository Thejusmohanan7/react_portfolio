import { motion, useScroll, useTransform } from "framer-motion";

const contact = {
  name: "Thejus Mohanan",
  role: "Front-End / Full-Stack Developer",
  phone: "+91 8156970994",
  email: "thejusmohanan0@gmail.com",
  location: "N Paravoor, Ernakulam",
  linkedin: "https://linkedin.com/in/thejus-mohanan-a09282217",
  github: "https://github.com/Thejusmohanan7"
};

const Contact = () => {
  const { scrollY } = useScroll();
  const yContent = useTransform(scrollY, [0, 500], [30, -30]);

  return (
    <section id="contact" className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-neutral-900 opacity-90" />

      <motion.div
        style={{ y: yContent }}
        className="relative z-10 max-w-3xl mx-auto px-6 py-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-12 text-center"
        >
          Contact
        </motion.h2>

        <div className="space-y-4 text-center text-neutral-400">
          <p><span className="font-semibold text-white">{contact.name}</span> — {contact.role}</p>
          <p>📞 {contact.phone}</p>
          <p>✉️ {contact.email}</p>
          <p>📍 {contact.location}</p>
          <p>
            🔗 <a href={contact.linkedin} target="_blank" className="underline">LinkedIn</a> | 
            🔗 <a href={contact.github} target="_blank" className="underline ml-1">GitHub</a>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
