import { useState, useEffect } from "react";
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

  //fetch db json
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(API_URL);
        const listReciptes = await response.json();
        setRecipes(listReciptes);
      } catch (err) {
        console.log(err);
      }
    };
    (async () => await fetchRecipes())();
  }, []);

  //filter recipe by query : rechercher des recettes
  const filterRecipe = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <div className="input-search">
        <h2>Recherchez une recette</h2>
        <input
          type="text"
          placeholder="Rechercher des recettes..."
          autoComplete="On"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* affichage list de recipe */}

        <div className="liste-recipe">
          {filterRecipe.map((recipe) => {
            return (
              <div key={recipe.id} className="recipe">
                <h4>{recipe.title}</h4>
                <img src={recipe.image} alt={recipe.title} width={300} />
                <p>Voir plus</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchRecipe;
