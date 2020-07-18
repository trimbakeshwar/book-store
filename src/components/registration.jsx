import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import "../stylepage/registrations.scss"

export class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
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
                     >first Name</TextField><br />
                <TextField id="outlined-lastName" label="last Name" type="text" variant="outlined" size="small"
                    onChange={this.lastNameHandler} >last Name</TextField>
            </div>
            <div className="Field">
                <br /><TextField id="outlined-email" label="Email" type="Email" variant="outlined" size="small"
                    onChange={this.emailHandler}  fullWidth>Email</TextField><br />
                <span className="lable"> use my current email address instead</span>
            </div>
            <div className="TextInputField">
                <TextField id="outlined-password" label="password" variant="outlined"
                    onChange={this.passwordHandler} 
                    type={this.state.visability ? 'text' : 'password'} size="small" >password</TextField><br />
                <TextField id="outlined-confirmPassword" label="confirm password" variant="outlined"
                    onChange={this.confirmPasswordHandler} 
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