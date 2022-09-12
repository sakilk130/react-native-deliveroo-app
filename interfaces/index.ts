export interface IFeaturedCategory {
  _id: string;
  name: string;
  short_description: string;
}

export interface IRestaurant {
  _id: string;
  address: string;
  dishes: object[];
  image: object[];
  lat: number;
  lng: number;
  name: string;
  rating: number;
  short_description: string;
  type: object[];
  _createdAt: string;
}
