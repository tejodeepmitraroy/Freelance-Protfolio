import { client } from "@/config/sanityClient";

const getExperience = async ():Promise<getExperience[]> => {
  return await client.fetch(
    `*[_type=="experience"]`,
    {},
    { cache: "force-cache", next: { tags: ["basicInfo"] } }
  );
  };
  export default getExperience;
  