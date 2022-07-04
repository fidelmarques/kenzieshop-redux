import { CartContainer, CheckoutContainer, Subtotal } from "./style";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Cart from "../../components/Cart/cart";
import { useEffect, useState } from "react";

function Checkout() {
  const cart = useSelector((store) => store.cart);
  const [subtotal, setSubtotal] = useState(0);
  useEffect(() => {
    let subt = 0;
    cart.forEach((prod) => {
      subt += prod.qtd * prod.data.item.price;
      setSubtotal(subt);
    });
  }, [cart]);

  return (
    <CheckoutContainer>
      <CartContainer>
        <Cart />
      </CartContainer>
      <Subtotal>
        <h2>Subtotal</h2>
        <p>{`$${subtotal.toFixed(2)}`}</p>
      </Subtotal>
    </CheckoutContainer>
  );
}
export default Checkout;
