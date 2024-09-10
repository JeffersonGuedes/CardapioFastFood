import "../MeuCarrinho/MeuCarrinho.css";

// eslint-disable-next-line react/prop-types
function MeuCarrinho({ items, setItems }) {

  // Função para alterar a quantidade dos itens
  const handleCountChange = (id, newCount) => {
    if (newCount <= 0) {
      removeItem(id);
    } else {
      const updatedItems = items.map(item =>
        item.id === id ? { ...item, count: newCount } : item
      );
      setItems(updatedItems);
      localStorage.setItem("cart", JSON.stringify(updatedItems));
    }
  };

  // Função para remover um item
  const removeItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  // Função para converter o preço para número
  const parsePrice = (price) => {
    // Remove símbolos de moeda e converte para número
    return parseFloat(price.replace(/[^0-9,]/g, '').replace(',', '.')) || 0;
  };

  return (
    <div className="carrinho-pedidos">
      <div className="topico-pedidos">
        <h3>MEU CARRINHO</h3>
        <h4>QUANTIDADE</h4>
        <h4>UNITÁRIO</h4>
        <h4>TOTAL</h4>
      </div>
      <hr />
      {items.map(item => {
        // Define o count como 1 se não estiver definido
        const initialCount = item.count || 1;
        const price = parsePrice(item.price);
        const total = (price * initialCount).toFixed(2);

        return (
          <div key={item.id} className="descricao-pedidos">
            <div className="fundo-img-carrinho">
              <img src={item.image} alt="produto" />
            </div>
            <div className="info-pedidos-carrinho">
              <h5>{item.name}</h5>
              <h6>{item.description}</h6>
            </div>
            <div className="quantidade-pedidos">
              <div className="contador-pedidos">
                <button onClick={() => handleCountChange(item.id, initialCount > 0 ? initialCount - 1 : 0)}>-</button>
                <h6>{initialCount}</h6>
                <button onClick={() => handleCountChange(item.id, initialCount + 1)}>+</button>
              </div>
              <button onClick={() => removeItem(item.id)} className="remover-item">Remover item</button>
            </div>
            <div className="unitario-pedidos">
              <h2>R${price.toFixed(2)}</h2>
            </div>
            <div className="total-pedidos">
              <h2>R${total}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MeuCarrinho;
