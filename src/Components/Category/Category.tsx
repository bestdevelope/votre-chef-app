import React from "react";
import { Link } from "react-router-dom";

function Category() {
  return (
    <List>
      <Link to={"./searchrecipe/entree"}>
        <p>Entrées</p>
      </Link>
      <Link>
        <p>Plats</p>
      </Link>
      <Link>
        <p>Desserts</p>
      </Link>
      <Link>
        <p>Italien</p>
      </Link>
      <Link>
        <p>Française</p>
      </Link>
      <Link>
        <p>Asiatique</p>
      </Link>
    </List>
  );
}

export default Category;
