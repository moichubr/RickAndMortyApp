const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email && password) {    //si no le llega nada, guarda undefined
      const newUser = await User.findOrCreate({   //devuelve un arreglo con el usuario y la prop created
        where: { email, password },
      });
      return res.status(201).json(newUser[0]); // devuelve la primera posicion que es donde esta el user--> const [newUser, created] = await User.findOrCreate({})
    }
    return res.status(400).json({ message: "Faltan datos" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = postUser;

