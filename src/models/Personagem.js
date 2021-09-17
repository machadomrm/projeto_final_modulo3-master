/*jshint esversion: 6 */
/*jshint esversion: 8 */
const mongoose = require("mongoose");

const personagemSchema = new mongoose.Schema({
  nome: {
    type: "string",
    require: true,
  },
  ocupacao: {
    type: "string",
    require: true,
  },
  frutadodiabo: {
    type: "string",
    require: true,
  },
  poder: {
    type: "string",
    require: true,
  },
  imagemUrl: {
    type: "string",
    require: true,
  },
});

module.exports = mongoose.model("Personagem", personagemSchema);
