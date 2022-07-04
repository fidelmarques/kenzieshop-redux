export const ADD_CART = "ADD_CART";
export const DEL_CART = "DEL_CART";
export const PLUS_1 = "PLUS_1";
export const MINUS_1 = "MINUS_1";

export const addCart = (value) => ({
  type: ADD_CART,
  payload: value,
});

export const delCart = (value) => ({
  type: DEL_CART,
  payload: value,
});

export const plus1 = (value) => ({
  type: PLUS_1,
  payload: value,
});

export const minus1 = (value) => ({
  type: MINUS_1,
  payload: value,
});
