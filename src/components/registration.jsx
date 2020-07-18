import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import "../stylepage/registrations.scss"
import "../stylepage/login.scss"
import userservice from "../services/userservices";
import patterns from "../configration/regex";
const service = new userservice();
export class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            firstNameError: "",
            lastNameError: "",
            email: "",
            EmailError: "",
            password: "",
            confirmPassword: "",
            passwordError: "",
            confirmPasswordError: "",
            MissmatchError:"",
            visability: false,

        }
    }
    firstNameHandler = (e) => {
        console.log("first name", e.target.value);
        this.setState({ firstName: e.target.value, firstNameError: "" });
        console.log("data after setste first name", this.state);
    }
    lastNameHandler = (e) => {
        console.log("lastName", e.target.value);
        this.setState({ lastName: e.target.value, lastNameError: "" });
        console.log("data after setste last name", this.state);
    }
    emailHandler = (e) => {
        console.log("email", e.target.value);
        this.setState({ email: e.target.value, EmailError: "" });
        console.log("data after setste email", this.state);
    }
    passwordHandler = (e) => {
        console.log("data", e.target.value);
        this.setState({ password: e.target.value, passwordError: "", MissmatchError: "" });
        console.log("data after setste password", this.state);
    }
    confirmPasswordHandler = (e) => {
        console.log("data", e.target.value);
        this.setState({ confirmPassword: e.target.value, confirmPasswordError: "", MissmatchError: "" });
        console.log("data after setste confirm pass", this.state);
    }

    visableIconHandler = eve => {
        this.state.visability ?
            this.setState({ visability: false })
            : this.setState({ visability: true })
    }
    Register = (e) => {
        if (!patterns.NamePattern.test(this.state.firstName)) {
            this.setState({ firstNameError: "invalid first name" })
        }
        if (!patterns.NamePattern.test(this.state.lastName)) {
            this.setState({ lastNameError: "invalid last name" })
        }
        if (!patterns.EmailPattern.test(this.state.email)) {
            this.setState({ EmailError: "invalid email" })
        }
        if (!patterns.passwordPattern.test(this.state.password)) {
            this.setState({ passwordError: "invalid password" })
        }
        if (!patterns.passwordPattern.test(this.state.confirmPassword)) {
            this.setState({ confirmPasswordError: "invalid password" })
        }
        if (this.state.password != this.state.confirmPassword) {
            this.setState({ MissmatchError: "password and confirm Password is not same" })
        }
        if ((patterns.NamePattern.test(this.state.firstName)) && (patterns.NamePattern.test(this.state.lastName)) &&
            (patterns.EmailPattern.test(this.state.email)) && (patterns.passwordPattern.test(this.state.password)) &&
            (patterns.passwordPattern.test(this.state.confirmPassword)) && (this.state.password === this.state.confirmPassword))
             {


            console.log("in email", this.state);
            let requestData = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword,
               
            }
            console.log("request data", requestData);
            service.RegisterData(requestData).then((response) => {

                console.log("data", response)
                if (response.status === 200) {
                    this.props.history.push("/")
                }
            })
                .catch((error) => {
                    console.log(error);

                });
        }

    }
    render() {
        return (
            <div className="containersss">
                <div className="Registrationcontainer">
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
                        <span className="labletext">Create your book store account</span>
                    </div>
                    <div className="TextInputField">
                        <TextField id="outlined-firstName"
                            label="First Name" type="text"
                            variant="outlined" size="small"
                            onChange={this.firstNameHandler}
                            error={this.state.firstNameError}
                            helperText={this.state.firstNameError}
                        >first Name</TextField><br />
                        <TextField id="outlined-lastName"
                            label="last Name" type="text"
                            variant="outlined" size="small"
                            onChange={this.lastNameHandler}
                            error={this.state.lastNameError}
                            helperText={this.state.lastNameError}>last Name</TextField>
                    </div>
                    <div className="Field">
                        <br /><TextField id="outlined-email"
                            label="Email" type="Email"
                            variant="outlined" size="small"
                            onChange={this.emailHandler}
                            error={this.state.EmailError}
                            helperText={this.state.EmailError} fullWidth>Email</TextField><br />
                        <span className="lable"> use my current email address instead</span>
                    </div>
                    <div className="TextInputField">
                        <TextField id="outlined-password" label="password" variant="outlined"
                            onChange={this.passwordHandler}
                            error={((this.state.passwordError)||(this.state.MissmatchError))}
                            helperText={((this.state.passwordError)||(this.state.MissmatchError))}
                            
                            type={this.state.visability ? 'text' : 'password'} size="small" >password</TextField><br />
                        <TextField id="outlined-confirmPassword" label="confirm password" variant="outlined"
                            onChange={this.confirmPasswordHandler}
                            error={((this.state.confirmPasswordError)||(this.state.MissmatchError))}
                            helperText={((this.state.confirmPasswordError)||(this.state.MissmatchError))}
                            type={this.state.visability ? 'text' : 'password'} size="small"
                            InputProps={{
                                endAdornment: (
                                    <div onClick={this.visableIconHandler}>
                                        {this.state.visability ? <VisibilityIcon className="visibility" /> : <VisibilityOffIcon />}
                                    </div>
                                )
                            }} >confirm password</TextField>
                    </div>
                    <div>
                        <span className="lable"> use 8 or more charecter with a mix of letters, symbols & numbers </span>
                    </div>

                    <div className="distancnButtons">
                        <label className="linkages">sign in insted</label>
                        <Button id="contained-button" variant="contained" color="primary" float='right' onClick={this.Register}>submit</Button>
                    </div>
                </div>
                <div className='imageContainer'>
                    <div className='imgcontainer'>
                        <img className='image' />
                    </div>
                </div>


            </div>
        );
    }
}

export default Registration;