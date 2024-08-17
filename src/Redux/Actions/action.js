export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};
export const DELETE = (index) => {
  return {
    type: "DELETE_CART",
    payload: index,
  };
};
export const DECREMENT = (item) => {
  return {
    type: "DELETE_ITEM",
    payload: item,
  };
};
