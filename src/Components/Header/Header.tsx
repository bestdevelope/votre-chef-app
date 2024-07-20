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
      <div className="nav-login">
        <nav>
          <ul>
            <li>
              <Link to="/">Recettes</Link>
            </li>
            <li>
              <Link to="/add-recipe">Ajouter Recette</Link>
            </li>
            <li>
              <Link to="/favorites">Favoris</Link>
            </li>
          </ul>
        </nav>

        <Link to="/login">
          <button>Connexion</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;