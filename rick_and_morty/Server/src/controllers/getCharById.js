const axios = require("axios");
// const URL = 'https://rickandmortyapi.com/api/character/'

function getCharById(res, id) {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
        console.log(response.data)
        const {id, name, gender, species, origin, image, status} = response.data;
    //   let char = {
    //     id: id,
    //     name: response.data.name,
    //     gender: response.data.gender,
    //     species: response.data.species,
    //     origin: response.data.origin,
    //     image: response.data.image,
    //     status: response.data.status,
    //   }

      res
      .writeHead(200, { "Content-Type": "application/JSON" })
      .end(JSON.stringify({id, name, gender, species, origin, image, status}))
    })
    .catch((error) => {
        res.writeHead(500, { "Content-Type": "text/plain" }).end(error.message);
      });
}

module.exports =  getCharById
