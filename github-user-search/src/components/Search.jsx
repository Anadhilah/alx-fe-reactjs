import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search({ setUserData, setTotalResults }) {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await fetchUserData(username, location, minRepos);
      if (data.items.length === 0) {
        throw new Error('No users found');
      }
      setUserData(data.items);
      setTotalResults(data.total_count);
    } catch (error) {
      setError('No users found or criteria do not match');
      setUserData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-6 bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        required
        className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location (optional)"
        className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="number"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        placeholder="Minimum repositories (optional)"
        className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition w-full font-semibold">
        Search
      </button>
      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-red-500 text-center font-medium">{error}</p>}
    </form>
  );
}

export default Search;