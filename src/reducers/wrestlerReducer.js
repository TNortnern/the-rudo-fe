const forTesting = [
  { name: "Triple H", status: "bad", age: 48 },
  { name: "The Rock", status: "good", age: 48 }
];

const wrestlerReducer = (state = forTesting, { type, payload }) => {
  switch (type) {
    case "GET_WRESTLERS":
      console.log("hey");
      return payload;
    default:
      return state;
  }
};

export default wrestlerReducer;
