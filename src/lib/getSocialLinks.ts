import { client } from "@/config/sanityClient";

const getSocialLinks = async ():Promise<getSocialLinks> => {
  return await client.fetch(
    `*[_type=="socialLinks"][0]`,
    {},
    { cache: "force-cache", next: { tags: ['socialLinks'] } }
  );
  };
  export default getSocialLinks;
  