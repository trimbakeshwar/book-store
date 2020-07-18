import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import "../stylepage/login.scss"
import "../stylepage/registrations.scss"
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import patterns from "../configration/regex";
import userservice from "../services/userservices";
const service = new userservice();
export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            EmailError: "",
            passwordError: "",
            snackbarOpen: false,
            snackbarMessage: '',
            snackServicity: 'success'
           
        }
    }
    EmailHandler = (e) => {
        this.setState({ email: e.target.value, EmailError: "" });
    };
    passwordHandler = (e) => {
        console.log("data", e.target.value);
        this.setState({ password: e.target.value, passwordError: ""  });
        console.log("data later", this.state);
    };
    Login = () => {
        if (!patterns.EmailPattern.test(this.state.email)) {
            this.setState({ EmailError: "invalid mail" })
        }
        if (!patterns.passwordPattern.test(this.state.password)) {
            this.setState({ passwordError: "invalid password" })
        }
        if ((patterns.EmailPattern.test(this.state.email)) || (patterns.passwordPattern.test(this.state.password))) {
         
          let requestData = {
                email: this.state.email,
                password: this.state.password
            }
            console.log("request data", requestData);
            service.LoginData(requestData).then((response) => {
                console.log("data", response)
                if (response.status === 200) {
                  
                    this.setState({
                        snackbarOpen: true,
                        snackbarMessage: "login sucessful",
                        snackServicity: 'sucess'
                    })
               
                        this.props.history.push('./dashbord');
                    
                }
            })
                .catch((err) => {
                    console.log(err);
                    if (err === 401) {
                        this.setState({
                            snackbarOpen: true,
                            snackbarMessage: "invalid email or password",
                            snackServicity: "error"
                        })
                    }
                    if (err === 400) {
                        this.setState({
                            snackbarOpen: true,
                            snackbarMessage: "Email and password requir",
                            snackServicity: "error"
                        })
                    }
                    if (err === 404) {
                        this.setState({
                            snackbarOpen: true,
                            snackbarMessage: "not found",
                            snackServicity: "error"
                        })
                    }
                });
            }
        
        
    }
   
    render() {
        return (
            <div className="logincontainer">
                  <Snackbar open={this.state.snackbarOpen} autoHideDuration={6000} onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity={this.state.snackServicity}>
                        {this.state.snackbarMessage}
                    </Alert>
                </Snackbar>
                <div className="fundoonamecontainer">
                   <span className="blue">B</span>
                        <span className="red">o</span>
                        <span className="yellow">o</span>
                        <span className="blue">k</span>
                        <span className="green">-</span>
                        <span className="red">s</span>
                        <span className="green">t</span>
                        <span className="yellow">o</span>
                        <span className="blue">r</span>
                        <span className="red">e</span>
                </div>
                <div>
                    <span className="signtext">Sign In</span>
                </div>
                <div className="TextField">  <TextField id="outlined-email" label="email" type="text" variant="outlined"
                    onChange={this.EmailHandler} error={this.state.EmailError} helperText={this.state.EmailError}  size="small" fullWidth>email</TextField><br />
                </div>
                <div className="TextField"> <TextField id="outlined-password" label="password" type="password" variant="outlined"
                    onChange={this.passwordHandler} error={this.state.passwordError} helperText={this.state.passwordError} size="small" fullWidth>password</TextField>
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
