import client from "../sanity.config";

export async function getFeaturedCategories() {
  const data = await client.fetch(`
    *[_type == "featured"] {
        name,
        short_description,
        _id,
      }
    `);

  return data;
}
