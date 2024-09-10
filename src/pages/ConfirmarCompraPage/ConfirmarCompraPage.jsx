import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import InputForms from "../../Components/InputForms/InputForms";
import "./ConfirmarCompraPage.css";

function ConfirmarCompra() {
  const [items, setItems] = useState([]);
  const [frete] = useState(10.0); // Valor fixo para exemplo, pode ser dinâmico
  const [desconto] = useState(0.0); // Valor fixo para exemplo, pode ser dinâmico
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
    setItems(storedItems);

    // Calcular o total da compra
    const calculateTotal = () => {
      return storedItems.reduce((acc, item) => {
        const price = parseFloat(item.price.replace("R$ ", "").replace(",", ".")) || 0;
        return acc + price;
      }, 0);
    };

    setTotal(calculateTotal());
  }, []);

  const handleConfirmPurchase = () => {
    // Coletar dados do formulário
    const personalInfo = {
      nome: document.querySelector('input[name="nome"]').value,
      cpf: document.querySelector('input[name="cpf"]').value,
      email: document.querySelector('input[name="email"]').value,
      celular: document.querySelector('input[name="celular"]').value,
    };
    const deliveryInfo = {
      endereco: document.querySelector('input[name="endereco"]').value,
      bairro: document.querySelector('input[name="bairro"]').value,
      cidade: document.querySelector('input[name="cidade"]').value,
      cep: document.querySelector('input[name="cep"]').value,
      complemento: document.querySelector('input[name="complemento"]').value,
    };

    // Armazenar dados no localStorage
    localStorage.setItem("personalInfo", JSON.stringify(personalInfo));
    localStorage.setItem("deliveryInfo", JSON.stringify(deliveryInfo));

    // Limpar o carrinho após a compra
    localStorage.removeItem("cart");
    
    // Redirecionar para a página de sucesso
    navigate("/sucesso");
  };

  return (
    <>
      <Header />
      <section className="section-confirmar-compra">
        <div className="aling-forms">
          <div className="section-criar-forms section-tirar-padding">
            <h1 className="titulo-input-forms">Finalizar Compra</h1>

            <div className="infomacoes-pessoais">
              <h4>Informações Pessoais</h4>
              <hr />
              <InputForms
                titulo={"nome"}
                nome={"Nome completo*"}
                type={"text"}
                descricao={"Insira seu nome"}
                required
              />
              <InputForms
                titulo={"cpf"}
                nome={"CPF*"}
                type={"text"}
                descricao={"Insira seu CPF"}
                required
              />
              <InputForms
                titulo={"email"}
                nome={"E-mail*"}
                type={"email"}
                descricao={"Insira seu e-mail"}
                required
              />
              <InputForms
                titulo={"celular"}
                nome={"Celular*"}
                type={"text"}
                descricao={"Insira seu celular"}
                required
              />
            </div>

            <div className="infomacoes-entrega">
              <h4>Informações de Entrega</h4>
              <hr />
              <InputForms
                titulo={"endereco"}
                nome={"Endereço*"}
                type={"text"}
                descricao={"Insira seu endereço"}
                required
              />
              <InputForms
                titulo={"bairro"}
                nome={"Bairro*"}
                type={"text"}
                descricao={"Insira seu bairro"}
                required
              />
              <InputForms
                titulo={"cidade"}
                nome={"Cidade*"}
                type={"text"}
                descricao={"Insira sua cidade"}
                required
              />
              <InputForms
                titulo={"cep"}
                nome={"CEP*"}
                type={"text"}
                descricao={"Insira seu CEP"}
                required
              />
              <InputForms
                titulo={"complemento"}
                nome={"Complemento"}
                type={"text"}
                descricao={"Insira um complemento (opcional)"}
              />
            </div>

            <div className="infomacoes-entrega">
              <h4>Informações de Pagamento</h4>
              <hr />
              <div className="form-radio">
                <h6>Forma de pagamento</h6>
                <div className="topico-estado align-direction">
                  <div className="inputs-filtrar-por">
                    <input
                      id="check-mark-cartao"
                      className="input-filtrar-por radio"
                      type="radio"
                      name="payment-method"
                      defaultChecked
                    />
                    <label className="label-filtrar-por" htmlFor="check-mark-cartao">
                      Cartão de Crédito
                    </label>
                  </div>
                  <div className="inputs-filtrar-por">
                    <input
                      id="check-mark-boleto"
                      className="input-filtrar-por radio"
                      type="radio"
                      name="payment-method"
                    />
                    <label className="label-filtrar-por" htmlFor="check-mark-boleto">
                      Boleto Bancário
                    </label>
                  </div>
                </div>
              </div>
              <InputForms
                className="nome-cartao"
                titulo={"nomeCartao"}
                nome={"Nome do Cartão*"}
                type={"text"}
                descricao={"Insira o nome do cartão"}
                required
              />
              <div className="info-cartao-container">
                <div className="info-cartao-group">
                  <InputForms
                    className="numero-cartao"
                    titulo={"numeroCartao"}
                    nome={"Número do Cartão*"}
                    type={"text"}
                    descricao={"Insira o número do cartão"}
                    maxlength="19"
                    pattern="\d{4} \d{4} \d{4} \d{4}"
                    required
                  />
                </div>
                <div className="info-cartao-group">
                  <InputForms
                    className="data-cartao"
                    titulo={"validade"}
                    nome={"Data de validade do Cartão*"}
                    type={"month"}
                    descricao={"Insira a validade do cartão"}
                    required
                  />
                </div>
                <div className="info-cartao-group">
                  <InputForms
                    className="cvv-cartao"
                    titulo={"cvv"}
                    nome={"CVV*"}
                    type={"text"}
                    descricao={"Insira o CVV do cartão"}
                    maxlength="3"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="infomacoes-entrega">
              <div className="resumo-valor resumo-valor2">
                <h2>
                  Total: <span>R$ {Number(total + frete - desconto).toFixed(2)}</span>
                </h2>
                <h5>
                  ou 3x de R$ {Number((total + frete - desconto) / 3).toFixed(2)} sem juros
                </h5>
              </div>

              <div className="btn-resumo2 btn-resumo-maior">
                <button onClick={handleConfirmPurchase}>Realizar Pagamento</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ConfirmarCompra;
