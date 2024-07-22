import React from "react";
import "./Header.css";
import logo from "../assets/logo-chef.png";
import { Link } from "react-router-dom";


// import user_icon from "../assets/user.png";
const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="nav-logo">
        <Link to="/" className="nav-list">
          <img src={logo} alt="logo" width={100} />
        </Link>
        <p>Meilleurs Recettes</p>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-list">
              Recettes
            </Link>
          </li>
          <li>
            <Link to="/favorite/" className="nav-list">
              Mes Favoris
            </Link>
          </li>
          <li>
            <Link to="/category/Entrées" className="nav-list">
              Entrées
            </Link>
          </li>
          <li>
            <Link to="/category/Plats" className="nav-list">
              Plats
            </Link>
          </li>
          <li>
            <Link to="/category/Desserts" className="nav-list">
              Desserts
            </Link>
          </li>
        </ul>
      </nav>


      <div className="nav-login">
        <Link to="/login" className="nav-list">
          <button>Connexion</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
