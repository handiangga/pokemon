const axios = require("axios");
class PokemonController {
  static async getAll(req, res, next) {
    try {
      const { data } = await axios({
        methods: "GET",
        url: "https://pokeapi.co/api/v2/pokemon",
      });

      let newUrlDetail = data.results.map((el) => {
        return el.url;
      });

      for (let index = 0; index < newUrlDetail.length; index++) {
        const detail = await axios({
          methods: "GET",
          url: newUrlDetail[index],
        });
        let types = detail.data.types.map((el) => {
          return el.type;
        });
        data.results[index].types = types;
      }
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getById(req, res, next) {
    let id = req.params.id;
    console.log(id);
    try {
      const { data } = await axios({
        methods: "GET",
        url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = PokemonController;
