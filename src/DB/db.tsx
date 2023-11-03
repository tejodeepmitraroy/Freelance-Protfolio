const db: database = {
  name: "Tejodeep Mitra Roy",
  age: 21,
  born: "Kolkata,India",
  subtitle: "Website & webApp Developer",
  phone: "+91-9674128921",
  mail: "tejodeepmitraroy2002@gmail.com",
  profilePic: "/profilePic/profile1.png",
  bio: [
    "I'm Tejodeep Mitra Roy, a passionate web developer based in India, specializing in the Full stack Application. With a focus on crafting remarkable digital experiences, I transform ideas into visually stunning and high-performance websites and web applications.",
  ],
  experienceYears: "1+",
  projectDone: "10",
  experience: [
    {
      company: "Xanther Services",
      position: "Full Stack Intern",
      timeRange: "Sep 2022 - Mar 2023",
      description: [
        "During my internship at Xanther Services, I honed my skills in MERN stack development. I tackled challenging projects, gaining valuable experience in building robust web applications. Ready to apply my expertise to your projects. 💻",
      ],
    },
    {
      company: "IIC-TMSL",
      position: "Head of VFX Editor",
      timeRange: "Feb 2022 - jul 2023",
      description: [
        "As the Head VFX Editor for Institutions Innovation Council (IICs), I led dynamic video projects on entrepreneurship and outsourced content. Proudly part of MHRD's Innovation Cell, under the Ministry of HRD, Govt. of India. 🎥🚀",
      ],
    },
  ],
  socialLinks: {
    linkedIn: "https://www.linkedin.com/in/tejodeep-mitra-roy/",
    github: "https://github.com/Tejodeep2002",
    facebook: "https://www.facebook.com/profile.php?id=100077729720611",
    twitter: "",
  },

  projects: [
    {
      thumbnail: "/projects/chatApp/thumbnail.jpeg",
      title: "Full Stack Chat App",
      subtitle: "Personal",
      date: "jun 2023 - jul 2023",
      preview: [
        "/projects/chatApp/home.jpg",
        "/projects/chatApp/login.png",
        "/projects/chatApp/signup.jpg",
      ],
      description:
        " Web development is the process of bilduing programming Loremipsum dolor, sit amet consectetur adi pisicing elit. Soluta aspernatur, dolore, autem qui non quae magni aliquam sint doloremque, itaque voluptatum! Deserunt laborum nihil, qui quam commodi consequatur? Veniam laborum recusandae autem,link:",
      live: "https://talk-a-tive-1.netlify.app/#/",
      repoLink: [
        {
          name: "FrontEnd Code",
          link: "https://github.com/Tejodeep2002/Chat-app-frontend",
        },
        {
          name: "Backend Code",
          link: "https://github.com/Tejodeep2002/Chat-app-backend",
        },
      ],
      technologies: [
        "/logos/html.png",
        "/logos/css.png",
        "/logos/js.png",
        "/logos/typescript.png",
        "/logos/react.png",
        "/logos/chakra-ui.png",
        "/logos/node.png",
        "/logos/mongodb-leaf.png",
      ],
    },
    {
      thumbnail: "/projects/urlShortner/thumbnail.png",
      title: "Link Shortner",
      subtitle: "Personal",
      date: "jun 2023 - jul 2023",
      preview: [
        "/projects/urlShortner/demo1.png",
        "/projects/urlShortner/demo2.gif",
        
      ],
      description:
        " Web development is the process of bilduing programming Loremipsum dolor, sit amet consectetur adi pisicing elit. Soluta aspernatur, dolore, autem qui non quae magni aliquam sint doloremque, itaque voluptatum! Deserunt laborum nihil, qui quam commodi consequatur? Veniam laborum recusandae autem,link:",
      live: "https://urlshortner123.netlify.app/",
      repoLink: [
        {
          name: "FrontEnd Code",
          link: "https://github.com/Tejodeep2002/Chat-app-frontend",
        },
        {
          name: "Backend Code",
          link: "https://github.com/Tejodeep2002/Chat-app-backend",
        },
      ],
      technologies: [
        "/logos/html.png",
        "/logos/css.png",
        "/logos/js.png",
        "/logos/typescript.png",
        "/logos/react.png",
        "/logos/chakra-ui.png",
        "/logos/node.png",
        "/logos/mongodb-leaf.png",
      ],
    },
  ],

  services: [
    {
      id: 1,
      title: "Web Development 1",
      description: [
        "Web development is the process of bilduing programming...",
      ],
    },
    {
      id: 2,
      title: "Web Development 2",
      description: [
        "Web development is the process of bilduing programming...",
      ],
    },
  ],

  testimonial: [
    {
      id: 1,
      image: "/img.png",
      name: "Alan Walker",
      subtitle: "Sales Manager at Vivaco Shop",
      feedback:
        "Loved the template design, documentation, customizability and the customer support from Marketify team! I am a noob in programming but the Marketify team helped me successfully.",
    },
    {
      id: 2,
      image: "/img.png",
      name: "Alan 2 Walker",
      subtitle: "Sales Manager  Vivaco Shop",
      feedback:
        "Loved the template design, documentation, customizability and the customer support from Marketify team! I am a noob in programming but the Marketify team helped me successfully.",
    },
  ],
  contactUs: {
    description:
      "I'm currently available to take on new projects, so fell free to snd me a message about anything that you want to run past me. you can contact at 24/7",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29455.92847020909!2d88.40960262601587!3d22.654121982998415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e6c605d82ff%3A0x1f6779d05c4879ee!2sDum%20Dum%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1694771815112!5m2!1sen!2sin",
  },
};

export default db;
