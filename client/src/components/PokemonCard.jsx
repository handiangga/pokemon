import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addWishlist } from "../store/action";

export default function PokemonCard(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const history = useHistory();

  function onWishlist(data) {
    const found = state.find((e) => {
      return e.id === data.id;
    });
    if (!found) {
      dispatch(addWishlist(data));
      console.log("success");
    } else {
      console.log("failed");
    }
  }

  function onDetail(url) {
    let id = url.split("/");
    history.push(`/pokemon/${id[6]}`);
  }

  return (
    <>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img
            onClick={() => onDetail(props.pokemon.url)}
            class="h-40 rounded w-full object-cover object-center mb-6"
            src={props.pokemon.image}
            alt="content"
          />
          <h3 class="tracking-widest text-indigo-500 text-xs font-large title-font">
            {props.pokemon.name}
          </h3>
          {props.pokemon.types.map((e) => {
            return <h3>{e.name}</h3>;
          })}
          <button
            onClick={() => {
              onWishlist(props.pokemon);
            }}
            class="border rounded p-2 mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold"
          >
            Add to my wishlist
          </button>
        </div>
      </div>
    </>
  );
}
