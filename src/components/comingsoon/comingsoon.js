import React from 'react';
// import logo from './logo.svg';
import logo from '../../assets/logo_high.png'
import twitter from "../../assets/twitter_icon.png"
import youtube from "../../assets/youtube_icon.png"
import { GreatThings} from 'moving-letters'

import LoadingComponent from '../loading'
import Footer from '../footer/footer'

import '../override.css'

const guildLogo = {
    height: "40vmin",
    marginTop: "20vh"
}

const ComingSoon = () => {
    return (
          <header className="App-header">
            <img src={logo} className="guild-logo" alt="logo" style={guildLogo} />
            <React.Fragment>
              <GreatThings text='Coming Soon...' />
            </React.Fragment>
            <LoadingComponent />
            <Footer />
            
          </header>
      );
    }


export default ComingSoon;