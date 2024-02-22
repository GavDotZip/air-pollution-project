import React from 'react';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <h1>Welcome to my website</h1>
        {/* Other content of your page */}
      </div>
    </div>
  );
}

export default App;