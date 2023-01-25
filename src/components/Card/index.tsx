import Image from "next/image";
import { CardContainer, CardContent } from "./style";
import image from "../../assets/apple-watch.png";
import { ShoppingBagOpen } from "phosphor-react";
import { IProduct } from "../../context/CartContext";
import { formatPrice } from "../../utils/formatPrice";

interface ProductCardProps {
  product: IProduct;
}

export function Card({ product }: ProductCardProps) {
  return (
    <CardContainer>
      <CardContent>
        <Image src={product.photo} width={172} height={138} alt="" />
        <div>
          <strong>{product.name}</strong>
          <span>
            {formatPrice(product.price)}
          </span>
        </div>
        <p>{product.description}</p>
      </CardContent>

      <button>
        <ShoppingBagOpen size={20} weight="bold" />
        <span>Comprar</span>
      </button>
    </CardContainer>
  );
}
