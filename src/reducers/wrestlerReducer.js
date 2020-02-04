const wrestlerReducer = (state = null, { type, payload }) => {
  switch (type) {
    case "GET_WRESTLERS":
      return payload;
    default:
      return state;
  }
};

export default wrestlerReducer;
