
import imageUrlBuilder from "@sanity/image-url";

import { client } from "./sanityClient";




const builder = imageUrlBuilder(client);

export const imageUrlFor = (source: string) => builder.image(source);
