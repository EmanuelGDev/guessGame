let ultimoElemento = null;

const cache = {
  setElemento: (elemento) => {
    ultimoElemento = elemento;
  },
  getElemento: () => {
    return ultimoElemento;
  }
};

export default cache;
