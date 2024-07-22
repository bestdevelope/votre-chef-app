
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import SearchRecipe from "./Components/SearchRecipe/SearchRecipe";
import RecipeDetail from "./Components/RecipeDetail/RecipeDetail";
import FavoriteRecipe from "./Components/FavoriteRecipe/FavoriteRecipe";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import Category from "./Components/Category/Category";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SearchRecipe />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/detail/:id" element={<RecipeDetail />} />
        <Route path="/favorite/" element={<FavoriteRecipe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
