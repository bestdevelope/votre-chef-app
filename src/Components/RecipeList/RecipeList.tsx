import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Recipe = {
  id: number;
  title: string;
  image: string;
  category: string;
  coutry: string;
  time: number;
};

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  const filterRecipes = Recipes.filter(
    (recipes) =>
      (recipes.category === category || category === "") &&
      (recipes.country === country || country === "")
  );

  return (
    <div>
      <div>
        <label>
          Catégorie:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Toutes</option>
            <option value="entrée">Entrées</option>
            <option value="plat">Plats principaux</option>
            <option value="dessert">Desserts</option>
          </select>
        </label>
        <label>
          Cuisine:
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="">Toutes</option>
            <option value="France">Française</option>
            <option value="Italie">Italienne</option>
            <option value="Asie">Asiatique</option>
          </select>
        </label>
      </div>
      <div className="recipe-list">
        {filterRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <Link to={`/recipes/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <p>{recipe.time}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
