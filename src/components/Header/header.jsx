import { Button, CartItems, HeaderContainer } from "./style";
import { FaShoppingCart } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Header() {
  const cart = useSelector((store) => store.cart);
  const [itemcount, setItemcount] = useState(0);
  const history = useHistory();

  useEffect(() => {
    let counter = 0;
    cart.forEach((prod) => {
      if (prod.qtd !== 0) {
        counter += prod.qtd;
      }
    });
    setItemcount(counter);
  }, [cart]);

  return (
    <HeaderContainer>
      <h1 onClick={() => history.push("/")}>Kenzie Shop</h1>
      <Button onClick={() => history.push("/checkout")}>
        <FaShoppingCart />
        <p>Carrinho</p>
        <CartItems>{itemcount}</CartItems>
      </Button>
    </HeaderContainer>
  );
}
export default Header;
