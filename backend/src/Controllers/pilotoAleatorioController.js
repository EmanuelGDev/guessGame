import cache from '../Cache/cache.js';

function getElementoAtual() {
  const elemento = cache.getElemento();
  return { elemento };
}

export default {
  getElementoAtual
};
