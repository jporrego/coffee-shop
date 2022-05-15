export interface ProductInterface {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
  onAddToCart?: (id: number) => void;
  openProductModal?: (id: number) => void;
}
