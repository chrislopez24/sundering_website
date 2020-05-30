import React from "react"
import twitter from "../../assets/twitter_icon.png"
import youtube from "../../assets/youtube_icon.png"


const stylesIcons = {
    height: "30px",
    padding: "0px 20px 0 0px"
  };

  const styledDivSocialMedia = {
    position: "absolute",
    marginTop: "90vh"
  }

const Footer = () => {
        return(
            <div className="social-media" style={styledDivSocialMedia}>  
                    <img src={twitter}  className="twitter-icon" alt="twitter-alt"
                    style={stylesIcons}/>
                    <img src={youtube}  className="youtube-icon" alt="youtube-alt"
                    style={stylesIcons}/>
            </div> 
        )
};

export default Footer;