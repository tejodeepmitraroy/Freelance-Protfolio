import { client } from "@/config/sanityClient";

const getServices = async (): Promise<getServices> => {
	return await client.fetch(
		`*[_type=="services"]{
      _id,
      id,
      title,
      description,
      _updatedAt,
      _createdAt,
    }`,
		{},
		{ cache: "force-cache", next: { tags: ["services"] } }
	);
};
export default getServices;
