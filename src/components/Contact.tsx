import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef, type FormEvent } from "react";

const contact = {
  name: "Thejus Mohanan",
  role: "Front-End / Full-Stack Developer",
  phone: "+91 8156970994",
  email: "thejusmohanan0@gmail.com",
  location: "N Paravoor, Ernakulam",
  linkedin: "https://linkedin.com/in/thejus-mohanan-a09282217",
  github: "https://github.com/Thejusmohanan7",
  leetcode: "https://leetcode.com/u/thejusmohanan7/",
  twitter: "https://twitter.com/thejusmohanan7"
};

const Contact = () => {
  const { scrollY } = useScroll();
  const yContent = useTransform(scrollY, [0, 500], [30, -30]);
  const opacityBg = useTransform(scrollY, [0, 500], [1, 0.6]);
  const scaleBg = useTransform(scrollY, [0, 500], [1, 1.05]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [hoveredContact, setHoveredContact] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setHoveredContact(`copied-${type}`);
    setTimeout(() => setHoveredContact(null), 2000);
  };

  return (
    <section id="contact" className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Animated Background with scroll effects */}
      <motion.div
        style={{ opacity: opacityBg, scale: scaleBg }}
        className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black"
      />

      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: useTransform(scrollY, [0, 500], [0, 120]) }}
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{ 
            x: ["0%", "6%", "0%"],
            scale: [1, 1.25, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{ 
            y: ["0%", "-6%", "0%"],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          style={{ y: useTransform(scrollY, [0, 500], [0, 80]) }}
          className="absolute top-2/3 left-1/3 w-64 h-64 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
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
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Touch</span>
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
            Let's connect! I'm open to discussing opportunities, collaborations, or just chatting about tech.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Personal Info Card */}
            <motion.div
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
              }}
              className="p-8 rounded-xl bg-gradient-to-br from-neutral-900 to-black border border-neutral-800"
            >
              <div className="text-center mb-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-4xl">
                  {contact.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-2xl font-semibold">{contact.name}</h3>
                <p className="text-neutral-400 mt-2">{contact.role}</p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {[
                  {
                    type: "email",
                    label: "Email",
                    value: contact.email,
                    icon: "✉️",
                    action: () => handleCopy(contact.email, "email")
                  },
                  {
                    type: "phone",
                    label: "Phone",
                    value: contact.phone,
                    icon: "📞",
                    action: () => handleCopy(contact.phone, "phone")
                  },
                  {
                    type: "location",
                    label: "Location",
                    value: contact.location,
                    icon: "📍",
                    action: () => handleCopy(contact.location, "location")
                  }
                ].map((item) => (
                  <motion.div
                    key={item.type}
                    whileHover={{ x: 5 }}
                    onClick={item.action}
                    className="flex items-center gap-4 p-4 rounded-lg bg-neutral-900/50 hover:bg-neutral-800/50 cursor-pointer transition-colors duration-300 group"
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <div className="flex-1">
                      <p className="text-sm text-neutral-400">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 text-sm bg-neutral-800 rounded-lg text-neutral-300 hover:text-white hover:bg-blue-500/20 transition-colors duration-300"
                    >
                      {hoveredContact === `copied-${item.type}` ? "Copied!" : "Copy"}
                    </motion.button>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-neutral-800">
                <h4 className="text-lg font-semibold mb-4 text-center">Connect with me</h4>
                <div className="flex justify-center gap-6">
                  {[
                    { platform: "LinkedIn", url: contact.linkedin, icon: "💼", color: "hover:text-blue-400" },
                    { platform: "GitHub", url: contact.github, icon: "🐙", color: "hover:text-gray-300" },
                    { platform: "LeetCode", url: contact.leetcode, icon: "⚡", color: "hover:text-yellow-400" },
                    { platform: "Twitter", url: contact.twitter, icon: "🐦", color: "hover:text-sky-400" }
                  ].map((social) => (
                    <motion.a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`text-2xl ${social.color} transition-colors duration-300`}
                      aria-label={social.platform}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <h4 className="text-lg font-semibold">Currently Available</h4>
              </div>
              <p className="text-neutral-300 text-sm">
                Open to new opportunities, freelance projects, and collaborations.
                Response time: Usually within 24 hours.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
              }}
              className="p-8 rounded-xl bg-gradient-to-br from-neutral-900 to-black border border-neutral-800"
            >
              <h3 className="text-2xl font-semibold mb-2">Send me a message</h3>
              <p className="text-neutral-400 mb-8">Let's start a conversation</p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {[
                  { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                  { name: "email", label: "Your Email", type: "email", placeholder: "john@example.com" },
                  { name: "message", label: "Your Message", type: "textarea", placeholder: "Hi Thejus, I'd like to discuss..." }
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      {field.label}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        value={formData[field.name as keyof typeof formData]}
                        onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                        placeholder={field.placeholder}
                        rows={5}
                        className="w-full p-4 bg-neutral-900/50 border border-neutral-700 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 text-white resize-none"
                        required
                      />
                    ) : (
                      <input
                        type={field.type}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                        placeholder={field.placeholder}
                        className="w-full p-4 bg-neutral-900/50 border border-neutral-700 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 text-white"
                        required
                      />
                    )}
                  </div>
                ))}

                {/* Success Message */}
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center"
                  >
                    ✅ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                      </>
                    )}
                  </span>
                </motion.button>
              </form>

              <p className="text-neutral-500 text-sm mt-6 text-center">
                Your information is safe with me. I don't share contact details with third parties.
              </p>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 grid grid-cols-2 gap-4"
            >
              <motion.a
                href={`mailto:${contact.email}?subject=Let's Connect`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 text-center bg-neutral-900/50 hover:bg-blue-500/20 border border-neutral-800 rounded-lg transition-colors duration-300 flex flex-col items-center gap-2"
              >
                <span className="text-2xl">📧</span>
                <span className="text-sm font-medium">Email Directly</span>
              </motion.a>
              
              <motion.button
                onClick={() => handleCopy(contact.phone, "phone")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 text-center bg-neutral-900/50 hover:bg-green-500/20 border border-neutral-800 rounded-lg transition-colors duration-300 flex flex-col items-center gap-2"
              >
                <span className="text-2xl">📱</span>
                <span className="text-sm font-medium">Copy Phone</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Back to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 transition-colors duration-300"
            aria-label="Back to top"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;