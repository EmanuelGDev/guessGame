import Fastify from 'fastify';
import routes from './routes.js';

const fastify = Fastify({ logger: true });


fastify.register(routes);

const start = async () => {
  try {
    await fastify.listen({ port: 3005 });
    console.log('Servidor rodando em http://localhost:3005');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
