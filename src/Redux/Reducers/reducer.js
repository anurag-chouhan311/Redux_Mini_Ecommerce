const INIT_STATE = {
  cart: [],
};

export const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cart[itemIndex].qnty += 1;
      } else {
        const obj = { ...action.payload, qnty: 1 };

        return {
          cart: [...state.cart, obj],
        };
      }

    case "DELETE_CART":
      let obj = state.cart.filter((item, i) => {
        return i !== action.payload;
      });

      return {
        cart: obj,
      };

    case "DELETE_ITEM":
      const itemIndex_dec = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cart[itemIndex_dec].qnty >= 1) {
        state.cart[itemIndex_dec].qnty -= 1;
        return {
          cart: [...state.cart],
        };
      }
      //  else if (state.cart[itemIndex_dec].qnty === 1) {
      //   let obj = state.cart.filter((item, i) => {
      //     return i !== action.payload;
      //   });

        // return {
        //   cart: obj,
        // };
      // }

    default:
      return state;
  }
};
