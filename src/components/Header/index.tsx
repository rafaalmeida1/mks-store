import { HeaderContainer } from "./styles";
import { ShoppingCart } from 'phosphor-react';

export function Header() {
  return (
    <HeaderContainer>
      <strong>
        MKS <span>Sistemas</span>
      </strong>

      <button>
        <ShoppingCart size={19} weight="fill" />
        <span>0</span>
      </button>
    </HeaderContainer>
  );
}
