import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import FavoriteButton from ""

interface Recipe {
  id: number;
  title: string;
  image: string;
  category: string;
  difficulty: string;
  price: string;
  time: number;
  number_servings: string;
  description: string;
  ingredients: string[];
  instructions: string[];
}

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data));
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <p>Time: {recipe.time} minutes</p>
      <p>Servings: {recipe.number_servings}</p>
      <p>Price: {recipe.price}</p>
      <p>Difficulty: {recipe.difficulty}</p>
      <p>{recipe.description}</p>
      <h3>Ingredients:</h3>
      <p>{recipe.ingredients}</p>
      <h4>Étapes:</h4>
      <p>{recipe.instructions}</p>
      {/* <FavoriteButton recipeId={recipe.id} :> */}
    </div>
  );
};

export default RecipeDetail;
