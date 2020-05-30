import React from 'react';
// import logo from './logo.svg';
import logo from './assets/logo_high.png'
import './App.css';

import LoadingComponent from './components/loading'
import Footer from './components/footer'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="guild-logo" alt="logo" />
        <p>
          Coming Soon...
        </p>

        <LoadingComponent />
      </header>
      <Footer />
    </div>
  );
}

export default App;
