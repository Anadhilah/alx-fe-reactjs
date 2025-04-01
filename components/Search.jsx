
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search({ setUserData }) {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    if (!username) return; 
    setLoading(true);
    setError(''); 

    try {
      const data = await fetchUserData(username);
      setUserData(data); 
    } catch (error) {
      setError('Looks like we can\'t find the user');
      setUserData(null); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          required
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Search;