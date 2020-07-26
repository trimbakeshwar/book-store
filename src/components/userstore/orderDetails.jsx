
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Masonry from 'react-masonry-css';
import Button from '@material-ui/core/Button';
import adminService from "../../services/adminServices";
import { connect } from 'react-redux'
import "../../stylepage/ContactDetails.scss"
const service = new adminService();

class OrderDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }
    render(){
        return(
            <div className="contactContainer">
                <div className="hedlineContainer">
                    <div className="hedline">

                    </div>
                    <div className="editlable">
                        
                    </div>
                </div>
            </div>
        );
    }
}
export default OrderDetails;