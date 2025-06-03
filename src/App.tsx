import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Produtos from "./components/produtos/Produtos";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
