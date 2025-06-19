export interface Product {
  id: number;
  image_url: string;
  title: string;
  description: string;
  price: number;
}

export interface GetProductsResponse {
  page: number;
  amount: number;
  total: number;
  items: Product[];
}
