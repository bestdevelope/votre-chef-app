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

const recipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [recipeDetail, setrecipeDetail] = useState<Recipe | null>(null);

  useEffect(() => {
    const fetchrecipeDetail = async () => {
      try {
        const response = await fetch(`http://localhost:3000/recipes/${id}`);
        const data = await response.json();
        setrecipeDetail(data);
      } catch (err) {
        console.error("Failed to fetch recipeDetail:", err);
      }
    };

    fetchrecipeDetail();
  }, [id]);

  const addFavorite = () => {
    if (recipeDetail) {
      try {
        const storedFavorites = localStorage.getItem("favorites");
        const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
        if (!favorites.some((fav: Recipe) => fav.id === recipeDetail.id)) {
          favorites.push(recipeDetail);
          localStorage.setItem("favorites", JSON.stringify(favorites));
          alert("la recette ajouté aux favoris ! ");
        } else {
          alert("la resette est déjà dans les favoris !");
        }
      } catch (error) {
        console.error("Échec de l'ajout aux favoris:", error);
      }
    }
  };

  if (!recipeDetail) return <div>Loading...</div>;

  return (
    <div className="recipe-detail">
      <h1>{recipeDetail.title}</h1>
      <img src={recipeDetail.image} alt={recipeDetail.title} width={500} />

      <h2 className="description">Description:</h2>
      <h4 className="recipe-description">{recipeDetail.description}</h4>
      <div className="list-detail">
        <p>Catégorie: {recipeDetail.category}</p>
        <p>Difficulté: {recipeDetail.difficulty}</p>
        <p>Prix: {recipeDetail.price}</p>
        <p>Temps de préparation: {recipeDetail.time} minutes</p>
        <p>Nombre de servings: {recipeDetail.number_servings}</p>
      </div>
      <h2 className="list-ingredients">Ingredients:</h2>
      {recipeDetail.ingredients.map((ingredient, index) => (
        <li className="list-text-ingredients" key={index}>
          {ingredient}
        </li>
      ))}
      <h2>Instructions:</h2>
      {recipeDetail.instructions.map((instruction, index) => (

      {/* button ajouter au Favoris */}

      <div className="btn-fav">
        <button className="btn-add-fav" onClick={addFavorite}>
          Ajouter aux Favoris
        </button>
      </div>
    </div>
  );
};

export default RecipeDetail;
