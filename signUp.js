import {Link} from 'react-router'; 
import React from 'react';
import membersStore from './membersStore';

export default class Signup extends React.Component{
    constructor(){
        super();
        this.state={
            members:membersStore.getAllMembers(),
            error:null,
        }
    }

    renderErrors(){
        if(!this.state.error){
            return null;
        }else{
            return <div id="error">{this.state.error}</div>
        }
    }

    render(){
        console.log(this.state.members);
        return(
            <div className="formDiv">
                <form className="loginForm" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" name="emailAddress" placeholder="Your email address here" ref="submitEmail"/>
                    <input type="password" name="password" placeholder="Your password here" ref="submitPassword"/>
                    <input type="password" name="confirmPassword" placeholder="Confirm your password" ref="confirmPassword"/>
                    <button id="">Sign up</button>
                    <button id="backToLogin"><Link to="loginsignup">Back to Login</Link></button>
                    {this.renderErrors()}
                </form>
            </div>
        );
    }

    handleSubmit(e){
        e.preventDefault();
        var email=this.refs.submitEmail.value;
        var password=this.refs.submitPassword.value;
        var confirmPassword=this.refs.confirmPassword.value;

        var validateAll=this.validateAll(email, password, confirmPassword);
        if(validateAll){
            this.setState({error:validateAll});
            return;
        }else{
            this.addMember(email, password);
            this.setState({error:null});
        }
    }

     validateAll(email, password, confirmPassword){
        if(!email){
            return "Your email address is required";
        }else if(!password){
            return "Your password is required";
        }else if(!confirmPassword){
            return "Your MUST confirm the password";
        }else if(password!=confirmPassword){
            return "Your password and its confirmation MUST be similar";
        }else if(_.find(this.state.members, member=>member.email===email)){
            return "The Email address is already owned by a community member";
        }else{
            return null;
        }
    }

    addMember(email, password){
        this.state.members.push(
            {
                email,
                password
            }
        );
        this.setState({members:this.state.members});
        console.log(email+' '+password);
    }
}