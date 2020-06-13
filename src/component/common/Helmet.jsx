import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || WoW Guild </title>
                    <meta name="description" content="Sundering WoW Guild" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
