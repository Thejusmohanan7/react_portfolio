import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

interface Project {
  name: string;
  description: string;
  url: string;
  tech: string[];
  built: string[];
  challenges: string[];
  features: string[];
}

const projects: Project[] = [
  {
    name: "Homora Interiors",
    description: "A premium interior design agency website showcasing luxury home interiors and design services.",
    url: "https://next-js-slxb.vercel.app/home",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "Responsive Design"],
    built: [
      "Complete interior design agency website with service pages",
      "Gallery showcase with categorized interior designs",
      "Contact and inquiry system",
      "SEO-optimized blog section for design tips"
    ],
    challenges: [
      "Creating smooth animations for image galleries without performance issues",
      "Implementing responsive layouts for complex interior design showcases",
      "Optimizing high-resolution interior images for fast loading",
      "Building an intuitive navigation for portfolio categories"
    ],
    features: [
      "Responsive gallery with masonry layout",
      "Smooth page transitions with Framer Motion",
      "Contact form with email integration",
      "Blog with markdown support",
    ]
  },
  {
    name: "Own Media – Wedding Photography",
    description: "A wedding photography portfolio website capturing love stories with elegant visual storytelling.",
    url: "https://own-media-phi.vercel.app",
    tech: ["React", "Next.js", "CSS Modules", "Responsive Design", "Image Optimization"],
    built: [
      "Wedding photography portfolio with categorized galleries",
      "Client testimonial section",
      "Booking and inquiry system",
      "Blog for sharing wedding photography tips"
    ],
    challenges: [
      "Optimizing high-resolution wedding photos for web without quality loss",
      "Creating emotional storytelling through visual hierarchy",
      "Implementing lazy loading for image-heavy galleries",
      "Designing mobile-responsive portfolio layouts"
    ],
    features: [
      "Image optimization with Next.js Image component",
      "Parallax scrolling effects",
      "Client testimonial carousel",
      "Contact form with file upload for inquiries",
      "Portfolio filtering by wedding categories"
    ]
  },
  {
    name: "Portfolio (HTML/Tailwind)",
    description: "A static personal portfolio website demonstrating clean design and responsive layouts.",
    url: "https://portv1-five.vercel.app",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "Vercel", "Responsive Design"],
    built: [
      "Personal portfolio showcasing skills and projects",
      "Responsive design for all screen sizes",
      "Contact section with form validation",
      "Project showcase with live previews"
    ],
    challenges: [
      "Achieving pixel-perfect responsive design without CSS frameworks",
      "Implementing smooth scrolling navigation",
      "Creating custom animations with vanilla JavaScript",
      "Optimizing for Core Web Vitals"
    ],
    features: [
      "Mobile-first responsive design",
      "Custom CSS animations",
      "Form validation with JavaScript",
      "Dark theme implementation",
      "Fast loading with minimal dependencies"
    ]
  },
];

const Projects = () => {
  const { scrollY } = useScroll();
  const yContent = useTransform(scrollY, [0, 500], [30, -30]);
  const opacityBg = useTransform(scrollY, [0, 500], [1, 0.6]);
  const scaleBg = useTransform(scrollY, [0, 500], [1, 1.05]);

  // State for hover effect and expanded details
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleDetails = (index: number) => {
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };

  return (
    <section id="projects" className="relative min-h-screen bg-black text-white flex flex-col items-center overflow-hidden">
      {/* Animated Background with scroll effects */}
      <motion.div
        style={{ opacity: opacityBg, scale: scaleBg }}
        className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black"
      />

      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: useTransform(scrollY, [0, 500], [0, 120]) }}
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{ 
            x: ["0%", "5%", "0%"],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{ 
            y: ["0%", "-5%", "0%"],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          style={{ y: useTransform(scrollY, [0, 500], [0, 60]) }}
          className="absolute top-2/3 left-1/3 w-64 h-64 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1]
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
        className="relative z-10 max-w-6xl w-full px-6 py-20"
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
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projects</span>
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
            A selection of recent projects showcasing my frontend development skills and problem-solving abilities
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              {/* Project Card */}
              <motion.div
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                }}
                className="h-full bg-gradient-to-br from-neutral-900 to-black rounded-xl border border-neutral-800 overflow-hidden relative group-hover:border-blue-500/50 transition-all duration-300"
              >
                {/* Card Header */}
                <div className="p-6 pb-4">
                  {/* Project Icon */}
                  <motion.div
                    animate={{ 
                      rotate: hoveredProject === index ? [0, 10, -10, 0] : 0,
                      scale: hoveredProject === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4"
                  >
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </motion.div>

                  {/* Project Name */}
                  <motion.h3
                    animate={{ 
                      color: hoveredProject === index ? "#ffffff" : "#f3f4f6"
                    }}
                    className="text-xl font-semibold mb-3"
                  >
                    {project.name}
                  </motion.h3>

                  {/* Project Description */}
                  <motion.p
                    animate={{ 
                      color: hoveredProject === index ? "#d1d5db" : "#9ca3af"
                    }}
                    className="text-neutral-400 text-sm leading-relaxed mb-6"
                  >
                    {project.description}
                  </motion.p>

                  {/* Expand Details Button */}
                  <motion.button
                    onClick={() => toggleDetails(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-4"
                  >
                    {expandedProject === index ? "Show Less" : "View Details"}
                    <motion.svg
                      animate={{ rotate: expandedProject === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </motion.button>

                  {/* Expanded Details */}
                  {expandedProject === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 overflow-hidden"
                    >
                      {/* What I Built */}
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          What I Built
                        </h4>
                        <ul className="space-y-2">
                          {project.built.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="text-xs text-neutral-300 flex items-start gap-2"
                            >
                              <span className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Challenges Solved */}
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                          <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          Challenges Solved
                        </h4>
                        <ul className="space-y-2">
                          {project.challenges.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="text-xs text-neutral-300 flex items-start gap-2"
                            >
                              <span className="w-1 h-1 rounded-full bg-yellow-500 mt-1.5 flex-shrink-0" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                          <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="text-xs text-neutral-300 flex items-start gap-2"
                            >
                              <span className="w-1 h-1 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Tech Stack */}
                <div className="px-6 pb-6">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + (index * 0.2) + (techIndex * 0.05) }}
                        whileHover={{ 
                          scale: 1.1,
                          y: -3,
                          backgroundColor: "rgba(59, 130, 246, 0.2)",
                          borderColor: "rgb(59, 130, 246)"
                        }}
                        className="px-3 py-1 text-xs bg-neutral-900 text-neutral-300 rounded-full border border-neutral-800 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <div className="flex items-center justify-between">
                    <motion.span
                      animate={{ 
                        color: hoveredProject === index ? "#93c5fd" : "#6b7280"
                      }}
                      className="text-sm text-neutral-500 truncate"
                    >
                      {project.url.replace('https://', '')}
                    </motion.span>
                    
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      animate={{ 
                        scale: hoveredProject === index ? 1.2 : 1,
                        x: hoveredProject === index ? 5 : 0
                      }}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span className="text-sm font-medium">Live Demo</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.a>
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"
                />

                {/* Bottom Gradient Border */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 absolute bottom-0 left-0"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/Thejusmohanan7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 group"
            whileHover={{ scale: 1.05 }}
          >
            <span>View more on GitHub</span>
            <motion.svg
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-4 h-4 group-hover:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;