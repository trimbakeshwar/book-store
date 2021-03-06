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

const service = new adminService();
const storeservice = new storeServices();
class AddInWishLIst extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            wishListData:[],
            breakpointColumnsObj: {
                default: 4,
                1717: 4,
                1432: 3,
                1084: 2,
                750: 1
            },
        }
        this.getAllBookFromWishList()
    }
    getAllBookFromWishList(){
        let isHeaderRequire=true
        storeservice.getWishListList(isHeaderRequire).then((Response)=>{
            console.log("cart books",Response.data.data)
            this.setState({wishListData:Response.data.data})
        }).catch((err)=>{
            console.log("err catch ",err)
        })
       
    }
    RemoveFromWishlist=(value)=>{
        let WishListId  = value
        let isHeaderRequire=true
        console.log("WishListId ",WishListId)
        storeservice.removeFromWishlist(WishListId,isHeaderRequire).then((Response)=>{
            console.log("remove cart books",Response)
            this.getAllBookFromWishList()
        }).catch((err)=>{
            console.log("err catch ",err)
        })
      
    }
    wishListToCart=(value)=>{
        let WishListId   = value
        let isHeaderRequire=true
        console.log("WishList to cart ",WishListId)
        storeservice.AddWishListToCart(WishListId,isHeaderRequire).then((Response)=>{
            console.log("add wish to cart books",Response)
            this.getAllBookFromWishList()
          
        }).catch((err)=>{
            console.log("err catch ",err)
        })
     
   }
   
   
    render() {
      
       
        const bookCard = this.state.wishListData.filter((item) => item.isDeleted === false ).filter((item) => item.isMoved === false ).map((values, index) => {
            return (
                <Card>
                    <div className="bookimagecontainer">
                        <div className="imag">
                            <img className="img" src={values.bookImage}
                                width="100px"
                                height="150px" />
                        </div>
                    </div>
                    <div className="titles">
                        {values.title}
                    </div>
                    <div className="author">
                        {values.author}
                    </div>
                    <div className="price">
                        Rs.  {values.price}
                    </div>
                   
                    <div>
                            <div className="cardbuttonContainers">
                                <div className="buttonsetting">

                                    <div style={{ position: "relative" }}>
                                        <Button variant="contained" className= "Buttons"
                                            disableElevation onClick={() => this.wishListToCart(values.wishListId)}>
                                          ADD TO BAG

                                        </Button>
                                    </div>
                                    <div className="wishlist">
                                        <button variant="contained" className= "Buttonss"
                                            disableElevation onClick={() => this.RemoveFromWishlist(values.wishListId)}>
                                            REMOVE
                                   </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                </Card>
                
            );
        })
        return (
         
               <div>
                   <Headers/>
                <div className='display' >
                    <Masonry
                        breakpointCols={this.state.breakpointColumnsObj}
                        className="masonry-grid"
                        columnClassName="masonry-grid_column" >
                        {bookCard}
                    </Masonry>
                </div>
                </div>
          );
           
            
}
}


export default AddInWishLIst;