

import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiFileText, FiSun, FiMoon } from 'react-icons/fi';




//Color Scheme
const colors = {
  light: {
    background: 'bg-[#fdfdfd]',
    surface: 'bg-[#f3f4f6]',
    primary: 'bg-[#4b5563]',
    accent: 'text-[#d97706]',
    text: 'text-[#1f2937]',
    border: 'border-[#e5e7eb]'
  },
  dark: {
    background: 'bg-[#1a1a1a]',
    surface: 'bg-[#2c2c2c]',
    primary: 'bg-[#9ca3af]',
    accent: 'text-[#fbbf24]',
    text: 'text-[#f9fafb]',
    border: 'border-[#374151]'
  }
};

// Animation
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const App = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [testimonialPage, setTestimonialPage] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/Dara92-july' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/gbemisola-salami-5b4796171' },
    { icon: <FiMail />, url: 'mailto:salamigbemisola2016@gmail.com' },
  ];
  
    const skills = [
    {
      category: 'Frontend Development',
      items: ['React','JavaScript', 'HTML', 'CSS', 'Tailwind CSS',]
    },
    {
      category: 'Backend Development',
      items: ['Nodejs', 'Express', 'MongoDB', 'Websockets', 'PostMan', 'API Documentation', 'CRUD','MVC',]
    },
    
    {
      category: 'React UI Libraries',
      items: ['Material UI', 'ShadCN UI ', ' Chakra UI','Ant Design']
    },
    {
      category: 'Development Tools',
      items: ['Git', 'GitHub', 'Firebase']
    },
    {
      category: 'Other Expertise',
      items: [, 'Progressive Web Apps (PWA)', 'Responsive Design','Chrome DevTools for mobile testing, debugging, and browser storage management.']
    }
  ];
  
const projects = [
  {
    title: 'FGBN BANK',
    description: 'A mobile bank app designed to test JavaScript functionality...',
    tech: ['HTML', 'CSS', 'Js', 'Firebase'],
    img: 'https://res.cloudinary.com/dzo14hk18/image/upload/v1758730373/fgbnladingpage_aeefk0.png',
    links: { 
      preview: 'https://fgbn-bank.vercel.app/'
    }
  },
  {
    title: 'Beks tech website/portfolio (Ongoing)',
    description: 'Designed for a tech solution company...',
    tech: ['React', 'CSS', 'Node.js', 'Nodemailer','Express.js','MongoDB'],
    img: 'https://res.cloudinary.com/dzo14hk18/image/upload/v1758729377/Screenshot_2025-09-18_140836_omecqc.png',
    links: { 
      preview: 'https://www.beks.tech/'
    }
  },
  {
    title: 'DARA HAIR (Ongoing)',
    description: 'E-commerce website with cart, checkout, and Paystack integration.',
    tech: ['React.js', 'Firebase', 'TailwindCSS', 'Paystack API'],
    img: 'https://res.cloudinary.com/dzo14hk18/image/upload/v1758729722/dara_imgkj8.png',
    links: {
      preview: 'https://dara-hair-website.vercel.app/'
    }
  },
  {
    title: 'LinkedIn Post Generator',
    description: 'An app using Gemini AI to generate LinkedIn posts.',
    tech: ['React', 'Tailwind CSS','Gemini API'],
    img: 'https://res.cloudinary.com/dzo14hk18/image/upload/v1758729722/linkedln_post_generator_lsyczb.png',
    links: { 
      preview: 'https://linkedln-postgenerator.vercel.app/'
    }
  },
  {
    title: 'Budget App',
    description: 'Calculate budget, amount spent, and balance.',
    tech: ['React', 'Tailwind'],
    img: 'https://res.cloudinary.com/dzo14hk18/image/upload/v1758729722/budget_app_zzan7u.png',
    links: { 
      preview: 'https://gbemibudget-app.vercel.app/' 
    }
  },
  {
    title: 'Tic Tac Toe Game',
    description: 'A fun web-based tic-tac-toe game built with React.',
    tech: ['React', 'TailwindCSS'],
    img: 'https://res.cloudinary.com/dzo14hk18/image/upload/v1758729722/simple_tictactoe_h4tldb.png',
    links: { 
      preview: 'https://simple-tictactoe-six.vercel.app/' 
    }
  }
];


  const testimonials = [
    
    { text: "Gbemisola delivered a smooth and functional bank app. Reliable and easy to work with....", author: "Favour mani" },
    
    { text: "Creative, her fullstack skills really impressed me...", author: "Ibrahim Hussein" },
    { text: "She has  great communication...", author: "Segun Oladokun" },
    { text: "Gbemisola is creative and reliable. she designed a responsive interface for our portfolio site that perfectly balanced design and functionality....", author: " Chidi Nwakabeyi" }
  ];
  const handleNavClick = () => setNavOpen(false);

  const handleSubmit = (e) => {
  e.preventDefault();
  const { name, email, message } = formData;

  const mailtoLink = `mailto:salamigbemisola2016@gmail.com?subject=New Message from ${encodeURIComponent
  (name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

  window.location.href = mailtoLink;
};


  const MobileNavLink = ({ to, children }) => (
    <ScrollLink 
      to={to} 
      smooth={true} 
      className="block py-2" 
      onClick={handleNavClick}
    >
      {children}
    </ScrollLink>
  );

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className={`${darkMode ? colors.dark.background : colors.light.background} ${
        darkMode ? colors.dark.text : colors.light.text
      }`}>
           {/* Navigation */}
        <nav className={`fixed w-full z-50 ${darkMode ? colors.dark.surface : colors.light.surface} shadow-sm`}>
  <div className="flex items-center justify-between max-w-6xl px-4 py-4 mx-auto">
    
    {/* Logo */}
    <a href="#home" className="flex items-center space-x-2">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 400 100" 
        className={`h-10 ${darkMode ? "text-[#fbbf24]" : "text-[#d97706]"}`}
        fill="currentColor"
      >
        {/* Icon (stylized D) */}
        <g>
          <circle cx="40" cy="50" r="35" stroke="currentColor" strokeWidth="8" fill="none"/>
          <path d="M40 15 Q70 50 40 85" stroke="currentColor" strokeWidth="8" fill="none"/>
        </g>

        {/* Text */}
        <text x="100" y="55" fontFamily="Segoe UI, sans-serif" fontSize="32" fontWeight="700">
          DaraDev
        </text>
        <text x="100" y="85" fontFamily="Segoe UI, sans-serif" fontSize="18" fontWeight="400" opacity="0.8">
          Solutions
        </text>
      </svg>
    </a>

    {/* Right side (Dark mode + Menu) */}
    <div className="flex items-center space-x-4">
      <button onClick={() => setDarkMode(!darkMode)} className="p-2">
        {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
      </button>
      <button className="p-2" onClick={() => setNavOpen(!navOpen)}>
        {navOpen ? '✕' : '☰'}
      </button>
    </div>
  </div>
</nav>

        {/* Mobile Menu */}
        {navOpen && (

          <div 
            className={`
              fixed top-0 right-0 h-full w-64 z-40 pt-16 px-4 space-y-4
              ${darkMode ? colors.dark.surface : colors.light.surface}
              transform transition-transform duration-300 ease-in-out
              ${navOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
          >
            <MobileNavLink to="home" ><code className=''>Home</code></MobileNavLink>
            <MobileNavLink to="about"><code>About</code></MobileNavLink>
            <MobileNavLink to="projects"><code>Projects</code></MobileNavLink>
            <MobileNavLink to="contact"><code>Contact</code></MobileNavLink>
            <MobileNavLink to="skills"><code>Skills</code></MobileNavLink>
            {/* <MobileNavLink to="experience">Experience</MobileNavLink>
            <MobileNavLink to="testimonials">Certifications</MobileNavLink> */}
          </div>
          
        )}

        {/* Hero Section */}
        <section id="home" className="px-4 pt-32 pb-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-6xl mx-auto text-center"
          >
            <motion.h1 variants={fadeInUp} className="mb-6 font-mono text-5xl font-bold">
            Hello, I'm Salami Gbemisola
            </motion.h1>
            <motion.p variants={fadeInUp} className="mb-8 text-xl opacity-80">
             a Full Stack Developer who loves turning ideas into interactive experiences. With React, Node.js, and MongoDB, I build applications that are fast, scalable, and user-focused. Passionate about learning and problem-solving, I thrive on creating solutions that make an impact.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex justify-center mb-12 space-x-4">
              {/* <button className={`px-6 py-3 text-white ${darkMode ? colors.dark.primary : colors.light.primary} rounded-lg hover:opacity-90`}>
                LET'S TALK
              </button> */}
              <a 
                href="/GBEMISOLAcv.pdf"  download target="_blank" rel="noopener noreferrer" 
              
                className={`flex items-center px-6 py-3 border-2 ${
                  darkMode ? colors.dark.border : colors.light.border
                } rounded-lg`}
              >
                <FiFileText className="mr-2" /> DOWNLOAD CV
              </a>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-blue-500"
                  whileHover={{ scale: 1.2 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mb-12 font-mono text-3xl font-bold text-center"
            >
              About Me
            </motion.h2>
            <motion.div 
              className="flex flex-col items-center gap-8 md:flex-row"
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
            >
             <motion.div 
  variants={fadeInUp}
  className="flex justify-center md:w-1/2"
>
  <motion.img 
    src="myimg.jpg" 
    alt="Profile" 
    className="object-cover w-64 border-4 border-gray-300 rounded-lg shadow-lg h-96 dark:border-gray-600" 
    whileHover={{ rotate: -20 }} 
    transition={{ duration: 0.3 }}
  />
</motion.div>


    <motion.div 
    variants={staggerContainer}
    className="space-y-6 text-center md:w-1/2 md:text-left"
  >
    <motion.p 
      variants={fadeInUp} 
      className="leading-relaxed text-justify opacity-80"
    >
      I am a Full Stack Developer passionate about building scalable, user-friendly, and visually engaging applications. With expertise in Javascript, Reactjs, Node.js, Express, MongoDB, and Firebase, I craft seamless digital experiences from frontend to backend. I love merging creativity with functionality to deliver efficient and impactful solutions.I thrive in collaborative environments, leveraging Git and modern workflows for efficient teamwork and version control.I am committed to continuous learning, problem-solving, and delivering high-quality software solutions. My long-term goal is to grow as a software engineer and contribute to innovative projects that create meaningful impact.
    </motion.p>

    <motion.button 
      variants={fadeInUp}
      className={`px-6 py-3 text-white ${darkMode ? colors.dark.primary : colors.light.primary} rounded-lg shadow-md hover:opacity-90 transition`}
      onClick={() => window.location.href = 'mailto:salamigbemisola2016@gmail.com'}
    >
      CONTACT ME
    </motion.button>
  </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="px-4 py-16 ">
          <div className="max-w-6xl mx-auto ">
            <h2 className="mb-12 font-mono text-3xl font-bold text-center">Skills & Expertise</h2>
            <motion.div 
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className={`p-6 rounded-xl ${darkMode ? colors.dark.surface : colors.light.surface}`}
                >
                  <h3 className={`mb-4 text-xl font-bold ${darkMode ? colors.dark.accent : colors.light.accent}`}>
                    {skill.category}
                  </h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className={`w-2 h-2 mr-2 ${darkMode ? 'bg-[#fbbf24]' : 'bg-[#d97706]'} rounded-full`}></span>
                        <span className={`px-3 py-1 rounded-md ${darkMode ? 'bg-[#374151]' : 'bg-gray-200'}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
<section id="projects" className="px-4 py-16">
  <div className="max-w-6xl mx-auto">
    <h2 className="mb-12 font-mono text-3xl font-bold text-center">Projects</h2>
    <motion.div 
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
    >
      {projects.map((project, index) => (
        <motion.div 
          key={index}
          variants={fadeInUp}
          className={`rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105 ${
            darkMode ? colors.dark.surface : colors.light.surface
          }`}
        >
          {/* Project Screenshot */}
          <div className="w-full h-48 overflow-hidden">
            <img 
              src={project.img} 
              alt={project.title} 
              className="object-cover w-full h-full"
            />
          </div>

          {/* Project Details */}
          <div className="p-6">
            <h3 className="mb-3 text-xl font-bold">{project.title}</h3>
            <p className="mb-4 opacity-80">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span 
                  key={i} 
                  className={`px-3 py-1 text-sm rounded-full ${
                    darkMode ? 'bg-[#374151]' : 'bg-gray-200'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Button */}
            <div className="flex items-center justify-between">
              <a 
              href={project.links.preview} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`font-medium hover:underline ${
              darkMode ? 'text-[#fbbf24]' : 'text-[#d97706]'
             }`}
            >
              View Project
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


        {/* Testimonials Section */}
        <section className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-12 font-mono text-3xl font-bold text-center">Testimonials</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {testimonials.slice(testimonialPage * 2, (testimonialPage + 1) * 2).map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  className={`p-6 rounded-xl ${darkMode ? colors.dark.surface : colors.light.surface}`}
                >
                  <p className="mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-bold">- {testimonial.author}</p>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {[...Array(Math.ceil(testimonials.length / 2))].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setTestimonialPage(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === testimonialPage 
                      ? (darkMode ? 'bg-[#fbbf24]' : 'bg-[#d97706]')
                      : (darkMode ? 'bg-[#374151]' : 'bg-gray-300')
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-12 font-mono text-3xl font-bold text-center">Contact</h2>
            <motion.div 
              className="grid gap-8 md:grid-cols-2"
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className={`p-6 rounded-xl ${darkMode ? colors.dark.surface : colors.light.surface}`}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input 
                    type="text" 
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full p-3 rounded-lg ${darkMode ? 'bg-[#2c2c2c] border-[#374151]' : 'bg-white border-[#e5e7eb]'} border`}
                    required
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`w-full p-3 rounded-lg ${darkMode ? 'bg-[#2c2c2c] border-[#374151]' : 'bg-white border-[#e5e7eb]'} border`}
                    required
                  />
                  <textarea 
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className={`w-full h-32 p-3 rounded-lg ${darkMode ? 'bg-[#2c2c2c] border-[#374151]' : 'bg-white border-[#e5e7eb]'} border`}
                    required
                  />
                  <button 
                    type="submit"
                    className={`w-full py-3 rounded-lg ${darkMode ? colors.dark.primary : colors.light.primary} text-white`}
                  >
                    {formStatus || 'SEND MESSAGE'}
                  </button>
                </form>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className={`p-6 rounded-xl ${darkMode ? colors.dark.surface : colors.light.surface}`}
              >
                <h3 className={`mb-6 text-xl font-bold font-mono ${darkMode ? colors.dark.accent : colors.light.accent}`}>
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:opacity-80"
                    >
                      {link.icon}
                      <span className="ml-3">{link.url.replace('mailto:', '')}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`px-4 py-8 ${darkMode ? colors.dark.surface : colors.light.surface}`}>
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center mb-6 space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-blue-500"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © {new Date().getFullYear()} Salami Gbemisola. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;