import { GithubLogoIcon, InstagramLogoIcon, XIcon } from '@phosphor-icons/react'
import '../footer/Footer.css'

function Footer(){
    return(
        <>
            <div className="w-full flex flex-col  text-bold items-center gap-4  p-2 text-white div ">
                <h1 className="text-white text-2xl"> Obrigado por acessar o LaChingona</h1>
                <div className=" align-middle justify-center ">
                    <p>Acompanhe nossas redes sociasis: </p>
                    <div className='flex gap-12'>
                        <a href="https://github.com/" target="_blank" className='hover:text-black'>
                        <GithubLogoIcon size={48} weight='bold'  />
                        </a>  
                        <a href='https://X.com' target='_blank' className='hover:text-black'>
                            <XIcon size={48} weight='bold' />
                        </a>
                        <a href='https://instagram.com' target='_blank' className='hover:text-black'>
                            <InstagramLogoIcon size={48} weight='bold' />
                        </a>
                    </div>
                      
                 </div>
            </div>
        </>
    )
}
export default Footer;