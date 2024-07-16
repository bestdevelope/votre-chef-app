import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import RecipeList from "./Components/RecipeList/RecipeList";
import RecipeDetail from "./Components/RecipeDetail/RecipeDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RecipeList />
        <RecipeDetail />

        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
