import { Button } from "../Header/style";
import { Card, Line } from "./style";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { addCart } from "../../store/modules/cart/actions";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <Card>
      <img src={product.image} alt={product.name} />
      <Line />
      <h2>{product.name}</h2>
      <h3>{`$${product.price.toFixed(2)}`}</h3>
      <Button
        onClick={() => {
          dispatch(addCart(product));
        }}
      >
        <span>Adicionar ao carrinho</span>
      </Button>
    </Card>
  );
}
export default ProductCard;
