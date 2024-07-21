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
        const response = await fetch(`http://localhost:3000/recipes/${id}`);
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
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} width={500} />

      <h3 className="description">Description:</h3>
      <h5 className="recipe-description">{recipe.description}</h5>
      <div className="list-detail">
        <p>Catégorie: {recipe.category}</p>
        <p>Difficulté: {recipe.difficulty}</p>
        <p>Prix: {recipe.price}</p>
        <p>Temps de préparation: {recipe.time} minutes</p>
        <p>Nombre de servings: {recipe.number_servings}</p>
      </div>
      <h3 className="list-ingredients">Ingredients:</h3>
      {recipe.ingredients.map((ingredient, index) => (
        <li className="list-text-ingredients" key={index}>
          {ingredient}
        </li>
      ))}
      <h3>Instructions:</h3>
      {recipe.instructions.map((instruction, index) => (
        <li className="list-text-instruction" key={index}>
          {instruction}
        </li>
      ))}
      {/* button ajouter au Favoris */}
      <button className="btn-add-fav" onClick={addFavorite}>
        Ajouter aux Favoris
      </button>

      {/* button retour à la liste des recettes */}
    </div>
  );
};

export default RecipeDetail;

// // import FavoriteButton from ""

// interface Details {
//   id: number;
//   title: string;
//   image: string;
//   category: string;
//   difficulty: string;
//   price: string;
//   time: number;
//   number_servings: string;
//   description: string;
//   ingredients: string[];
//   instructions: string[];
// }

// const RecipeDetail = () => {
//   //
//   const { id } = useParams();
//   const [details, setDetails] = useState<Details[]>([]);

//   const fetchData = useCallback(async () => {
//     try {
//       const response = await fetch("http://localhost:3000/recipes/");
//       const data = await response.json();
//       const filterData = data.filter((item: Details) => item.id == id);
//       setDetails(filterData);
//     } catch (error) {
//       console.log(error);
//     }
//   }, [id]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   console.log(details[0]);

//   return (
//     <div>
//       <h1>{details[0].title}</h1>
//       <img src={details[0].image} alt={details[0].title} />
//       <p>Catégorie: {details[0].category}</p>
//       <p>Difficulté: {details[0].difficulty}</p>
//       <p>Prix: {details[0].price}</p>
//       <p>Temps de préparation: {details[0].time} minutes</p>
//       <p>Nombre de servings: {details[0].number_servings}</p>
//       <p>Description: {details[0].description}</p>
//       <h2>Ingredients:</h2>
//       <ul>
//         {details[0].ingredients.map((index) => (
//           <li key={index}>{details[0].ingredients[index]}</li>
//         ))}
//       </ul>
//       <h2>Instructions:</h2>
//       <ol>
//         {details[0].instructions.map((index) => (
//           <li key={index}>{details[0].instruction[index]}</li>
//         ))}
//       </ol>
//       <button onClick={() => onFavorite(details[0].id)}>
//         Add to Favorites
//       </button>
//     </div>
//   );
// };

// export default RecipeDetail;
