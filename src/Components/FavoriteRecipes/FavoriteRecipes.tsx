import React, { useState } from 'react'

interface Favorite {
  id: number;
  title: string;
  image: string;
}

const FavoriteRecipes = () => {

  const [FavRecipe, setFavRecipe] =useState<Favorite[]>([]);
  


  return (
    <div>

    </div>
  )
}

export default FavoriteRecipes