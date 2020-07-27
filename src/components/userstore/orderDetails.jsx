
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Masonry from 'react-masonry-css';
import Button from '@material-ui/core/Button';
import adminService from "../../services/adminServices";
import { connect } from 'react-redux'
import "../../stylepage/ContactDetails.scss"
import { TextField } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const service = new adminService();

class OrderDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
name:localStorage.getItem("Name"),
phoneNumber:localStorage.getItem("phoneNumber"),
pincode:"",
location:"",
Address:localStorage.getItem("Address"),
city:localStorage.getItem("city"),
Landmard:""

        }
    }
    handleRedioChange=(e)=>{
console.log(e.target.value)
    }
    NameHandler=(e)=>{
        this.setState({name:e.target.value})
     
            } 
            phoneHandlerr=(e)=>{
                this.setState({phoneNumber:e.target.value })
            } 
             pinHandlerr=(e)=>{
                this.setState({pincode:e.target.value})
            } 
             LocationHandlerr=(e)=>{
                this.setState({ location:e.target.value})
            } 
             AddressHandlerr=(e)=>{
                this.setState({ Address:e.target.value})
            } 
             cityHandlerr=(e)=>{
                this.setState({ city:e.target.value})
            } 
             LandmarkHandlerr=(e)=>{
                this.setState({ Landmard:e.target.value})
            }  
    render() {
        return (

            <div className="contactContainer">
                <div className="hedlineContainer">
                    <div className="hedline">
                        Customer Details
                    </div>
                    <div className="editlable">
                        Edit
                    </div>
                </div>
                <div className="contactinformationContainer">
                    <div className="FieldForContactDetails">
                        <TextField className="TextStyle" id="outlined-Name" label="Name" type="text" variant="outlined"
                       defaultValue={this.state.name}     onChange={this.NameHandler}  size="small" />
                        <TextField className="TextStyle" id="outlined-phoneNumber" label="Phone Number" type="number" variant="outlined"
                        defaultValue={this.state.phoneNumber}    onChange={this.phoneHandler}  size="small" />
                    </div>
                    <div className="FieldForContactDetails">
                        <TextField className="TextStyle" id="outlined-Pincode" label="Pincode" type="number" variant="outlined"
                            onChange={this.pinHandler} 
                            size="small" />
                        <TextField className="TextStyle" id="outlined-Location" label="Location" type="text" variant="outlined"
                            onChange={this.LocationHandler} size="small" />
                    </div>
                    <div className="FieldForContactDetails">
                        <TextField className="TextStyle" id="outlined-Address" label="Address" type="text" variant="outlined"
                         defaultValue={this.state.Address}   onChange={this.AddressHandler}  style={{marginBottom:"5px"}} size="small" fullWidth multiline />


                    </div>
                    <div className="FieldForContactDetails">
                        <TextField id="outlined-city" label="city/town" type="text" variant="outlined"
                         defaultValue={this.state.city}   onChange={this.cityHandler} size="small" />
                        <TextField id="outlined-Landmark" label="Landmark" type="text" variant="outlined"
                            onChange={this.LandmarkHandler}  size="small" />
                    </div>
                    <div> </div>
                    <div className="radioSetting">
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Type</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={this.value} onChange={this.handleRedioChange}>
                               <div >
                                <FormControlLabel style={{paddingRight:"30px"}} value="Home" control={<Radio />} label="Home" />
                               <FormControlLabel style={{paddingRight:"30px"}} value="Work" control={<Radio />} label="Work" />
                               <FormControlLabel  value="other" control={<Radio />} label="Other" />
                                </div>
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="continue">
                    <Button variant="contained" color="primary">CONTINUE</Button>
                    </div>

                </div>
            </div>
        );
    }
}
export default OrderDetails;
