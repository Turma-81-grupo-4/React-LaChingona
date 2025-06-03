import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produtos from "./components/produtos/Produtos";
import Navbar from "./components/navbar/Navbar"; // novo

import Home from "./pages/home/Home";
import Sobre from "./pages/sobre/Sobre";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
