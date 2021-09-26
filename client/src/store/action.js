import {
  LIST_POKEMON,
  DETAIL_POKEMON,
  IS_ERROR,
  IS_LOADING,
  ADD_WISHLIST,
} from "./actionType";
export function fetchPokemon() {
  return async function (dispatch, getState) {
    let url = "http://localhost:3000/pokemon";
    try {
      dispatch(setLoading(true));
      fetch(url, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(listPokemon(data));
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

export function listPokemon(data) {
  return async function (dispatch, getState) {
    try {
      dispatch({
        type: LIST_POKEMON,
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

export function fetchDetail(url) {
  return async function (dispatch, getState) {
    try {
      dispatch(setLoading(true));
      fetch(url, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(detailPokemon(data));
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

export function detailPokemon(data) {
  return async function (dispatch, getState) {
    try {
      dispatch({
        type: DETAIL_POKEMON,
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
