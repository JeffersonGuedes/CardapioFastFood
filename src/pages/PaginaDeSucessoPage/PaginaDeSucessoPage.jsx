import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import tada from "../../assets/img/tada.png";
import "./PaginaDeSucessoPage.css";
import { Link } from "react-router-dom";

function Sucesso() {


  return (
    <>
      <div className="app-container">
        <Header />
          <div className="content">
            <section className="sucesso-page">
              <div className="cart-suceso">
                <div className="texto-sucesso">
                  <img src={tada} alt="Sucesso" />
                  <h4>
                    Compra Realizada<br />com sucesso!
                  </h4>
                  <h5>Seu pedido vai ser feito e entregue no seu endereço</h5>
                </div>
                <div className="info-pessoais info-pessoais-sucesso">
                  <div className="info-resumo">
                    <Link to="/">Voltar para a página inicial</Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        <Footer />
      </div>
    </>
  );
}

export default Sucesso;
