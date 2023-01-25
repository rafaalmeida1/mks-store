import { createContext, ReactNode } from "react";

export interface IProduct {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CartContextValues {}

export const CartContext = createContext({} as CartContextValues);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
}
