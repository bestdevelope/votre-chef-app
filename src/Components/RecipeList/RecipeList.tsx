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
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/recipes?q=${query}");
    const data = await response.json();
    setRecipes(data.recipes);
  };

  return (
    <div>
      {recipes.map((recipe) => {
        return (
          <Link to={`/recipe/${recipe.id}`}>
            <div key={recipe.id}>
              <h2>{recipe.title}</h2>
              <img src={recipe.image} alt={recipe.title} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default RecipeList;
