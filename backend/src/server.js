const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://semana:semana@cluster0-ecaw2.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// GET(BUSCAR INFO), POST(CRIAR INFO), PUT(ALTERAR INFO), DELETE(DELETAR INFO)

// req.query = Acessasr query params (para filtros)
// req.params = Acessar route params (para edição e delete)
// req.body = Acessar corpo da requisição (para criação e edição)

app.use(express.json());
app.use(routes);

app.listen(3333);