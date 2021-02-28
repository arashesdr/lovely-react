export const tabReducer = (state = null, action) => {
  switch (action.type) {
    case "CLICK":
      return action.payload;
    default:
      return state;
  }
};
