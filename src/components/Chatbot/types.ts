export interface Property {
  id: number;
  title: string;
  image: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
}

export interface Message {
  id: number;
  role: "user" | "ai";
  text: string;
  properties?: Property[];
}
