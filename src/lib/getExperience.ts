import { client } from "@/config/sanityClient";

const getExperience = async ():Promise<getExperience[]> => {
  return await client.fetch(
    `*[_type=="experience"]{
      _id,
      position,
      company,
      timeRange,
      description,
      _createdAt,
      _updatedAt,
    }`,
    {},
    {cache: "force-cache", next: { tags: ['experience'] } }
  );
  };
  export default getExperience;
  