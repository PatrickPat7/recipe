import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { idMeal } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        const data = await response.json();
        setRecipe(data.meals[0]);
      } catch (error) {
        console.error('Fehler beim Abrufen der Rezeptdetails:', error);
      }
    };

    fetchRecipeDetails();
  }, [idMeal]);

  if (!recipe) {
    return <p>Rezept ist auf dem Weg...</p>;
  }

  return (
    <div className="recipe-details">
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p><strong>Kategorie:</strong> {recipe.strCategory}</p>
      <p><strong>Küche:</strong> {recipe.strArea}</p>
      <p>{recipe.strInstructions.substring(0, 200)}...</p> {/* Vorschau von Anweisungen */}
      <a href={recipe.strSource} target="_blank" rel="noopener noreferrer">
        Zum vollständigen Rezept
      </a>
    </div>
  );
};

export default RecipeDetails;
