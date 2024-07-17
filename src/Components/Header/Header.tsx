import React from "react";
import "./Header.css";
import logo from "../assets/logo-chef.png";
// import user_icon from "../assets/user.png";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="nav-logo">
        <img src={logo} alt="logo" width={100} />
        <p>Meilleurs Recettes</p>
      </div>

        <ul className="category">
          <li>
            <Link to="/entree">Entrées</Link>
          </li>
          <li>
            <Link to="/plats">Plats</Link>
          </li>
          <li>
            <Link to="/desserts">Desserts</Link>
          </li>
          <li>
            <Link to="/favorites">Favoris</Link>
          </li>
        </ul>

      <div className="nav-login">
        <Link to="/login">
          <button>Connexion</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
