const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const socketio = require('socket.io');
const http = require('http');

const routes = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketio(server);

mongoose.connect('mongodb+srv://semana:semana@cluster0-ecaw2.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const connecetdUsers = {};

io.on('connection', socket => {
  const { user_id } = socket.handshake.query;

  connecetdUsers[user_id] = socket.id;
});

app.use((req, res, next) => {
  req.io = io;
  req.connecetdUsers = connecetdUsers;

  return next();
})

// GET(BUSCAR INFO), POST(CRIAR INFO), PUT(ALTERAR INFO), DELETE(DELETAR INFO)

// req.query = Acessasr query params (para filtros)
// req.params = Acessar route params (para edição e delete)
// req.body = Acessar corpo da requisição (para criação e edição)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

server.listen(3333);