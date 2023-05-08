const {Router} = require('express');
const router = Router();
const getCharById = require ('../controllers/getCharById');
const { postFav, deleteFav } = require ('../controllers/handleFavorites');
const login = require('../controllers/login');


router.get("/character/:id", getCharById)

router.get("/login", login)

router.post("/fav", postFav)
// (req, res) => {
//     postFav
// })

router.delete("/fav/:id", deleteFav)
// (req, res) => {
//     deleteFav
// })


module.exports= router