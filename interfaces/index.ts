export interface IFeaturedCategory {
  _id: string;
  name: string;
  short_description: string;
}

export interface IRestaurant {
  _id: string;
  address: string;
  dishes: IDish[];
  image: object[];
  lat: number;
  lng: number;
  name: string;
  rating: number;
  short_description: string;
  type: object[];
  _createdAt: string;
}

export interface IDish {
  _id: string;
  image: object[];
  name: string;
  price: number;
  short_description: string;
  _createdAt: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}
