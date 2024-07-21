import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./RecipeDetail.css";

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
    const fetchRecipeDetail = async () => {
      try {
        const response = await fetch(http://localhost:3000/recipes/${id});
        const data = await response.json();
        setRecipe(data);
      } catch (err) {
        console.error("Failed to fetch recipe details:", err);
      }
    };

    fetchRecipeDetail();
  }, [id]);

  const addFavorite = () => {
    if (recipe) {
      try {
        const storedFavorites = localStorage.getItem("favorites");
        const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
        if (!favorites.some((fav: Recipe) => fav.id === recipe.id)) {
          favorites.push(recipe);
          localStorage.setItem("favorites", JSON.stringify(favorites));
          alert("Recipe added to favorites!");
        } else {
          alert("Recipe is already in favorites!");
        }
      } catch (error) {
        console.error("Failed to add to favorites:", error);
      }
    }
  };

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="recipe-detail">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} width={500} />

      <h2 className="description">Description:</h2>
      <h4 className="recipe-description">{recipe.description}</h4>
      <div className="list-detail">
        <p>Catégorie: {recipe.category}</p>
        <p>Difficulté: {recipe.difficulty}</p>
        <p>Prix: {recipe.price}</p>
        <p>Temps de préparation: {recipe.time} minutes</p>
        <p>Nombre de servings: {recipe.number_servings}</p>
      </div>
      <h2 className="list-ingredients">Ingredients:</h2>
      {recipe.ingredients.map((ingredient, index) => (
        <li className="list-text-ingredients" key={index}>{ingredient}</li>
      ))}
      <h2>Instructions:</h2>
      {recipe.instructions.map((instruction, index) => (
        <li className="list-text-instruction" key={index}>{instruction}</li>
      ))}
      {/* button ajouter au Favoris */}
      <button onClick={addFavorite}>Ajouter aux Favoris</button>

      {/* button retour à la liste des recettes */}
    </div>
  );
};

export default RecipeDetail;
