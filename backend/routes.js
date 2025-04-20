import  adicionarPilotoController from "./src/Controllers/adicionarPilotoController.js";
import listPilotoController from "./src/Controllers/listPilotoController.js";


async function routes(fastify, options) {
  

    fastify.get('/pilotos/:nome', async (request, reply) => {
      return new listPilotoController().handle(request,reply)
    });

    fastify.post ('/piloto', async (request,reply) => {
        return new adicionarPilotoController().handle(request,reply)
    })
  }
  
export default routes;
  