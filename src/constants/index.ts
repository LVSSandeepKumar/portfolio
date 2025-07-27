// Project images
import NextJobs from "@/assets/images/nextjobs.png";
import TweetSphere from "@/assets/images/tweetsphere.png";
import FitFusion from "@/assets/images/fit-fusion-ai.png";
import Flixify from "@/assets/images/flixify.png";
import FeedbackWidget from "@/assets/images/feedback-widget.png";
import ReactAdminDashboard from "@/assets/images/react-admin-dashboard.png";
import TgibLinkNest from "@/assets/images/tgib-linknest.png";
import cdms from "@/assets/images/cdms.jpg";

// Tools images
import HTMLIcon from "@/assets/icons/html.svg";
import CSSIcon from "@/assets/icons/css.svg";
import JavaScriptIcon from "@/assets/icons/javascript.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextIcon from "@/assets/icons/nextjs.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import NodeIcon from "@/assets/icons/node.svg";
import ExpressIcon from "@/assets/icons/express.svg";
import MongoDBIcon from "@/assets/icons/mongodb.svg";
import GithubIcon from "@/assets/icons/github.svg";
import PostgresIcon from "@/assets/icons/postgres.svg";
import PrismaIcon from "@/assets/icons/prisma-4.svg";

export const portfolioProjects = [
  // {
  //   company: "Personal Project",
  //   year: "2024",
  //   title: "Nike Landing Page",
  //   achievements: [
  //     { title: "Device Screen Responsive" },
  //     { title: "Sleek and Modern UI" },
  //     { title: "Smooth Animations" },
  //   ],
  //   link: "https://nike-landingpage-ah0k.onrender.com",
  //   image: NikeLandingPage,
  // },
  {
    company: "Personal Project",
    year: "2024",
    title: "Next Jobs",
    achievements: [
      { title: "Search, Post & Apply for job features" },
      { title: "Form actions & validation" },
      { title: "Improved App usage with NextJS Server Actions" },
    ],
    link: "https://next-jobs-ten.vercel.app/",
    image: NextJobs,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Tweet Sphere",
    achievements: [
      { title: "Register/Login and start posting" },
      { title: "Photo Storage using Cloudinary" },
      { title: "Validations using React-Query" },
    ],
    link: "https://tweet-sphere.onrender.com",
    image: TweetSphere,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Fit Fusion AI",
    achievements: [
      { title: "Complex AI Algorithms in application" },
      { title: "Safe and secure data storage in Postgres" },
    ],
    link: "https://fit-fusion-ai-lvs-sandeep-kumar.vercel.app/",
    image: FitFusion,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Flixify",
    achievements: [
      { title: "Video Streaming using React Player" },
      { title: "Movie Database from TMDB API" },
      { title: "Sleek and Attractive UI" },
    ],
    link: "https://flixify-netflix-clone.onrender.com",
    image: Flixify,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Feedback Widget",
    achievements: [
      { title: "Embeddable React Widget Component" },
      { title: "Personal Dashboard for project details" },
      { title: "Premium payments using Stripe" },
    ],
    link: "https://saas-feedback-dashboard.vercel.app/",
    image: FeedbackWidget,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Admin Dashboard",
    achievements: [
      { title: "Clean Data Visualisation" },
      { title: "Bar, Pie & Line Charts using Re-charts" },
      { title: "Modern and attractive UI" },
    ],
    link: "https://react-admin-dashboard-fawn-theta.vercel.app/",
    image: ReactAdminDashboard,
  },
  {
    company: "AIPTEK",
    year: "2025",
    title: "TGIB LinkNest",
    achievements: [
      { title: "Backend to handle large file uploads" },
      { title: "Secure role based authentication for students and lecturers" },
      { title: "Efficient QR code generation and scanning" },
    ],
    link: "",
    image: TgibLinkNest,
  },
  {
    company: "AIPTEK",
    year: "2025",
    title: "CDMS",
    achievements: [
      { title: "Scalable backend to handle large datasets" },
      { title: "Secure role based authentication" },
      { title: "Microservices architecture in backend" },
      { title: "UID management for real time inventory updates" },
      { title: "Clean data visualisation with dashboards" },
    ],
    link: "",
    image: cdms,
  },
];

export const experiences = [
  {
    company: "StepX Technologies",
    role: "Junior Software Developer Intern",
    location: "Hyderabad, India",
    fromDate: "Dec 2024",
    toDate: "Feb 2024",
    points: [
      "Learnt and did unit testing on existing node project using Jest",
      "Learnt microservices architecture and re architectured existing application into microservices",
      "Prepared basic react UIs for demo",
    ],
    color: "#667eea",
  },
  {
    company: "StepX Technologies",
    role: "Junior Software Developer",
    location: "Hyderabad, India",
    fromDate: "Feb 2024",
    toDate: "Apr 2024",
    points: [
      "Designed the db for a cdms application",
      "Implemented ETLs operations to read from pdfs, xlsx etc",
      "Implemented paginations and filters in REST APIs",
      "Integrated REST APIs with frontend",
    ],
    color: "#f093fb",
  },
  {
    company: "AIPTEK",
    role: "Junior Software Developer",
    location: "Hyderabad, India",
    fromDate: "Apr 2024",
    toDate: "Present",
    points: [
      "Improved backend responses with microservices architecture",
      "Implemented role based authentication",
      "Implemented QR code generation and scanning",
      "Implemented real time inventory updates",
    ],
    color: "#667eea",
  },
];

export const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
  "Creative",
  "Resilient",
];

export const toolboxItems = [
  {
    title: "HTML 5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS 3",
    iconType: CSSIcon,
  },
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "React JS",
    iconType: ReactIcon,
  },
  {
    title: "Next JS",
    iconType: NextIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: TailwindIcon,
  },
  {
    title: "Node JS",
    iconType: NodeIcon,
  },
  {
    title: "Express JS",
    iconType: ExpressIcon,
  },
  {
    title: "Mongo DB",
    iconType: MongoDBIcon,
  },
  {
    title: "PostgreSQL",
    iconType: PostgresIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Prisma ORM",
    iconType: PrismaIcon,
  },
];
