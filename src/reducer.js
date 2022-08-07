export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      console.log("Action: ", action);
      // Logic for adding item to basket
      return { ...state, basket: [...state.basket, action.payload] };

    case "REMOVE_FROM_BASKET":
      // Logic for removing item from basket
      return { state };

    default:
      return state;
  }
};

export default reducer;
