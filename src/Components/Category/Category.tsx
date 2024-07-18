import { Link } from "react-router-dom";
import "./Category.css";

interface Category {
  id: number;
  name: string;
  category: string;
}

function Category() {
  // useEffect(() => {
  //   const fetchRecipes = async () => {
  //     try {
  //       const data = await fetch("http://localhost:3000/recipes/category");
  //       const recipes = await data.json();
  //       setCategory(recipes.category);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   (async () => await fetchRecipes())();
  // }, [params.type]);

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
