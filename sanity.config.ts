import sanityClient from "@sanity/client";
import { SANITY_PROJECT_ID, SANITY_DATASET } from "@env";
import ImageUrlBuilder from "@sanity/image-url/lib/types/builder";

const client = sanityClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);
export default client;
