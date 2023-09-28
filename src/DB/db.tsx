import { Url } from "url";

export interface projects {
  thumbnail: String;
  title: String;
  subtitle: String;
  date: String;
  description: String;
  live: string;
  repolink: { name: string; link: string }[];
  technologies: String[];
}
export interface database {
  projects: projects[];
}
const db: database = {
  projects: [
    {
      thumbnail: "projects/pro1.jpg",
      title: "Full Stack Chat App",
      subtitle: "",
      date: "jun 2023 - jul 2023",
      description:
        " Web development is the process of bilduing programming Loremipsum dolor, sit amet consectetur adi pisicing elit. Soluta aspernatur, dolore, autem qui non quae magni aliquam sint doloremque, itaque voluptatum! Deserunt laborum nihil, qui quam commodi consequatur? Veniam laborum recusandae autem,link:",
      live: "https://talk-a-tive-1.netlify.app/#/",
      repolink: [
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
      thumbnail: "projects/pro1.jpg",
      title: "Full Stack Chat App",
      subtitle: "",
      date: "jun 2023 - jul 2023",
      description:
        " Web development is the process of bilduing programming Loremipsum dolor, sit amet consectetur adi pisicing elit. Soluta aspernatur, dolore, autem qui non quae magni aliquam sint doloremque, itaque voluptatum! Deserunt laborum nihil, qui quam commodi consequatur? Veniam laborum recusandae autem,link:",
      live: "https://talk-a-tive-1.netlify.app/#/",
      repolink: [
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
      thumbnail: "projects/pro1.jpg",
      title: "Full Stack Chat App",
      subtitle: "",
      date: "jun 2023 - jul 2023",
      description:
        " Web development is the process of bilduing programming Loremipsum dolor, sit amet consectetur adi pisicing elit. Soluta aspernatur, dolore, autem qui non quae magni aliquam sint doloremque, itaque voluptatum! Deserunt laborum nihil, qui quam commodi consequatur? Veniam laborum recusandae autem,link:",
      live: "https://talk-a-tive-1.netlify.app/#/",
      repolink: [
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
      thumbnail: "projects/pro1.jpg",
      title: "Full Stack Chat App",
      subtitle: "",
      date: "jun 2023 - jul 2023",
      description:
        " Web development is the process of bilduing programming Loremipsum dolor, sit amet consectetur adi pisicing elit. Soluta aspernatur, dolore, autem qui non quae magni aliquam sint doloremque, itaque voluptatum! Deserunt laborum nihil, qui quam commodi consequatur? Veniam laborum recusandae autem,link:",
      live: "https://talk-a-tive-1.netlify.app/#/",
      repolink: [
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
};

export default db;
