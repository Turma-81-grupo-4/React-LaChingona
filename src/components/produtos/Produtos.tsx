import { useState } from "react";

function Produtos() {
  const [ativo, setAtivo] = useState(false);

  const [contagem, setContagem] = useState(0);

  const incrementarContagem = () => {
    setContagem((contagemAnterior) => contagemAnterior + 1);
  };

  const handleClick = () => {
    setAtivo(!ativo);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
        <div className="relative">
          <img
            src="https://media.istockphoto.com/id/1134104922/pt/foto/tortilla-wrap-with-fried-minced-meat-and-vegetables.jpg?s=612x612&w=0&k=20&c=ZDSBaFTNY4QL-j3cdMHjRby5B2CPM6euPpy0-lrzKMk="
            alt="Product"
            className="w-full h-52 object-cover"
          />
        </div>

        <div className="p-5 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Burrito de plantas
            </h3>
            <p className="text-gray-500 mt-1">
              PROTEÍNA VEGAN CHILI, queijo, arroz, salsa de cenoura e repolho
              roxo, sour cream, pico de gallo e guacamole enrolados na tortilla.
            </p>
          </div>

          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-2xl font-bold text-gray-900">R$29,99</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-yellow-500 border rounded-2xl p-2 hover:bg-yellow-500 hover:text-white transition-colors">
                Saudável
              </div>
              <div className="text-green-500 border rounded-2xl p-2 hover:bg-green-500 hover:text-white transition-colors">
                Vegetariano
              </div>
            </div>
          </div>

          <button
            onClick={handleClick}
            onAuxClick={incrementarContagem}
            className="w-full bg-primary hover:bg-red-700 text-white font-medium py-3 rounded-lg transition-colors ${ativo ? 'bg-primary text-white' : 'bg-gray-300 text-black'}"
          >
            {ativo ? contagem : "Adicionar ao carrinho"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Produtos;
