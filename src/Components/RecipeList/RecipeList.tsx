import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://api.spoonacular.com/recipes/random?apikey=${process.env.RECIPE_API_KEY}"
    );
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
