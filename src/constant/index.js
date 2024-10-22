import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  datahex,
  levelx,
  tripguide,
  threejs,
  Github,
  aws,
  ejs,
  Juucart,
  auction,
  scrap,
  shoppe,
  juuai,
  cycle,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ethical Hacking",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "github",
    icon: Github,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "ejs",
    icon: ejs,
  },
];

const experiences = [
  {
    title: "MERN Stack Developer",
    company_name: "Levelx",
    icon: levelx,
    iconBg: "#383E56",
    date: "june  2022 - April 2023",
    points: [
      "Developed a full-featured e-commerce platform using EJS for dynamic server-side rendering and templating.",
      "Utilized MongoDB to store and manage product, user, and order data efficiently.",
      "Integrated key features such as product browsing, user authentication, shopping cart management, and payment processing.",
    ],
  },

  {
    title: "Web Developer",
    company_name: "datahex",
    icon: datahex,
    iconBg: "#383E56",
    date: "present",
    points: [
      "Component-Based Structure: Built the app using React's component-based architecture for reusability and maintainability.",
      "State Management: Utilized hooks and context API for efficient state management across components.",
      "Routing: Integrated React Router for seamless navigation between pages.",
      "API Integration: Connected to RESTful APIs for dynamic data retrieval and updates.",
      "Payment Integration & Face Detection: Implemented secure payment processing and integrated face detection features for enhanced user authentication and interaction.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Eco scrap ",
    description:
      "Developed a full-functionality web app that allows users to schedule e-waste pickups from their homes. The platform connects users with a dedicated service team and provides information on responsible recycling practices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongo db",
        color: "pink-text-gradient",
      },
    ],
    image: scrap,
    source_code_link: "https://github.com/iamjuu/Scrab-Frontend-React-js",
  },
  {
    name: "juu-cart",
    description:
      "Built an e-commerce platform using EJS, Express.js, and MongoDB with features like product browsing, user authentication, cart management, and payment processing. Styled with Styled Components for a responsive design.",
    tags: [
      {
        name: "ejs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "mongo db",
        color: "pink-text-gradient",
      },
    ],
    image: Juucart,
    source_code_link: "https://github.com/iamjuu/ecommece",
  },

  {
    name: "shopee",
    description:
      "Developed a dynamic e-commerce platform using React.js for the frontend. The application features product browsing, user authentication, shopping cart functionality, and a responsive design, ensuring an engaging shopping experience.",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: shoppe,
    source_code_link: "https://github.com/iamjuu/shoppee-ecommerce-react",
  },

  {
    name: "cycle",
    description:
      "Using React, a dynamic webpage with interactive elements and a responsive design was created. Changing cycle colours and implementing rebranding are two features of the project that enable customisation of the user experience.  ",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: cycle,
    source_code_link:
      "https://github.com/iamjuu/Cycle-animation-website-react-",
  },

  {
    name: "juu-ai",
    description:
      "AI software was created using the Gemini API to facilitate sophisticated data analysis and natural language processing. The AI can handle complicated jobs and respond with accuracy, which makes it a potent tool for process automation and improving user experience.",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: juuai,
    source_code_link: "https://github.com/iamjuu/ecommece",
  },

  {
    name: "auction",
    description:
      "I created a platform for dynamic auctions where users may list goods and bid in real time. It was developed using React.js and Node.js and has integrated payment methods, live auction updates, and secure user identification. The solution makes use of MongoDB for effective data processing and WebSockets for real-time bidding.",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },

      {
        name: "mongo db",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
    ],
    image: auction,
    source_code_link: "https://github.com/iamjuu/auction-app-using-react",
  },
];

export { services, technologies, experiences, testimonials, projects };
