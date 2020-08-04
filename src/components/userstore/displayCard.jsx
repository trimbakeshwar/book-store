
import IconButton from '@material-ui/core/IconButton';
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Masonry from 'react-masonry-css';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';
import "../../stylepage/displayBook.scss"
import { BookDetails } from "../Actions/Actions"
import adminService from "../../services/adminServices";
import storeServices from "../../services/storeServices";
import Pagination from "@material-ui/lab/Pagination";
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import { TextareaAutosize } from '@material-ui/core';
import BookCover from "../../images/bookcover.jpg"
import { connect } from 'react-redux'
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    typography: {
        padding: theme.spacing.unit * 1,
    },
});
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
            AnchorEl: null,
            searchEnable: false,


            page: 1,
            itemsPerPage: 8,

        }
        this.getBooksList()
    }

    getBooksList = () => {


        let isHeaderRequire = true
        service.getbook(isHeaderRequire).then((Response) => {
            console.log("geting", Response.data.data)
            this.setState({ bookDetail: Response.data.data })
        }).catch((err) => {

            console.log("err", err)
        })

    }
    changePage = (event, value) => {
        this.setState({ page: value });
    };
    handleClick = event => {
        const { currentTarget } = event;
        this.setState(state => ({
            anchorEl: state.anchorEl ? null : currentTarget,
        }));
    };


    AddToBag = (values, key) => {
        this.setState({ AddBagButtonSetting: true, id: values.bookId, AddwishlistSetting: false })
        let BookId = values.bookId
        let Quantity = 1
        console.log("add cart id", BookId)
        let isHeaderRequire = true
        this.state.bookDetail.filter((item) => item.bookId === BookId).map(async (values, index) => {

            console.log("value.CartId=", values.cartId, " cartId=", BookId)
            await this.setState({
                values: [

                    [values.Key = key],

                ],

            });
            console.log("addd boook iddd", this.state.bookDetail)

        })

        storeservice.addToCart(BookId, 1, isHeaderRequire).then((Response) => {
            console.log("add to cart succefull", Response)
            //  this.state.tempBooksArry.push({ BookId,Key:key })
        }).then((err) => {
            console.log("add to cart succefull", err)
        })
        console.log("temparray", this.state.tempBooksArry)
        this.props.BookDetails(values)

    }
    AddToWishlist = (values) => {

        this.setState({ AddwishlistSetting: true, id: values.bookId, AddBagButtonSetting: false })
        console.log("AddwishlistSetting", this.state.AddwishlistSetting)
        let isHeaderRequire = true
        let BookId = values.bookId
        console.log("add wishlist id", BookId)
        storeservice.addToWishLists(BookId, isHeaderRequire).then((Response) => {
            console.log("add to wishlist succefull", Response)
        }).then((err) => {
            console.log("add to wishlist reject", err)
        })
        //  this.props.changemyBookDetail(values)
    }

    SortLowToHigh = () => {
        let isHeaderRequire = true
        storeservice.SortByAscending("Price", "ascending", isHeaderRequire).then((Response) => {
            console.log("ascending", Response.data.data)
            this.setState({ bookDetail: Response.data.data })
        }).catch((err) => {
            console.log("err", err)
        })
    }
    SortHighToLow = () => {
        let isHeaderRequire = true
        storeservice.SortByDescending("Price", "descending", isHeaderRequire).then((Response) => {
            console.log("ascending", Response.data.data)
            this.setState({ bookDetail: Response.data.data })
        }).catch((err) => {
            console.log("err", err)
        })
    }
    componentDidMount = () => {
        this.setState({ CartDataForCheck: this.props.mycartData })
    }
    // searchbook() {
    //     this.setState({ bookDetail: this.props.mySearchData })
    // }
    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const id = open ? 'no-transition-popper' : null;
        console.log("data of cart", this.props.mySearchData)
        const bookCard = ((this.props.mysearchEnable) ? (this.props.mySearchData) : (this.state.bookDetail))
            .slice(
                (this.state.page - 1) * this.state.itemsPerPage,
                this.state.page * this.state.itemsPerPage
            ).map((values, index) => {
                return (
                    <Card>
                        <div className="bookimagecontainer">
                            <div className={(values.booksAvailable === 0) ? "outoffstock" : ""}>
                                {(values.booksAvailable === 0) ? "OUT OFF STOCK" : ""}
                            </div>
                            <div className={(values.booksAvailable === 0) ? "" : "imag"}>
                                <img className="img" src={values.bookImage}
                                />
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

                        {((this.state.AddwishlistSetting === true && this.state.id === values.bookId) || (values.booksAvailable === 0)) ?
                            (<div className="wishlist">

                                <button variant="contained" className={((this.state.AddwishlistSetting === true && this.state.id === values.bookId) || (values.booksAvailable === 0)) ? "wishlistButton" : "Buttonss"}
                                    disableElevation >
                                    WISHLIST
                                   </button>
                            </div>) :
                            (
                                <div>
                                    <div className="cardbuttonContainers">
                                        <div className="buttonsetting">
                                            <div style={{ position: "relative" }}>
                                                <Button variant="contained"
                                                    className={((this.state.AddBagButtonSetting === true && this.state.id === values.bookId) || (values.Key === true))
                                                        ? "ActiveButtons" : "Buttons"}
                                                    disableElevation onClick={() => this.AddToBag(values, true)}>
                                                    {((this.state.AddBagButtonSetting === true && this.state.id === values.bookId) || (values.Key === true)) ? "ADDED TO BAG" : " ADD TO BAG"}
                                                </Button>
                                            </div>
                                            <div className="wishlist">
                                                <button style={{ cursor: "pointer" }} variant="contained" className={(this.state.AddwishlistSetting === true && this.state.id === values.bookId) ? "wishlistButton" : "Buttonss"}
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
                <div className="poppersetting" >
                    <button className="popperButtonsetting" aria-describedby={id} onClick={this.handleClick}>
                        sort by relevent
            </button>
                    <Popper id={id} open={open} anchorEl={anchorEl}>
                        <Paper>
                            <div onClick={this.SortLowToHigh} className="poperitom">price : Low To High</div>
                            <div onClick={this.SortHighToLow} className="poperitom">price : High To Low</div>

                        </Paper>
                    </Popper>
                </div>
                <div className='display' >

                    <Masonry
                        breakpointCols={this.state.breakpointColumnsObj}
                        className="masonry-grid"
                        columnClassName="masonry-grid_column" >
                        {bookCard}
                    </Masonry>
                </div>
                <div className="paginations">
                    <Pagination
                        count={Math.ceil(

                            ((this.props.myadminSearchEnable) ? (this.props.myadminsearchData) : (this.state.bookDetail)).length / this.state.itemsPerPage
                        )}
                        page={this.state.page}
                        onChange={(event, value) => this.changePage(event, value)}
                        defaultPage={1}
                        variant="outlined" shape="rounded" color="secondary"
                    />
                </div>
            </div>);
    }
}
DisplayBook.propTypes = {
    classes: PropTypes.object.isRequired,
};

//className="Buttons"
const mapStateToProps = (state) => {
    return {
        myBookDetail: state.BookDetail,
        mySearchData: state.SearchData,
        mysearchEnable: state.searchEnable,
        mycartData: state.cartData,
    }
}


export default connect(mapStateToProps, {
    BookDetails: BookDetails
})(withStyles(styles)(DisplayBook));
