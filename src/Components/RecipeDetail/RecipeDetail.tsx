import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
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
  const params = useParams();
  const [details, setDetails] = useState<Details | any>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://localhost:3000/recipes/" + params.id
        );
        const datas = await response.json();
        if (datas) {
          setDetails(datas);
        }
      } catch (err) {
        setDetails([]);
      }
    }
    fetchData();
  }, [params.id]);

  return (
    <div>
      <Header />
    </div>
  );
};

export default RecipeDetail;
