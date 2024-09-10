import "./Cards.css";

// eslint-disable-next-line react/prop-types
function Cards({ image, name, description, price, id, onAddToCart }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h3 className="card-title">{name}</h3>
      <p className="card-description">{description}</p>
      <div className="card-price">{price}</div>
      <button onClick={() => onAddToCart(id, image, name, description, price)} className="btn-adicionar">Adicionar</button>
    </div>
  );
}

export default Cards;