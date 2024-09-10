import "../Header/Header.css";
import logo from "../../assets/img/logomarca.png";
import carrinho from "../../assets/img/carrinho.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <nav>
          <div className="navs">
            <div className="nav-header">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
              <Link className="link-carrinho-nav" to="/Cart">
                <img src={carrinho} alt="carrinho" className="icon-carrinho" />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
