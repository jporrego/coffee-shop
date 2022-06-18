export interface Product {
  _id: string;
  brand: string;
  name: string;
  price: number;
  description: string;
  img: string;
  category: string;
}

export interface ProductBackup {
  id: number;
  brand: string;
  name: string;
  price: number;
  offer: number;
  description: string;
  img: string;
  category: string;
}

export type StringTouple = [string, string];
