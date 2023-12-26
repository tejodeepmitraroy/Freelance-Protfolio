"use client"
import imageUrlBuilder from "@sanity/image-url";
import { ClientConfig, createClient } from "next-sanity";


const config: ClientConfig = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2022-03-07",
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  };
  
const client = createClient(config);
const builder = imageUrlBuilder(client);

export const imageUrlFor = (source: string) => builder.image(source);
