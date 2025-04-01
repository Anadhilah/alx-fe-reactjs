
import React, { useState } from 'react';
import Search from './Search';

function Home() {
  const [userData, setUserData] = useState(null);

  return (
    <div>
      <h2>Search for GitHub Users</h2>
      <Search setUserData={setUserData} />

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