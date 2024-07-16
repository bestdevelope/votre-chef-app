import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

interface Recipe  {
  id: number;
  title: string;
  image: string;
  time: number;
}

const SearchRecipe = () => {

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Recipe[]>([]);

  useEffect(() => {
    if (query.length > 1) {
      fetch("http://localhost:3000/recipes?q=${query}")
        .then((response) => response.json())
        .then((data) => setSuggestions(data));
    } else {
      setSuggestions([]);
    }  
  }, [query]);

  return (
    <div>
          <h2>Recherchez une recette</h2>
          <input
            type="text"
            placeholder="Rechercher des recettes..."
            autoComplete="On"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
       
        <ul>
        {suggestions.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.title} width={100} />
              {recipe.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchRecipe


