import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Category.css";

interface Recipe {
  id: number;
  title: string;
  image: string;
  category: string;
}

const Category = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("http://localhost:3000/recipes");
        const data = await response.json();
        const filteredRecipes = data.filter(
          (recipe: Recipe) => recipe.category === categoryName
        );
        setRecipes(filteredRecipes);
      } catch (err) {
        console.error("Failed to fetch recipes:", err);
      }
    };

    fetchRecipes();
  }, [categoryName]);

  return (
    <div className="category-container">
      <h1>{categoryName}</h1>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <Link to={`/detail/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
