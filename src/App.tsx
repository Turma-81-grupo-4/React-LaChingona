import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Produtos from "./components/produtos/Produtos";
import Footer from "./components/footer/Footer";
import Sobre from "./pages/sobre/Sobre";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Produtos />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
