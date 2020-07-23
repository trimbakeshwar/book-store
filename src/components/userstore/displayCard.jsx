
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
const service = new adminService();


export default class DisplayBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookDetail: [],

            open: false,
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

    render() {
        const bookCard = this.state.bookDetail.reverse().map((values, index) => {
            return (
                <Card>
                    <div className="bookimagecontainer">
                        <div  className="imag">
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
                        {values.price}
                    </div>
                    <div className="cardbuttonContainers">
                        <div className="buttonsetting">
                            <div>
                        <Button variant="contained"  className="Buttons" disableElevation>
                            ADD TO BAG
                        </Button>
                        </div>
                        <div className="wishlist">
                        <button   variant="contained" className="Buttonss"  disableElevation>
                            WISHLIST
                        </button>
                        </div>
                    </div>
                    </div>
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