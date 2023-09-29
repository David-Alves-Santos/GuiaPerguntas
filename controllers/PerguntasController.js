const Pergunta = require("../models/Pergunta");
const Resposta = require("../models/Resposta");

const perguntaController = {
  listarPerguntas: async (req, res) => {
    try {
      const perguntas = await Pergunta.findAll({
    
        raw: true,
        order: [['id', 'DESC']],
      });
      res.render("index", { perguntas });
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro ao listar perguntas");
    }
  },

  exibirFormularioPergunta: (req, res) => {
    res.render("perguntar");
  },

  criarPergunta: async (req, res) => {
    const { titulo, descricao } = req.body;

    if (!titulo || !descricao) {
      return res.status(400).send("Título e descrição são obrigatórios.");
    }
    
    try {
      await Pergunta.create({ titulo, descricao });
      res.redirect("/");
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro ao criar pergunta");
    }
  },

  exibirPergunta: async (req, res) => {
    const id = req.params.id;
    try {
      const pergunta = await Pergunta.findOne({ where: { id } });
      if (pergunta) {
          const respostas = await Resposta.findAll({
          where: { perguntaId: id },
          order: [['id', 'DESC']]
      });
        res.render("pergunta", { pergunta, respostas });
      } else {
          res.redirect("/");
        }
      } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao buscar pergunta");
      }
    },
  };
  
  module.exports = perguntaController;
  