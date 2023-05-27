const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;
  try {
    if (email && password) {
      const userMatch = await User.findOne({
        where: { email },
      });

      if (!userMatch)
        res.status(404).json({ message: "Usuario no encontrado" });
      if (userMatch && userMatch.password !== password)
        res.status(403).json({ message: "Constraseña incorrecta" });
      return res.json({ access: true });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = login;
