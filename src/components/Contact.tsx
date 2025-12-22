import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef, type FormEvent } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Code2, 
  Twitter, 
  Send, 
  Copy, 
  CheckCircle,
  User,
  MessageSquare,
  Clock,
  Shield} from "lucide-react";

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
          className="absolute top-1/3 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl"
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
          className="absolute bottom-1/3 right-1/4 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl"
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
          className="absolute top-2/3 left-1/3 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-3xl"
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
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full"
      >
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden sm:block h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 sm:w-16 md:w-20"
            />
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight px-2"
            >
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Touch</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden sm:block h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 sm:w-16 md:w-20"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto px-4"
          >
            Let's connect! I'm open to discussing opportunities, collaborations, or just chatting about tech.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 px-4 sm:px-0">
          {/* Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Personal Info Card */}
            <motion.div
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
              }}
              className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-neutral-900 to-black border border-neutral-800"
            >
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    TM
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold">{contact.name}</h3>
                <p className="text-neutral-400 mt-2 text-sm sm:text-base">{contact.role}</p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    type: "email",
                    label: "Email",
                    value: contact.email,
                    icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />,
                    action: () => handleCopy(contact.email, "email")
                  },
                  {
                    type: "phone",
                    label: "Phone",
                    value: contact.phone,
                    icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" />,
                    action: () => handleCopy(contact.phone, "phone")
                  },
                  {
                    type: "location",
                    label: "Location",
                    value: contact.location,
                    icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />,
                    action: () => handleCopy(contact.location, "location")
                  }
                ].map((item) => (
                  <motion.div
                    key={item.type}
                    whileHover={{ x: 5 }}
                    onClick={item.action}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-neutral-900/50 hover:bg-neutral-800/50 cursor-pointer transition-colors duration-300 group"
                  >
                    <div className="text-blue-400">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-neutral-400">{item.label}</p>
                      <p className="font-medium text-sm sm:text-base truncate">{item.value}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm bg-neutral-800 rounded-lg text-neutral-300 hover:text-white hover:bg-blue-500/20 transition-colors duration-300 flex items-center gap-1 flex-shrink-0"
                    >
                      {hoveredContact === `copied-${item.type}` ? (
                        <>
                          <CheckCircle className="w-3 h-3" />
                          <span className="hidden sm:inline">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span className="hidden sm:inline">Copy</span>
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-neutral-800">
                <h4 className="text-lg font-semibold mb-4 text-center">Connect with me</h4>
                <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
                  {[
                    { platform: "LinkedIn", url: contact.linkedin, icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />, color: "text-blue-400 hover:text-blue-300" },
                    { platform: "GitHub", url: contact.github, icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />, color: "text-gray-300 hover:text-white" },
                    { platform: "LeetCode", url: contact.leetcode, icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />, color: "text-yellow-400 hover:text-yellow-300" },
                    { platform: "Twitter", url: contact.twitter, icon: <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />, color: "text-sky-400 hover:text-sky-300" }
                  ].map((social) => (
                    <motion.a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${social.color} transition-colors duration-300 p-2`}
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
              className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30"
            >
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 animate-pulse" />
                <h4 className="text-base sm:text-lg font-semibold">Currently Available</h4>
              </div>
              <div className="flex items-start gap-2 text-neutral-300 text-xs sm:text-sm">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                <span>Open to new opportunities. Response time: Usually within 24 hours.</span>
              </div>
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
              className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-neutral-900 to-black border border-neutral-800"
            >
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">Send me a message</h3>
                  <p className="text-neutral-400 text-sm sm:text-base">Let's start a conversation</p>
                </div>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {[
                  { name: "name", label: "Your Name", icon: <User className="w-4 h-4" />, placeholder: "John Doe" },
                  { name: "email", label: "Your Email", icon: <Mail className="w-4 h-4" />, placeholder: "john@example.com" },
                  { name: "message", label: "Your Message", icon: <MessageSquare className="w-4 h-4" />, placeholder: "Hi Thejus, I'd like to discuss..." }
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-neutral-300 mb-2 flex items-center gap-2">
                      {field.icon}
                      <span className="text-xs sm:text-sm">{field.label}</span>
                    </label>
                    {field.name === 'message' ? (
                      <textarea
                        value={formData[field.name as keyof typeof formData]}
                        onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                        placeholder={field.placeholder}
                        rows={4}
                        className="w-full p-3 sm:p-4 text-sm sm:text-base bg-neutral-900/50 border border-neutral-700 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 text-white resize-none"
                        required
                      />
                    ) : (
                      <input
                        type={field.name === 'email' ? 'email' : 'text'}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                        placeholder={field.placeholder}
                        className="w-full p-3 sm:p-4 text-sm sm:text-base bg-neutral-900/50 border border-neutral-700 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 text-white"
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
                    className="p-3 sm:p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
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
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                        Send Message
                      </>
                    )}
                  </span>
                </motion.button>
              </form>

              <div className="flex items-center gap-2 mt-4 sm:mt-6 text-neutral-500 text-xs sm:text-sm">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Your information is safe with me. I don't share contact details with third parties.</span>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-4 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4"
            >
              <motion.a
                href={`mailto:${contact.email}?subject=Let's Connect`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 sm:p-4 text-center bg-neutral-900/50 hover:bg-blue-500/20 border border-neutral-800 rounded-lg transition-colors duration-300 flex flex-col items-center gap-1 sm:gap-2 group"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:text-blue-300" />
                <span className="text-xs sm:text-sm font-medium">Email Directly</span>
              </motion.a>
              
              <motion.button
                onClick={() => handleCopy(contact.phone, "phone")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 sm:p-4 text-center bg-neutral-900/50 hover:bg-green-500/20 border border-neutral-800 rounded-lg transition-colors duration-300 flex flex-col items-center gap-1 sm:gap-2 group"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 group-hover:text-green-300" />
                <span className="text-xs sm:text-sm font-medium">Copy Phone</span>
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
          className="mt-12 sm:mt-16 text-center"
        >
          {/* <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 transition-colors duration-300 group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-400 group-hover:text-white" />
          </motion.button> */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;