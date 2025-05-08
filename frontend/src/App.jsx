export default function App() {
  return (
    <div 
    className="min-h-screen bg-cover bg-center flex items-center justify-center" 
    style={{ backgroundImage: "url('/fundo.jpg')" }}>
      <section className="w-[750px] h-[900px] p-8 bg-gray-200 bg-opacity-50 rounded shadow flex items-center justify-center">
        <div className="column items-center justify-center">
          <h1 className="text-black text-4xl font-bold mb-6">Guess the F1 Driver</h1>
  
          <div className="flex items-center space-x-4">
            <input
            type="text"
            placeholder="Enter the name"
            className="p-2 rounded border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Submit
          </button>
          </div>
        </div>
      
      </section>

    </div>
  );
}
