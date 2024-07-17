import { BrowserRouter, Routes, useSearchParams } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
// import RecipeList from "./Components/RecipeList/RecipeList";
import RecipeDetail from "./Components/RecipeDetail/RecipeDetail";
import SearchRecipe from "./Components/SearchRecipe/SearchRecipe";
import { useState } from "react";

function App() {
  const [category, setCategory]= useState("general");
  return (
    <>
      <BrowserRouter>
        <Header setCategory={setCategory}/>
        <SearchRecipe category={category}/>
        {/* <RecipeList /> */}
        <RecipeDetail />

        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
