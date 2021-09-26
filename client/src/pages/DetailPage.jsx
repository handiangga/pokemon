import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { fetchDetail } from "../store/action";

export default function DetailPage() {
  const { id } = useParams();
  const [url, setUrl] = useState(`http://localhost:3000/pokemon/${id}`);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetail(url));
  }, []);

  const state = useSelector((state) => state);
  console.log(state.pokemon);

  return (
    <div className="DetailPage">
      <h1>{state.pokemon.name}</h1>
      {state.pokemon.types?.map((e) => {
        return <h1>{e.type.name}</h1>;
      })}
      <img src={state.pokemon.sprites?.front_default} alt="content" />
      <h1>height {state.pokemon.height}</h1>
      <h1>weight {state.pokemon.weight}</h1>
      {state.pokemon.abilities?.map((e) => {
        return <h1>{e.ability.name}</h1>;
      })}
      {state.pokemon.stats?.map((e) => {
        if (e.base_stat >= 60) {
          return (
            <div class="p-6 space-y-2 artboard phone">
              <div class="flex flex-row">
                <p>{e.stat.name} </p>
                <p>{e.base_stat}</p>
                <progress
                  class="m-2 progress progress-success"
                  value={e.base_stat}
                  max="100"
                ></progress>
              </div>
            </div>
          );
        } else {
          return (
            <div class="p-6 space-y-2 artboard phone">
              <div class="flex flex-row">
                <p>{e.stat.name} </p>
                <p>{e.base_stat}</p>
                <progress
                  class="m-2 progress progress-error"
                  value={e.base_stat}
                  max="100"
                ></progress>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
