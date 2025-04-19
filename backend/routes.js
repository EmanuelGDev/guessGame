import  adicionarPilotoController from 
"./src/Controllers/adicionarPilotoController.js";


async function routes(fastify, options) {
    fastify.get('/', async (request, reply) => {
      return 'Hello World';
    });

    fastify.post ('/novopiloto', async (request,reply) => {
        return new adicionarPilotoController().handle(request,reply)
    })
  }
  
export default routes;
  