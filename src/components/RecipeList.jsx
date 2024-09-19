import React from 'react';  
import Recipe from './Recipe';  


const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {/* Wenn keine Rezepte gefunden wurden, zeigt es die Nachricht an*/}
      {recipes.length === 0 ? (
        <p>Keine Rezepte gefunden.</p>
      ) : (
        recipes.map((recipe) => (
          <Recipe key={recipe.idMeal} recipe={recipe} /> 
        ))
      )}
    </div>
  );
};

export default RecipeList;