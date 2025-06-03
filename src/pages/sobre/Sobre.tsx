import { GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';
import '../sobre/Sobre.css'


function Sobre() {
  return (
    <div className="min-h-screen bg-gradient-to-l from-red-700 to-green-900 text-white p-8 flex flex-col items-center">
      
      <h1 className="text-5xl font-extrabold mb-6">Sobre o Restaurante</h1>

      <p className="max-w-3xl text-lg text-center mb-4">
        Bem-vindo ao nosso restaurante mexicano! Somos apaixonados pela cultura vibrante e pelos sabores
         autênticos do México. Aqui, buscamos proporcionar uma experiência gastronômica inesquecível, co
         mbinando tradição, sabor e hospitalidade.
      </p>

      <p className="max-w-3xl text-lg text-center mb-4">
        Nossa equipe de seis desenvolvedores dedicou-se a criar esta plataforma web, onde você pode expl
        orar nosso cardápio, conhecer nossa história e fazer pedidos de maneira rápida e prática. Valori
        zamos cada detalhe para que sua navegação seja tão agradável quanto saborear nossos pratos.
      </p>

      <p className="max-w-3xl text-lg text-center mb-6">
        Desde tacos artesanais até molhos picantes e irresistíveis sobremesas, nossa missão é celebrar a 
        culinária mexicana com autenticidade e criatividade. Esperamos que você sinta-se acolhido e insp
        irado a descobrir novas experiências gastronômicas conosco!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
     
        
        <div className="w-60 h-50 bg-white bg-opacity-20 rounded-lg flex  justify-center p-5">
          <div className=" text-black gap-8">
            <h1 className='text-2xl '>Camille Tarine</h1>
            <div className='flex flex-col items-center gap-10'>
              <p>
              PO do projeto
            </p>
            <div className='flex gap-4'>
              <a href='https://github.com' target='_blank'>
                <GithubLogoIcon size={40} />
              </a>
              <a href='https://Linkedin.com' target='_blank'>
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
              <a href='https://github.com' target='_blank'>
                <GithubLogoIcon size={40} />
              </a>
              <a href='https://Linkedin.com' target='_blank'>
                <LinkedinLogoIcon size={40} />
              </a>
               
               
            </div>
            </div>
          </div>
        </div>



        <div className="w-60 h-50 bg-white bg-opacity-20 rounded-lg flex  justify-center p-5">
          <div className=" text-black gap-8">
            <h1 className='text-2xl '>Henrique Machado</h1>
            <div className='flex flex-col items-center gap-10'>
              <p>
              Developer do projeto
            </p>
            <div className='flex gap-4'>
              <a href='https://github.com' target='_blank'>
                <GithubLogoIcon size={40} />
              </a>
              <a href='https://Linkedin.com' target='_blank'>
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
              Developer do projeto
            </p>
            <div className='flex gap-4'>
              <a href='https://github.com' target='_blank'>
                <GithubLogoIcon size={40} />
              </a>
              <a href='https://Linkedin.com' target='_blank'>
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
              Developer do projeto
            </p>
            <div className='flex gap-4'>
              <a href='https://github.com' target='_blank'>
                <GithubLogoIcon size={40} />
              </a>
              <a href='https://Linkedin.com' target='_blank'>
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
              
            </p>
            <div className='flex gap-4'>
              <a href='https://github.com' target='_blank'>
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
