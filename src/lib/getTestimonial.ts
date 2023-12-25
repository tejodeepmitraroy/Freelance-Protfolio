import { client } from "@/config/sanityClient";

const getTestimonial = async ():Promise<getTestimonial> => {
  return await client.fetch(
    `*[_type=="testimonial"]`,
    {},
    { cache: "force-cache", next: { tags: ['testimonial'] } }
  );
  };
  export default getTestimonial;
  