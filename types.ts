export interface Product {
  id: number;
  name: string;
  price: number;
  maxPrice?: number;
  article: string;
  description: string;
  photo: string;
  link: string;
}
export interface ProductCart extends Product {
  quantity: number;
}

export interface Breadcrumb {
  name: string;
  path: string;
}
