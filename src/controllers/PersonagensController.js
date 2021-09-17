/*jshint esversion: 6 */
/*jshint esversion: 8 */
const Personagem = require("../models/Personagem");

const getAll = async (req, res) => {
  try {
    const personagens = await Personagem.find(); // Promisse
    if (personagens.length === 0)
      return res
        .status(404)
        .send({ message: "Não existem personagens cadastrados!" });
    return res.send({ personagens });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const personagem = await Personagem.findById(id);
    if (!personagem) {
      res.status(404).json({ message: "Personagem não encontrado" });
      return;
    }
    return res.send({ personagem });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const create = async (req, res) => {
  const { nome, ocupacao, frutadodiabo, poder, imagemUrl } = req.body;

  if (!nome || !ocupacao || !frutadodiabo || !poder || !imagemUrl) {
    res.status(404).send({
      message: "Você não enviou todos os dados necessários para o cadastro",
    });
    return;
  }

  const novoPersonagem = await new Personagem({
    nome,
    ocupacao,
    frutadodiabo,
    poder,
    imagemUrl,
  });

  try {
    await novoPersonagem.save();
    return res
      .status(201)
      .send({ message: "Personagem criado com sucesso", novoPersonagem });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const update = async (req, res) => {
  const { nome, ocupacao, frutadodiabo, poder, imagemUrl } = req.body;

  if (!nome || !ocupacao || !frutadodiabo || !poder || !imagemUrl) {
    res.status(404).send({
      message: "Você não enviou todos os dados necessários para o cadastro",
    });
    return;
  }

  res.personagem.nome = nome;
  res.personagem.ocupacao = ocupacao;
  res.personagem.frutadodiabo = frutadodiabo;
  res.personagem.poder = poder;
  res.personagem.imagemUrl = imagemUrl;

  try {
    await res.personagem.save();
    res.send({ message: "Personagem alterado com sucesso" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const del = async (req, res) => {
  try {
    await res.personagem.remove();
    res.send({ message: "personagem removido com sucesso" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const filter = async (req, res) => {
  let { nome, ocupacao, frutadodiabo, poder } = req.query;

  !nome ? (nome = "") : (nome = nome);
  !ocupacao ? (ocupacao = "") : (ocupacao = ocupacao);
  !frutadodiabo ? (frutadodiabo = "") : (frutadodiabo = frutadodiabo);
  !poder ? (poder = "") : (poder = poder);

  try {
    const personagem = await Personagem.find({
      nome: { $regex: `${nome}`, $options: "i" },
      ocupacao: { $regex: `${ocupacao}`, $options: "i" },
      frutadodiabo: { $regex: `${frutadodiabo}`, $options: "i" },
      poder: { $regex: `${poder}`, $options: "i" },
    });

    if (personagem.length === 0)
      return res.status(404).send({ error: "Personagem não encontrado" });

    res.send({ personagem });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  del,
  filter,
};
