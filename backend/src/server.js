const express = require('express');

const app = express();

// GET(BUSCAR INFO), POST(CRIAR INFO), PUT(ALTERAR INFO), DELETE(DELETAR INFO)

// req.query = Acessasr query params (para filtros)
// req.params = Acessar route params (para edição e delete)
// req.body = Acessar corpo da requisição (para criação e edição)

app.use(express.json());

app.post('/users', (req, res) => {
  return res.json(req.body);
});

app.listen(3333);