import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import "../stylepage/registrations.scss"
import "../stylepage/login.scss"
import { Link } from 'react-router-dom';
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
            MissmatchError: "",
            Address:"",
            AddressError:"", 
            city:"",
             cityError:"",
             phoneNumber:"",
              phoneNumberError:"",

            visability: false,

        }
    }
    firstNameHandler = (e) => {
       
        this.setState({ firstName: e.target.value, firstNameError: "" });
      
    }
    lastNameHandler = (e) => {
       
        this.setState({ lastName: e.target.value, lastNameError: "" });
       
    }
    emailHandler = (e) => {
       
        this.setState({ email: e.target.value, EmailError: "" });
      
    }
    passwordHandler = (e) => {
      
        this.setState({ password: e.target.value, passwordError: "", MissmatchError: "" });
       
    }
    confirmPasswordHandler = (e) => {
      
        this.setState({ confirmPassword: e.target.value, confirmPasswordError: "", MissmatchError: "" });
       
    }
    AddressHandler=(e)=>{ 
        this.setState({ Address: e.target.value,AddressError:"" }); 
    } 
     cityHandler=(e)=>{
        this.setState({ city: e.target.value,  cityError:"" }); 
     } 
      phoneNumberHandler=(e)=>{
        this.setState({ phoneNumber: e.target.value,  phoneNumberError:"" }); 
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
        if (!patterns.addressPattern.test(this.state.Address)) {
            this.setState({ AddressError: "invalid address" })
        }
        if (!patterns.cityPattern.test(this.state.city)) {
            this.setState({ cityError: "invalid city" })
        }
        if (!patterns.phonenumberPattern.test(this.state.phoneNumber)) {
            this.setState({ phoneNumberError: "invalid number" })
        }
        if (this.state.password != this.state.confirmPassword) {
            this.setState({ MissmatchError: "password and confirm Password is not same" })
        }
        if ((patterns.NamePattern.test(this.state.firstName)) && (patterns.NamePattern.test(this.state.lastName)) &&
            (patterns.EmailPattern.test(this.state.email)) && (patterns.passwordPattern.test(this.state.password)) &&
            (patterns.passwordPattern.test(this.state.confirmPassword)) &&   (patterns.phonenumberPattern.test(this.state.phoneNumber))
            && (patterns.cityPattern.test(this.state.city))&&(patterns.addressPattern.test(this.state.Address))&&
            (this.state.password === this.state.confirmPassword)) {


            console.log("in email", this.state);
            let requestData = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword,
                Address:this.state.Address,
                city:this.state.city,
                phoneNumber:this.state.phoneNumber

            }
            console.log("request data", requestData);
            service.RegisterData(requestData).then((response) => {

                console.log("data", response)
                if (response.status === 200) {
                 //   this.props.history.push("/")
                }
            })
                .catch((error) => {
                    console.log(error);
                    this.props.history.push("/")
                });
        }

    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className="iconimages" />
                    <div className="names"> Book-store</div>
                </div>
                <div className="containersss">
                    <div className="Registrationcontainer">
                        <div className="fundoonamecontainer">
                            <span className="green">B</span>
                            <span className="yellow">o</span>
                            <span className="green">o</span>
                            <span className="yellow">k</span>
                            <span className="green">-</span>
                            <span className="yellow">s</span>
                            <span className="green">t</span>
                            <span className="yellow">o</span>
                            <span className="green">r</span>
                            <span className="yellow">e</span>
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
                          <TextField id="outlined-email"
                                label="Email" type="Email"
                                variant="outlined" size="small"
                                onChange={this.emailHandler}
                                error={this.state.EmailError}
                                helperText={this.state.EmailError} fullWidth>Email</TextField><br />
                        </div>
                        <div className="TextInputField">
                            <TextField id="outlined-password" label="password" variant="outlined"
                                onChange={this.passwordHandler}
                                error={((this.state.passwordError) || (this.state.MissmatchError))}
                                helperText={((this.state.passwordError) || (this.state.MissmatchError))}

                                type={this.state.visability ? 'text' : 'password'} size="small" >password</TextField><br />
                            <TextField id="outlined-confirmPassword" label="confirm password" variant="outlined"
                                onChange={this.confirmPasswordHandler}
                                error={((this.state.confirmPasswordError) || (this.state.MissmatchError))}
                                helperText={((this.state.confirmPasswordError) || (this.state.MissmatchError))}
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
                        <div className="TextInputField">
                            <TextField id="outlined-firstName"
                                label="phone number" type="number"
                                variant="outlined" size="small"
                                onChange={this.phoneNumberHandler}
                                error={this.state.phoneNumberError}
                                helperText={this.state.phoneNumberError}
                            >phone number</TextField><br />
                            <TextField id="outlined-city"
                                label="city" type="text"
                                variant="outlined" size="small"
                                onChange={this.cityHandler}
                                error={this.state.cityError}
                                helperText={this.state.cityError}>city</TextField>
                        </div>
                        <div className="Field">
                            <TextField id="outlined-Address"
                                label="Address" type="text"
                                variant="outlined" size="small" 
                                onChange={this.AddressHandler}
                                error={this.state.AddressError}
                                helperText={this.state.AddressError} fullWidth>Email</TextField><br />
                        </div>
                        <div className="distancnButtons">
                            <Link to="./" style={{ textDecoration: 'none' }} >  <label className="linkages">sign in insted</label></Link>
                            <Button id="contained-button" style={{ backgroundColor: "rgb(64, 192, 85)" }} variant="contained" color="primary" float='right' onClick={this.Register}>submit</Button>
                        </div>
                    </div>
                    <div className='imageContainer'>
                        <div className='imgcontainer'>
                            <img className='image' />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Registration;