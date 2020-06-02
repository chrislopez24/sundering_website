import React from "react";
import twitter from "../../assets/twitter_icon.png";
import youtube from "../../assets/youtube_icon.png";

const stylesIcons = {
  height: "30px",
  padding: "0px 20px 0 0px",
};

const styledDivSocialMedia = {
  position: "absolute",
  marginTop: "90vh",
};

const Footer = () => {
  return (
    <div className="social-media" style={styledDivSocialMedia}>
      <a href="https://twitter.com/sunderingeu" target="_blank" rel="noopener noreferrer">
        <img
          src={twitter}
          className="twitter-icon"
          alt="twitter-alt"
          style={stylesIcons}
        />
      </a>

      <a href="https://www.youtube.com/channel/UCCHOuCerAXsVksg9pp9bSJQ" target="_blank" rel="noopener noreferrer">
        <img
          src={youtube}
          className="youtube-icon"
          alt="youtube-alt"
          style={stylesIcons}
        />
      </a>
    </div>
  );
};

export default Footer;
