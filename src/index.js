// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

// Common Layout
// import Layout from "./component/common/App";



import DarkLanding from './dark/Landing';

// Element Layout
//import Blog from "./elements/Blog";
//import BlogDetails from "./elements/BlogDetails";
import error404 from "./elements/error404";


import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={DarkLanding}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/merch`} component={() => { 
                        window.open('https://6kskin.com/es/127-sundering');
                        window.location.href = `${process.env.PUBLIC_URL}/`;
                        return false;
                        }}/>
                    <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                    <Route component={error404}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();