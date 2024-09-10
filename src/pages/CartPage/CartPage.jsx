import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ResumoCompra from "../../Components/ResumoCompra/ResumoCompra";
import MeuCarrinho from "../../Components/MeuCarrinho/MeuCarrinho";
import "./CartPage.css";
import { useState, useEffect } from "react";

function Cart() {
  const [items, setItems] = useState([]);
  const [frete] = useState(10.0);
  const [desconto] = useState(0.0);

  useEffect(() => {
    // Recuperar itens do carrinho do localStorage
    const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
    setItems(storedItems);
  }, []);

  // Calcula o total do carrinho
  const calculateTotal = () => {
    return items.reduce((total, item) => {
      // Assegura que item.price é um número válido
      const price =
        parseFloat(item.price.replace("R$ ", "").replace(",", ".")) || 0;
      return total + price * item.count;
    }, 0);
  };

  const total = calculateTotal();

  return (
    <>
      <div className="app-container">
        <Header />
        <div className="content">
          <section className="resumo-compra">
            <MeuCarrinho items={items} setItems={setItems} />
            <ResumoCompra
              frete={frete}
              desconto={desconto}
              multiploAtual={total}
            />
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Cart;
