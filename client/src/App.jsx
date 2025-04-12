import React, { useEffect, useState } from 'react';

import Weather from './components/Weather';

const App = () => {
  const [backendData, setBackendData] = useState({});

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);

  return (
    <div className="app">
      {}
      <Weather />

      {}
      <div>
        
        {typeof backendData.users === 'undefined' ? (
          <p>Loading...</p>
        ) : (
          backendData.users.map((user, i) => <p key={i}>{user}</p>)
        )}
      </div>
    </div>
  );
};

export default App;
