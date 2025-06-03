import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Produtos from "./components/produtos/Produtos";

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
  );
}

export default App;
