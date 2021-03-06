import _ from 'lodash';
import React from 'react';
import Header from './header';
import Footer from './footer';
import LoginSignUp from './login'; 
import Signup from './signUp';
export default class Layout extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                    {this.props.children}
                <Footer/>
            </div>
        );
    }
}