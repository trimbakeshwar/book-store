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
import {connect} from 'react-redux'

const service = new adminService();

class AddInCart extends Component {
    render() {
        console.log("op",this.props.myBookDetail)
        return (
            <div className="boxForCart">
                <div>
                    <div className="carttag"> My cart(2)</div>
                    <div>
                    <div className="informationOfBook">
                        <div>
                            <img src={BookCover}
                                width="60px"
                                height="80px" />
                        </div>
                       <div>
        <div className="title">{this.props.myBookDetail.title}</div>
        <div className="authors">{this.props.myBookDetail.author}</div>
        <div className="prices">{this.props.myBookDetail.price}</div>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        myBookDetail:state.BookDetail,
    
    }
    }

    export default connect(mapStateToProps)(AddInCart);