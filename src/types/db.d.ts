interface projects {
  thumbnail: String;
  title: String;
  subtitle: String;
  date: String;
  description: String;
  live: string;
  repolink: { name: string; link: string }[];
  technologies: String[];
}

interface socialLinks {
  name: string;
  link: string;
  icon: string;
}
interface database {
  name: string;
  bio: string[];
  subtitle:string;
  phone:string;
  mail:string;
  experienceYears: string;
  projectDone: string;
  socialLinks: socialLinks[];
  projects: projects[];
}
