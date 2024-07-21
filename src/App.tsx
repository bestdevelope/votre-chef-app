import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import SearchRecipe from "./Components/SearchRecipe/SearchRecipe";
import RecipeDetail from "./Components/RecipeDetail/RecipeDetail";
import FavoriteRecipe from "./Components/FavoriteRecipe/FavoriteRecipe";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SearchRecipe />} />
        <Route path="/favorite" element={<FavoriteRecipe />} />
        <Route path="/detail/:id" element={<RecipeDetail />} />
        <Route path="/favorite/" element={<FavoriteRecipe />} />
      </Routes>
    </>
  );
}

export default App;
