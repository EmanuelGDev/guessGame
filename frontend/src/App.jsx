import { useState } from 'react';
import { api } from './services/api';

export default function App() {
  const [nome, setNome] = useState('');
  const [resposta, setResposta] = useState([]); // resposta será array de arrays

  async function handleChute(nome) {
    try {
      const response = await api.get(`/chute/${nome}`);
      console.log(response.data);
      setResposta((prev) => [response.data, ...prev]);
    } catch (err) {
      console.log(err);
    }
  }

  const getColor = (valor) => {
    if (valor === 'igual') return 'bg-green-500';
    if (valor === 'maior' || valor === 'menor') return 'bg-red-500';
    return 'bg-gray-300';
  };
  
  const getArrow = (valor, index, total) => {
  if (index === 0 || index === total - 1) return null; // Ignora o primeiro e o último
  if (valor === 'maior') return <span className="text-3xl">⬆️</span>;
  if (valor === 'menor') return <span className="text-3xl">⬇️</span>;
  return null;
  };




  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center bg-black"
      style={{ backgroundImage: "url('/fundo.jpg')" }}
    >
      <section
        className="w-[1000px] max-h-[90vh] overflow-y-scroll p-8 rounded shadow flex flex-col items-center"
        style={{
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none', 
          backgroundColor: 'rgba(200, 200, 200, 0.85)'
        }}
      >
        <style>
          {`
            section::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        <div className="top-0 z-10 p-6 rounded w-full flex flex-col items-center space-y-6">
          <h1 className="text-black text-4xl font-bold">Guess the F1 Driver</h1>

          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Enter the driver name"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="p-2 rounded border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => handleChute(nome)}
              className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Submit
            </button>
          </div>
        </div>
        <div className='flex justify-center space-x-2'>
          <div
              className={"w-25 h-25 rounded flex items-center justify-center bg-gray-600 text-white font-bold text-center"}
          >
            <h2>Name</h2>
          </div>
          <div
              className={"w-25 h-25 rounded flex items-center justify-center bg-gray-600 text-white font-bold text-center"}
          >
            <h2>Debut Year</h2>
          </div>
          <div
              className={"w-25 h-25 rounded flex items-center justify-center bg-gray-600 text-white font-bold text-center"}
          >
            <h2>Retirement Year</h2>
          </div>
          <div
              className={"w-25 h-25 rounded flex items-center justify-center bg-gray-600 text-white font-bold text-center"}
          >
            <h2>Tittles</h2>
          </div>
          <div
              className={"w-25 h-25 rounded flex items-center justify-center bg-gray-600 text-white font-bold text-center"}
          >
            <h2>Wins</h2>
          </div>
          <div
            className={"w-25 h-25 rounded flex items-center justify-center bg-gray-600 text-white font-bold text-center"}
          >
            <h2>Poles</h2>
          </div>
          <div
              className={"w-25 h-25 rounded flex items-center justify-center bg-gray-600 text-white font-bold text-center"}
          >
            <h2>Races</h2>
          </div>
          <div
              className={"w-25 h-25 rounded flex items-center justify-center bg-gray-600 text-white font-bold text-center"}
          >
            <h2>Nation</h2>
          </div>
          
        </div>

        <div className="flex flex-col space-y-2 mt-6 w-full items-center">
          {resposta.map((linha, linhaIndex) => (
            <div key={linhaIndex} className="flex flex-wrap space-x-2">
              {linha.map((subarray, index) => (
                <div
                  key={index}
                  className={`
                    w-25 h-25 rounded flex flex-col items-center justify-center text-white font-bold text-center ${getColor(subarray[0])}`}
                >
                  {subarray[1]}
                  {getArrow(subarray[0], index, linha.length)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
