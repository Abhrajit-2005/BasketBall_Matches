import React, { useEffect, useState } from 'react';
import MatchCard from './components/MatchCard';

function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/matches')
      .then(response => response.json())
      .then(data => setMatches(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-10">
      <h1 className="text-6xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
        Upcoming Basketball Matches
      </h1>
      <br></br>
      <div className="grid mt-1 gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {matches.length > 0 ? (
          matches.map((match, index) => (
            <MatchCard key={index} match={match} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-300">No matches found.</div>
        )}
      </div>
    </div>
  );
}

export default App;