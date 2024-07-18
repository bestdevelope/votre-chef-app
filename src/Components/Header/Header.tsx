import React from "react";
import "./Header.css";
import logo from "../assets/logo-chef.png";
import { Link } from "react-router-dom";
import Category from "../Category/Category";
// import user_icon from "../assets/user.png";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="nav-logo">
        <img src={logo} alt="logo" width={100} />
        <p>Meilleurs Recettes</p>
      </div>

      <Category
        // categories={categories}
        // category={category}
        // setCategory={setCategory}
      />

      <div className="nav-login">
        <Link to="/login">
          <button>Connexion</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
