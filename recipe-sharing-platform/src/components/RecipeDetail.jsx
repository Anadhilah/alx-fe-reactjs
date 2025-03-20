import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json'; 
const RecipeDetail = () => {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]); 
  if (!recipe) {
    return <div>Recipe not found.</div>; 
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">{recipe.title}</h1>
      
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-4" />
        
        <h2 className="text-2xl font-semibold text-gray-900">Ingredients:</h2>
        <ul className="list-disc pl-5 mt-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient}</li>
          ))}
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-6">Instructions:</h2>
        <ol className="list-decimal pl-5 mt-2">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="text-gray-700">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
