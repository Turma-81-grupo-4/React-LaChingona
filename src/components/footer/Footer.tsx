import { GithubLogoIcon, InstagramLogoIcon,  XIcon } from '@phosphor-icons/react'
import '../footer/Footer.css'
import { Clock, MapPinIcon, Phone } from 'lucide-react'

function Footer() {
    return (
        <>
            <div className="w-full flex gap-70 text-bold justify-center items-center p-2 text-white div ">
                    <div className="flex items-start space-x-3">
                        <MapPinIcon className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-white">Endereço:</p>
                            <p className="text-white">Av. Paulista - Bela Vista<br />São Paulo, SP - 01310-930</p>
                        </div>
                    </div>
                    <div>
                        <div className=" align-middle justify-center text-bold">
                            <h2 className='py-4'>Acompanhe nossas redes sociais: </h2>
                            <div className='flex gap-12'>
                                <a href="https://github.com/Turma-81-grupo-4/React-LaChingona" target="_blank" className='hover:text-black'>
                                    <GithubLogoIcon size={48} weight='bold' />
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
                    <div className="flex items-start space-x-3">
                    <Phone className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Telefone:</p>
                      <p className="text-white">(11) 1234-5678</p>
                    </div>
                  </div>
                </div>
        </>
    )
}
export default Footer;