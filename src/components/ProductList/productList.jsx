import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/productCard";
import { ProductContainer } from "./style";

function ProductList() {
  const products = useSelector((store) => store.products);

  return (
    <ProductContainer>
      {products.map((item, index) => (
        <ProductCard key={index} product={item} />
      ))}
    </ProductContainer>
  );
}
export default ProductList;
