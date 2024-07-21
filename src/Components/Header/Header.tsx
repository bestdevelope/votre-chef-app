import React from "react";
import "./Header.css";
import logo from "../assets/logo-chef.png";
import { Link } from "react-router-dom";

// import user_icon from "../assets/user.png";
const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="nav-logo">
        <img src={logo} alt="logo" width={100} />
        <p>Meilleurs Recettes</p>
      </div>

      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/">Recettes</Link>
          </li>
          <li>
            <Link to="/add-recipe">Ajouter Recette</Link>
          </li>
          <li>
            <Link to="/favorite/">Favoris</Link>
          </li>
        </ul>
      </nav>
      <div className="nav-login">
        <Link to="/login">
          <button>Connexion</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
