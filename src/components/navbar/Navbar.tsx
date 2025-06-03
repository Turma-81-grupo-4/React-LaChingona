import { Link } from 'react-router-dom';
import Logo from '../../assets/LaChingona.png'; 

export default function Navbar() {
  return (
    <header className="bg-[#B20F0F] shadow-md sticky top-0 z-50 border-b-4 border-green-600">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-4">
          <img
            src={Logo}
            alt="Logo La Chingona"
            className="h-12 w-12 rounded-full object-cover shadow-lg border-2 border-green-600"
          />
          <h1 className="text-3xl  text-[#e0f2f1] font-serif hover:text-green-600 font-semibold transition-all duration-200 tracking-wide">
            La Chingona
          </h1>
        </Link>

        <ul className="flex gap-8">
          <li>
            <Link
              to="/home"
              className="text-[#e0f2f1] hover:text-green-600 font-semibold transition-all duration-200 tracking-wide"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/produtos"
              className="text-[#e0f2f1] hover:text-green-600 font-semibold transition-all duration-200 tracking-wide"
            >
              Cardápio
            </Link>
          </li>
          <li>
            <Link
              to="/sobre"
              className="text-[#e0f2f1] hover:text-green-600 font-semibold transition-all duration-200 tracking-wide"
            >
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
