import { client } from "@/config/sanityClient";

const getExperience = async ():Promise<getExperience[]> => {
  return await client.fetch(
    `*[_type=="experience"]`,
    {},
    { next: { tags: ['experience'] } }
  );
  };
  export default getExperience;
  