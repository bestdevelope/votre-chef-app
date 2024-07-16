import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../assets/logo-chef.png";
// import user_icon from "../assets/user.png";
import { Link } from "react-router-dom";

type Recipe = {
  id: number;
  title: string;
  image: string;
  time: number;
};

const Header: React.FC = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Recipe[]>([]);

  useEffect(() => {
    if (query.length > 1) {
      fetch("http://localhost:5000/recipes?q=${query}")
        .then((response) => response.json())
        .then((data) => setSuggestions(data));
    } else {
      setSuggestions([]);
    }
  }, [query]);

  return (
    <div className="header">
      <div className="nav-logo">
        <img src={logo} alt="logo" width={100} />
        <p>Meilleurs Recettes</p>

        {/* input chercher des recettes */}
        <input
          type="text"
          placeholder="Rechercher des recettes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {/* login */}
      <div className="nav-login">
        <Link to="/login">
          <button>Connexion</button>
        </Link>
      </div>

      {/* affichage des resultats */}
      <ul>
        {suggestions.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.title} width={100} />
              {recipe.title}
            </Link>
            <p>Temps de préparation: {recipe.time} minutes</p>

            {/* <button>Ajouter à mes favoris</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
