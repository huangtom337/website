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
  tailwind,
  nodejs,
  mongodb,
  git,
  nextjs,
  python,
  java,
  c,
  cpp,
  vue,
  postgresql,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  discordbot,
  workout,
  pyrite,
  gnomes,
  gamejam,
  chess,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Software Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'C++',
    icon: cpp,
  },
  {
    name: 'Postgre SQL',
    icon: postgresql,
  },
  {
    name: 'Vue',
    icon: vue,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Java',
    icon: java,
  },
];

const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Starbucks',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React Native Developer',
    company_name: 'Tesla',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Shopify',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Meta',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Gnomes Social Media',
    description:
      'A social media web application that follows the design of facebook, where users can add/remove friends, create posts, and comment/like posts',
    tags: [
      {
        name: 'react redux',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'restapi',
        color: 'pink-text-gradient',
      },
      {
        name: 'Material UI',
        color: 'orange-text-gradient',
      },
    ],
    image: gnomes,
    source_code_link:
      'https://github.com/huangtom337/GnomesSocialMedia/tree/main',
  },
  {
    name: 'AI Chess Engine',
    description:
      'A chess application that has built-in handcrafted AI and ML trained AI',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'ML',
        color: 'green-text-gradient',
      },
      {
        name: 'OOP',
        color: 'pink-text-gradient',
      },
    ],
    image: chess,
    source_code_link: 'https://github.com/huangtom337/ChessEngineBot',
  },
  {
    name: 'Personal Excercise Tracker',
    description:
      'Web application that enables users to create and track personal excercise routines ',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'pink-text-gradient',
      },
    ],
    image: workout,
    source_code_link: 'https://github.com/huangtom337/MERNWorkouts',
  },
  {
    name: 'Pyrite',
    description:
      'A web application built during a hackathon that generates personalized reports for users to track spending and teach basic financial literacy.',
    tags: [
      {
        name: 'pandas',
        color: 'blue-text-gradient',
      },
      {
        name: 'python flask',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: pyrite,
    source_code_link: 'https://github.com/PastMoments/stormhacks_2022_gnomes',
  },
  {
    name: 'Restock Alert',
    description:
      'Bot service that enables users to subscribe to e-commerce and manga products and sends alerts when inventory is refreshed',
    tags: [
      {
        name: 'firebase',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: discordbot,
    source_code_link: 'https://github.com/huangtom337/DiscordBot',
  },
  {
    name: 'Tower of Life',
    description:
      'A simple, top down isometric tower defense game built during a GameJam event',
    tags: [
      {
        name: 'unity',
        color: 'blue-text-gradient',
      },
      {
        name: 'c#',
        color: 'green-text-gradient',
      },
      {
        name: 'OOP',
        color: 'pink-text-gradient',
      },
    ],
    image: gamejam,
    source_code_link:
      'https://github.com/PastMoments/global_game_jam_2023_gnomes',
  },
];

export { services, technologies, experiences, testimonials, projects };
