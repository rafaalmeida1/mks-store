import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useRouter } from "next/router";
import { Minus, Plus, X } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity, removeItem } from "../../redux/cartSlice";
import { formatPrice } from "../../utils/formatPrice";
import { ProductCartProps } from "../Header";
import {
  CloseModal,
  OverlayModal,
  ProductInCart,
  ResumeCart,
  SetQuantity,
  ShoppingCartContent,
} from "./style";

export function ShoppingCartModal() {
  const navigate = useRouter();

  const cart = useSelector((state: ProductCartProps) => state.cart);
  const dispatch = useDispatch();

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return {totalPrice, totalQuantity}
  }

  return (
    <Dialog.Portal>
      <OverlayModal />

      <ShoppingCartContent>
        <CloseModal>
          <X />
        </CloseModal>

        <div>
          <h2>
            Carrinho <br />
            de compras
          </h2>

          {cart?.map((item: ProductCartProps) => (
            <ProductInCart key={item.id}>
              <button onClick={() => dispatch(removeItem(item.id))}>
                X
              </button>

              <Image src={item.photo} width={70} height={71} alt="" />

              <span>{item.name}</span>

              <SetQuantity>
                <div>
                  <span>Qtd:</span>
                  <section>
                    <button
                      onClick={() => dispatch(decrementQuantity(item.id))}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => dispatch(incrementQuantity(item.id))}
                    >
                      +
                    </button>
                  </section>
                </div>
                <strong>{formatPrice(item.price * item.quantity).replace(",00", "")}</strong>
              </SetQuantity>
            </ProductInCart>
          ))}
        </div>
        <ResumeCart>
          <div>
            <strong>Total:</strong>
            <strong>{formatPrice(getTotal().totalPrice).replace(',00', '')}</strong>
          </div>

          <button onClick={() => navigate.push('/success')}>Finalizar Compra</button>
        </ResumeCart>
      </ShoppingCartContent>
    </Dialog.Portal>
  );
}
