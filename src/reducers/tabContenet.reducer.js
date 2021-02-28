export const tabContentReducer = (state = null, action) => {
  switch (action.type) {
    case "LOAD":
      return [...action.payload];
    default:
      return state;
  }
};
