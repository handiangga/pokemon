import {
  LIST_GAME,
  ADD_GAME,
  ADD_WISHLIST,
  IS_ERROR,
  IS_LOADING,
  DETAIL_GAME,
} from "./actionType";
export function fetchGames(url) {
  return async function (dispatch, getState) {
    try {
      dispatch(setLoading(true));
      fetch(url, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(listGames(data));
        })
        .catch((err) => {
          dispatch(setError(err));
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    } catch (err) {
      dispatch(setError(err));
    }
  };
}

export function listGames(data) {
  return async function (dispatch, getState) {
    try {
      dispatch({
        type: LIST_GAME,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function setLoading(payload) {
  return async function (dispatch, getState) {
    try {
      dispatch({
        type: IS_LOADING,
        payload,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function setError(payload) {
  return async function (dispatch, getState) {
    try {
      dispatch({
        type: IS_ERROR,
        payload,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

// export function addWishlist(data) {
//     return async function (dispatch,getState) {
//         try{
//             dispatch({
//                 type:ADD_WISHLIST,
//                 payload:data
//             })
//         } catch(err){
//             console.log(err);
//         }
//     }
// }

export function fetchDetail(url) {
  return async function (dispatch, getState) {
    try {
      dispatch(setLoading(true));
      fetch(url, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(detailGame(data));
        })
        .catch((err) => {
          dispatch(setError(err));
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    } catch (err) {
      dispatch(setError(err));
    }
  };
}

export function detailGame(data) {
  return async function (dispatch, getState) {
    try {
      dispatch({
        type: DETAIL_GAME,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function addGame(name, description, price, cover, link) {
  return async function (dispatch, getState) {
    try {
      dispatch(setLoading(true));
      fetch("http://localhost:3000/games", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          name,
          description,
          cover,
          price,
          steamLink: link,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(newGame(data));
        })
        .catch((err) => {
          dispatch(setError(err));
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function newGame(data) {
  return async function (dispatch, getState) {
    try {
      dispatch({
        type: ADD_GAME,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function addWishlist(name, description, price, cover, link) {
  return async function (dispatch, getState) {
    try {
      dispatch(setLoading(true));
      fetch("http://localhost:3000/games", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          name,
          description,
          cover,
          price,
          steamLink: link,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(newWishlist(data));
        })
        .catch((err) => {
          dispatch(setError(err));
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      dispatch(setError(error));
    }
  };
}

export function newWishlist(data) {
  return async function (dispatch, getState) {
    try {
      dispatch({
        type: ADD_WISHLIST,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
