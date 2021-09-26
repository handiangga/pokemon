import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonCard from "../components/PokemonCard";
import { fetchPokemon } from "../store/action";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemon());
  }, []);

  const state = useSelector((state) => state);

  if (state.isLoading) {
    return (
      <div>
        <h1>masih loading kakak</h1>
      </div>
    );
  }

  if (state.isError) {
    return (
      <div>
        <h1>Erorr kakak</h1>
      </div>
    );
  }

  return (
    <div className="Home">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {state.pokemons.results?.map((pokemon, i) => {
              return <PokemonCard pokemon={pokemon} key={i} />;
            })}
          </div>
        </div>
      </section>
      <div class="p-6 space-y-2 artboard phone">
        <div class="flex flex-row">
          <p>60</p>
          <progress
            class="m-2 progress progress-primary"
            value="70"
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  );
}
