import { useEffect, useState } from "react";
import RecipeItem from "../components/RecipeItem";
import Card from "../components/RecipeCard";
import Classes from "./RecipePage.module.css";
import AddButton from "../components/AddButton";

function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecpies = async () => {
      try {
        const response = await fetch(
          "https://recipeapp-19652-default-rtdb.firebaseio.com/Recipie.json"
        );

        const responseData = await response.json();

        const loadedRecipes = [];

        for (const key in responseData) {
          loadedRecipes.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            time: responseData[key].time,
            ingridients: responseData[key].ingridients,
          });
        }

        setRecipes(loadedRecipes);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHttpError(error.message);
      }
    };
    fetchRecpies();
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  const recipeList = recipes.map((recipe) => (
    <RecipeItem
      id={recipe.id}
      key={recipe.id}
      name={recipe.name}
      description={recipe.description}
      time={recipe.time}
      ingridients={recipe.ingridients}
    />
  ));

  return (
    <div>
      <section className={Classes.recipes}>
        <Card>
          <ul>{recipeList}</ul>
        </Card>
      </section>
      <AddButton></AddButton>
    </div>
  );
}

export default Recipe;
