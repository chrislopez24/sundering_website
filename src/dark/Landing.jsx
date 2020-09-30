import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import Tab from "../elements/tab/Tab";
import Contact from "../elements/contact/Contact";
import RecruitmentList from "../elements/recruitment/RecruitmentList";
import ProgressList from "../elements/guildprogress/GuildProgressList";

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Welcome to...',
        description: '',
        buttonText: '',
        buttonLink: ''
    }
]
const mystyle = {
    position: "absolute",
    maxWidth: "50%",
    marginLeft: "700px",
    marginTop: "-420px"
  }
const Landing = () => {
    let title = 'About Us',
        description = 'WIP';
    return (
        
        <div className="active-dark">
            <Helmet pageTitle="Sundering" />

            <Header homeLink="/" logo="dark" color="color-black"/>
            {/* Start Slider Area   */}
            <div id="home" className="fix">
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide personal-recruitment-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            <h1 className="title">Sundering <br/>
                                            <TextLoop>
                                                <span> WoW Guild.</span>
                                                <span> Sanguino.</span>
                                                <span> EU.</span>
                                            </TextLoop>{" "}
                                            </h1>
                                            <img src="/assets/images/logo/logo-icon-dark.png" alt="Sundering Logo" style={mystyle}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */} 

            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about-logo.png" alt="About Logo"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <Tab tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* End About Area */}

            {/* Start Progress Area  */}
            <div id="progress" className="fix">
                <div className="service-area creative-service-wrapper ptb--120 bg_color--5" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                    <h2 className="title">Guild Progress</h2>
                                    <p>Current Shadowlands Progress.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                <ProgressList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            {/* End Service Area  */} 

            {/* Start Recruitment Area */}
            <div id="recruitment" className="fix">
                <div className="recruitment-area ptb--120 bg_color--1">
                    <div className="recruitment-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                        <h2 className="title">Recruitment</h2>
                                        <p>We need the following classes at the moment.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <RecruitmentList styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="12" />
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End recruitment Area */}

            {/* Start Apply Area */}
            <div id="contact" className="fix">
                <div className="rn-contact-area ptb--120 bg_color--1">
                    <Contact contactImages="/assets/images/logo/logo-icon-dark.png" contactTitle="Apply!" />
                </div>
            </div>
            {/* End COntact Area */}

            <Footer />
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
        </div>
    )
}

export default Landing;
