import client from "../sanity.config";

export async function getRestaurantsById(id: string): Promise<any> {
  const data = await client.fetch(
    `
    *[_type == "featured" && _id == $id] {
        ...,
        restaurants[] -> {
          ...,
          dishes[] -> ,
          type -> {
            name
          }
        }
      }[0]
        `,
    { id }
  );
  return data?.restaurants;
}
