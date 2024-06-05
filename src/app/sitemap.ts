import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://ttezo.in/";
	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
	];
}
