// index(retorna listagem de sessões), show(lista uma unica sessao), store(criar uma sessao), update(alterar uma sessao), destroy(deletar uma sessao)

module.exports = {
  store(req, res) {
    return res.json({ message: 'Hello World' })
  }
};