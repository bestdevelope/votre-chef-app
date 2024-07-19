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
      <h1>{details.title}</h1>
      <img src={details.image} alt={details.title} />
      <p>Catégorie: {details.category}</p>
      <p>Difficulté: {details.difficulty}</p>
      <p>Prix: {details.price}</p>
      <p>Temps de préparation: {details.time} minutes</p>
      <p>Nombre de servings: {details.number_servings}</p>
      <p>Description: {details.description}</p>
      {/* <h2>Ingredients:</h2>
      <ul>
        {details.ingredients.map((index) => (
          <li key={index}>{details.ingredients}</li>
        ))}
      </ul>
      <h2>Instructions:</h2>
      <ol>
        {details.instructions.map((index) => (
          <li key={index}>{details.instruction}</li>
        ))}
      </ol> */}
      <FavoriteRecipe />
    </div>
  );
};

export default RecipeDetail;
