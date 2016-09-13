import React from 'react';
import {Link} from 'react-router';

export default class LoginSignUp extends React.Component{
    constructor(){
        super();
        this.state={error:null}
    }

    renderErrors(){
        if(!this.state.error){
            return null;
        }
        else{
            return <div id="error">{this.state.error}</div>
        }
    }

    render(){
        return(
               <div className="formDiv">
                   <form className="loginForm" onSubmit={this.handleSubmit.bind(this)}>
                        <input type="text" name="emailAddress" placeholder="Your email address here" ref="submitEmail"/>
                        <input type="password" name="password" placeholder="Your password here" ref="submitPassword"/>
                        <button id="login">Login</button>
                        <button id="signUp"><Link to="signup">Not a Member...Sign Up</Link></button>
                        {this.renderErrors()}
                   </form>
               </div>
        );  
    }

    handleSubmit(e){
        e.preventDefault();
        var email=this.refs.submitEmail.value;
        var password=this.refs.submitPassword.value;

        var validateAll=this.validateAll(email, password);
        if(validateAll){
            this.setState({error:validateAll});
            return;
        }else{
            this.setState({error:null});
        }
    }

   //Login validation.. works for email and password individually but can't render an error both space left 
    validateAll(email, password){
        if(!email){
            return "Your email address is required";
        }else if(!password){
            return "Your password is required";
        }
        if(!email && !password){
            return "Your email address and password are required";
        }else{
            return null;
        }
    }
} 