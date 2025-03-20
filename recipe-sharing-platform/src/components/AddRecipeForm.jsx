import React, { useState } from "react";

const AddRecipeForm = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  // State for error messages
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation function
  const validateForm = () => {
    let errors = {};

    // Check if any field is empty
    if (!formData.title.trim()) errors.title = "Recipe title is required.";
    if (!formData.ingredients.trim()) {
      errors.ingredients = "Ingredients are required.";
    } else {
      // Ensure at least two ingredients are listed
      const ingredientList = formData.ingredients.split(",").map(item => item.trim());
      if (ingredientList.length < 2) {
        errors.ingredients = "Please list at least two ingredients.";
      }
    }
    if (!formData.steps.trim()) errors.steps = "Preparation steps are required.";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log("New Recipe:", formData);
      alert("Recipe added successfully!");
      // Here, you could send data to a backend or update state
      setFormData({ title: "", ingredients: "", steps: "" }); // Reset form
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Add a New Recipe</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Recipe Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Recipe Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter recipe title"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Ingredients</label>
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            placeholder="List ingredients separated by commas"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows="3"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Preparation Steps</label>
          <textarea
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            placeholder="Describe the preparation steps"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows="4"
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all font-semibold text-lg"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
