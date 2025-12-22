import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Heart, 
  Code, 
  Coffee, 
  ExternalLink,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Code2,
  Twitter,
  Cpu,
  Zap,
  Shield,
  FileCode,
  Server,
  Globe,
  Sparkles
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactInfo = {
    email: "thejusmohanan0@gmail.com",
    phone: "+91 8156970994",
    location: "N Paravoor, Ernakulam"
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { 
      name: "LinkedIn", 
      href: "https://linkedin.com/in/thejus-mohanan-a09282217", 
      icon: <Linkedin className="w-5 h-5" />,
      color: "text-blue-400 hover:text-blue-300"
    },
    { 
      name: "GitHub", 
      href: "https://github.com/Thejusmohanan7", 
      icon: <Github className="w-5 h-5" />,
      color: "text-gray-300 hover:text-white"
    },
    { 
      name: "LeetCode", 
      href: "https://leetcode.com/u/thejusmohanan7/", 
      icon: <Code2 className="w-5 h-5" />,
      color: "text-yellow-400 hover:text-yellow-300"
    },
    { 
      name: "Twitter", 
      href: "https://twitter.com/thejusmohanan7", 
      icon: <Twitter className="w-5 h-5" />,
      color: "text-sky-400 hover:text-sky-300"
    }
  ];

  const techStack = [
    { icon: <FileCode className="w-4 h-4" />, name: "React", color: "text-cyan-400" },
    { icon: <FileCode className="w-4 h-4" />, name: "TypeScript", color: "text-blue-400" },
    { icon: <Sparkles className="w-4 h-4" />, name: "Tailwind", color: "text-teal-400" },
    { icon: <Zap className="w-4 h-4" />, name: "Framer Motion", color: "text-purple-400" },
    { icon: <Server className="w-4 h-4" />, name: "Vercel", color: "text-white" }
  ];

  return (
    <footer className="relative bg-black text-white pt-16 pb-8 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/20 to-black"></div>

      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-1/4 left-10 w-48 h-48 bg-blue-600/10 rounded-full mix-blend-screen filter blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-1/4 right-10 w-32 h-32 bg-purple-600/10 rounded-full mix-blend-screen filter blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-600/10 rounded-full mix-blend-screen filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center"
              >
                <Cpu className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Thejus Mohanan
                </h3>
                <p className="text-sm text-neutral-400">Frontend Developer</p>
              </div>
            </div>
            
            <p className="text-neutral-300 text-sm leading-relaxed">
              Crafting beautiful, functional web experiences with modern technologies. 
              Passionate about clean code and user-centered design.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs text-neutral-400">Tech Stack:</span>
                <div className="flex gap-2">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -3 }}
                      className={`${tech.color} bg-neutral-900/50 p-1.5 rounded-lg border border-neutral-800`}
                      title={tech.name}
                    >
                      {tech.icon}
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-4 pt-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={() => setIsHovered(social.name)}
                    onMouseLeave={() => setIsHovered(null)}
                    className={`w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:border-blue-500/30 transition-all duration-300 group ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: isHovered === social.name ? 1 : 0,
                        y: isHovered === social.name ? 0 : 10,
                      }}
                      className="absolute -top-8 bg-neutral-900 px-3 py-1.5 rounded-lg text-xs whitespace-nowrap border border-neutral-800"
                    >
                      {social.name}
                    </motion.span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-5 h-5 text-blue-400" />
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            </div>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="flex items-center justify-between text-neutral-300 hover:text-white group py-2 px-3 rounded-lg hover:bg-neutral-900/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="text-sm">{link.name}</span>
                    </div>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-5 h-5 text-blue-400" />
              <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: <Mail className="w-4 h-4" />,
                  label: "Email",
                  value: contactInfo.email,
                  href: `mailto:${contactInfo.email}`
                },
                {
                  icon: <Phone className="w-4 h-4" />,
                  label: "Phone",
                  value: contactInfo.phone,
                  href: `tel:${contactInfo.phone.replace(/\s/g, '')}`
                },
                {
                  icon: <MapPin className="w-4 h-4" />,
                  label: "Location",
                  value: contactInfo.location,
                  href: "#"
                }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-start gap-3 group p-3 rounded-lg hover:bg-neutral-900/50 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="text-blue-400 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 mb-1">{item.label}</p>
                    <p className="text-sm text-neutral-300 group-hover:text-white transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Back to Top & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center lg:text-right">
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <ArrowUp className="w-4 h-4 relative z-10 group-hover:-translate-y-1 transition-transform duration-300" />
                <span className="text-sm relative z-10">Back to Top</span>
              </motion.button>
            </div>

            {/* Fun Stats */}
            <div className="space-y-4 p-4 rounded-xl bg-neutral-900/30 border border-neutral-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-neutral-300">Projects Built</span>
                </div>
                <span className="font-semibold text-white">25+</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-neutral-300">Coffee Cups</span>
                </div>
                <span className="font-semibold text-white">1,000+</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span className="text-sm text-neutral-300">Happy Hours</span>
                </div>
                <span className="font-semibold text-white">∞</span>
              </div>
            </div>

            {/* Visitor Counter */}
           
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent my-8"
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 text-neutral-400 text-sm"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>© {currentYear} Thejus Mohanan. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>Made with passion in India</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-6 text-sm"
          >
            <a
              href="#"
              className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 group"
            >
              <Shield className="w-4 h-4 group-hover:text-blue-400" />
              <span>Privacy</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 group"
            >
              <FileCode className="w-4 h-4 group-hover:text-green-400" />
              <span>Terms</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 group"
            >
              <Sparkles className="w-4 h-4 group-hover:text-purple-400" />
              <span>Cookies</span>
            </a>
          </motion.div>
        </div>

        {/* Tech Stack Footer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-8 pt-6 border-t border-neutral-800/50"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-neutral-500">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4" />
              <span>Built with React & TypeScript</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Styled with Tailwind CSS</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>Animated with Framer Motion</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>Deployed on Vercel</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;