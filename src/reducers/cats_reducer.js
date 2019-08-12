const catsReducer = (state = { pictures: [], loading: false }, action) => {
  switch (action.type) {
    case "LOADING_CATS":
      return { ...state, loading: true };
    case "FETCH_CATS":
      return { ...state, loading: false, pictures: action.payload };
    default:
      return state;
  }
};

export default catsReducer;
