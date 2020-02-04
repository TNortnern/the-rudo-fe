import helpers from "../misc/helpers";
// probably pass page as a parameter
export const getWrestlers = () => async dispatch => {
  console.log("hey");
  const response = await helpers.url.get(`/wrestlers`);
  dispatch({ type: "GET_WRESTLERS", payload: response.data });
};
