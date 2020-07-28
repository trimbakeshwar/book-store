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


const storeservice = new storeServices();
class AddInCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            customerDetailHide:false,
            cartData:[]
        }
        this.getAllBookFromCart()
      
    }
     getAllBookFromCart(){
        let isHeaderRequire=true
        storeservice.getCartList(isHeaderRequire).then((Response)=>{
            console.log("cart books",Response.data.data)
             this.setState({cartData:Response.data.data.filter(data =>  data.isDeleted === false).filter(data => data.isUsed === false)})
           
            console.log("cart books details", this.props.AllCartData(this.state.cartData))
           
        }).catch((err)=>{
            console.log("err catch ",err)
        })
       
    }
    removeFromCart=(value)=>{
        let CartId = value
        let isHeaderRequire=true
        storeservice.remove(CartId,isHeaderRequire).then((Response)=>{
            console.log("remove cart books",Response)
            this.getAllBookFromCart()
        }).catch((err)=>{
            console.log("err catch ",err)
        })
       
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
  
    render() {

        console.log("op", this.props.myBookDetail)
        return (
            <div>
                <Headers />
            <div className="boxForCart">
                <div className="container">
                    <div className="carttag"> My cart(2)</div>
                    <div>
                    {
                                this.state.cartData.filter((item) => item.isDeleted === false).map((values, index) => {
                                    return (

                                        <div className="informationOfBook">
                                            <div>
                                                <img src={BookCover}
                                                    width="60px"
                                                    height="90px" />
                                            </div>
                                            <div>
                                                <div className="title">{values.title}</div>
                                                <div className="authors">{values.author}</div>
                                                <div className="prices">{values.price}</div>
                                                <div className="quantityContainer">
                                                    <div className="countButton"> <AddCircleOutlineOutlinedIcon fontSize="small" onClick={this.increaseQuantity} />
                                                        <input className="inputQuantity" Value={this.state.count} disabled type="number" />
                                                        <RemoveCircleOutlineIcon onClick={this.decreaseQuantity} />
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
             {(this.state.customerDetailHide)?<OrderDetails/>:( <div className="hedlineContainers" style={{marginBottom:"25px"}}> Customer Details </div>)} 
             <div className="hedlineContainers"> Order Summery </div>)
         </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        mycartData:state.cartData,
    
    }
    } 
   
    const mapDispatrchToProps =(dispatch)=>{
      return{
        AllCartData:(cartData)=>{(dispatch({type:'ALL_CART_DETAILS',payload:cartData}))},
   
    }
    }
    export default connect(mapStateToProps,mapDispatrchToProps)(AddInCart);
    

