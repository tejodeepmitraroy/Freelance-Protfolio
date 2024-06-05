import { client } from "@/config/sanityClient";

export const getProjects = async (): Promise<getProjects[]> => {
	return await client.fetch(
		`*[_type=="projects"]{
      _id,
      title,
      subtitle,
      description,
      live,
      "thumbnail":thumbnail.asset->url,
      preview[]{
        _key,
        "image":asset->url 
      },
      repoLink[]{
        link,
        name,
        _key
      },
      startDate,
      endDate,
      _createdAt,
      _updatedAt,
    }`,
		{},
		{ cache: "force-cache", next: { tags: ["projects"] } }
	);
};
export default getProjects;
