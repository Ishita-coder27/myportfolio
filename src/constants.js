// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';

import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import dsaLogo from './assets/tech_logo/dsa.png';
import gamemania from './assets/tech_logo/gamemania.jpg';
import figma from './assets/tech_logo/figma.png';
import vercel from './assets/tech_logo/vercel.png';
import netlify from './assets/tech_logo/netlify.png';

// Experience Section Logo's
import ehslogo from './assets/company_logo/ehs.jpg';
import foragelogo from './assets/company_logo/theforage_logo.jpg';

// Education Section Logo's
import dav from './assets/education_logo/dav.png';
import jiit from './assets/education_logo/jiit.png';


// Project Section Logo's



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
     
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      
    
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Figma', logo: figma },
      { name: 'Vercel', logo: vercel },
      { name: 'Netlify', logo: netlify },   
    ],
  },
  {
    title: 'Data Structures & Algorithms',
    skills: [
          { name: 'DSA', logo: dsaLogo }, 
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: ehslogo,
      role: "Fullstack Developer",
      company: "EHS CLUBHOUSE",
      date: "June 2024 - August 2024",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Express JS",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: foragelogo,
      role: "Coding Intern",
      company: "Deloitte Australia-Technology Job Simulation",
      date: "June 2024",
      desc: "Collaborated with a team to design and implement a comprehensive proposal for the client, showcasing technical expertise and problem-solving skills.",
      skills: [
       "Python",
      ],
    },
    
  ];
  
  export const education = [
    {
      id: 0,
      img: jiit,
      school: "JIIT , Noida",
      date: "July 2023 - Present",
      grade: "7.81 CGPA",
      desc: "I'm currently pursuing my B.Tech in Computer Science and Engineering from JIIT Noida, where I'm exploring core subjects like Data Structures, Algorithms, Web Development, and Database Management, while working on hands-on projects that bridge theory with real-world software solutions.",
      degree: "Bachelor of Technology - B.Tech (Computer Science and Engineering)",
    },
    {
      id: 1,
      img: dav,
      school: "DAV Public School, Rohtak",
      date: "April 2021-April 2022",
      grade: "95%",
      desc: "I completed my Class 12 education from DAV Public School, Rohtak, under the CBSE board, with a focus on Physics, Chemistry, and Mathematics (PCM).",
      degree: "CBSE(XII) - PCM ",
    },
    {
      id: 2,
      img: dav,
      school: "DAV Public School, Rohtak",
      date: "April 2019-April 2020",
      grade: "95.8%",
      desc: "I completed my Class 10 education from DAV Public School, Rohtak, under the CBSE board.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Game Mania",
      description:
        "Welcome to our gaming website, where you can enjoy three classic games: Tic Tac Toe, Chess, and Rock Paper Scissors! Whether you're looking for a quick match or a challenging strategy session, we've got you covered",
      image: gamemania,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Ishita-coder27/games",
      
    },
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "This is my personal portfolio website, showcasing my skills, projects, and experiences. It is built using React JS and Tailwind CSS.",
      image: gamemania,
      tags: ["HTML", "CSS", "JavaScript","React JS", "Tailwind CSS"],
      github: ""
    },
  ];  