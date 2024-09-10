import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import Cart from "./pages/CartPage/CartPage";
import ConfirmarCompra from "./pages/ConfirmarCompraPage/ConfirmarCompraPage";
import Sucesso from "./pages/PaginaDeSucessoPage/PaginaDeSucessoPage";
import Error from "./pages/Error404/Error404";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Cart/" element={<Cart />} />
          <Route path="ConfirmarCompra/" element={<ConfirmarCompra />} />
          <Route path="Sucesso/" element={<Sucesso />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
