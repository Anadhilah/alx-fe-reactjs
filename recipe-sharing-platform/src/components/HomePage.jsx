import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch data from the static JSON file
  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Recipe Sharing Platform
      </h1>

      {/* Add Recipe Button */}
      <div className="flex justify-center mb-6">
        <Link to="/add-recipe">
          <button className="bg-blue-500 text-white px-5 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition">
            + Add Recipe
          </button>
        </Link>
      </div>

      {/* Recipe Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900">{recipe.title}</h2>
              <p className="text-gray-600 mt-2">{recipe.summary}</p>
              <Link
                to={`/recipe/${recipe.id}`}
                className="inline-block mt-4 text-blue-500 hover:text-blue-700 font-semibold"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
