import React from 'react';
import { MapPin, Phone, Clock, Star } from 'lucide-react';

const Home: React.FC = () => {
  const menuItems = [
    {
      id: 1,
      name: "Bowls Especiais",
      description: "Bowls artesanais com carne temperada e molhos especiais",
      image: "./src/assets/img/bowls-cardapio-picture-alt.png"
    },
    {
      id: 2,
      name: "Burrito Supremo",
      description: "Burrito gigante com frango, feijão, queijo e guacamole",
      image: "./src/assets/img/burrito-ok-final.png"
    },
    {
      id: 3,
      name: "Quesadilla Mexicana",
      description: "Tortilla grelhada com queijo derretido e temperos mexicanos",
      image: "./src/assets/img/quesadillas-cardapio-picture.png"
    }
  ];

  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197490458315!2d-46.65906922571362!3d-23.561349561589815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1748956969855!5m2!1spt-BR!2sbr";
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Saudações */}
      <section id="home" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6">
              ¡Bienvenidos a <span className="text-green-800">La</span> <span className="text-red-700">CHINGONA</span>!
            </h2>
            <p className="text-xl mb-8 leading-relaxed text-gray-300">
              Experimente os sabores autênticos do México no coração da cidade!
              Nossa cozinha tradicional traz o melhor da gastronomia mexicana
              com ingredientes frescos e receitas familiares passadas de geração em geração.
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-8 h-8 fill-red-700 text-red-700" />
              ))}
            </div>
            <button className="bg-gradient-to-r from-green-800 to-red-700 hover:from-green-600 hover:to-red-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg">
              Ver Cardápio
            </button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-black mb-4">Nossos Pratos Especiais</h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Descubra nossa seleção de pratos tradicionais mexicanos,
              preparados com amor e ingredientes autênticos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105 border-2 border-gray-200 hover:border-red-400">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-black mb-2">{item.name}</h4>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="w-full bg-gradient-to-r from-green-800 to-red-700 text-white py-2 px-4 rounded-lg hover:from-green-600 hover:to-red-600 transition-all font-semibold">
                    Adicionar ao Pedido
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-black mb-4">Nossa Localização</h3>
            <p className="text-lg text-gray-700">Venha nos visitar e experimente o melhor da culinária mexicana!</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-start lg:items-stretch gap-12">
            {/* Informações de Contato */}
            <div className="w-full lg:w-1/2 max-w-lg mx-auto lg:mx-0">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg shadow-lg h-full flex flex-col">
                <h4 className="text-2xl font-bold text-black mb-6">Informações de Contato</h4>

                <div className="space-y-4 flex-grow">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-green-800 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Endereço:</p>
                      <p className="text-gray-600">Av. Paulista - Bela Vista<br />São Paulo, SP - 01234-567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-6 h-6 text-red-700 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Telefone:</p>
                      <p className="text-gray-600">(11) 1234-5678</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-green-800 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Horário de Funcionamento:</p>
                      <p className="text-gray-600">
                        Segunda a Quinta: 11h às 23h<br />
                        Sexta e Sábado: 11h às 00h<br />
                        Domingo: 11h às 22h
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button className="bg-gradient-to-r from-green-800 to-red-700 hover:from-green-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all w-full md:w-auto"> {/* w-full para telas menores, md:w-auto para centralizar */}
                    📱 Faça seu Pedido pelo WhatsApp
                  </button>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="w-full lg:w-1/2 max-w-lg mx-auto lg:mx-0">
              <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg h-full">
                <iframe
                  src={googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Restaurante"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;