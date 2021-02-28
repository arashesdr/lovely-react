export const contacsCounterReducer = (state = null, action) => {
  switch (action.type) {
    case "COUNTER":
      return action.payload;
    default:
      return state;
  }
};
