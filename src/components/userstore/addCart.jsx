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
        storeservice.getCartList(isHeaderRequire).then(async(Response)=>{
            console.log("cart books",Response.data.data)
            await this.setState({cartData:Response.data.data.filter((data) =>data.isDeleted === false).filter(data => data.isUsed === false)})
           
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
    increaseQuantity = (Id) => {
        
        console.log("card", Id)
        this.state.cartData.filter((item) => item.cartId === Id).map(async(values, index) => {

         console.log("value.CartId=",values.cartId," cartId=",Id)
         let data =0
         data=data+1
         await this.setState({
            values: [
             
              [values.quantity=values.quantity+1],
            ],
            
          });  
          let BookId = values.bookId
          let Quantity = values.quantity
          let isHederRequire=true
          console.log("values.bookId"+BookId+"values.quantity"+Quantity)
          storeservice.addToCart(BookId,Quantity,isHederRequire).then((Response)=>{
console.log("increase quan ",Response)
          }).catch((err)=>{
            console.log("ierr ",err)
          })
         
     })
    }
    decreaseQuantity = (Id) => {
        
            console.log("card", Id)
            this.state.cartData.filter((item) => item.cartId === Id).map(async(values, index) => {
    
             console.log("value.CartId=",values.cartId," cartId=",Id)
             let data =0
             data=data+1
             await this.setState({
                values: [
                 
                  [
                     ( values.quantity === 0)?0:(values.quantity=values.quantity-1)],
                ],
              });  
           console.log("cardd",this.state.cartData)
             
         })
        
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
                                                    <div  className="countButton"> <AddCircleOutlineOutlinedIcon fontSize="small" onClick={()=>this.increaseQuantity(values.cartId)} />
                                                        <input className="inputQuantity" Value={values.quantity} disabled type="number" />
                                                        <RemoveCircleOutlineIcon onClick={()=>this.decreaseQuantity(values.cartId)} />
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
    

