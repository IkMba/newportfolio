import resortImg from "../assets/Resort api.png";
import takeawayImg from "../assets/takeaway.png";
import zenpayImg from "../assets/zenpay.png";
import flightImg from "../assets/flight-diagram.png";
import project1 from "../assets/banner2.webp";
import codingMistakes from "../assets/coding-mistakes.jpg";
import naijaDev from "../assets/naijadev.jpg";
import paystack from "../assets/paystack.jpg";

export const aboutInfo1 =
  "Hi, I’m [Your Name], a passionate and detail-oriented Backend Engineer with a strong focus on building scalable, efficient, and secure systems. With [X years] of experience in designing and implementing robust backend solutions, I thrive on solving complex problems and optimizing performance to deliver seamless user <span>experiences.</span>";

export const experienceData = [
  {
    date: "2024 — Present",
    title: "Backend Enginner",
    org: "Baobab",
    detail:
      "Build and maintain critical components used to construct Baobab’s backend, across the whole product.  Design, build, and maintaining the server-side logic, databases, and APIs that power web and mobile applications. Work closely with cross-functional teams, including developers, designers, and product managers, to ensure that the systems running behind the scenes are efficient, scalable, and secure, enabling seamless functionality for end-users. ",
    tools: ["Node.js", "TypeScript", "Javascript", "MongoDb"],
    link: "https://baobab.com",
  },
  {
    date: "2023 — 2024",
    title: "Executive trainer",
    org: "Bizmarrow technologies",
    detail:
      "Facilitated hands-on coding sessions, labs, and workshops to reinforce learning. Guided students through individual and group projects, helping them apply their skills to build real-world applications. Continuously learnt and stayed updated on new programming languages, tools, and technologies to keep the curriculum relevant.",
    tools: ["Javascript", "TypeScript", "React", "Python", "Django"],
    link: "https://bizmarrow.com",
  },
  {
    date: "2022 — 2022",
    title: "Full stack developer",
    org: "Gomycode internship",
    detail:
      "Assisted in the development of new software features, modules, or applications. Helped to build and maintain APIs, databases, or backend systems. Gained exposure to real-world challenges and build a foundation for a future career in tech.",
    tools: ["Javascript", "TypeScript", "React", "Node.js", "Python"],
    link: "https://gomycode.com",
  },
];

export const projectsData = [
  {
    title: "Flight booking system",
    detail:
      "A flight booking api using microservice architecture. There are four services: the flights service, the flights booking service and the api gateway, each having their own databases. The system was developed using nodejs and MySQL",
    tools: ["Nodejs", "Express", "Mysql"],
    image: flightImg,
    link: "https://lucid.app/lucidchart/afe212f8-eae8-4ce1-836c-3f988b0683a9/edit?beaconFlowId=A5F13C3CBBC4D771&invitationId=inv_e87f907f-d3ca-4109-955d-ae1c31ed94f3&page=0_0#",
    githubLink: "https://www.github.com/IkMba/airline",
  },
  {
    title: "GoVoyage",
    detail:
      "This is the backend for a tour booking application. Implemented real-time booking, search, sorting and filtering. Includes fully built authentication with JWT, rate limiting and advanced modelling. Other features includes reviews, email and stripe payments. Built with Nodejs,MongoDb and express",
    tools: ["Javascript", "TypeScrit", "React", "Storybook"],
    image: resortImg,
    link: "https://www.github.com/IkMba/GoVoyage",
    githubLink: "https://www.github.com/IkMba/GoVoyage",
  },
  {
    title: "Zenpay",
    detail:
      "Zenpay is payment application that enables users to send and receive money. It is a MERN full stack application complete with authentication,database, dynamic data and a beautiful landing page. ",
    tools: ["Javascript", "React", "Shadcn", "Redux", ""],
    image: zenpayImg,
    link: "https://zenpay-tau.vercel.app/",
    githubLink1: "https://www.github.com/IkMba/Zenpay-frontend",
    githubLink2: "https://www.github.com/IkMba/Zenpay-backend",
  },
  {
    title: "MernEats",
    detail:
      "Merneats is a food ordering web application. Users can create an account and log in, search for restaurants and order food from restaurants. Authentication is done using Auth0.",
    tools: ["Typescript", "React", "Shadcn", "Nodejs", "MongoDb", "Auth0"],
    image: takeawayImg,
    link: "https://food-ordering-platform-frontend-j1ui.onrender.com",
    githubLink1: "https://www.github.com/IkMba/Takeaway-frontend",
    githubLink2: "https://www.github.com/IkMba/Takeaway-backend",
  },
];

export const blogsData = [
  {
    image: paystack,
    date: "2025",
    title:
      "How to Integrate Paystack into Your Application: A Step-by-Step Guide",
    link: "https://medium.com/@ikmba321/title-how-to-integrate-paystack-into-your-application-a-step-by-step-guide-effbf0f57d19",
  },
  {
    image: codingMistakes,
    date: "2025",
    title:
      "5 Common Mistakes People Make When Learning Programming (And How to Avoid Them)",
    link: "https://medium.com/@ikmba321/title-5-common-mistakes-people-make-when-learning-programming-and-how-to-avoid-them-fbdbfc5109f5",
  },
  {
    image: naijaDev,
    date: "2025",
    title:
      "The Challenges of Being a Software Developer in Nigeria: Navigating the Tech Ecosystem",
    link: "https://medium.com/@ikmba321/the-challenges-of-being-a-software-developer-in-nigeria-navigating-the-tech-ecosystem-c295b09ee3c5",
  },
];

export const projects = [
  {
    year: 2025,
    title: "Flight booking system",
    description: "A flight booking api.",
    builtWith: ["NodeJs", "Express", "MySQL"],
    links: {
      github: "https://www.github.com/IkMba/airline",
      external:
        "https://lucid.app/lucidchart/afe212f8-eae8-4ce1-836c-3f988b0683a9/edit?beaconFlowId=A5F13C3CBBC4D771&invitationId=inv_e87f907f-d3ca-4109-955d-ae1c31ed94f3&page=0_0#",
    },
    type: "Backend",
  },
  {
    year: 2024,
    title: "Govoyage",
    description: "A tour booking application backend.",
    builtWith: ["NodeJs", "Express", "MongoDb"],
    links: {
      github: "https://www.github.com/IkMba/GoVoyage",
      external: "https://www.github.com/IkMba/GoVoyage",
    },
    type: "Backend",
  },
  {
    year: 2024,
    title: "Zenpay",
    description: "A payment system web application.",
    builtWith: ["Javascript", "React", "Shadcn", "Redux"],
    links: {
      github: "https://github.com/IkMba/Zenpay-backend",
      //   github: "https://www.https://github.com/IkMba/Zenpay-frontend",
      external: "https://zenpay-tau.vercel.app/",
    },
    type: "Fullstack",
  },
  {
    year: 2024,
    title: "MernEats",
    description: "A food ordering MERN stack project.",
    builtWith: ["Typescript", "React", "Shadcn", "Nodejs", "MongoDb", "Auth0"],
    links: {
      github: "https://www.github.com/IkMba/Takeaway-backend",
      // github: "https://www.https://github.com/IkMba/Takeaway-frontend",
      external: "https://www.food-ordering-platform-frontend-j1ui.onrender.com",
    },
    type: "Fullstack",
  },
  {
    year: 2024,
    title: "DBK Panalpina",
    builtWith: ["HTML", "CSS", "Javascript"],
    links: {
      github: "https://www.github.com/IkMba/dbkpanalpina",
      external: "https://www.dbkpanalpina.com",
    },
    description: "A client website for a local company.",
    type: "Website",
  },
  {
    year: 2023,
    title: "Netflix",
    builtWith: ["Django", "Python", "HTML/CSS"],
    links: {
      github: "https://github.com/IkMba/Netlix",
      external: "https://netlix-ashy.vercel.app/",
    },
    description: "A netflix clone.",
    type: "Fullstack",
  },
  {
    year: 2023,
    title: "AI Summarizer",
    builtWith: ["Django", "Python", "HTML/CSS"],
    links: {
      github: "https://github.com/IkMba/AIsummarizer",
      external: "",
    },
    description: "An AI video summarizer.",
    type: "Fullstack",
  },
  {
    year: 2023,
    title: "Portfolio",
    builtWith: ["React", "Tailwind", "Framer motion"],
    links: {
      github: "https://github.com/IkMba/portfolio",
      external: "https://portfolio-eight-inky-72.vercel.app/",
    },
    description: "My old portfolio",
    type: "Website",
  },
  {
    year: 2023,
    title: "Movix",
    builtWith: ["React ", "Tailwind", "React-query", "Redux", "React Router"],
    links: {
      github: "https://github.com/IkMba/Movix",
      external: "https://movix-five-liard.vercel.app/",
    },
    description: "A movies client using the TMDB API.",
    type: "Frontend",
  },
  {
    year: 2023,
    title: "Resort",
    builtWith: ["React ", "Tailwind", "React-query", "Redux", "React Router"],
    links: {
      github: "https://github.com/IkMba/Resort-app",
      external: "#",
    },
    description: " The frontend (dashboard) of my hotel booking app.",
    type: "Frontend",
  },
  {
    year: 2023,
    title: "Cookwell",
    builtWith: ["React ", "React-query", "Redux", "React Router"],
    links: {
      github: "https://github.com/IkMba/Recipes",
      external: "https://recipes-three-jet.vercel.app/",
    },
    description: "A note taking application",
    type: "Frontend",
  },
  {
    year: 2022,
    title: "Notes App",
    builtWith: ["React ", "Redux", "React Router"],
    links: {
      github: "https://github.com/IkMba/Notes-app",
      external: "https://notes-app-ten-kappa.vercel.app/",
    },
    description: "A note taking application",
    type: "Frontend",
  },
];
