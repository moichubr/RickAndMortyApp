//CLASE DE EXPRESS
const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";


//ASYNC-AWAIT
async function getCharById(req, res) {
  const { id } = req.params;

  try {
    const response = (await axios.get(`${URL}${id}`));
    const { name, status, species, origin, image, gender } =
      response.data;
    const character = { id, name, status, species, origin, image, gender };
    
    character.name
      ? res.status(200).json(character)
      : res.status(404).send("Not found");
    
  } catch (error) {
    res.status(500).json({message: 'No se encontraron personajes con ese id', error: error.message});
  }
}


      //EXPRESS
// function getCharById(req, res) {
//   const { id } = req.params;

//   axios
//     .get(`${URL}${id}`)
//     .then((response) => {
//       const { name, status, species, origin, image, gender } =
//         response.data;
//       const character = { id, name, status, species, origin, image, gender };

//       character.name
//         ? res.status(200).json(character)
//         : res.status(404).send("Not found");
// })

// .catch((error) => {
//   res.status(500).json(error.message);
// });
// }

//-----------------------------------------------

      //   if(id === Number(idParams)){
      //     return res.status(200).json(character)
      //   } else {
      //     return res.status(404).send('Not fount')
      //   }



// CLASE DE WEB SERVER
// const axios = require("axios");
// // const URL = 'https://rickandmortyapi.com/api/character/'

// function getCharById(res, id) {
//   axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => {
//         console.log(response.data)
//         const {id, name, gender, species, origin, image, status} = response.data;
//     //   let char = {
//     //     id: id,
//     //     name: response.data.name,
//     //     gender: response.data.gender,
//     //     species: response.data.species,
//     //     origin: response.data.origin,
//     //     image: response.data.image,
//     //     status: response.data.status,
//     //   }

//       res
//       .writeHead(200, { "Content-Type": "application/JSON" })
//       .end(JSON.stringify({id, name, gender, species, origin, image, status}))
//     })
//     .catch((error) => {
//         res.writeHead(500, { "Content-Type": "text/plain" }).end(error.message);
//       });
// }

module.exports = getCharById;
