import { useDispatch, useSelector } from "react-redux/es/exports";
import { delCart, minus1, plus1 } from "../../store/modules/cart/actions";
import {
  CheckoutItem,
  ItemButtons,
  ItemData,
} from "../../pages/Checkout/style";

function Cart() {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Itens do Carrinho</h1>
      {cart.map(
        (prod) =>
          prod.qtd !== 0 && (
            <CheckoutItem>
              <img src={prod.data.item.image} alt={prod.data.item.name} />
              <ItemData>
                <h2>{prod.data.item.name}</h2>
                <h3>{`$${prod.data.item.price.toFixed(2)}`}</h3>
              </ItemData>
              <ItemButtons>
                <div>
                  <button onClick={() => dispatch(minus1(prod))}>-</button>
                  <span>{prod.qtd}</span>
                  <button onClick={() => dispatch(plus1(prod))}>+</button>
                </div>
                <button onClick={() => dispatch(delCart(prod))}>Remover</button>
              </ItemButtons>
            </CheckoutItem>
          )
      )}
    </>
  );
}
export default Cart;
