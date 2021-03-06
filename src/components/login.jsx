import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import "../stylepage/login.scss"
import "../stylepage/registrations.scss"
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import patterns from "../configration/regex";
import userservice from "../services/userservices";
import auth from "../services/auth";
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
                Email: this.state.email,
                Password: this.state.password
            }
            console.log("request data", requestData);
            service.LoginData(requestData).then((response) => {
                console.log("data", response)
                if (response.status === 200) {
                    
                
                    localStorage.setItem("Token", response.data.jsonToken);
                    localStorage.setItem("Name", response.data.data.firstName+" "+response.data.data.lastName);
                    localStorage.setItem("User Role", response.data.data.userRole);
                    localStorage.setItem("Address", response.data.data.address);
                    localStorage.setItem("email", response.data.data.email);
                    localStorage.setItem("city", response.data.data.city);
                    localStorage.setItem("phoneNumber", response.data.data.phoneNumber);
                   
                    this.setState({
                        snackbarOpen: true,
                        snackbarMessage: "login sucessful",
                        snackServicity: 'sucess'
                    })
                    if (response.data.data.userRole === "Admin") {
                        auth.login();
                        if (auth.isAuthenticated) {
                          setTimeout(() => {
                            this.props.history.push("/adminDashbord");
                          }, 2000);
                        }
                      } else {
                        auth.login();
                        if (auth.isAuthenticated) {
                          setTimeout(() => {
                            this.props.history.push("/store");
                          }, 2000);
                        }
                      }
                  
                    
                }
            })
                .catch(async(error) => {
                    console.log(error);
                  
                        await this.setState({
                            snackbarOpen: true,
                            snackbarMessage: "invalid email or password",
                            snackServicity: "error"
                        })
                 
                   
                 
                });
            }
        
        
    }
   
    render() {
        return (
            <div>
            
            <div className="logincontainer">
                  <Snackbar open={this.state.snackbarOpen} autoHideDuration={6000} onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity={this.state.snackServicity}>
                        {this.state.snackbarMessage}
                    </Alert>
                </Snackbar>
                <div className="fundoonamecontainer">
                  
                        <span className="bookColor">Bookstore</span>
                       
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
                        <Button variant="contained" style ={{backgroundColor:"rgba(160, 48, 55, 0.925)"}} color="primary" float='right' onClick={this.Login} >Login</Button>
                    </div>
                </div>
                
            </div>
            </div>
        );
    }
}
export default Login;
