import { useState } from 'react';
import { api } from './services/api';

export default function App() {
  const [nome, setNome] = useState('');
  const [resposta, setResposta] = useState([]); // resposta será array de arrays

  async function handleChute(nome) {
    try {
      const response = await api.get(`/chute/${nome}`);
      console.log(response.data);
      setResposta(prev => [response.data, ...prev]); // <-- empilhando novas respostas
    } catch (err) {
      console.log(err);
    }
  }

  const getColor = (valor) => {
    if (valor === 'igual') return 'bg-green-500';
    if (valor === 'maior' || valor === 'menor') return 'bg-red-500';
    return 'bg-gray-300';
  };

  return (
    <div
  className="min-h-screen bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: "url('/fundo.jpg')" }}
>
  <section className="w-[750px] h-[900px] p-8 bg-gray-200 bg-opacity-50 rounded shadow flex items-center justify-center">
    <div className="w-[600px] h-[700px] flex flex-col items-center justify-center overflow-y-scroll scrollbar-hidden">
      <div className="pt-40 flex flex-col items-center justify-center space-y-6">
        <h1 className="text-black text-4xl font-bold mb-6">Guess the F1 Driver</h1>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Enter the driver name"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="p-2 rounded border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => handleChute(nome)}
            className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Seção de respostas com quadrados */}
      <section className=" flex flex-col space-y-2 mt-6">
        {resposta.map((linha, linhaIndex) => (
          <div key={linhaIndex} className="flex flex-wrap space-x-2">
            {linha.map((valor, index) => (
              <div
                key={index}
                className={`w-14 h-14 rounded ${getColor(valor)}`}
              ></div>
            ))}
          </div>
        ))}
      </section>
    </div>
  </section>
</div>

  );
}


