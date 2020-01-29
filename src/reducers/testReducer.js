const testReducer = (state = "test", { type, payload }) => {
  switch (type) {
    case "GET_WRESTLERS":
      return "testing reducer";
    default:
      return state;
  }
};

export default testReducer;