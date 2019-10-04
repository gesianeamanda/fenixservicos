const User = require('../models/User');

// index(retorna listagem de sessões), show(lista uma unica sessao), store(criar uma sessao), update(alterar uma sessao), destroy(deletar uma sessao)

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    // const user = await User.create({ email });

    return res.json(user);
  }
};