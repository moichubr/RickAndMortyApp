let data = require("./utils/data.js");
let http = require("http");
const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req;

 //POL: if(url.indexOf('/rickandmorty/character/')  >=0 )     ---si no lo tiene devuelve -1

    if (url.includes('/rickandmorty/character/')) { 
      const urlId = parseInt(url.split('/').pop());
      // const urlArr = url.split("/");
      // const id = parseInt(urlArr.pop());
      const found = data.find((char) => char.id === urlId); //solo me trae la primer coincidencia!!
      
        if (found) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(found));   //
        } else {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("Id not found");
        }
        return; //corta la ejecucion para que no haya dos respuestas.
      }
    //SIEMPRE NECESITA UN CASO DEFAULT EN CASO DE QUE NO ENTRE EN LOS IF
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Web-page not found");
  })
  .listen(PORT, "localhost");