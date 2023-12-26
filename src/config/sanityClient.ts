
import {
  type ClientConfig,
  createClient,
  QueryParams,
} from "next-sanity";

const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2022-03-07",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
};

export const client = createClient(config);

// export async function sanityFetch<QueryResponse>({
//   query,
//   qParams,
//   tags,
// }: {
//   query: string;
//   qParams?: QueryParams;
//   tags: string[];
// }): Promise<QueryResponse> {
//   return client.fetch<QueryResponse>(query, qParams, {
//     cache: process.env.NODE_ENV === "development" ? "no-cache" : "force-cache",
//     next: { tags },
//   });
// }
