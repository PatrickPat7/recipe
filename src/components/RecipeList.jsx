import React from 'react';
import { Link } from 'react-router-dom';
import Recipe from './Recipe';

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.length === 0 ? (
        <p>Keine Rezepte gefunden.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.idMeal}>
            {/* Link zu den Rezeptdetails */}
            <Link to={`/recipe/${recipe.idMeal}`}>
              <Recipe recipe={recipe} />
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;