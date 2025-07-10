

import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiFileText, FiSun, FiMoon } from 'react-icons/fi';




// Updated Color Scheme
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

// Animation variants
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

  // Update social links with your actual profiles
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/heebraim' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com/in/ibrahim-hussan-90287a256' },
    { icon: <FiMail />, url: 'mailto:hussanomogbolahan@gmail.com' },
  ];
  
    const skills = [
    {
      category: 'Frontend Development',
      items: ['React', 'React Native(expo)', 'Nextjs','JavaScript', 'HTML', 'CSS', 'Tailwind CSS',]
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
      title: 'JUMIA CLONE',
      description: ' clone of jumia site project',
      tech: ['HTML', 'CSS', 'Js', 'Swiperjs'],
      links: { preview: 'https://ibb-jumia-clone.vercel.app/', code: 'https://ibb-jumia-clone.vercel.app/' }
    },
     {
    title: 'SBC STORES',
    description: 'Search products, add to cart, checkout and make payment using paystack test api key',
    tech: ['HTML', 'Firebase', 'CSS', 'JS', 'Paystack API'],
    links: {
      preview: 'https://sbc-stores.vercel.app/',
      code: 'https://sbc-stores.vercel.app/'
    }
  },
   
    {
      title: 'MoodtuneAI',
      description: 'Listen to music, search artists songs based on your mood and preference.',
      tech: ['React', 'spotify API ', 'Gemini API'],
      links: { preview: 'https://moodtunesai.vercel.app/', code: 'https://moodtunesai.vercel.app/' }
    },
    {
      title: 'budgetApp',
      description: 'calculate budget , amount spent and balance',
      tech: ['React', 'Tailwind',],
      links: { preview: 'https://ibbbudget-app.vercel.app/', code: 'https://ibbbudget-app.vercel.app/' }
    },
    {
      title: 'Fitness App',
      description: 'Lets users select from categories of exercises, with various gif illustration to follow.',
      tech: ['React', 'Rapid APi', 'PWA'],
      links: { preview: 'https://ibb-fitness-app.vercel.app/', code: 'https://ibb-fitness-app.vercel.app/' }
    },
    {
      title: 'Streaming App',
      description: 'Lets users whatch trailers of interesting movies.',
      tech: ['React', 'TMDB APi'],
      links: { preview: 'https://real-ibb-streams.vercel.app/', code: 'https://real-ibb-streams.vercel.app/' }
    },
    {
      title: 'Dilemma game',
      description: 'Lets users select from weird dillema categories, save and share dilemmas on socials.',
      tech: ['React', ' html-to-image', 'PWA' ],
      links: { preview: 'https://ib-dilemmagame.vercel.app/', code: 'https://ib-dilemmagame.vercel.app/' }
    }
  ];

  const testimonials = [
    
    { text: "Ibrahim is a talented developer...", author: "Ajibola Hassan" },
    
    { text: "Good with  problem-solving ...", author: "Gbemisola" },
    { text: "He has  great communication...", author: "Segun Oladokun" },
    { text: "i highly recommend him as a developer...", author: " Adeshola" }
  ];
  const handleNavClick = () => setNavOpen(false);

  const handleSubmit = (e) => {
  e.preventDefault();

  const { name, email, message } = formData;

  const mailtoLink = `mailto:hussanomogbolahan@gmail.com?subject=New Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

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
            <span className="text-2xl font-bold"></span>
            
            

            <div className="flex items-center space-x-4 ">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2"
              >
                {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
              <button 
                className="p-2"
                onClick={() => setNavOpen(!navOpen)}
              >
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
            Hello, I'm Ibrahim Hussan
            </motion.h1>
            <motion.p variants={fadeInUp} className="mb-8 text-xl opacity-80">
             a fullstack developer focused on creating clean, scalable interfaces with modern tools like React, Firebase, and Git.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex justify-center mb-12 space-x-4">
              {/* <button className={`px-6 py-3 text-white ${darkMode ? colors.dark.primary : colors.light.primary} rounded-lg hover:opacity-90`}>
                LET'S TALK
              </button> */}
              <a 
                href="/ibrahim.pdf"  download target="_blank" rel="noopener noreferrer" 
              
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
                className="w-full md:w-1/2"
              >
                <div className={`h-64 rounded-lg flex justify-center ${darkMode ? 'bg-[#374151]' : 'bg-gray-200'}`}> <img src="myimg.jpg" alt="" className='flex justify-center w-64 h-64 rounded-full' />   </div>
              </motion.div>
              <motion.div 
                variants={staggerContainer}
                className="w-full space-y-6 md:w-1/2"
              >
                <motion.p variants={fadeInUp} className="text-justify opacity-80">
                As a full stack developer that loves blending creativity with code, I leverage modern technologies such as React,Nextjs, Firebase, and Git to craft user interfaces that are not only visually engaging but also highly functional and efficient. With React and ReactNative(expo), I build dynamic, responsive components that provide seamless user experiences across different devices and screen sizes. MongoDB , Firebase allows me to integrate powerful backend services—such as real-time databases, authentication, and cloud storage , enabling robust and scalable applications without compromising speed or security. Meanwhile, Git plays a crucial role in my development workflow, facilitating smooth version control, collaboration, and continuous integration.
                </motion.p>
               
                <motion.button 
                variants={fadeInUp}
                className={`px-6 py-3 text-white ${darkMode ? colors.dark.primary : colors.light.primary} rounded-lg hover:opacity-90`}
                onClick={() => window.location.href = 'mailto:hussanomogbolahan@gmail.com'}
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
                  className={`p-6 rounded-xl ${darkMode ? colors.dark.surface : colors.light.surface}`}
                >
                  <h3 className="mb-4 text-xl font-bold">{project.title}</h3>
                  <p className="mb-4 opacity-80">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className={`px-3 py-1 text-sm rounded-full ${
                        darkMode ? 'bg-[#374151]' : 'bg-gray-200'
                      }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a   href={project.links.preview}  target="_blank"  rel="noopener noreferrer" className="text-blue-500">Live Demo</a>
                    <a   href={project.links.code} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Code</a>
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
              © 2025 Ibrahim. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;