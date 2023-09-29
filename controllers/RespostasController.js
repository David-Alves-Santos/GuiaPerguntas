const Respostas = require("../models/Resposta");



const respostaController = {
criarResposta: async (req, res) => {
    try {
        var corpo = req.body.corpo;
        var perguntaId = req.body.pergunta;

        await Respostas.create({
            corpo: corpo,
            perguntaId: perguntaId
        });

        res.redirect("/pergunta/"+perguntaId);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao criar resposta");
    }
},



};

module.exports = respostaController;