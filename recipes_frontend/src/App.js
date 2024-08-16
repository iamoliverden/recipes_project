import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import Recipes from './components/Recipes';
import RecipeDetail from './components/RecipeDetail';
import './App.css'; // Make sure to import the CSS file
import indianFlag from './assets/images/indian_flag.png'; // Update the import path

function App() {
  return (
    <Router>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <img src={indianFlag} alt="Indian Flag" className="indian-flag" />
        <h1>Indian Recipes</h1>
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/category/:id" element={<Recipes />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
