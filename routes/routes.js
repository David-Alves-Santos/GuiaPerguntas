const express = require("express");
const router = express.Router();

const perguntaController = require("../controllers/PerguntasController");
const respostaController = require("../controllers/RespostasController");

router.get("/", perguntaController.listarPerguntas);
router.post("/salvarpergunta", perguntaController.criarPergunta);
router.get("/pergunta/:id", perguntaController.exibirPergunta);
router.post("/responder", respostaController.criarResposta);

module.exports = router;