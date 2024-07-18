import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import RecipeDetail from "./Components/RecipeDetail/RecipeDetail";
import SearchRecipe from "./Components/SearchRecipe/SearchRecipe";
// import RecipeList from "./Components/RecipeList/RecipeList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <SearchRecipe />
        {/* <RecipeList /> */}
        <RecipeDetail />

        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
