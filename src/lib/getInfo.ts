import { client } from "@/config/sanityClient";

const getInfo = async (): Promise<getInfo> => {
  return await client.fetch(
    `*[_type=="basicInfo"][0]`,
    {},
    { next: { tags: ["basicInfo"] } }
  );
};
export default getInfo;
