import IconButton from '@material-ui/core/IconButton';
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Masonry from 'react-masonry-css';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';
import "../../stylepage/displayBook.scss"
import adminService from "../../services/adminServices";
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import { TextareaAutosize } from '@material-ui/core';
import BookCover from "../../images/bookcover.jpg"
import "../../stylepage/AddToCart.scss"
import { connect } from 'react-redux'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import OrderDetails from "./orderDetails"
import OrderSummary from "./orderSummary"
import storeServices from "../../services/storeServices";
const storeservice = new storeServices();
const service = new adminService();

class AddInCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            customerDetailHide:false
        }
    }
    increaseQuantity = () => {
        if (this.state.count < this.props.myBookDetail.booksAvailable) {
            this.setState({ count: this.state.count + 1 })
            console.log("count", this.state.count)
        }
    }
    decreaseQuantity = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 })
            console.log("count", this.state.count)
        }
    }
    openCustomerDetails =() =>{
        console.log("run")
        this.setState({ customerDetailHide:true})
    }
    removeFromCart=(value)=>{
        let CartId = value
        console.log("remove from cart",CartId)
        storeservice.remove(CartId).then((Response)=>{
            console.log("remove",Response)
        }).catch((err)=>{
            console.log("remove",err)
        })
    }
    render() {

        console.log("op", this.props.myBookDetail)
        return (
            <div>
            <div className="boxForCart">
                <div className="container">
                    <div className="carttag"> My cart(2)</div>
                    <div>
                        <div className="informationOfBook">
                            <div>
                                <img src={BookCover}
                                    width="60px"
                                    height="90px" />
                            </div>
                            <div>
                                <div className="title">{this.props.myBookDetail.title}</div>
                                <div className="authors">{this.props.myBookDetail.author}</div>
                                <div className="prices">{this.props.myBookDetail.price}</div>
                                <div className="quantityContainer">
                                    <div className="countButton"> <AddCircleOutlineOutlinedIcon fontSize="small" onClick={this.increaseQuantity} />
                                        <input className="inputQuantity"  Value={this.state.count} disabled type="number" />
                                        <RemoveCircleOutlineIcon onClick={this.decreaseQuantity} />
                                    </div>
                                    <div onClick={()=>this.removeFromCart(this.props.myBookDetail.bookId)} className="remove">Remove</div>
                                </div>
                               
                            </div>
                            
                        </div>
                       
                    </div>
                    <div className="placeOrder">
                                    <Button variant="contained" color="primary" onClick={this.openCustomerDetails}>
                                        PLACE ORDER
                                    </Button>
                                </div>
                </div>
            </div>

             {(this.state.customerDetailHide)?
            <OrderDetails/>:( <div className="hedlineContainers">
            Customer Details
        </div>)} 
        <OrderSummary />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        myBookDetail: state.BookDetail,

    }
}

export default connect(mapStateToProps)(AddInCart);