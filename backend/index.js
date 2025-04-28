import Fastify from 'fastify';
import routes from './routes.js';
import cache from './src/Cache/cache.js';
import service from './src/Services/pilotoAleatorioService.js'; // Certifique-se do nome correto

const fastify = Fastify({ logger: true });

// Registra as rotas
fastify.register(routes);

// Função para atualizar o cache com um elemento do JSON
function atualizarElementoPeriodicamente() {
  const elemento = service.obterElementoAleatorio();
  cache.setElemento(elemento);
}

// Executa na inicialização e depois a cada 5 minutos
setInterval(atualizarElementoPeriodicamente, 15 * 1000);
atualizarElementoPeriodicamente();

// Inicializa o servidor
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
