// import { useState } from 'react';
// import { Link as ScrollLink } from 'react-scroll';
// import { motion } from 'framer-motion';
// import { FiGithub, FiLinkedin, FiMail, FiFileText, FiSun, FiMoon } from 'react-icons/fi';

// // Color Scheme Configuration
// const colors = {
//   light: {
//     background: 'bg-[#ffffff]',
//     surface: 'bg-[#f1f5f9]',
//     primary: 'bg-[#2563eb]',
//     text: 'text-[#111827]',
//     border: 'border-[#e2e8f0]'
//   },
//   dark: {
//     background: 'bg-[#0f172a]',
//     surface: 'bg-[#1e293b]',
//     primary: 'bg-[#3b82f6]',
//     text: 'text-[#f8fafc]',
//     border: 'border-[#334155]'
//   }
// };

// // Animation variants
// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.2, delayChildren: 0.1 }
//   }
// };

// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 }
// };

// const App = () => {
//   const [navOpen, setNavOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const [testimonialPage, setTestimonialPage] = useState(0);

//   const socialLinks = [
//     { icon: <FiGithub />, url: '#' },
//     { icon: <FiLinkedin />, url: '#' },
//     { icon: <FiMail />, url: '#' },
//   ];

//   const projects = [
//     {
//       title: 'GoRide',
//       description: 'Ride-hailing web app with Paystack integration...',
//       tech: ['React', 'MongoDB', 'Express.js', 'PaystackAPI'],
//       links: { preview: '#', code: '#' }
//     },
//     {
//       title: 'TaskMate',
//       description: 'Task management app with Firebase authentication...',
//       tech: ['React', 'Firebase', 'Tailwind CSS', 'Material-UI'],
//       links: { preview: '#', code: '#' }
//     },
//     {
//       title: 'Tasky Trip',
//       description: 'Food delivery platform with real-time tracking...',
//       tech: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
//       links: { preview: '#', code: '#' }
//     }
//   ];

//   const skills = [
//     {
//       category: 'Frontend Development',
//       items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material-UI']
//     },
//     {
//       category: 'Backend Development',
//       items: ['Node.js', 'Express.js', 'MongoDB', 'WebSockets']
//     },
//     {
//       category: 'Development Tools',
//       items: ['Git', 'GitHub', 'Postman', 'Firebase']
//     },
//     {
//       category: 'Other Expertise',
//       items: ['REST API', 'Web Performance', 'Responsive Design']
//     }
//   ];

//   const testimonials = [
//     { text: "Working with Peace was an absolute pleasure...", author: "Uzoma Nwaiwu" },
//     { text: "Nnorom Peace is a talented developer...", author: "Aqwuoma Prince" },
//     { text: "Her React knowledge ensured project success...", author: "Ayodele Charles" },
//     { text: "Excellent problem-solving skills...", author: "Client 4" },
//     { text: "Timely delivery and great communication...", author: "Client 5" },
//     { text: "Highly recommended developer...", author: "Client 6" }
//   ];

//   return (
//     <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
//       <div className={`${darkMode ? colors.dark.background : colors.light.background} ${
//         darkMode ? colors.dark.text : colors.light.text
//       }`}>
//         {/* Navigation */}
//         <nav className={`fixed w-full z-50 ${darkMode ? colors.dark.surface : colors.light.surface} shadow-sm`}>
//           <div className="flex items-center justify-between max-w-6xl px-4 py-4 mx-auto">
//             <span className="text-2xl font-bold">CeePrintz.</span>
            
//             <div className="items-center hidden space-x-8 md:flex">
//               <ScrollLink to="home" smooth={true} className="cursor-pointer">Home</ScrollLink>
//               <ScrollLink to="about" smooth={true} className="cursor-pointer">About</ScrollLink>
//               <ScrollLink to="projects" smooth={true} className="cursor-pointer">Projects</ScrollLink>
//               <ScrollLink to="contact" smooth={true} className="cursor-pointer">Contact</ScrollLink>
//               <ScrollLink to="skills" smooth={true} className="cursor-pointer">Skills</ScrollLink>
//               <button 
//                 onClick={() => setDarkMode(!darkMode)}
//                 className="p-2 rounded-lg hover:bg-opacity-20 hover:bg-gray-500"
//               >
//                 {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
//               </button>
//             </div>

//             <div className="flex items-center space-x-4 md:hidden">
//               <button 
//                 onClick={() => setDarkMode(!darkMode)}
//                 className="p-2"
//               >
//                 {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
//               </button>
//               <button 
//                 className="p-2"
//                 onClick={() => setNavOpen(!navOpen)}
//               >
//                 {navOpen ? '✕' : '☰'}
//               </button>
//             </div>
//           </div>
//         </nav>

//         {/* Mobile Menu */}
//         {navOpen && (
//           <div className={`fixed inset-0 z-40 pt-16 px-4 space-y-4 ${
//             darkMode ? colors.dark.surface : colors.light.surface
//           }`}>
//             <ScrollLink to="home" smooth={true} className="block py-2">Home</ScrollLink>
//             <ScrollLink to="about" smooth={true} className="block py-2">About</ScrollLink>
//             <ScrollLink to="projects" smooth={true} className="block py-2">Projects</ScrollLink>
//             <ScrollLink to="contact" smooth={true} className="block py-2">Contact</ScrollLink>
//             <ScrollLink to="skills" smooth={true} className="block py-2">Skills</ScrollLink>
//           </div>
//         )}

//         {/* Hero Section */}
//         <section id="home" className="px-4 pt-32 pb-16">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={staggerContainer}
//             className="max-w-6xl mx-auto text-center"
//           >
//             <motion.h1 variants={fadeInUp} className="mb-6 text-5xl font-bold">
//               Hi, I'm Peace Nnorom
//             </motion.h1>
//             <motion.p variants={fadeInUp} className="mb-8 text-xl opacity-80">
//               I Build sleek, scalable, and seamless web experiences
//             </motion.p>
//             <motion.div variants={fadeInUp} className="flex justify-center mb-12 space-x-4">
//               <button className={`px-6 py-3 text-white ${darkMode ? colors.dark.primary : colors.light.primary} rounded-lg hover:opacity-90`}>
//                 LET'S TALK
//               </button>
//               <button className={`flex items-center px-6 py-3 border-2 ${
//                 darkMode ? colors.dark.border : colors.light.border
//               } rounded-lg`}>
//                 <FiFileText className="mr-2" /> DOWNLOAD CV
//               </button>
//             </motion.div>
//             <motion.div variants={fadeInUp} className="flex justify-center space-x-6">
//               {socialLinks.map((link, index) => (
//                 <motion.a
//                   key={index}
//                   href={link.url}
//                   className="text-2xl hover:text-blue-500"
//                   whileHover={{ scale: 1.2 }}
//                 >
//                   {link.icon}
//                 </motion.a>
//               ))}
//             </motion.div>
//           </motion.div>
//         </section>

//       <section id="about" className="px-4 py-16 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="mb-12 text-3xl font-bold text-center"
//           >
//             About Me
//           </motion.h2>
          
//           <motion.div 
//             className="flex flex-col items-center gap-8 md:flex-row"
//             initial="hidden"
//             whileInView="visible"
//             variants={staggerContainer}
//           >
//             {/* Image Container */}
//             <motion.div 
//               variants={fadeInUp}
//               className="w-full md:w-1/2"
//             >
//               <div className="h-64 bg-gray-200 rounded-lg"></div>
//             </motion.div>

//             {/* Text Content */}
//             <motion.div 
//               variants={staggerContainer}
//               className="w-full space-y-6 md:w-1/2"
//             >
//               <motion.p variants={fadeInUp} className="text-gray-600">
//                 I am a passionate Full Stack Developer with expertise in building dynamic and scalable web applications...
//               </motion.p>
//               <motion.button 
//                 variants={fadeInUp}
//                 className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
//               >
//                 CONTACT ME
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//         {/* Skills Section */}
//       <section id="skills" className="px-4 py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="mb-12 text-3xl font-bold text-center">Skills & Expertise</h2>
//           <motion.div 
//             className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
//             initial="hidden"
//             whileInView="visible"
//             variants={staggerContainer}
//           >
//             {skills.map((skill, index) => (
//               <motion.div 
//                 key={index}
//                 variants={fadeInUp}
//                 className="p-6 bg-white rounded-lg shadow-sm"
//               >
//                 <h3 className="mb-4 text-xl font-bold">{skill.category}</h3>
//                 <ul className="space-y-2">
//                   {skill.items.map((item, i) => (
//                     <li key={i} className="flex items-center">
//                       <span className="w-2 h-2 mr-2 bg-blue-600 rounded-full"></span>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
        

//         {/* Projects Section */}
//         <section id="projects" className="px-4 py-16">
//           <div className="max-w-6xl mx-auto">
//             <h2 className="mb-12 text-3xl font-bold text-center">Projects</h2>
//             <motion.div 
//               className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
//               variants={staggerContainer}
//               initial="hidden"
//               whileInView="visible"
//             >
//               {projects.map((project, index) => (
//                 <motion.div 
//                   key={index}
//                   variants={fadeInUp}
//                   className={`p-6 rounded-xl ${darkMode ? colors.dark.surface : colors.light.surface}`}
//                 >
//                   <h3 className="mb-4 text-xl font-bold">{project.title}</h3>
//                   <p className="mb-4 opacity-80">{project.description}</p>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tech.map((tech, i) => (
//                       <span key={i} className={`px-3 py-1 text-sm rounded-full ${
//                         darkMode ? 'bg-gray-700' : 'bg-gray-200'
//                       }`}>
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex space-x-4">
//                     <a href={project.links.preview} className="text-blue-500">Live Demo</a>
//                     <a href={project.links.code} className="text-blue-500">View Code</a>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* Testimonials Section with Pagination */}
//         <section className="px-4 py-16">
//           <div className="max-w-6xl mx-auto">
//             <h2 className="mb-12 text-3xl font-bold text-center">Testimonials</h2>
//             <div className="grid gap-8 md:grid-cols-2">
//               {testimonials.slice(testimonialPage * 2, (testimonialPage + 1) * 2).map((testimonial, index) => (
//                 <motion.div
//                   key={index}
//                   variants={fadeInUp}
//                   initial="hidden"
//                   whileInView="visible"
//                   className={`p-6 rounded-xl ${darkMode ? colors.dark.surface : colors.light.surface}`}
//                 >
//                   <p className="mb-4 italic">"{testimonial.text}"</p>
//                   <p className="font-bold">- {testimonial.author}</p>
//                 </motion.div>
//               ))}
//             </div>
//             <div className="flex justify-center mt-8 space-x-2">
//               {[...Array(Math.ceil(testimonials.length / 2))].map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setTestimonialPage(index)}
//                   className={`w-3 h-3 rounded-full ${
//                     index === testimonialPage 
//                       ? (darkMode ? 'bg-blue-400' : 'bg-blue-600')
//                       : (darkMode ? 'bg-gray-600' : 'bg-gray-300')
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </section>

//          {/* Contact Section with Side Box */}
//       <section id="contact" className="px-4 py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="mb-12 text-3xl font-bold text-center">Contact</h2>
//           <motion.div 
//             className="grid gap-8 md:grid-cols-2"
//             initial="hidden"
//             whileInView="visible"
//             variants={staggerContainer}
//           >
//             {/* Contact Form */}
//             <motion.div variants={fadeInUp} className="p-6 bg-white rounded-lg">
//               <form className="space-y-6">
//                 <input 
//                   type="text" 
//                   placeholder="Your Full Name"
//                   className="w-full p-3 border rounded-lg"
//                 />
//                 <input 
//                   type="email" 
//                   placeholder="Your Email"
//                   className="w-full p-3 border rounded-lg"
//                 />
//                 <textarea 
//                   placeholder="Your Message"
//                   className="w-full h-32 p-3 border rounded-lg"
//                 />
//                 <button className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
//                   SEND MESSAGE
//                 </button>
//               </form>
//             </motion.div>

//             {/* Contact Info Box */}
//             <motion.div 
//               variants={fadeInUp}
//               className="p-6 bg-white rounded-lg"
//             >
//               <h3 className="mb-6 text-xl font-bold">Contact Information</h3>
//               <div className="space-y-4">
//                 <div className="flex items-center">
//                   <FiMail className="mr-3 text-xl" />
//                   peace.nnorom@example.com
//                 </div>
//                 <div className="flex items-center">
//                   <FiGithub className="mr-3 text-xl" />
//                   github.com/ceeprintz
//                 </div>
//                 <div className="flex items-center">
//                   <FiLinkedin className="mr-3 text-xl" />
//                   linkedin.com/in/ceeprintz
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>
              
//          {/* Footer */}
//       <footer className="px-4 py-8 text-white bg-gray-900">
//         <div className="max-w-6xl mx-auto text-center">
//           <div className="flex justify-center mb-6 space-x-6">
//             {socialLinks.map((link, index) => (
//               <a key={index} href={link.url} className="text-2xl">
//                 {link.icon}
//               </a>
//             ))}
//           </div>
//           <p className="text-gray-400">© 2025 CeePrintz. All Rights Reserved.</p>
//         </div>
//       </footer>
        

//       </div>
//     </div>
//   );
// };

// export default App;
