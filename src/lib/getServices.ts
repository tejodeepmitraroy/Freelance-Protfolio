import { client } from "@/config/sanityClient";

const getServices = async (): Promise<getServices> => {
  return await client.fetch(
    `*[_type=="services"]`,
    {},
    { next: { tags: ['services'] } }
  );
};
export default getServices;
