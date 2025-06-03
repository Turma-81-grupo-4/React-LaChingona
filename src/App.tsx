import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Produtos from "./components/produtos/Produtos";
import Navbar from "./components/navbar/Navbar"; // novo


function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/produtos" element={<Produtos />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Produtos />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
