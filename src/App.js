import React, { useState } from 'react';
import React from 'react';~
import axios from 'axios';
import SearchBar from './Components/SearchBar';
import RecipeList from './Components/RecipeList';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    const API_KEY = '5711041107e3433ca08e7a80e0c43f8e';
    const API_URL = `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&number=10&apiKey=${API_KEY}`;

    try {
      const response = await axios.get(API_URL);
      setRecipes(response.data.results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div>
      <h1>Recipe Finder</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
