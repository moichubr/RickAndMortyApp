const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      await Favorite.destroy({ //a nivel instancia le indico cual es el id que quiero eliminar
        where: { id },
      });
      const favs = await Favorite.findAll();
      //cuando tengo muchos usuarios, tengo que relacionar el favorito a un usuario
      //User.addFavorite(favs)
      return res.status(201).json(favs);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteFav;
