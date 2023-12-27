interface getInfo {
  name: string;
  age: number;
  born: string;
  bio: string;
  subtitle: string;
  phone: string;
  mail: string;
  profilePic: string;
  homePic:string;
  experienceYears: string;
  projectDone: string;
  contactUsDesc: String;
  location: string;
}

interface getExperience extends experience {}
interface getSocialLinks extends socialLinks {}
interface getProjects extends projects {
  startDate:sting;
  endDate:sting;
}
interface getServices extends services {}
interface getTestimonial extends testimonial {}
interface getSkills {
  id: number;
  name: string;
  technologies: {
    _key: string;
    name: string;
    logo: string;
  }[];
  _createdAt:Data,
  _updatedAt:Date
}
