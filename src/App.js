import React from 'react';
// import logo from './logo.svg';
import logo from './assets/logo_high.png'
import twitter from "./assets/twitter_icon.png"
import youtube from "./assets/youtube_icon.png"

import './App.css';

import LoadingComponent from './components/loading'
import Footer from './components/footer'

const styles = {
  height: "30px",
  padding: "0px 20px 0 0px"
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="guild-logo" alt="logo" />
        <p>
          Coming Soon...
        </p>

        <LoadingComponent />
        
        <div className="social-media">  
                <img src={twitter}  className="twitter-icon" alt="twitter-alt"
                style={styles}/>
                <img src={youtube}  className="youtube-icon" alt="youtube-alt"
                style={styles}/>
        </div> 
      </header>
    </div>
  );
}

export default App;
