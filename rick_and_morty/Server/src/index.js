//CLASE DE EXPRESS
const express = require('express');
const server = express();
const router = require('./routes/index')
const PORT = 3001;
const { conn } = require('./DB_connection');

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use(express.json());
server.use('/rickandmorty', router)

//PRIMERO conecta la DB, resetea las listas, y luego levanta el server
// conn.sync({force:true}).then(() => {
//    server.listen(PORT, () => {console.log('Server raised in port: ' + PORT)})

//PRIMERO levanta el server y luego conecta con la DB y resetea las listas
server.listen(PORT, async () => {
      await conn.sync({force:false});  //al ponerle false, no resetea las listas automaticamente cuando arranca.
      console.log('Server raised in port: ' + PORT);
});

module.exports= server;







// CLASE DE WEB SERVER

// let data = require("./utils/data.js");
// let http = require("http");
// const getCharById = require('./controllers/getCharById')
// const PORT = 3001;

// http
//   .createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const {url} = req;


//     //****HOMEWORK PROMISES */
//     if(url.includes('/rickandmorty/character/')) {
//       const id = parseInt(url.split('/').pop())
//       getCharById(res, id)
//     }

    
//     //****HOMEWORK WEB SERVER */
//     //POL: if(url.indexOf('/rickandmorty/character/')  >=0 )     ---si no lo tiene devuelve -1
    
//     // if (url.includes('/rickandmorty/character/')) { 
//     //   const urlId = parseInt(url.split('/').pop());
//     //   // const urlArr = url.split("/");
//     //   // const id = parseInt(urlArr.pop());
//     //   const found = data.find((char) => char.id === urlId); //solo me trae la primer coincidencia!!
      
//     //     if (found) {
//     //       res.writeHead(200, { "Content-Type": "application/json" });
//     //       res.end(JSON.stringify(found));   //
//     //     } else {
//     //       res.writeHead(404, { "Content-Type": "text/plain" });
//     //       res.end("Id not found");
//     //     }
//     //     return; //corta la ejecucion para que no haya dos respuestas.
//     //   }
//     //SIEMPRE NECESITA UN CASO DEFAULT EN CASO DE QUE NO ENTRE EN LOS IF
//     // res.writeHead(404, { "Content-Type": "text/plain" });
//     // res.end("Web-page not found");
//   })
//   .listen(PORT, "localhost");
