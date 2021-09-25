import React from "react";

export default function PokemonCard() {
  return (
    <div className="PokemonCard">
      <h1>heloo card</h1>
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
