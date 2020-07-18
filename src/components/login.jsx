import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import "../stylepage/registrations.scss"
import userservice from "../services/userservices";
const service = new userservice();
export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
          
           
        }
    }
    EmailHandler = (e) => {
        this.setState({ email: e.target.value});
    };
    passwordHandler = (e) => {
        console.log("data", e.target.value);
        this.setState({ password: e.target.value });
        console.log("data later", this.state);
    };
   
    render() {
        return (
            <div className="logincontainer">
                
                <div className="fundoonamecontainer">
                    <span className="blue">F</span>
                    <span className="red">u</span>
                    <span className="yellow">n</span>
                    <span className="blue">d</span>
                    <span className="green">o</span>
                    <span className="red">o</span>
                </div>
                <div>
                    <span className="signtext">Sign In</span>
                </div>
                <div className="TextField">  <TextField id="outlined-email" label="email" type="text" variant="outlined"
                    onChange={this.EmailHandler}  size="small" fullWidth>email</TextField><br />
                </div>
                <div className="TextField"> <TextField id="outlined-password" label="password" type="password" variant="outlined"
                    onChange={this.passwordHandler}  size="small" fullWidth>password</TextField>
                </div>
                <div>
                    
                    <div className="distancnButtons">
                        <Link to="./registration" style={{ textDecoration: 'none' }} fullWidth>Create account</Link>
                        <Button variant="contained" color="primary" float='right' onClick={this.Login} >Login</Button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;
