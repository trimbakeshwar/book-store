
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
import OrderServices from "../../services/orderServices"
import storeServices from '../../services/storeServices';
import { withRouter } from 'react-router';
import { ORDERID } from '../Actions/Actions'
const storeservice = new storeServices();
const orderServices = new OrderServices();
class OrderDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {

            name: localStorage.getItem("Name"),
            phoneNumber: localStorage.getItem("phoneNumber"),
            pincode: null,
            Locality: "",
            Address: localStorage.getItem("Address"),
            city: localStorage.getItem("city"),
            Landmard: ""

        }
    }
    handleRedioChange = (e) => {
        console.log(e.target.value)
    }
    NameHandler = (e) => {
        if (e.target.value.trim() !== "") {
            this.setState({ name: e.target.value })
        }

    }
    phoneHandler = (e) => {
        if (e.target.value.trim() !== "") {
            this.setState({ phoneNumber: e.target.value })
        }
    }
    pinHandler = (e) => {
        if (e.target.value.trim() !== "") {
            console.log("pin")
            this.setState({ pincode: e.target.value })
        }
    }
    LocationHandler = (e) => {
        if (e.target.value.trim() !== "") {
            console.log("locat")
            this.setState({ Locality: e.target.value })
        }
    }
    AddressHandler = (e) => {
        if (e.target.value.trim() !== "") {
            this.setState({ Address: e.target.value })
        }
    }
    cityHandler = (e) => {
        if (e.target.value.trim() !== "") {
            this.setState({ city: e.target.value })
        }
    }
    LandmarkHandler = (e) => {

        if (e.target.value.trim() !== "") {
            console.log("land")
            this.setState({ Landmard: e.target.value })
        }
    }
    placeOrder = () => {

        this.props.mycartData.filter((item) => item.isUsed === false)
            .filter((item) => item.isDeleted === false).map(async (item) => {
                console.log(" this.props.mycartData", this.props.mycartData)
                let BookId = item.bookId
                let Quantity = item.quantity - 1
                let isHederRequire = true
                console.log("values.bookId" + BookId + "values.quantity" + Quantity)
                await storeservice.addToCart(BookId, Quantity, isHederRequire).then((Response) => {
                    console.log("increase quan ", Response)

                }).catch((err) => {
                    console.log("ierr ", err)
                })

                const CartId = item.cartId
                const Address = `${this.state.name} ${this.state.Address} ${this.state.Locality} ${this.state.Landmard} ${this.state.phoneNumber}`;
                const City = this.state.city;
                const PinCode = this.state.pincode;
                console.log("cartid ", CartId, " Address ", Address, " City ", City, " PinCode ", PinCode)
                let isheaderRequired = true
                orderServices.orderPlaced(CartId, Address, City, PinCode, isheaderRequired).then((Response) => {
                    console.log("order placed", Response)
                    console.log("order placed", this.props.ORDERID(Response.data.data.orderId))
                    this.props.history.push('./orderSummary');
                }).catch((err) => {
                    console.log("order err", err)
                })

            })


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
                            defaultValue={this.state.name} onChange={this.NameHandler} size="small" />
                        <TextField className="TextStyle" id="outlined-phoneNumber" label="Phone Number" type="number" variant="outlined"
                            defaultValue={this.state.phoneNumber} onChange={this.phoneHandler} size="small" />
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
                            defaultValue={this.state.Address} onChange={this.AddressHandler} style={{ marginBottom: "5px" }} size="small" fullWidth multiline />


                    </div>
                    <div className="FieldForContactDetails">
                        <TextField className="TextStyle" id="outlined-city" label="city/town" type="text" variant="outlined"
                            defaultValue={this.state.city} onChange={this.cityHandler} size="small" />
                        <TextField className="TextStyle" id="outlined-Landmark" label="Landmark" type="text" variant="outlined"
                            onChange={this.LandmarkHandler} size="small" />
                    </div>
                    <div> </div>
                    <div className="radioSetting">
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Type</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={this.value} onChange={this.handleRedioChange}>
                                <div >
                                    <FormControlLabel style={{ paddingRight: "30px" }} value="Home" control={<Radio />} label="Home" />
                                    <FormControlLabel style={{ paddingRight: "30px" }} value="Work" control={<Radio />} label="Work" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </div>
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="continue">
                        <Button onClick={this.placeOrder} variant="contained" color="primary">CONTINUE</Button>
                    </div>

                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        mycartData: state.cartData,
        myorderID: state.orderID
    }
}


export default connect(mapStateToProps, { ORDERID: ORDERID })(withRouter(OrderDetails));

