
import React, { useState } from 'react';
import { fetchUser } from '../services/githubService';

function Home() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchUser(username);
      setUserData(data);
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    }
  };

  return (
    <div>
      <h2>Search for GitHub Users</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>

      {userData && (
        <div>
          <h3>{userData.login}</h3>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
        </div>
      )}
    </div>
  );
}

export default Home;