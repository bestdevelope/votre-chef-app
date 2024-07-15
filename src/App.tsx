import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
