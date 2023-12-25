import { client } from "@/config/sanityClient";

const getInfo = async (): Promise<getInfo> => {
  return await client.fetch(
    `*[_type=="basicInfo"][0]`,
    {},
    {cache: "force-cache", next: { tags: ['basicInfo'] } }
  );
};
export default getInfo;
