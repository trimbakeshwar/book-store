
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Masonry from 'react-masonry-css';
import Button from '@material-ui/core/Button';
import adminService from "../../services/adminServices";
import { connect } from 'react-redux'
import "../../stylepage/ContactDetails.scss"
import { TextField } from '@material-ui/core';

const service = new adminService();

class OrderDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
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
                            onChange={this.NameHandler} error={this.state.EmailError}
                            helperText={this.state.EmailError} size="small" />
                        <TextField className="TextStyle" id="outlined-phoneNumber" label="Phone Number" type="number" variant="outlined"
                            onChange={this.phoneHandler} error={this.state.EmailError}
                            helperText={this.state.EmailError} size="small" />
                    </div>
                    <div className="FieldForContactDetails">
                        <TextField className="TextStyle" id="outlined-Pincode" label="Pincode" type="number" variant="outlined"
                            onChange={this.NameHandler} error={this.state.EmailError}
                            helperText={this.state.EmailError} size="small" />
                        <TextField className="TextStyle" id="outlined-Location" label="Location" type="text" variant="outlined"
                            onChange={this.phoneHandler} error={this.state.EmailError}
                            helperText={this.state.EmailError} size="small" />
                    </div>
                    <div className="FieldForContactDetails">
                        <TextField className="TextStyle" id="outlined-Address" label="Address" type="text" variant="outlined"
                            onChange={this.NameHandler} error={this.state.EmailError}
                            helperText={this.state.EmailError} size="small" fullWidth multiline /> 


                    </div>
                    <div className="FieldForContactDetails">
                        <TextField  id="outlined-city" label="city/town" type="text" variant="outlined"
                            onChange={this.NameHandler} error={this.state.EmailError}
                            helperText={this.state.EmailError} size="small" />
                        <TextField  id="outlined-Landmark" label="Landmark" type="text" variant="outlined"
                            onChange={this.phoneHandler} error={this.state.EmailError}
                            helperText={this.state.EmailError} size="small" />
                    </div>

                </div>
            </div>
        );
    }
}
export default OrderDetails;