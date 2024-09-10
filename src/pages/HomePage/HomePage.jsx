import { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Card from "../../Components/Cards/Cards";
import "./HomePage.css";

const menuData = {
  burgers: [
    {
      id: 1,
      name: "Cheeseburger",
      description: "Hambúrguer clássico com queijo, alface e tomate.",
      price: "R$ 15,00",
      image: "https://tinyurl.com/5fkbtaae",
    },
    {
      id: 2,
      name: "Double Bacon",
      description: "Dois hambúrgueres com bacon crocante e queijo cheddar.",
      price: "R$ 22,00",
      image: "https://tinyurl.com/zad4ywnd",
    },
  ],
  pizzas: [
    {
      id: 3,
      name: "Margherita",
      description: "Pizza clássica com molho de tomate, queijo e manjericão.",
      price: "R$ 30,00",
      image:
        "https://www.cardapio.donnagulla.com.br/wp-content/uploads/2023/02/marguerita.png",
    },
    {
      id: 4,
      name: "Pepperoni",
      description: "Pizza com queijo e fatias de pepperoni.",
      price: "R$ 35,00",
      image:
        "https://www.cardapio.donnagulla.com.br/wp-content/uploads/2023/02/pepperoni.png",
    },
  ],
  drinks: [
    {
      id: 5,
      name: "Coca-Cola Lata",
      description: "Refrigerante 350ml.",
      price: "R$ 5,00",
      image:
        "https://crsupermercados.com.br/cdn/shop/files/coca_350ml_800x.png?v=1700754095",
    },
    {
      id: 6,
      name: "Suco de Laranja",
      description: "Suco natural de laranja.",
      price: "R$ 8,00",
      image:
        "https://cardapio.primeirobar.com.br/wp-content/uploads/2022/04/laranja.jpg",
    },
  ],
  desserts: [
    {
      id: 7,
      name: "Sorvete",
      description: "Sorvete de baunilha com calda de chocolate.",
      price: "R$ 12,00",
      image:
        "https://polosulsc.com.br/wp-content/webp-express/webp-images/uploads/2018/03/Tr%C3%AAs-tipos-e-sabores-de-sorvete-diferentes-1.jpg.webp",
    },
    {
      id: 8,
      name: "Brownie",
      description: "Brownie de chocolate com nozes.",
      price: "R$ 15,00",
      image:
        "https://img.freepik.com/fotos-premium/brownies-de-chocolate-com-foto-real-em-fundo-branco_899449-39648.jpg",
    },
  ],
};

function Home() {
  const [activeCategory, setActiveCategory] = useState("burgers");

  const handleAddToCart = (id, image, name, description, price) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ id, image, name, description, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item adicionado ao carrinho!");
  };

  const loadMenuItems = (category) => {
    return menuData[category].map((item, index) => (
      <Card
        id={item.id}
        key={index}
        image={item.image}
        name={item.name}
        description={item.description}
        price={item.price}
        onAddToCart={handleAddToCart}
      />
    ));
  };

  return (
    <>
      <div className="app-container">
        <Header />
        <div className="content">
          <div className="container">
            <div className="category-menu">
              <ul>
                <li
                  className={activeCategory === "burgers" ? "active" : ""}
                  onClick={() => setActiveCategory("burgers")}
                >
                  Hambúrgueres
                </li>
                <li
                  className={activeCategory === "pizzas" ? "active" : ""}
                  onClick={() => setActiveCategory("pizzas")}
                >
                  Pizzas
                </li>
                <li
                  className={activeCategory === "drinks" ? "active" : ""}
                  onClick={() => setActiveCategory("drinks")}
                >
                  Bebidas
                </li>
                <li
                  className={activeCategory === "desserts" ? "active" : ""}
                  onClick={() => setActiveCategory("desserts")}
                >
                  Sobremesas
                </li>
              </ul>
            </div>

            <div className="menu-items" id="menu-items">
              {loadMenuItems(activeCategory)}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
