const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { name, status, species, origin, image, gender } = req.body;
  console.log(req.body);
  try {
    if (name && status && species && origin && image && gender) {
      await Favorite.findOrCreate({
        where: { name, status, species, origin, image, gender },
      });

      const myFavorites = await Favorite.findAll();
      return res.status(201).json(myFavorites);
    }
    return res.status(401).json({ message: "Faltan datos" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;
