export interface IProduct {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: number;
}

export interface ProductCartExtendedProps extends IProduct {
  [x: string]: any;
  quantity: number;
}