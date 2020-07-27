
import IconButton from '@material-ui/core/IconButton';
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Masonry from 'react-masonry-css';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';
import "../../stylepage/displayBook.scss"
import adminService from "../../services/adminServices";
import storeServices from "../../services/storeServices";
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import { TextareaAutosize } from '@material-ui/core';
import BookCover from "../../images/bookcover.jpg"
import {connect} from 'react-redux'
const service = new adminService();

const storeservice = new storeServices();
 class DisplayBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookDetail: [],
            id: "",
            AddBagButtonSetting: false,
            AddwishlistSetting: false,
            breakpointColumnsObj: {
                default: 4,
                1717: 4,
                1432: 3,
                1084: 2,
                750: 1
            },
        }
        this.getBooksList()
    }
    getBooksList = () => {
        service.getbook().then((Response) => {
            console.log("geting", Response.data.data)
            this.setState({ bookDetail: Response.data.data })
        }).catch((err) => {

            console.log("err", err)
        })
    }
    AddToBag = (values) => {
         this.setState({ AddBagButtonSetting: true, id: values.bookId, AddwishlistSetting: false })
      

       
           let BookId=values.bookId

        
     console.log("add cart id",BookId)
        storeservice.addToCart(BookId).then((Response)=>{
            console.log("add to cart succefull",Response)
        }).then((err)=>{
            console.log("add to cart succefull",err)
        })
        this.props.changemyBookDetail(values)
    }
    AddToWishlist = (values) => {
         this.setState({ AddwishlistSetting: true, id: values.bookId, AddBagButtonSetting: false })
        console.log("AddwishlistSetting", this.state.AddwishlistSetting)
         let   BookId=values.bookId
        let  isHeaderReqire=true
     console.log("add wishlist id",BookId,isHeaderReqire)
        storeservice.addToWishLists(BookId,isHeaderReqire).then((Response)=>{
            console.log("add to wishlist succefull",Response)
        }).then((err)=>{
            console.log("add to wishlist reject",err)
        })
      //  this.props.changemyBookDetail(values)
    }
        
    

    render() {
        const bookCard = this.state.bookDetail.map((values, index) => {
            return (
                <Card>
                    <div className="bookimagecontainer">
                        <div className="imag">
                            <img src={BookCover}
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
                    {(this.state.AddwishlistSetting === true && this.state.id === values.bookId) ?
                        (<div className="wishlist">
                            <button variant="contained" className={(this.state.AddwishlistSetting === true && this.state.id === values.bookId) ? "wishlistButton" : "Buttonss"}
                                disableElevation >
                                WISHLIST
                                   </button>
                        </div>) :
                        (<div>
                            <div className="cardbuttonContainers">
                                <div className="buttonsetting">

                                    <div style={{ position: "relative" }}>
                                        <Button variant="contained" className={(this.state.AddBagButtonSetting === true && this.state.id === values.bookId) ? "ActiveButtons" : "Buttons"}
                                            disableElevation onClick={() => this.AddToBag(values)}>
                                            {(this.state.AddBagButtonSetting === true && this.state.id === values.bookId) ? "ADDED TO BAG" : " ADD TO BAG"}

                                        </Button>
                                    </div>
                                    <div className="wishlist">
                                        <button variant="contained" className={(this.state.AddwishlistSetting === true && this.state.id === values.bookId) ? "wishlistButton" : "Buttonss"}
                                            disableElevation onClick={() => this.AddToWishlist(values)}>
                                            WISHLIST
                                   </button>
                                    </div>
                                </div>

                            </div>
                        </div>)}
                </Card>
            );
        })
        return (
            <div>
                <div className='display' >
                    <Masonry
                        breakpointCols={this.state.breakpointColumnsObj}
                        className="masonry-grid"
                        columnClassName="masonry-grid_column" >
                        {bookCard}
                    </Masonry>
                </div>
            </div>);
    }
}
//className="Buttons"
const mapStateToProps=(state)=>{
    return{
        myBookDetail:state.BookDetail,
    
    }
    } 
    const mapDispatrchToProps =(dispatch)=>{
      return{
        changemyBookDetail:(BookDetail)=>{(dispatch({type:'BOOK_DETAIL',payload:BookDetail}))},
   
    }
    }
    export default connect(mapStateToProps,mapDispatrchToProps)(DisplayBook);
    