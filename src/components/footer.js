import React from "react"
import twitter from "../assets/twitter_icon.png"
import youtube from "../assets/youtube_icon.png"

class Footer extends React.Component{
    render() {
        const styles = {
            height: "30px",
            padding: "0px 20px 0 0px"
        };
        return(
            <div className="footer">  
                <img src={twitter}  className="twitter-icon" alt="twitter-alt"
                style={styles}/>
                <img src={youtube}  className="youtube-icon" alt="youtube-alt"
                style={styles}/>
            </div>
        )
    }
}

export default Footer;