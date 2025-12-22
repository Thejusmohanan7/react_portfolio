import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const { scrollY } = useScroll();
  const yTitle = useTransform(scrollY, [0, 300], [0, -60]);
  const ySubtitle = useTransform(scrollY, [0, 300], [0, -30]);
  const opacityBg = useTransform(scrollY, [0, 300], [1, 0.5]);
  const scaleBg = useTransform(scrollY, [0, 300], [1, 1.1]);
  
  // State for letter-by-letter animation
  const [isNameHovered, setIsNameHovered] = useState(false);
  const [animatedText, setAnimatedText] = useState("");

  const name = "Thejus Mohanan";
  const nameLetters = name.split("");

  // Letter animation effect on hover - FIXED VERSION
  useEffect(() => {
    if (isNameHovered) {
      let timeoutIds: number[] = [];
      
      // Clear current text and animate letter by letter
      setAnimatedText("");
      nameLetters.forEach((letter, index) => {
        const timeoutId = window.setTimeout(() => {
          setAnimatedText(prev => prev + letter);
        }, index * 50); // 50ms delay between letters
        
        timeoutIds.push(timeoutId);
      });
      
      return () => {
        timeoutIds.forEach(id => window.clearTimeout(id));
      };
    } else {
      // Reset to full name when not hovering
      setAnimatedText(name);
    }
  }, [isNameHovered]);

  // Initialize text
  useEffect(() => {
    setAnimatedText(name);
  }, []);

  // State for social icon hover
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const handleViewProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactMe = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Social Media Icons Component with hover animation
  const GitHubIcon = ({ isHovered }: { isHovered: boolean }) => (
    <motion.svg
      className="w-5 h-5 sm:w-6 sm:h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
      animate={{ 
        rotate: isHovered ? [0, 10, -10, 0] : 0,
        scale: isHovered ? 1.2 : 1
      }}
      transition={{ duration: 0.3 }}
    >
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </motion.svg>
  );

  const LinkedInIcon = ({ isHovered }: { isHovered: boolean }) => (
    <motion.svg
      className="w-5 h-5 sm:w-6 sm:h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
      animate={{ 
        y: isHovered ? [-3, 0, -3] : 0,
        scale: isHovered ? 1.2 : 1
      }}
      transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
    >
      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
    </motion.svg>
  );

  const TwitterIcon = ({ isHovered }: { isHovered: boolean }) => (
    <motion.svg
      className="w-5 h-5 sm:w-6 sm:h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
      animate={{ 
        rotate: isHovered ? [0, 360] : 0,
        scale: isHovered ? 1.2 : 1
      }}
      transition={{ duration: 0.5 }}
    >
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </motion.svg>
  );

  return (
    <section id="home" className="relative min-h-screen pt-14 flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background with scroll effects */}
      <motion.div
        style={{ opacity: opacityBg, scale: scaleBg }}
        className="absolute inset-0 bg-gradient-to-b from-black via-black to-neutral-900"
      />

      {/* Animated floating elements with scroll parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: useTransform(scrollY, [0, 300], [0, 100]) }}
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"
          animate={{ 
            x: ["0%", "5%", "0%"],
            y: ["0%", "3%", "0%"]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          style={{ y: useTransform(scrollY, [0, 300], [0, -100]) }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"
          animate={{ 
            x: ["0%", "-5%", "0%"],
            y: ["0%", "-3%", "0%"]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5
          }}
        />
        <motion.div
          style={{ y: useTransform(scrollY, [0, 300], [0, 50]) }}
          className="absolute top-3/4 left-1/3 w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-15"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl px-4 sm:px-6 md:px-8 text-center">
        {/* Main Title with letter-by-letter hover animation */}
        <motion.div
          onMouseEnter={() => setIsNameHovered(true)}
          onMouseLeave={() => setIsNameHovered(false)}
          className="cursor-pointer inline-block px-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.h1
            style={{ y: yTitle }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-tight"
          >
            {animatedText.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  color: isNameHovered ? 
                    ["#ffffff", "#60a5fa", "#ffffff"] : 
                    "#ffffff"
                }}
                transition={{ 
                  duration: 0.3,
                  delay: isNameHovered ? index * 0.05 : 0,
                  color: {
                    duration: 2,
                    repeat: isNameHovered ? Infinity : 0,
                    repeatType: "reverse"
                  }
                }}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
          
          {/* Underline animation on hover */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isNameHovered ? "100%" : 0 }}
            transition={{ duration: 0.3 }}
            className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mt-1 sm:mt-2 mx-auto"
          />
        </motion.div>

        {/* Subtitle with scroll animation */}
        <motion.p
          style={{ y: ySubtitle }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="mt-4 sm:mt-6 text-sm xs:text-base sm:text-lg md:text-xl text-neutral-400 leading-relaxed cursor-default px-2"
        >
          Front-End / Next.js Developer · React · TypeScript · Tailwind CSS
        </motion.p>

        {/* Description with fade-in */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          whileHover={{ 
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            padding: "0.75rem",
            borderRadius: "0.5rem"
          }}
          className="mt-6 sm:mt-8 max-w-2xl mx-auto text-xs xs:text-sm sm:text-base text-neutral-500 p-3 sm:p-4 transition-all duration-300 cursor-default"
        >
          Skilled in building responsive, modern web applications with clean
          and maintainable code. Dedicated to delivering high-quality, scalable
          solutions in Agile environments.
        </motion.p>

        {/* CTA Buttons with hover animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap justify-center gap-3 sm:gap-4 px-2"
        >
          <motion.button
            onClick={handleViewProjects}
            className="px-6 py-2.5 sm:px-8 sm:py-3 bg-white text-black rounded-lg font-medium text-xs xs:text-sm sm:text-base flex items-center gap-2 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <svg className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="relative z-10 whitespace-nowrap">View Projects</span>
          </motion.button>
          
          <motion.button
            onClick={handleContactMe}
            className="px-6 py-2.5 sm:px-8 sm:py-3 border border-white text-white rounded-lg font-medium text-xs xs:text-sm sm:text-base flex items-center gap-2 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Border glow effect */}
            <motion.div
              className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-300"
            />
            <div className="absolute inset-0 bg-black rounded-lg group-hover:bg-transparent transition duration-300" />
            <svg className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="relative z-10 whitespace-nowrap">Contact Me</span>
          </motion.button>
        </motion.div>

        {/* Social Media Links with hover animations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="mt-8 sm:mt-10 md:mt-12 flex justify-center gap-6 sm:gap-8 px-2"
        >
          {[
            { name: 'github', icon: GitHubIcon, href: 'https://github.com' },
            { name: 'linkedin', icon: LinkedInIcon, href: 'https://linkedin.com' },
            { name: 'twitter', icon: TwitterIcon, href: 'https://twitter.com' },
            { 
              name: 'email', 
              component: ({ isHovered }: { isHovered: boolean }) => (
                <motion.svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ 
                    scale: isHovered ? 1.2 : 1,
                    rotate: isHovered ? [0, 5, -5, 0] : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </motion.svg>
              ),
              href: 'mailto:your.email@example.com'
            }
          ].map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors duration-300 relative p-1.5 sm:p-2"
              onMouseEnter={() => setHoveredIcon(social.name)}
              onMouseLeave={() => setHoveredIcon(null)}
              whileHover={{ y: -5 }}
              aria-label={social.name}
            >
              {/* Background glow on hover */}
              {social.name === hoveredIcon && (
                <motion.div
                  className="absolute inset-0 bg-current rounded-full opacity-20 blur"
                  layoutId="socialGlow"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              )}
              
              {/* Icon */}
              {social.icon ? (
                <social.icon isHovered={social.name === hoveredIcon} />
              ) : social.component ? (
                <social.component isHovered={social.name === hoveredIcon} />
              ) : null}
            </motion.a>
          ))}
        </motion.div>

        {/* Technologies Stack with hover effects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 sm:mt-10 md:mt-12 px-2"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="text-neutral-500 text-xs xs:text-sm mb-4 sm:mb-6 tracking-widest"
          >
            TECHNOLOGIES I WORK WITH
          </motion.p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl mx-auto">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Framer Motion', 'Git'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.3,
                  delay: 1.2 + (index * 0.05)
                }}
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  backgroundColor: "rgba(59, 130, 246, 0.2)",
                  borderColor: "rgb(59, 130, 246)"
                }}
                className="px-3 py-1.5 xs:px-4 xs:py-2 bg-neutral-900/50 text-neutral-300 rounded-lg text-xs xs:text-sm border border-neutral-800 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-default select-none whitespace-nowrap"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator with animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 md:bottom-10 flex flex-col items-center text-neutral-500 cursor-pointer"
        onClick={() => window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
        whileHover={{ y: 5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-neutral-500 rounded-full flex justify-center"
          whileHover={{ borderColor: "#ffffff", scale: 1.1 }}
        >
          <motion.div
            animate={{ 
              y: [0, 8, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-2 xs:h-3 bg-neutral-500 rounded-full mt-1.5 sm:mt-2"
            whileHover={{ backgroundColor: "#ffffff" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;