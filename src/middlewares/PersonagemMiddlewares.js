/*jshint esversion: 6 */
/*jshint esversion: 8 */
const mongoose = require("mongoose");
const Personagem = require("../models/Personagem");

const validaId = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ error: "Id inválido" });
    return;
  }

  try {
    const personagem = await Personagem.findById(id);

    if (!personagem) {
      res.status(400).send({ error: "Personagem não encontrado" });
      return;
    }

    res.personagem = personagem;
  } catch (err) {
    return res.status(500).send({ error: err });
  }
  next();
};

module.exports = { validaId };
