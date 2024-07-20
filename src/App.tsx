// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import SearchRecipe from "./Components/SearchRecipe/SearchRecipe";
import RecipeDetail from "./Components/RecipeDetail/RecipeDetail";
import FavoriteRecipe from "./Components/FavoriteRecipe/FavoriteRecipe";
// import Footer from "./Components/Footer/Footer";
// import LoginSignup from "./Components/LoginSignup/LoginSignup";

function App() {
  return (
    <>
      <Header />
      <SearchRecipe />
      <Routes>
        {/* <Route path="/login" element={<LoginSignup />} /> */}
        <Route path="/detail/:id" element={<RecipeDetail />} />
        <Route path="/favorite/:id" element={<FavoriteRecipe />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
