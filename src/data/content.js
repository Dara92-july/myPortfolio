export const profile = {
  name: 'Salami Gbemisola',
  role: 'Full-Stack JavaScript Developer',
  email: 'salamigbemisola2016@gmail.com',
  resume: '/salami-gbemisola-resum.pdf',
  summary:
    'A full-stack developer focused on building reliable, scalable, and user-centered web applications. I work across the stack using JavaScript, React, Node.js, Express, MongoDB, and Firebase to turn ideas into functional products.',
  intro:
    'A full-stack JavaScript developer focused on building fast, scalable, and user-centered web applications using React, Vanilla JS and Node.js.',
  cta:
    'I enjoy solving real-world problems through clean code, thoughtful architecture, and intuitive user interfaces. I have hands-on experience collaborating in team environments, using Git and modern development workflows to ship features efficiently.',
  closing:
    "I'm continuously learning, open to feedback, and motivated by opportunities to grow as a software engineer while contributing to products that create real impact.",
};

export const socialLinks = [
  { icon: 'github', label: 'GitHub', url: 'https://github.com/Dara92-july' },
  { icon: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/gbemisola-salami-5b4796171' },
  { icon: 'mail', label: 'Email', url: 'mailto:salamigbemisola2016@gmail.com' },
];

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export const skills = [
  {
    category: 'Frontend Development',
    items: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    category: 'Backend Development',
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Sequelize', 'WebSockets', 'Postman', 'API Documentation', 'CRUD', 'MVC'],
  },
  {
    category: 'React UI Libraries',
    items: ['Material UI', 'Shadcn UI', 'Chakra UI', 'Ant Design'],
  },
  {
    category: 'Development Tools',
    items: ['Git', 'GitHub', 'Firebase'],
  },
  {
    category: 'Other Expertise',
    items: ['Progressive Web Apps (PWA)', 'Responsive Design', 'Chrome DevTools for mobile testing, debugging & browser storage'],
  },
];

export const projects = [
  {
    title: 'WF Clothing — E-Commerce',
    description:
      'A full-stack e-commerce platform for a fashion brand, featuring product browsing, categories, shopping cart, user authentication, secure online payments, and an admin dashboard for managing products and orders.',
    tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Paystack'],
    highlights: [
      'Responsive e-commerce interface for desktop and mobile',
      'Product categories, filtering, and product details',
      'Shopping cart and user authentication',
      'Paystack payment integration and order management',
      'Admin dashboard for managing products and orders',
      'RESTful API with MongoDB database integration',
      'Deployed frontend and backend with custom domain',
    ],
    links: {
      preview: 'https://wfclothings.net',
      github: 'https://github.com/Dara92-july/wfclothings.git',
    },
  },
  {
    title: 'FGBN Bank — Mobile Banking',
    description:
      'A full-featured mobile banking application with real-time transaction tracking, user authentication, and account management. Features fund transfers, transaction history, and Firebase-based authentication.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Responsive Design'],
    highlights: [
      'Secure user authentication with Firebase',
      'Real-time transaction updates',
      'Mobile-first responsive design',
      'Clean, intuitive banking interface',
    ],
    links: {
      preview: 'https://fgbn-bank.vercel.app/',
      github: 'https://github.com/Dara92-july/fgbn-project',
    },
  },
  {
    title: 'Beks Tech Solutions',
    description:
      'A professional portfolio and services website for a technology solutions company. Features project showcases, contact form with email integration, and dynamic content management with MongoDB.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Nodemailer', 'CSS'],
    highlights: [
      'Full-stack application with custom backend',
      'Email integration for client inquiries',
      'Database-driven content management',
      'Professional business presentation',
    ],
    links: {
      preview: 'https://www.beks.tech/',
      github: 'https://github.com/nwabekeyi/beksTech-client',
    },
  },
  {
    title: 'Dara Hair — E-commerce',
    description:
      'A complete e-commerce solution featuring product catalog, shopping cart, and Paystack payment integration. Includes order management, product filtering, and responsive design optimized for mobile shopping.',
    tech: ['React.js', 'Firebase', 'TailwindCSS', 'Paystack API', 'Context API'],
    highlights: [
      'Seamless Paystack payment integration',
      'Shopping cart with persistent storage',
      'Product catalog with filtering options',
      'Mobile-optimized checkout flow',
    ],
    links: {
      preview: 'https://dara-hair-website.vercel.app/',
      github: 'https://github.com/Dara92-july/Dara-Hair-Website',
    },
  },
  {
    title: 'Decozone Website',
    description:
      'A modern, responsive furniture interior website built with React 18, TypeScript, and Tailwind CSS. Features smooth animations, elegant icons, and EmailJS integration for contact form functionality. Designed with a focus on performance, accessibility, and visual appeal.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Lucide React', 'EmailJS'],
    highlights: [
      'Modern responsive furniture interior design',
      'Smooth animations with Framer Motion',
      'EmailJS contact form integration',
      'Performance and accessibility focused',
    ],
    links: {
      preview: 'https://decozone.com.ng',
      github: 'https://github.com/Dara92-july/deco.git',
    },
  },
  {
    title: 'Smart Logistics',
    description:
      'An AI-powered dispatch platform for modern fleet management. Optimize routes, track deliveries, and monitor performance in real time with real-time maps, analytics dashboards, and PWA support.',
    tech: ['React 18', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Socket.IO', 'Leaflet', 'Chart.js', 'Zustand', 'Docker'],
    highlights: [
      'Real-time delivery tracking with Socket.IO and Leaflet maps',
      'Route optimization and fleet performance analytics',
      'JWT authentication with role-based access',
      'PWA support for offline access',
      'Dockerized deployment on Vercel + Render',
    ],
    links: {
      preview: 'https://smartlogisticsclient.vercel.app',
      github: 'https://github.com/Dara92-july/smart_logistics_client.git',
    },
  },
  {
    title: 'LinkedIn Post Generator (AI)',
    description:
      'An AI-powered content creation tool that generates professional LinkedIn posts using Gemini AI. Features tone customization, length control, and copy-to-clipboard functionality for easy sharing.',
    tech: ['React', 'Tailwind CSS', 'Gemini API', 'REST API'],
    highlights: [
      'Integration with Gemini AI API',
      'Customizable post tone and length',
      'Real-time content generation',
      'Clean, professional UI',
    ],
    links: {
      preview: 'https://linkedln-postgenerator.vercel.app/',
      github: 'https://github.com/Dara92-july/linkedln-postgenerator',
    },
  },
  {
    title: 'Btech Construction — Company Site',
    description:
      'A professional construction company website showcasing completed projects, services, and client communication through WhatsApp integration. Features portfolio gallery, service descriptions, and direct contact functionality.',
    tech: ['React', 'Tailwind CSS', 'WhatsApp API', 'Responsive Design'],
    highlights: [
      'Direct WhatsApp communication integration',
      'Project portfolio with image gallery',
      'Service showcase with detailed descriptions',
      'Fully responsive construction-themed design',
    ],
    links: {
      preview: 'https://btech-alpha.vercel.app/',
      github: 'https://github.com/Dara92-july/Btech',
    },
  },
];

export const testimonials = [
  {
    text: 'Gbemisola delivered a smooth and functional bank app. Reliable and easy to work with.',
    author: 'Favour Mani',
  },
  {
    text: 'Creative — her fullstack skills really impressed me.',
    author: 'Ibrahim Hussein',
  },
  {
    text: 'She has great communication.',
    author: 'Segun Oladokun',
  },
  {
    text: 'Gbemisola is creative and reliable. She designed a responsive interface for our portfolio site that perfectly balanced design and functionality.',
    author: 'Chidi Nwakabeyi',
  },
];
