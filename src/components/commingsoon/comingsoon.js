import React from 'react';
// import logo from './logo.svg';
import logo from '../../assets/logo_high.png'
import twitter from "../../assets/twitter_icon.png"
import youtube from "../../assets/youtube_icon.png"
import { GreatThings} from 'moving-letters'

import LoadingComponent from '../loading'
import Footer from '../footer'

import '../override.css'

const stylesIcons = {
  height: "30px",
  padding: "0px 20px 0 0px"
};

const styledDivSocialMedia = {
  position: "absolute",
  marginTop: "90vh"
}

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
            <div className="social-media" style={styledDivSocialMedia}>  
                    <img src={twitter}  className="twitter-icon" alt="twitter-alt"
                    style={stylesIcons}/>
                    <img src={youtube}  className="youtube-icon" alt="youtube-alt"
                    style={stylesIcons}/>
            </div> 
            
          </header>
      );
    }


export default ComingSoon;