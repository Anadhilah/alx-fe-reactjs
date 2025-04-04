import React, { useState } from 'react';
import Search from './Search';

function Home() {
  const [userData, setUserData] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  const loadMore = async () => {
    const data = await fetchUserData(username, location, minRepos, page + 1);
    setUserData((prevData) => [...prevData, ...data.items]);
    setPage(page + 1);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Search for GitHub Users</h2>
      <Search setUserData={setUserData} setTotalResults={setTotalResults} />
      {userData.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-center text-gray-700">Results ({totalResults} found)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {userData.map((user) => (
              <div key={user.id} className="p-6 border rounded-lg shadow-lg bg-white text-center">
                <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full mx-auto border-2 border-gray-300" />
                <h4 className="mt-3 font-medium text-gray-800 text-lg">{user.login}</h4>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="block text-blue-500 mt-3 font-semibold hover:underline">View Profile</a>
              </div>
            ))}
          </div>
          {userData.length < totalResults && (
            <button onClick={loadMore} className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition w-full font-semibold shadow-md">
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
