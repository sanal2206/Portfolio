import { FaPython, FaReact, FaAws, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiDjango, SiPostgresql, SiRedis, SiCelery, SiRedux } from "react-icons/si";

export const PERSONAL_INFO = {
    name: "Sanal Sabu",
    role: "Python & Full Stack Developer",
    bio: "Passionate Python Developer with expertise in Django, DRF, and PostgreSQL. I build scalable, secure, and maintainable systems with a focus on clean, efficient code and high performance.",
    email: "sanalsabu22@gmail.com"
};

export const NAV_LINKS = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
];

export const SKILLS = [
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "Django", icon: SiDjango, color: "#2BA678" }, // Brightened from #092E20
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "AWS", icon: FaAws, color: "#FF9900" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#60A5FA" }, // Brightened from #4169E1 (Royal Blue to Light Blue)
    { name: "Django REST", icon: SiDjango, color: "#EF4444" }, // Brightened from #A30000 (Red to Bright Red)
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "Celery", icon: SiCelery, color: "#4ADE80" }, // Brightened from #37814A (Green to Bright Green)
    { name: "Redis", icon: SiRedis, color: "#DC382D" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
];

export const PROJECTS = [
    {
        title: "Stock Market Analysis Platform",
        description: "High-performance RESTful APIs for stock analysis with scalable architecture. Implements async background tasks using Celery and Redis for real-time data processing.",
        tags: ["Python", "Django REST Framework", "Celery", "Redis"],
        link: "https://github.com/sanal2206/Stock-Tracker"
    },
    {
        title: "Real-time Chat Application",
        description: "A real-time chat application built with Django Channels and WebSockets, enabling instant message delivery between multiple users through asynchronous communication.",
        tags: ["Django Channels", "WebSockets", "Redis", "JavaScript"],
        link: "https://github.com/sanal2206/django-realtime-chat"
    },
    {
        title: "Phoenix E-Commerce Application",
        description: "Full-stack e-commerce app with JWT auth, Google Sign-In, and Razorpay integration. Features a wallet system, coupons, and comprehensive admin dashboard.",
        tags: ["Django", "PostgreSQL", "Bootstrap", "JavaScript"],
        link: "https://github.com/sanal2206/Phoneix-Ecom"
    },
    {
        title: "Profile Management System",
        description: "Secure profile system featuring JWT authentication with HTTP-only cookies and Cloudinary storage. seamless frontend-backend integration using React and Redux Toolkit.",
        tags: ["React.js", "Redux Toolkit", "DRF", "PostgreSQL"],
        link: "https://github.com/sanal2206/Profile-Manager"
    },

];

export const EXPERIENCE = [
    {
        company: "Baron Tech Lab Pvt. Ltd.",
        role: "Python Backend Developer",
        period: "July 2025 – Present",
        location: "Bengaluru, India",
        description: "Developing RESTful APIs with Django/DRF for stock market analysis. Designing scalable architectures and optimizing performance. Implementing async tasks with Celery/Redis and secure OTP authentication."
    },
    {
        company: "Proton System Experts and Solutions",
        role: "Web Developer Intern",
        period: "Apr 2024 – May 2024",
        location: "Bangalore (On-site)",
        description: "Developed e-commerce apps using PHP/MySQL. Collaborated on feature integration (product listings, auth, order management) and enhanced UI/UX designs."
    }
];

export const EDUCATION = [
    {
        institution: "Bengaluru North University",
        degree: "Bachelor of Computer Applications (BCA)",
        period: "2021 – 2024",
        score: "89.72%"
    },
    {
        institution: "Sanjay Memorial Polytechnic",
        degree: "Diploma in Mechanical Engineering",
        period: "2016 – 2019",
        score: "71%"
    },
    {
        institution: "St. Joseph High School",
        degree: "10th Grade",
        period: "2015",
        score: "76%"
    }
];

export const SOCIALS = [
    { name: "GitHub", url: "https://github.com/sanal2206" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/sanal-sabu-" },
    { name: "Email", url: "mailto:sanalsabu22@gmail.com" }
];
