import React from 'react';

const RecipeCard = ({ recipe }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <img 
      src={recipe.image} 
      alt={recipe.title} 
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-bold">{recipe.title}</h2>
      <p className="text-gray-600">{recipe.summary}</p>
      <a 
        href={`#recipe-${recipe.id}`} 
        className="inline-block mt-2 text-blue-500 hover:underline"
      >
        View Details
      </a>
    </div>
  </div>
);

export default RecipeCard;
