const {Router} = require('express');
const router = Router();
const getCharById = require ('../controllers/getCharById');
const postUser = require ('../controllers/postUser');
const postFav = require ('../controllers/postFav');
const deleteFav = require ('../controllers/deleteFav');
const login = require('../controllers/login');


router.get("/character/:id", getCharById)

router.get("/login", login)

router.post("/login", postUser)

router.post("/fav", postFav)
// (req, res) => {
//     postFav
// })

router.delete("/fav/:id", deleteFav)
// (req, res) => {
//     deleteFav
// })


module.exports= router