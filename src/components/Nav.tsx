import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll effect for navbar background, active section detection, and scroll progress
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
      
      // Detect active section - CHANGED TO LOWERCASE
      const sections = ["home", "about", "skills", "contact"]; // lowercase
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

  // Navigation items - CHANGED TO LOWERCASE
  const navItems = ["home", "about", "skills", "contact"];

  // Resume download function
  const downloadResume = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/Thejus mohanan.pdf'; // Make sure this file is in your public folder
    link.download = 'Thejus_Mohanan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Scroll Progress Indicator */}
        <div 
          className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
          style={{ width: `${scrollProgress}%` }}
        />
        
        <div className="max-w-6xl mx-auto px-6 py-4">
          {/* Desktop Navigation - hidden on mobile */}
          <div className="hidden md:flex items-center justify-center">
            {/* Centered Navigation Links */}
            <ul className="flex space-x-8 text-neutral-300 text-sm sm:text-base font-medium">
              {navItems.map((section) => (
                <li
                  key={section}
                  className={`hover:text-white transition-colors cursor-pointer ${
                    activeSection === section ? "text-white font-semibold" : "text-neutral-300"
                  }`}
                  onClick={() => scrollToSection(section)}
                >
                  {/* Capitalize for display only */}
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  {activeSection === section && (
                    <motion.div 
                      className="h-0.5 bg-white mt-1"
                      layoutId="activeSectionIndicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </li>
              ))}
            </ul>
            
            {/* Resume Download Button - Desktop (Positioned absolutely on the right) */}
            <div className="absolute right-6">
              <button
                onClick={downloadResume}
                className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm sm:text-base flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </button>
            </div>
          </div>

          {/* Mobile Header with Hamburger */}
          <div className="flex md:hidden justify-between items-center">
            {/* Resume Download Button - Mobile (only icon) */}
            <button
              onClick={downloadResume}
              className="bg-white text-black p-2 rounded-lg hover:bg-gray-200 transition-colors"
              aria-label="Download Resume"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
            
            {/* Hamburger Menu Button */}
            <button
              className="relative w-8 h-8 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6">
                <span 
                  className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-out ${
                    isMenuOpen ? "rotate-45 top-0" : "-translate-y-1.5"
                  }`}
                />
                <span 
                  className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-out ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span 
                  className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-out ${
                    isMenuOpen ? "-rotate-45 top-0" : "translate-y-1.5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        </motion.div>
      )}

      {/* Mobile Menu Content */}
      <motion.div
        className={`fixed top-0 right-0 h-full w-64 z-50 md:hidden transform transition-transform duration-300 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        initial={false}
      >
        <div className="h-full bg-black/95 backdrop-blur-md border-l border-white/10 pt-20 px-6">
          {/* Close button at the top right */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl hover:text-neutral-300 transition-colors focus:outline-none"
            aria-label="Close menu"
          >
            ×
          </button>
          
          <ul className="space-y-8">
            {navItems.map((section) => (
              <motion.li
                key={section}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navItems.indexOf(section) * 0.1 }}
                className={`text-lg font-medium hover:text-white transition-colors cursor-pointer flex flex-col ${
                  activeSection === section ? "text-white font-semibold" : "text-neutral-300"
                }`}
                onClick={() => scrollToSection(section)}
              >
                {/* Capitalize for display only */}
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <motion.div 
                    className="h-0.5 bg-white mt-1 w-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.li>
            ))}
            
            {/* Resume Download Button in Mobile Menu */}
            <motion.li
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="pt-8"
            >
              <button
                onClick={() => {
                  downloadResume();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-white text-black px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium text-center flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </button>
            </motion.li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;