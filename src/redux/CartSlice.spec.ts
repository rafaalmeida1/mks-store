import { ProductCartExtendedProps } from "../types/product";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  cartReducer,
} from "./cartSlice";

interface CartSliceProps {
  cart: Array<ProductCartExtendedProps>;
}

const product: ProductCartExtendedProps = {
  id: 1,
  name: "Product",
  description: "Product description",
  price: 10,
  photo: "http://github.com/rafaalmeida1.png",
  quantity: 1,
}

describe("Cart Reducer", () => {
  const state: CartSliceProps = {
    cart: [product]
  }

  it("should handle add Product", () => {
    const initialState = {...state, cart: []};
    const action = addToCart(product);
    const expectedState = {...state, cart: [product]};
    expect(cartReducer(initialState, action)).toEqual(expectedState);
  })

  it("should handle remove Product", () => {
    const initialState = {...state, cart: [product]};
    const action = removeItem(1);
    const expectedState = {...state, cart: []};
    expect(cartReducer(initialState, action)).toEqual(expectedState);
  });

});
