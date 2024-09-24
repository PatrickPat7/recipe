import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetail';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('chicken');
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true);  // Dark Mode Standard aktiv

  // API-Aufruf zur Suche von Rezepten
  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        const data = await response.json();
        setRecipes(data.meals || []);
      } catch (error) {
        console.error('Fehler beim Abrufen der Daten:', error);
      }
      setLoading(false);
    };

    fetchRecipes();
  }, [searchTerm]);

  // Suchformular-Handler
  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const input = form.elements.search;
    setSearchTerm(input.value);
  };

  // Funktion zum Umschalten zwischen Dark Mode und Light Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? 'app dark-mode' : 'app light-mode'}>
        <h1 className="app-title">RezeptKing</h1>

        <button onClick={toggleDarkMode} className="toggle-mode">
          {darkMode ? 'Licht an' : 'Licht aus'}
        </button>

        {/* Suchformular */}
        <form onSubmit={handleSearch}>
          <input name="search" type="text" placeholder="Worauf hast du Hunger?" />
          <button type="submit">Suche</button>
        </form>

        {/* Ladeanzeige */}
        {loading ? (
          <p>Rezepte werden gebacken...</p>
        ) : (
          <Routes>
            {/* Route für die Rezeptliste */}
            <Route path="/" element={<RecipeList recipes={recipes} />} />

            {/* Dynamische Route für die Rezeptdetails */}
            <Route path="/recipe/:idMeal" element={<RecipeDetails />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
