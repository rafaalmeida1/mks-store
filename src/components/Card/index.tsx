import Image from "next/image";
import { CardContainer, CardContent } from "./style";
import { ShoppingBagOpen } from "phosphor-react";
import { formatPrice } from "../../utils/formatPrice";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { IProduct } from "../../types/product";

interface ProductCardProps {
  product: IProduct;
}

export function Card({ product }: ProductCardProps) {
  const dispatch = useDispatch()

  return (
    <CardContainer>
      <CardContent>
        <Image src={product.photo} width={172} height={138} alt="" />
        <div>
          <strong>{product.name}</strong>
          <span>
            {formatPrice(product.price).replace(',00', '')}
          </span>
        </div>
        <p>{product.description}</p>
      </CardContent>

      <button onClick={() => dispatch(addToCart(product))}>
        <ShoppingBagOpen size={20} weight="bold" />
        <span>Comprar</span>
      </button>
    </CardContainer>
  );
}
