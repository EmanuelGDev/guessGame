import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Para resolver __dirname no ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function obterElementoAleatorio() {
  const caminho = path.join(__dirname, '../../pilotos.json');
  const dados = JSON.parse(fs.readFileSync(caminho, 'utf8'));

  if (!Array.isArray(dados) || dados.length === 0) return null;

  const indice = Math.floor(Math.random() * dados.length);
  return dados[indice];
}

export default {
  obterElementoAleatorio
};
