import { products } from "../../productList";
import { ADD_CART, MINUS_1, PLUS_1, DEL_CART } from "./actions";

const cartArray = [];
products.forEach((item) => {
  cartArray.push({ data: { item }, qtd: 0 });
});

const cartReducer = (state = cartArray, action) => {
  switch (action.type) {
    case ADD_CART:
      state[action.payload.id - 1].qtd++;
      return [...state];
    case DEL_CART:
      console.log(action.payload);
      const index = state.indexOf(action.payload);
      console.log(index);
      state.splice(index, 1);
      console.log(state);
      return [...state];
    case PLUS_1:
      action.payload.qtd++;
      return [...state];
    case MINUS_1:
      action.payload.qtd--;
      if (action.payload.qtd === 0) {
        const index = state.indexOf(action.payload);
        state.splice(index, 1);
      }
      return [...state];
    default:
      return state;
  }
};
export default cartReducer;
