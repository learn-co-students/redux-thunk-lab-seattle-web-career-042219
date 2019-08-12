export function fetchCats() {
  return dispatch => {
    dispatch({ type: "LOADING_CATS" });
    // return fetch("http://localhost:4000/db/")
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(res => {
    //     console.log(res);
    //     return res;
    //   })
    //   .then(cats => dispatch({ type: "FETCH_CATS", payload: cats.images }))
    //   .catch(err => console.log(err));
    return fetch("http://localhost:4000/db")
      .then(response => {
        return response.json();
      })
      .then(responseJSON => {
        dispatch({ type: "FETCH_CATS", payload: responseJSON.images });
      })
      .catch(err => console.log(err));
  };
}
