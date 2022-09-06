import sanityClient from "@sanity/client";
import { SANITY_PROJECT_ID, SANITY_DATASET } from "@env";
import ImageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: SANITY_PROJECT_ID as string,
  dataset: SANITY_DATASET as string,
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = ImageUrlBuilder(client);
export const urlFor: any = (source: any) => builder.image(source);
export default client;
