import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download,X, Home, User, Code2, Mail } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Navigation items with icons
  const navItems = [
    { id: "home", label: "Home", icon: <Home className="w-4 h-4" /> },
    { id: "about", label: "About", icon: <User className="w-4 h-4" /> },
    { id: "experience", label: "Experience", icon: <Code2 className="w-4 h-4" /> },
    { id: "projects", label: "Projects", icon: <Code2 className="w-4 h-4" /> },
    { id: "skills", label: "Skills", icon: <Code2 className="w-4 h-4" /> },
    { id: "education", label: "Education", icon: <User className="w-4 h-4" /> },
    { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> }
  ];

  // Scroll effect for navbar background, active section detection, and scroll progress
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
      
      // Detect active section
      const sections = ["home", "about", "experience", "projects", "skills", "education", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if element is in viewport (with some offset)
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside on mobile
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Resume download function
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Thejus mohanan.pdf';
    link.download = 'Thejus_Mohanan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-black/95 backdrop-blur-lg shadow-lg" 
            : "bg-transparent"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Scroll Progress Indicator */}
        <motion.div 
          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 transition-all duration-300 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
          style={{ width: `${scrollProgress}%` }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
        
        <div className="max-w-7xl mx-auto px-6 py-4">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between">
            {/* Empty space on left side where logo used to be */}
            <div className="w-0"></div>

            {/* Centered Navigation Links */}
            <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm rounded-full p-1 border border-white/10">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 ${
                    activeSection === item.id 
                      ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30" 
                      : "text-neutral-300 hover:text-white hover:bg-white/5"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                  {activeSection === item.id && (
                    <motion.div 
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      layoutId="activeIndicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Resume Download Button */}
            <motion.button
              onClick={downloadResume}
              className="group relative overflow-hidden px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {/* Button shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <Download className="w-4 h-4" />
              <span className="relative z-10">Resume</span>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden items-center justify-between">
            {/* Empty space on left side - logo removed */}
            <div className="w-0"></div>

            <div className="flex items-center gap-3">
              {/* Resume Download Button - Mobile */}
              <motion.button
                onClick={downloadResume}
                className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Download Resume"
              >
                <Download className="w-5 h-5" />
              </motion.button>

              {/* Hamburger Menu Button */}
              <motion.button
                className="relative w-10 h-10 focus:outline-none flex items-center justify-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={isMenuOpen ? "open" : "closed"}
                  className="relative w-6 h-6"
                >
                  <motion.span
                    className="absolute top-0 left-0 w-full h-0.5 bg-white rounded-full"
                    variants={{
                      closed: { top: "0%", rotate: 0 },
                      open: { top: "45%", rotate: 45 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute top-2.5 left-0 w-full h-0.5 bg-white rounded-full"
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute top-5 left-0 w-full h-0.5 bg-white rounded-full"
                    variants={{
                      closed: { top: "100%", rotate: 0 },
                      open: { top: "45%", rotate: -45 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-lg" />
        </motion.div>
      )}

      {/* Mobile Menu Content */}
      <motion.div
        className={`fixed top-0 right-0 h-full w-72 z-50 lg:hidden transform transition-transform duration-300 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        initial={false}
      >
        <div className="h-full bg-gradient-to-b from-black via-neutral-900 to-black border-l border-white/10 pt-20 px-6 overflow-y-auto">
          {/* Close button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-neutral-300 transition-colors focus:outline-none"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-8"
          >
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <Code2 className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">Thejus Mohanan</h3>
            <p className="text-neutral-400 text-sm">Frontend Developer</p>
          </motion.div>

          {/* Navigation Links */}
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + (index * 0.1) }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30"
                      : "text-neutral-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className={`p-2 rounded-lg ${
                    activeSection === item.id 
                      ? "bg-gradient-to-r from-blue-500 to-purple-500" 
                      : "bg-neutral-800"
                  }`}>
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.label}</span>
                  {activeSection === item.id && (
                    <motion.div
                      className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Resume Download Button in Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="mt-8 pt-6 border-t border-white/10"
          >
            <button
              onClick={() => {
                downloadResume();
                setIsMenuOpen(false);
              }}
              className="w-full group relative overflow-hidden px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium flex items-center justify-center gap-2"
            >
              {/* Button shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <Download className="w-5 h-5" />
              <span className="relative z-10">Download Resume</span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 pt-6 border-t border-white/10"
          >
            <p className="text-neutral-400 text-sm mb-4 text-center">Connect with me</p>
            <div className="flex justify-center gap-4">
              {[
                { icon: "💼", label: "LinkedIn" },
                { icon: "🐙", label: "GitHub" },
                { icon: "📧", label: "Email" }
              ].map((social, index) => (
                <motion.button
                  key={index}
                  whileHover={{ y: -3 }}
                  className="p-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
