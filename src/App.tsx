import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import RecipeDetail from "./Components/RecipeDetail/RecipeDetail";
import SearchRecipe from "./Components/SearchRecipe/SearchRecipe";
// import RecipeList from "./Components/RecipeList/RecipeList";

function App() {
  return (
    <>
      <Header />
      <SearchRecipe />

      <Routes>
        <Route path="/detail/:id" element={<RecipeDetail />} />

        {/* <RecipeList /> */}
      </Routes>
    </>
  );
}

export default App;
