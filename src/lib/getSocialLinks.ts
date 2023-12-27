import { client } from "@/config/sanityClient";

const getSocialLinks = async ():Promise<getSocialLinks> => {
  return await client.fetch(
    `*[_type=="socialLinks"][0]{
      _id,
      facebook,
      github,
      linkedIn,
      twitter,
      _updatedAt,
    }`,
    {},
    { cache: "force-cache", next: { tags: ['socialLinks'] } }
  );
  };
  export default getSocialLinks;
  