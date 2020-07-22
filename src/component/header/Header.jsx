import React, { Component } from "react";
import {FaTwitter ,FaDiscord, FaYoutube } from "react-icons/fa";
import Scrollspy from 'react-scrollspy'

const SocialShare = [
    {Social: <FaDiscord /> , link: 'https://discord.gg/c44VBUU'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/sunderingeu'},
    {Social: <FaYoutube /> , link: 'https://www.youtube.com/channel/UCCHOuCerAXsVksg9pp9bSJQ'},
]
class Header extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);

       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded');
        })
        
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }

    stickyHeader () {}

  

    render(){

        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 100) {
                document.querySelector('.header--fixed').classList.add('sticky')
            }else{
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
        });

        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const { logo, color='default-color' } = this.props;
        const mystyle = {
            position: "absolute",
            maxWidth: "4%",
            marginLeft: "-45px",
            marginTop: "-32px"
          };
        let logoUrl;
        if(logo === 'light'){
            logoUrl = <img src="/assets/images/logo/logo-icon-light.png" alt="Sundering Logo" />;
        }else if(logo === 'dark'){
            logoUrl = <img src="/assets/images/logo/logo-icon-dark.png" alt="Sundering Logo" style={mystyle} />;
        }else{
            logoUrl = <img src="/assets/images/logo/logo.png" alt="Sundering Logo" />;
        }
        
        return(
            <header className={`header-area header-style-two header--fixed ${color}`}>
                <div className="header-wrapper">
                    <div className="header-left d-flex align-items-center">
                        <div className="logo">
                            <a href={this.props.homeLink}>
                                {logoUrl}
                            </a>
                        </div>
                        <nav className="mainmenunav d-lg-block ml--50">
                            <Scrollspy className="mainmenu" items={['home','about','progress','recruitment','contact', 'merch']} currentClassName="is-current" offset={-200}>
                                <li><a href="/#home">Home</a></li>
                                <li><a href="/#about">About</a></li>
                                <li><a href="/#progress">Progress</a></li>
                                <li><a href="/#recruitment">Recruitment</a></li>
                                <li><a href="/#contact">Contact</a></li>
                                <li><a href="/merch">Merch</a></li>
                            </Scrollspy>
                        </nav>
                    </div>
                    <div className="header-right">
                        <div className="social-share-inner">
                            <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                    
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;