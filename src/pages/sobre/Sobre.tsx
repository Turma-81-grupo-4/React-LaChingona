import { GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';
import '../sobre/Sobre.css'


function Sobre() {
  return (
    <div className="min-h-screen bg-gradient-to-l from-red-700 to-green-900 text-white p-8 flex flex-col items-center">
      
      <h1 className="text-5xl font-extrabold mb-6">Sobre o Restaurante</h1>

      <p className="max-w-3xl text-lg text-center mb-4">
        Bem-vindo ao nosso restaurante mexicano! Somos apaixonados pela cultura vibrante e pelos sabores
         autênticos do México. Aqui, buscamos proporcionar uma experiência gastronômica inesquecível, combinando tradição, sabor e hospitalidade.
      </p>

      <p className="max-w-3xl text-lg text-center mb-4">
        Nossa equipe de seis desenvolvedores dedicou-se a criar esta plataforma web, onde você pode explorar nosso cardápio,
        conhecer nossa história e fazer pedidos de maneira rápida e prática. Valorizamos cada detalhe para que sua navegação seja tão agradável quanto saborear nossos pratos.
      </p>

      <p className="max-w-3xl text-lg text-center mb-6">
        Desde tacos artesanais até molhos picantes e irresistíveis sobremesas, nossa missão é celebrar a 
        culinária mexicana com autenticidade e criatividade. Esperamos que você sinta-se acolhido e inspirado a descobrir novas experiências gastronômicas conosco!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
     
        
        <div className="w-60 h-50 bg-white bg-opacity-20 rounded-lg flex  justify-center p-5">
          <div className=" text-black gap-8">
            <h1 className='text-2xl '>Camille Tarine</h1>
            <div className='flex flex-col items-center gap-10'>
              <p>
              P.O. do projeto
            </p>
            <div className='flex gap-4'>
              <a href='https://github.com/CahTarine' target='_blank'>
                <GithubLogoIcon size={40} />
              </a>
              <a href='https://www.linkedin.com/in/camille-tarine/' target='_blank'>
                <LinkedinLogoIcon size={40} />
              </a>
               
            </div>
            </div>
          </div>
        </div>

        <div className="w-60 h-50 bg-white bg-opacity-20 rounded-lg flex  justify-center p-5">
          <div className=" text-black gap-8">
            <h1 className='text-2xl '>Carlos Henrique </h1>
            <div className='flex flex-col items-center gap-10'>
            <p>
              Tester do projeto  
            </p>
            <div className='flex gap-4'>
              <a href='https://github.com/Henrykeeh' target='_blank'>
                <GithubLogoIcon size={40} />
              </a>
              <a href='https://www.linkedin.com/in/carlos-henrique-da-silva-barbosa-no-linked-in/' target='_blank'>
                <LinkedinLogoIcon size={40} />
              </a>
               
               
            </div>
            </div>
          </div>
        </div>



        <div className="w-60 h-50 bg-white bg-opacity-20 rounded-lg flex  justify-center p-5">
          <div className=" text-black gap-8">
            <h1 className='text-2xl text-center'>Henrique Machado</h1>
            <div className='flex flex-col items-center gap-10'>
              <p>
              Desenvolvedor
            </p>
            <div className='flex gap-4'>
              <a href='https://github.com/scottineo' target='_blank'>
                <GithubLogoIcon size={40} />
              </a>
              <a href='https://www.linkedin.com/in/luiz-henrique-machado/' target='_blank'>
                <LinkedinLogoIcon size={40} />
              </a>
               
               
            </div>
            </div>
          </div>
        </div>

        <div className="w-60 h-50 bg-white bg-opacity-20 rounded-lg flex  justify-center p-5">
          <div className=" text-black gap-8">
            <h1 className='text-2xl '>Beatriz Bueno</h1>
            <div className='flex flex-col items-center gap-10'>
              <p>
              Desenvolvedor
            </p>
            <div className='flex gap-4'>
              <a href='https://github.com/BeaKaylanee' target='_blank'>
                <GithubLogoIcon size={40} />
              </a>
              <a href='https://www.linkedin.com/in/beatriz-kailane-3513b5248/' target='_blank'>
                <LinkedinLogoIcon size={40} />
              </a>
               
               
            </div>
            </div>
          </div>
        </div>
        <div className="w-60 h-50 bg-white bg-opacity-20 rounded-lg flex  justify-center p-5">
          <div className=" text-black gap-8">
            <h1 className='text-2xl '>Guilherme Dino</h1>
            <div className='flex flex-col items-center gap-10'>
              <p>
              Desenvolvedor
            </p>
            <div className='flex gap-4'>
              <a href='https://github.com/meDinoo' target='_blank'>
                <GithubLogoIcon size={40} />
              </a>
              <a href='www.linkedin.com/in/guilherme-dino-pereira' target='_blank'>
                <LinkedinLogoIcon size={40} />
              </a>
               
               
            </div>
            </div>
          </div>
        </div>

        <div className="w-60 h-50 bg-white bg-opacity-20 rounded-lg flex  justify-center p-5">
          <div className=" text-black gap-8">
            <h1 className='text-2xl '>Rosana Ferreira</h1>
            <div className='flex flex-col items-center gap-10'>
            <p>
              Desenvolvedora back-end
            </p>
            <div className='flex gap-4'>
              <a href='https://github.com/lelesrosana' target='_blank'>
                <GithubLogoIcon size={40} />
              </a>
              <a href='https://Linkedin.com' target='_blank'>
                <LinkedinLogoIcon size={40} />
              </a>
               
               
            </div>
            </div>
          </div>
        </div>




      </div>

    </div>
  );
}

export default Sobre;
