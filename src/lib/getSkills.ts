import { client } from "@/config/sanityClient";

const getSkills = async (): Promise<getSkills[]> => {
  return await client.fetch(
    `*[_type=="skills"]`,
    {},
    { cache: "force-cache", next: { tags: ['skills'] } }
  );
};
export default getSkills;
