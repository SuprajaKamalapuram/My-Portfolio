import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.png';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';
import proj1 from '../assets/proj1.jpg'
import proj2 from '../assets/proj2.jpg'


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Redux', 'Hooks','Tailwind CSS','Material UI','Bootstrap']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'JWT', 'Rest API']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'MySQL']
  },
  // {
  //   title: 'Mobile Development',
  //   icon: FaMobileAlt,
  //   description: 'Building cross-platform mobile applications with modern tools.',
  //   tags: ['React Native', 'Flutter', 'Ionic', 'Swift']
  // },
  // {
  //   title: 'Cloud & DevOps',
  //   icon: FaCloud,
  //   description: 'Deploying and managing applications in cloud environments.',
  //   tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  // },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Webpack', 'AWS S3', 'Jest','Cloudinary','Web Sockets']
  }
];



export const projects = [
   {
    title: "Tele-Dentistry Application",
    description: "A Tele-Dentistry platform enabling online patient-doctor consultations.", 
    image: proj1,
    tech: ["React", "Node.js", "MongoDB", "ExpressJS", "web Sockets", "AWS S3"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "#",
  },

  {
    title: "Visible Consumer App",
    description: " Visible Consumer App for user device and SIM management on visible.com.",
    image: proj2,
    tech: ["React", "Hooks", "Zustand", "Material UI"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
  
  // {
  //   title: "E-Commerce Platform",
  //   description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
  //   image: projectImg1,
  //   tech: ["React", "Node.js", "MongoDB", "Stripe"],
  //   icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
  //   demo: "#",
  //   code: "#",
  // },
  // {
  //   title: "Task Management App",
  //   description: "A productivity application with drag-and-drop functionality and real-time updates.",
  //   image: projectImg2,
  //   tech: ["Vue.js", "Firebase", "Tailwind CSS", "WebSockets"],
  //   icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
  //   demo: "#",
  //   code: "#",
  // },
  // {
  //   title: "Fitness Tracker",
  //   description: "A mobile app for tracking workouts, nutrition, and health metrics.",
  //   image: projectImg3,
  //   tech: ["React Native", "GraphQL", "MySQL", "Chart.js"],
  //   icons: [FaReact, FaDatabase],
  //   demo: "#",
  //   code: "#",
  // },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills.",
    image: projectImg4,
    tech: ["React.js", "Tailwind CSS", "Framer Motion","Vite"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  // {
  //   title: "Chat App",
  //   description: "A real-time chat application with group messaging, emojis, and file sharing.",
  //   image: projectImg5,
  //   tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
  //   icons: [FaReact, FaNodeJs, FaDatabase ],
  //   demo: "#",
  //   code: "#",
  // },
  // {
  //   title: "AI Image Generator",
  //   description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
  //   image: projectImg6,
  //   tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
  //   icons: [FaRobot, FaReact, FaCloud],
  //   demo: "#",
  //   code: "#",
  // }
];


export const workData = [
  {
    role: "Senior Software Engineer",
    company: "Appolonia Dentistry for Children, Abu Dhabi",
    duration: "2022 Nov - 2023 Nov",
    description:
      `Designed and developed a Tele-Dentistry platform enabling online patient-doctor consultations. 
Implemented real-time chat and video calling using WebRTC, TURN server, and WebSockets.
 Built secure authentication flows with JWT, OTP services (Twilio), and email integration (Nodemailer). 
Developed appointment booking and scheduling system with React Big Calendar. 
Integrated AWS S3 and Cloudinary for media storage and management. 
Enhanced user engagement with push notifications (Firebase) and in-app notifications. 
Configured SSL certificates and implemented detailed application logging.`,
    color: "purple"
  },
  {
    role: "Associate",
    company: "Cognizant Technology Solutions, India",
    duration: "2019 Dec - 2022 Aug",
    description:
      `Contributed to Visible Consumer App for user device and SIM management on visible.com. 
 Built responsive UI using React Hooks, Material UI, Bootstrap, Zustand. 
Designed and tested APIs with Postman and achieved 85%+ code coverage with Jest. 
 Developed CRUD APIs for Products & Cart and customized login/signup APIs. 
 Collaborated in Agile environment with GitLab-based CI/CD and version control. 
`,
    color: "pink"
  },
  // {
  //   role: "Junior Developer",
  //   company: "StartUp Ventures",
  //   duration: "2016 - 2018",
  //   description:
  //     "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
  //   color: "blue"
  // }
];
