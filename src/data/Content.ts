export interface SkillDetails {
  name: string;
  level?: string;
}

export interface EducationDetails {
  img: string;
  logo: string;
  name: string;
  degree: string;
  duration: string;
  other: string | null;
}

export interface ProjectDetails {
  name: string;
  intro: string;
  img: string[];
  alt: string[];
  github: string | null;
  link: string | null;
}

interface Content {
  name: string;
  bio: string[];
  address: string;
  email: string;
  linkedin: string;
  github: string;
  phone: string;

  techSkillIntro: string;
  skills: SkillDetails[];

  education: EducationDetails[];

  projects: ProjectDetails[];
}

const Content = {
  name: 'Jiawei He',
  bio: [
    'I build stable, scalable, and maintainable apps.',
    'I love to learn and share knowledge.',
    'I am a team player. Helping others is my passion.',
  ],
  address: '3607 Spring Garden St, Unit 5, Philadelphia, PA',
  email: 'jiaweihe98@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jiaweihe98',
  github: 'https://github.com/JiaweiHe98',
  phone: '(321) 294-7188',

  techSkillIntro:
    "Two years of master's school, over four years of programming experience, and involvement in numerous projects have equipped me with a solid foundation in computer science and a wide range of technical skills in software engineering.",
  skills: [
    {
      name: 'Java',
      level: '4yr+',
    },
    {
      name: 'Python',
      level: '3yr+',
    },
    {
      name: 'C/C++',
      level: '3yr+',
    },
    {
      name: 'HTML/CSS',
      level: '3yr',
    },
    {
      name: 'React',
      level: '3yr',
    },
    {
      name: 'JavaScript',
      level: '3yr',
    },
    {
      name: 'TypeScript',
      level: '2yr',
    },
    {
      name: 'Material UI',
    },
    {
      name: 'Redux',
    },
    {
      name: 'Node.js',
    },
    {
      name: 'Express.js',
    },
    {
      name: 'Spring Boot',
    },
    {
      name: 'Docker',
    },
    {
      name: 'MySQL',
    },
    {
      name: 'MongoDB',
    },
    {
      name: 'Git',
    },
    {
      name: 'Bash',
    },
    {
      name: 'gRPC',
    },
    {
      name: 'protobuf',
    },
    {
      name: 'GraphQL',
    },
    {
      name: 'Docker',
    },
    {
      name: 'Kubernetes',
    },
    {
      name: 'AWS',
    },
    {
      name: 'Zookeeper',
    },
    {
      name: 'Kafka',
    },
    {
      name: 'Redis',
    },
  ],

  education: [
    {
      img: 'penn.jpg',
      logo: 'penn_logo.png',
      name: 'University of Pennsylvania',
      degree: 'M.S. in Computational Science',
      duration: 'Aug 2021 - May 2023',
      other:
        'Coursework: Algorithms and Computationon, Programming for the Web, Applied Machine Learning, Big Data Analytics, Computer Vison, Artificial Intelligence',
    },
    {
      img: 'fit.jpg',
      logo: 'fit_logo.png',
      name: 'Florida Institute of Technology',
      degree: 'B.S. in Mechanical Engineering',
      duration: 'Aug 2019 - May 2021',
      other:
        "Awards: Summa Cum Laude, Distinguished Student Scholar, Dean's List, Phi Kappa Phi Honor Society",
    },
    {
      img: 'wit.jpeg',
      logo: 'wit_logo.png',
      name: 'Wuhan Institute of Technology',
      degree: 'B.S. in Energy and Power Engineering',
      duration: 'Sep 2017 - Jun 2019',
      other:
        'Awards: The First Prize in the 31st Hubei Youth Innovation Competition',
    },
  ],

  projects: [
    {
      name: 'Distributed Email and Storage System',
      intro:
        'A distributed email and storage system that allows users to send and receive emails and upload and download files. Created with Java, C++, Spring Boot, Spring Security, and MySQL.',
      img: ['distributedSys/img1.png'],
      alt: ['Web app for distributed email and storage system'],
      github: null,
      link: null,
    },
    {
      name: 'Restaruant Recommender',
      intro:
        'A web application that recommends restaurants to users based on their preferences. Created with React, Express.js, gRPC, and Collaborative Filtering.',
      img: ['restaurantRecommender/img1.jpeg'],
      alt: ['Web app for restaurant recommender'],
      github: 'https://github.com/JiaweiHe98/RestaurantRecommender',
      link: null,
    },
    {
      name: 'CamousSale',
      intro:
        'A web application that allows students to buy and sell items on campus. Created with React, Spring Boot, Spring Security, and MySQL.',
      img: ['campusSale/img1.png'],
      alt: ['campusSale web app'],
      github: 'https://github.com/JiaweiHe98/CampusSale',
      link: null,
    },
    {
      name: 'Florida Tech Course Plan',
      intro:
        'A web application that allows students to plan their courses. Created with React, Material UI, BeautifulSoup, Python Asyncio.',
      img: ['course/img1.png'],
      alt: ['Florida Tech Course Plan web app'],
      github: 'https://github.com/JiaweiHe98/FloridaTechCoursePlan',
      link: null,
    },
    {
      name: 'Talker',
      intro:
        'Developed a feature-rich web application enabling users to engage in real-time chat, tweet, and participate in group conversations. Created with React, Materil UI, Express.js, and MongoDB.',
      img: ['talker/img1.png'],
      alt: ['Talker web app'],
      github: 'https://github.com/JiaweiHe98/talker',
      link: null,
    },
    {
      name: 'Prediction of Finger Flexion',
      intro:
        'A machine learning project that predicts finger flexion. Achieved 45% correlation by combining optimal linear decoder with linear regression.',
      img: ['bci/img1.jpg'],
      alt: ['Raw data vs production data'],
      github: null,
      link: null,
    },
    {
      name: 'IoT Environmental Chamber',
      intro:
        'An environment chamber helps with space agriculture research. Team up with 8 people and took a year to complete.',
      img: ['chamber/img1.jpg'],
      alt: ['Photo realisitc rendering of the chamber'],
      github: 'https://github.com/JiaweiHe98/ProgrammableIoTEnvironmentChamber',
      link: null,
    },
    {
      name: '4 Channel BTA16 TRIAC Control',
      intro:
        'Integrated IoT solution enables easy control of the 4-Channel BTA16 TRIAC Board. Created with Node Red, Arduino, and Raspberry Pi.',
      img: ['triac/img1.png'],
      alt: ['Web interface for lighting control'],
      github: 'https://github.com/JiaweiHe98/4ChannelBTA16TRIACControl',
      link: null,
    },
    {
      name: 'Guess the Celebrities',
      intro: 'A fun game to guess the celebrities. Completed with React.js.',
      img: ['guessCeleberties/img1.jpg'],
      alt: ['React interface for Guess the Celebrities'],
      github: 'https://github.com/JiaweiHe98/GuessTheCelebrities',
      link: null,
    },
  ],
};

export default Content;
