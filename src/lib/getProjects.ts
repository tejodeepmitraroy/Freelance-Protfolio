import { client } from "@/config/sanityClient";

export const getProjects = async (): Promise<getProjects[]> => {
  return await client.fetch(
    `*[_type=="projects"]`,
    {},
    {cache: "force-cache", next: { tags: ['projects'] } }
  );
};
export default getProjects;
