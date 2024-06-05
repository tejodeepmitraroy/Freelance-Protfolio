import { client } from "@/config/sanityClient";

const getSkills = async (): Promise<getSkills[]> => {
	return await client.fetch(
		`*[_type=="skills"]{
      id,
      name,
      technologies[]{
        _key,
        name,
        "logo":logo.asset->url,
      },
      _createdAt,
      _updatedAt
    }`,
		{},
		{ cache: "force-cache", next: { tags: ["skills"] } }
	);
};
export default getSkills;
