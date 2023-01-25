import { HeaderContainer, OpenCartButton } from "./styles";
import { ShoppingCart } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { ShoppingCartModal } from "../ShopingCartModal";
import { useSelector } from "react-redux";
import { IProduct } from "../../pages";
import { useEffect } from "react";
import { useRouter } from "next/router";

export interface ProductCartProps extends IProduct {
  [x: string]: any;
  quantity: number;
}

export function Header() {
  const { pathname } = useRouter();

  const showCartButton = pathname !== "/success";

  const cart = useSelector((state: ProductCartProps) => state.cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  useEffect(() => {});

  return (
    <HeaderContainer>
      <strong>
        MKS <span>Sistemas</span>
      </strong>

      {showCartButton && (
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <OpenCartButton>
              <ShoppingCart size={19} weight="fill" />
              <span>{getTotalQuantity() || 0}</span>
            </OpenCartButton>
          </Dialog.Trigger>

          <ShoppingCartModal />
        </Dialog.Root>
      )}
    </HeaderContainer>
  );
}
