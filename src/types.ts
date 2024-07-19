export type Recipe = {
  id: number;
  title: string;
  image: string;
  username: string;
  category: string;
  country: string;
  difficulty: string;
  price: string;
  time: number;
  number_servings: number;
  favorites: string;
  ingredients: string[];
  description: string;
  instructions: string[];
};
