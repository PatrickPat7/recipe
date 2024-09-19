import React from 'react'; 

// Die Komponente hat die Rezepte
const Recipe = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <h2>{recipe.strMeal}</h2>  {/* Name des rezeptes*/}
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />  {/* Bild*/}
      <p><strong>Kategorie:</strong> {recipe.strCategory}</p>  {/* Kategorie */}
      <p><strong>Küche:</strong> {recipe.strArea}</p>  {/* Herkunft */}
      <a href={recipe.strSource} target="_blank" rel="noopener noreferrer">
        Zum Rezept  {/* Link zur Rezeptseite */}
      </a>
    </div>
  );
};

export default Recipe;