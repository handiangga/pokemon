const routers = require("express").Router();
const PokemonController = require("../controllers/pokemonController");

routers.get("/pokemon", PokemonController.getAll);
routers.get("/pokemon/:id", PokemonController.getById);

module.exports = routers;
