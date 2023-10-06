interface projects {
  thumbnail: string;
  title: String;
  subtitle: String;
  date: String;
  description: String;
  live: string;
  repoLink: { name: string; link: string }[];
  technologies: String[];
}

interface socialLinks {
  name: string;
  link: string;
  icon: string;
}

interface experience{
  company:String;
  position:String;
  timeRange:String;
  description: String[]
}

interface services{
  id: number;
  title: String;
  description: String[];
}

interface testimonial {
    id: Number;
    image: string;
    name: String;
    subtitle: String;
    feedback: String; 
}

interface contactUs{
  description: String
  location:String
}  
interface database {
  name: string;
  age: number;
  born: string;
  bio: string[];
  subtitle: string;
  phone: string;
  mail: string;
  experienceYears: string;
  projectDone: string;
  experience:experience[]
  socialLinks: socialLinks[];
  projects: projects[];
  services:services[];
  testimonial:testimonial[];
  contactUs:contactUs
}
