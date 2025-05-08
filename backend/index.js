import Fastify from 'fastify';
import cors from '@fastify/cors'; // plugin correto para Fastify
import routes from './routes.js';
import cache from './src/Cache/cache.js';
import service from './src/Services/pilotoAleatorioService.js';

const fastify = Fastify({ logger: true });

// Habilita CORS
await fastify.register(cors, {
  origin: '*', // permite qualquer origem. Para produção, especifique a URL do frontend.
});

// Registra as rotas
fastify.register(routes);

// Função para atualizar o cache com um elemento do JSON
function atualizarElementoPeriodicamente() {
  const elemento = service.obterElementoAleatorio();
  cache.setElemento(elemento);
}

setInterval(atualizarElementoPeriodicamente, 5 * 60 * 1000);
atualizarElementoPeriodicamente();

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
