import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from 'react-router-dom';
// import logo from './logo.svg';
import ComingSoon from './components/comingsoon/comingsoon'
import Footer from './components/footer/footer'

import './App.css';

function App() {
  return (
    <div className="App">
      <ComingSoon />
      
    </div>
  );
}

export default App;
