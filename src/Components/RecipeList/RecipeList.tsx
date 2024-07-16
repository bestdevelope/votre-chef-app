// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";


// interface Recipe {
//   id: number;
//   title: string;
//   image: string;
//   category: string;
//   difficulty: string;
//   price: string;
//   time: number;
//   number_servings: string
//   description: string;
//   ingredients: string[];
//   instructions: string[];
// };


// const RecipeList () => {

//  const [recipes, setRecipes] = useState<Recipes[]>([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/recipes")
//      .then((response) => response.json())
//      .then((data) => setRecipes(data));
//   }, []);


//   return (
//     <div>
//        <Image
//         src={image}
//         alt=""
//         width={400}
//         height={400}
//         />
// <h3>{title}</h3>
// <p>{description}</p>
// <p>{category}</p>


//     </div>
//   );
// };

// export default RecipeList;
