import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SearchRecipe.css";

interface Recipe {
  id: number;
  title: string;
  image: string;
}

const SearchRecipe = () => {
  const API_URL = "http://localhost:3000/recipes";

  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const listRecipes = await response.json();
        setRecipes(listRecipes);
      } catch (err) {
        console.error("Failed to fetch recipes:", err);
        setError("Failed to load recipes. Please try again later.");
      }
    };
    fetchRecipes();
  }, []);

  const filterRecipe = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(query.toLowerCase())
  );

  const addFavorite = (id: number) => {
    try {
      const favorite = recipes.find((recipe) => recipe.id === id);
      if (favorite) {
        const storedFavorites = localStorage.getItem("favorites");
        const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
        if (!favorites.some((fav: Recipe) => fav.id === id)) {
          favorites.push(favorite);
          localStorage.setItem("favorites", JSON.stringify(favorites));
        }
      }
    } catch (error) {
      console.error("Failed to add to favorites:", error);
    }
  };

  return (
    <div className="container">
      <h2>Recherchez une recette</h2>
      <input
        name="search"
        type="text"
        placeholder="Rechercher des recettes..."
        autoComplete="on"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error && <div className="error">{error}</div>}
      <div className="recipe-list">
        {filterRecipe.map((recipe) => (
          <div className="recipe" key={recipe.id}>
            <Link to={`/detail/${recipe.id}`}>
              <h3>{recipe.title}</h3>
              <img src={recipe.image} alt={recipe.title} width={300} />
            </Link>
            <button
              className="btn-favorite"
              onClick={() => addFavorite(recipe.id)}
            >
              Ajouter aux Favoris
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchRecipe;
