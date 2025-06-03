import { useState } from "react";

function Produtos() {
  const [ativo1, setAtivo] = useState(false);
  const [ativo2, setAtivo2] = useState(false);
  const [ativo3, setAtivo3] = useState(false);
  const [ativo4, setAtivo4] = useState(false);

  const handleClick1 = () => {
    setAtivo(!ativo1);
  };
  const handleClick2 = () => {
    setAtivo2(!ativo2);
  };
  const handleClick3 = () => {
    setAtivo3(!ativo3);
  };
  const handleClick4 = () => {
    setAtivo4(!ativo4);
  };
  return (
    <div className="bg-stone-200 min-h-screen w-full flex flex-col items-center justify-center p-4">
      <h1 className="font-bold text-gray-900 text-center text-2xl md:text-3xl">
        Cardápio
      </h1>
      <hr className="border-green-800 border-t-4 md:border-t-6 border-double my-5 w-full max-w-md"></hr>
      <div className="w-full bg-stone-200 flex flex-row flex-wrap justify-center items-start p-4 gap-4">
        <div
          className="w-full max-w-sm h-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all 
                    lg:w-[calc(25%-0.75rem)]"
        >
          <div className="relative">
            <img
              src="https://media.istockphoto.com/id/1134104922/pt/foto/tortilla-wrap-with-fried-minced-meat-and-vegetables.jpg?s=612x612&w=0&k=20&c=ZDSBaFTNY4QL-j3cdMHjRby5B2CPM6euPpy0-lrzKMk="
              alt="Product"
              className="w-full h-48 object-cover"
            />
          </div>

          <div className="p-5 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Burrito de plantas
              </h3>
              <p className="text-gray-500 mt-1">
                PROTEÍNA VEGAN CHILI, queijo, arroz, salsa de cenoura e repolho
                roxo, sour cream, pico de gallo e guacamole enrolados na
                tortilla.
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
              onClick={handleClick1}
              className="w-full bg-red-700 hover:bg-red-800 text-white font-medium py-3 rounded-lg transition-colors ${ativo ? 'bg-red-700 text-white' : 'bg-gray-300 text-black'}"
            >
              {ativo1 ? "No carrinho" : "Adicionar ao carrinho"}
            </button>
          </div>
        </div>
        {/* produto2 */}
        <div
          className="w-full max-w-sm h-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all 
                    lg:w-[calc(25%-0.75rem)]"
        >
          <div className="relative">
            <img
              src="https://oaksburritos.com/wp-content/uploads/2024/09/bowls-cardapio-picture.png"
              alt="Product"
              className="w-full h-48 object-cover"
            />
          </div>

          <div className="p-5 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Bowl Salada</h3>
              <p className="text-gray-500 mt-1">
                Salsa de cenoura e repolho roxo, guacamole, alface, salsa de
                milho, pico de gallo, sour cream e proteína da sua escolha.
                Disponível em opção vegana.
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
              onClick={handleClick2}
              className="w-full bg-red-700 hover:bg-red-800 text-white font-medium py-3 rounded-lg transition-colors ${ativo ? 'bg-red-700 text-white' : 'bg-gray-300 text-black'}"
            >
              {ativo2 ? "No carrinho" : "Adicionar ao carrinho"}
            </button>
          </div>
        </div>
        {/* produto3 */}
        <div
          className="w-full max-w-sm h-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all 
                    lg:w-[calc(25%-0.75rem)]"
        >
          <div className="relative">
            <img
              src="https://oaksburritos.com/wp-content/uploads/2024/09/quesadillas-cardapio-picture.png"
              alt="Product"
              className="w-full h-48 object-cover"
            />
          </div>

          <div className="p-5 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Quesadillas</h3>
              <p className="text-gray-500 mt-1">
                <ul>
                  <li>Queijo: Vegetariano</li>
                  <li>
                    Barbacoa: Carnes de cozimento lento de ovelhas inteiras{" "}
                  </li>
                  <li>Vegana: Sem nenhum produto animal.</li>
                </ul>
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-gray-900">R$20,00</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-red-700 border rounded-2xl p-2 hover:bg-red-700 hover:text-white transition-colors">
                  Pouco nutritivo
                </div>
                <div className="text-green-500 border rounded-2xl p-2 hover:bg-green-500 hover:text-white transition-colors">
                  Vegetariano
                </div>
              </div>
            </div>

            <button
              onClick={handleClick3}
              className="w-full bg-red-700 hover:bg-red-800 text-white font-medium py-3 rounded-lg transition-colors ${ativo ? 'bg-red-700 text-white' : 'bg-gray-300 text-black'}"
            >
              {ativo3 ? "No carrinho" : "Adicionar ao carrinho"}
            </button>
          </div>
        </div>
        {/* produto4 */}
        <div
          className="w-full max-w-sm h-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all 
                    lg:w-[calc(25%-0.75rem)]"
        >
          <div className="relative">
            <img
              src="https://oaksburritos.com/wp-content/uploads/2024/09/nachos-cardapio-picture.png"
              alt="Product"
              className="w-full h-48 object-cover"
            />
          </div>

          <div className="p-5 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Nachos</h3>
              <p className="text-gray-500 mt-1">
                Escolha seu molho: Guacamole, Sour Cream, Pico de Gallo,
                Cheddar, Aioli Tradicional (Contém proteína animal). Aioli
                Vegano, Pimenta Sriracha, Sweet Chili.
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-gray-900">R$14,99</p>
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
              onClick={handleClick4}
              className="w-full bg-red-700 hover:bg-red-800 text-white font-medium py-3 rounded-lg transition-colors ${ativo ? 'bg-red-700 text-white' : 'bg-gray-300 text-black'}"
            >
              {ativo4 ? "No carrinho" : "Adicionar ao carrinho"}
            </button>
          </div>
        </div>
        {/* produto5 */}
        <div
          className="w-full max-w-sm h-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all 
                    lg:w-[calc(25%-0.75rem)]"
        >
          <div className="relative">
            <img
              src="https://oaksburritos.com/wp-content/uploads/2024/09/bebidas-cardapio-picture.png"
              alt="Product"
              className="w-full h-48 object-cover"
            />
          </div>

          <div className="p-5 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Bebidas da casa
              </h3>
              <p className="text-gray-500 mt-1">
                Pink Lemonade de Hibisco Chá de hibisco com um toque de suco de
                limão. Matte da Praia Chá mate gelado com limão, gengibre e
                hortelã.
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-gray-900">R$9,99</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-green-800 border rounded-2xl p-2 hover:bg-green-800 hover:text-white transition-colors">
                  Refrescante
                </div>
              </div>
            </div>

            <button
              onClick={handleClick4}
              className="w-full bg-red-700 hover:bg-red-800 text-white font-medium py-3 rounded-lg transition-colors ${ativo ? 'bg-red-700 text-white' : 'bg-gray-300 text-black'}"
            >
              {ativo4 ? "No carrinho" : "Adicionar ao carrinho"}
            </button>
          </div>
        </div>
        <div
          className="w-full max-w-sm h-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all 
                    lg:w-[calc(25%-0.75rem)]"
        >
          <div className="relative">
            <img
              src="https://media.istockphoto.com/id/1134104922/pt/foto/tortilla-wrap-with-fried-minced-meat-and-vegetables.jpg?s=612x612&w=0&k=20&c=ZDSBaFTNY4QL-j3cdMHjRby5B2CPM6euPpy0-lrzKMk="
              alt="Product"
              className="w-full h-48 object-cover"
            />
          </div>

          <div className="p-5 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Burrito Old School
              </h3>
              <p className="text-gray-500 mt-1">
                CHILI (carne moída levemente apimentada), queijo, arroz,
                frijoles, sour cream e guacamole enrolados na tortilla.
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
              </div>
            </div>

            <button
              onClick={handleClick1}
              className="w-full bg-red-700 hover:bg-red-800 text-white font-medium py-3 rounded-lg transition-colors ${ativo ? 'bg-red-700 text-white' : 'bg-gray-300 text-black'}"
            >
              {ativo1 ? "No carrinho" : "Adicionar ao carrinho"}
            </button>
          </div>
        </div>
        {/* produto2 */}
        <div
          className="w-full max-w-sm h-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all 
                    lg:w-[calc(25%-0.75rem)]"
        >
          <div className="relative">
            <img
              src="https://oaksburritos.com/wp-content/uploads/2024/09/bowls-cardapio-picture.png"
              alt="Product"
              className="w-full h-48 object-cover"
            />
          </div>

          <div className="p-5 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Bowl Clássico</h3>
              <p className="text-gray-500 mt-1">
                Arroz, frijoles, alface, salsa de cenoura e repolho roxo, pico
                de gallo, sour cream, nachos e proteína da sua escolha.
                Disponível em opção vegana.
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
              </div>
            </div>

            <button
              onClick={handleClick2}
              className="w-full bg-red-700 hover:bg-red-800 text-white font-medium py-3 rounded-lg transition-colors ${ativo ? 'bg-red-700 text-white' : 'bg-gray-300 text-black'}"
            >
              {ativo2 ? "No carrinho" : "Adicionar ao carrinho"}
            </button>
          </div>
        </div>
        {/* produto3 */}
        <div
          className="w-full max-w-sm h-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all 
                    lg:w-[calc(25%-0.75rem)]"
        >
          <div className="relative">
            <img
              src="https://oaksburritos.com/wp-content/uploads/2024/09/quesadillas-cardapio-picture.png"
              alt="Product"
              className="w-full h-48 object-cover"
            />
          </div>

          <div className="p-5 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Quesadillas</h3>
              <p className="text-gray-500 mt-1">
                <ul>
                  <li>Queijo: Vegetariano</li>
                  <li>
                    Barbacoa: Carnes de cozimento lento de ovelhas inteiras{" "}
                  </li>
                  <li>Vegana: Sem nenhum produto animal.</li>
                </ul>
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-gray-900">R$20,00</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-red-700 border rounded-2xl p-2 hover:bg-red-700 hover:text-white transition-colors">
                  Pouco nutritivo
                </div>
                <div className="text-green-500 border rounded-2xl p-2 hover:bg-green-500 hover:text-white transition-colors">
                  Vegetariano
                </div>
              </div>
            </div>

            <button
              onClick={handleClick3}
              className="w-full bg-red-700 hover:bg-red-800 text-white font-medium py-3 rounded-lg transition-colors ${ativo ? 'bg-red-700 text-white' : 'bg-gray-300 text-black'}"
            >
              {ativo3 ? "No carrinho" : "Adicionar ao carrinho"}
            </button>
          </div>
        </div>
        {/* produto4 */}
        <div
          className="w-full max-w-sm h-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all 
                    lg:w-[calc(25%-0.75rem)]"
        >
          <div className="relative">
            <img
              src="https://oaksburritos.com/wp-content/uploads/2024/09/nachos-cardapio-picture.png"
              alt="Product"
              className="w-full h-48 object-cover"
            />
          </div>

          <div className="p-5 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Nachos</h3>
              <p className="text-gray-500 mt-1">
                Escolha seu molho: Guacamole, Sour Cream, Pico de Gallo,
                Cheddar, Aioli Tradicional (Contém proteína animal). Aioli
                Vegano, Pimenta Sriracha, Sweet Chili.
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-gray-900">R$14,99</p>
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
              onClick={handleClick4}
              className="w-full bg-red-700 hover:bg-red-800 text-white font-medium py-3 rounded-lg transition-colors ${ativo ? 'bg-red-700 text-white' : 'bg-gray-300 text-black'}"
            >
              {ativo4 ? "No carrinho" : "Adicionar ao carrinho"}
            </button>
          </div>
        </div>
        {/* produto5 */}
        <div
          className="w-full max-w-sm h-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all 
                    lg:w-[calc(25%-0.75rem)]"
        >
          <div className="relative">
            <img
              src="https://oaksburritos.com/wp-content/uploads/2024/09/bebidas-cardapio-picture.png"
              alt="Product"
              className="w-full h-48 object-cover"
            />
          </div>

          <div className="p-5 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Chá mate</h3>
              <p className="text-gray-500 mt-1">
                Pode ser pedido com limão, gengibre e hortelã.
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-gray-900">R$9,99</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-green-800 border rounded-2xl p-2 hover:bg-green-800 hover:text-white transition-colors">
                  Refrescante
                </div>
              </div>
            </div>

            <button
              onClick={handleClick4}
              className="w-full bg-red-700 hover:bg-red-800 text-white font-medium py-3 rounded-lg transition-colors ${ativo ? 'bg-red-700 text-white' : 'bg-gray-300 text-black'}"
            >
              {ativo4 ? "No carrinho" : "Adicionar ao carrinho"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Produtos;
