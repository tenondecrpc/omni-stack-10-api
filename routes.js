const { Router } = require("express");
const axios = require("axios"); // es una libreria libreria

const routes = Router();

routes.post("/devs", async (request, response) => {
  // Recibir una respuesta del Nuestro Servidor
  //console.log(request.body); // para visualizar la consultacon el query params en la terminal DIEGO
  //console.log(request.body);
  const { github_username } = request.body;

  const apiResponse = await axios.get(
    `https://api.github.com/users/${github_username}`
  );

  return response.json({ message: "Hello Omnistacknpm" }); // retonramos una Respuesta cualquiera
});

module.exports = routes;
