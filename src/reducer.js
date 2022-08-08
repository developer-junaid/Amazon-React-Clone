export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      console.log("Action: ", action);

      // Logic for adding item to basket
      return { ...state, basket: [...state.basket, action.payload] };

    case "REMOVE_FROM_BASKET":
      console.log("ID : ", action.id);

      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // Item exists in basket, remove it ...
        console.log("BASKET BEFORE: ", newBasket, action.id);

        console.log("New Basket : ", newBasket);
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in the basket`
        );
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
