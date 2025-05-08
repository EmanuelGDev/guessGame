import  adicionarPilotoController from "./src/Controllers/adicionarPilotoController.js";
import listPilotoController from "./src/Controllers/listPilotoController.js";
import pilotoAleatorioController from "./src/Controllers/pilotoAleatorioController.js";
import verificadorRespostaController from "./src/Controllers/verificadorRespostaController.js";


async function routes(fastify, options) {
  

    fastify.get('/pilotos/:nome', async (request, reply) => {
      return new listPilotoController().handle(request,reply)
    });

    fastify.get('/piloto', async (request, reply) => {
      const resultado = pilotoAleatorioController.getElementoAtual();
      reply.send(resultado);
    });

    fastify.post ('/piloto', async (request,reply) => {
      return new adicionarPilotoController().handle(request,reply)
    })

    fastify.get('/chute/:nome', async (request, reply) => {
      return new verificadorRespostaController().handle(request,reply)
    });


  }
  
export default routes;
  