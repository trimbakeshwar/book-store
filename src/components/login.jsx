import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import "../stylepage/login.scss"
import "../stylepage/registrations.scss"
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import userservice from "../services/userservices";
const service = new userservice();
export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            snackbarOpen: false,
            snackbarMessage: '',
            snackServicity: 'success'
           
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
    Login = () => {
    
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
                    console.log(err.response.data.error);
                    if (err.response.data.error.statusCode === 401) {
                        this.setState({
                            snackbarOpen: true,
                            snackbarMessage: "invalid email or password",
                            snackServicity: "error"
                        })
                    }
                    if (err.response.data.error.statusCode === 400) {
                        this.setState({
                         
                        })
                    }
                });
        
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
