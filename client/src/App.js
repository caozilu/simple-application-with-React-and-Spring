import React from 'react';
import Contacts from './components/Contacts';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <nav>
        <div className="nav-wrapper center-align">
          <a href="/" className="brand-logo">Contacts</a>
        </div>
      </nav>
      <div>
        <Contacts />
      </div>
    </div>
  );
}

export default App;
