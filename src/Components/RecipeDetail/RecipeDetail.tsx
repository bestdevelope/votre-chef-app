import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import FavoriteRecipe from "../FavoriteRecipe/FavoriteRecipe";

// import FavoriteButton from ""

interface Details {
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
  //
  const { id } = useParams();
  const [details, setDetails] = useState<Details[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:3000/recipes/");
      const data = await response.json();
      const filterData = data.filter((item: Details) => item.id == id);
      setDetails(filterData);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log(details[0]);

  return (
    <div>
      {/* <h1>{details[0].title}</h1>
      <img src={details[0].image} alt={details[0].title} />
      <p>Catégorie: {details[0].category}</p>
      <p>Difficulté: {details[0].difficulty}</p>
      <p>Prix: {details[0].price}</p>
      <p>Temps de préparation: {details[0].time} minutes</p>
      <p>Nombre de servings: {details[0].number_servings}</p>
      <p>Description: {details[0].description}</p>
      <h2>Ingredients:</h2>
      <ul>
        {details[0].ingredients.map((index) => (
          <li key={index}>{details[0].ingredients}</li>
        ))}
      </ul>
      <h2>Instructions:</h2>
      <ol>
        {details[0].instructions.map((index) => (
          <li key={index}>{details[0].instruction}</li>
        ))}
      </ol>
      <button onClick={() => onFavorite(details[0].id)}>
        Add to Favorites
      </button> */}
    </div>
  );
};

export default RecipeDetail;
