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
import Headers from "./Header"
import storeServices from "../../services/storeServices";
import EmptyCarts from "../../images/EmptyCarts.png"
import { Link } from 'react-router-dom';

const storeservice = new storeServices();
class AddInCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            customerDetailHide: false,
            cartData: []
        }
        this.getAllBookFromCart()

    }
    getAllBookFromCart() {
        let isHeaderRequire = true
        storeservice.getCartList(isHeaderRequire).then(async (Response) => {
            console.log("cart books", Response.data.data)
            await this.setState({ cartData: Response.data.data.filter((data) => data.isDeleted === false).filter(data => data.isUsed === false) })

            console.log("cart books details", this.props.AllCartData(this.state.cartData))

        }).catch((err) => {
            console.log("err catch ", err)
        })

    }
    removeFromCart = (value) => {
        let CartId = value
        let isHeaderRequire = true
        storeservice.remove(CartId, isHeaderRequire).then((Response) => {
            console.log("remove cart books", Response)
            this.getAllBookFromCart()
        }).catch((err) => {
            console.log("err catch ", err)
        })

    }
    increaseQuantity = (Id) => {

        console.log("card", Id)
        this.state.cartData.filter((item) => item.cartId === Id).map(async (values, index) => {

            console.log("value.CartId=", values.cartId, " cartId=", Id)
            await this.setState({
                values: [

                    [values.quantity = values.quantity + 1],

                ],

            });
            console.log("cardData", this.state.cartData)

        })
    }
    decreaseQuantity = async (Id) => {

        console.log("card", Id)
        this.state.cartData.filter((item) => item.cartId === Id).map(async (values, index) => {

            console.log("value.CartId=", values.cartId, " cartId=", Id)

            await this.setState({
                values: [

                    [
                        (values.quantity === 0) ? 0 : (values.quantity = values.quantity - 1)],
                ],
            });

        })

    }
    openCustomerDetails = () => {
        console.log("run")
        this.setState({ customerDetailHide: true })

    }

    render() {

        console.log("op", this.props.myBookDetail)
        return (
            <div>
                <Headers />
                {(this.state.cartData.length === 0) ? (<div className="EmptyCart">
                    <div className="shopping" />
                        <div className="continueShopping">
                            Click<Link to="/store"style={{textDecoration: "none"}}> Heare</Link> to Continue Shopping
                            </div>
                             </div>) : (
                        <div>
                            <div className="boxForCart">
                                <div className="container">
                                    <div className="carttag"> My cart(2)</div>
                                    <div>
                                        {
                                            this.state.cartData.filter((item) => item.isDeleted === false).map((values, index) => {
                                                return (

                                                    <div className="informationOfBook">
                                                        <div className="cartIMG">
                                                            <img  className="cartIMGsize" src={values.bookImage}
                                                                width="60px"
                                                                height="90px" />
                                                        </div>
                                                        <div>
                                                            <div className="title">{values.title}</div>
                                                            <div className="authors">{values.author}</div>
                                                            <div className="prices">{values.price}</div>
                                                            <div className="quantityContainer">
                                                                <div className="countButton"> <AddCircleOutlineOutlinedIcon fontSize="small" onClick={() => this.increaseQuantity(values.cartId)} />
                                                                    <input className="inputQuantity" Value={values.quantity} disabled type="number" />
                                                                    <RemoveCircleOutlineIcon onClick={() => this.decreaseQuantity(values.cartId)} />
                                                                </div>

                                                                <div onClick={() => this.removeFromCart(values.cartId)} className="remove">Remove</div>

                                                            </div>

                                                        </div>

                                                    </div>)

                                            })


                                        }

                                    </div>
                                    <div className="placeOrder">
                                        <Button variant="contained" color="primary" onClick={this.openCustomerDetails}>
                                            PLACE ORDER
                                    </Button>
                                    </div>
                                </div>
                            </div>
                            {(this.state.customerDetailHide) ? <OrderDetails /> : (<div className="hedlineContainers" style={{ marginBottom: "25px" }}> Customer Details </div>)}
                            <div className="hedlineContainers"> Order Summery </div>
                        </div>)}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        mycartData: state.cartData,

    }
}

const mapDispatrchToProps = (dispatch) => {
    return {
        AllCartData: (cartData) => { (dispatch({ type: 'ALL_CART_DETAILS', payload: cartData })) },

    }
}
export default connect(mapStateToProps, mapDispatrchToProps)(AddInCart);


