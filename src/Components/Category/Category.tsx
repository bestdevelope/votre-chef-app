import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Category.css";
import { Recipe } from "../types";

interface Category {
  id: number;
  name: string;
  category: string;
}

function Category() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filterByCategory = (category: string) => {
    setSelectedCategory(category);
    if (category === "Favorite") {
      const storedFavorites = localStorage.getItem("favorites");
      const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
      setFilteredRecipes(favorites);
    } else {
      const results = recipes.filter((recipe) => recipe.category === category);
      setFilteredRecipes(results);
    }
  };

  return (
    <div className="list-category">
      <div>
        <ul className="list-category">
          {[
            "All",
            "Entrées",
            "Plats",
            "Desserts",
            "Français",
            "Italien",
            "Asiatique",
          ].map((category) => {
            return (
              <li key={category}>
                <Link
                  className="link-category"
                  to={`./recipes/${category.toLowerCase()}`}
                >
                  {category}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Category;


