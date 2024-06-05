import { client } from "@/config/sanityClient";

const getInfo = async (): Promise<getInfo> => {
	return await client.fetch(
		`*[_type=="basicInfo"][0]{
      _id,
      name,
      age,
      born,
      phone,
      mail,
      "profilePic": profilePic.asset->url,
      "homePic": homePic.asset->url,
      subtitle,
      projectDone,
      _updatedAt,
      _createdAt,
      location,
      bio,
      experienceYears,
    }`,
		{},
		{ cache: "force-cache", next: { tags: ["basicInfo"] } }
	);
};
export default getInfo;
