import React, { Component } from "react";

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            rnName: '',
            rnEmail: '',
            rnSubject: '',
            rnMessage: '',
        };
    }
    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">{this.props.contactTitle}</h2>
                                <p className="description">Applications: Click the button below to be redirected to the form</p>
                                <p className="description">Other questions/issues: Send us an email to <b>contact@sunderingesports.com</b></p>
                            </div>
                            <button className="rn-button-style--2 btn-solid">
                                <a href="https://cutt.ly/Ta0tpvq" target="_blank" rel="noopener noreferrer">Apply Form</a>
                            </button>
                            <div class="divider"/>
                            <button className="rn-button-style--2 btn-solid">
                                <a href="mailto:contact@sunderingesports.com" target="_blank" rel="noopener noreferrer">Contact Email</a>
                            </button>

                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src={`${this.props.contactImages}`} alt="Sundering Alt"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact;