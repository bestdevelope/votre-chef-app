import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import SearchRecipe from "./Components/SearchRecipe/SearchRecipe";
import RecipeDetail from "./Components/RecipeDetail/RecipeDetail";
import FavoriteRecipe from "./Components/FavoriteRecipe/FavoriteRecipe";
import { Recipe } from "./Components/types";
// import "./App.css";

// import RecipeList from "./Components/RecipeList/RecipeList";

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <>
      <Header />
      <SearchRecipe />
      <Routes>
        <Route path="/detail/:id" element={<RecipeDetail />} />
        <Route path="/favorite/:id" element={<FavoriteRecipe />} />
      </Routes>
    </>
  );
}

export default App;
