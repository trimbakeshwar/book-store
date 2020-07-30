
import IconButton from '@material-ui/core/IconButton';
import React,  {Component}  from 'react';
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
            AnchorEl:null,
            searchEnable:false,
        }
        this.getBooksList()
    }
  
    getBooksList = () => {
       
       
        let isHeaderRequire=true
        service.getbook(isHeaderRequire).then((Response) => {
            console.log("geting", Response.data.data)
            this.setState({ bookDetail: Response.data.data })
        }).catch((err) => {

            console.log("err", err)
        })
    
    }
    handleClick = event => {
        const { currentTarget } = event;
        this.setState(state => ({
          anchorEl: state.anchorEl ? null : currentTarget,
        }));
      };
    
     
    AddToBag = (values) => {
         this.setState({ AddBagButtonSetting: true, id: values.bookId, AddwishlistSetting: false })
           let BookId=values.bookId  
           let Quantity=1
     console.log("add cart id",BookId)
     let isHeaderRequire=true
        storeservice.addToCart(BookId,1,isHeaderRequire).then((Response)=>{
            console.log("add to cart succefull",Response)
        }).then((err)=>{
            console.log("add to cart succefull",err)
        })
        this.props.changemyBookDetail(values)
    }
    AddToWishlist = (values) => {

         this.setState({ AddwishlistSetting: true, id: values.bookId, AddBagButtonSetting: false })
        console.log("AddwishlistSetting", this.state.AddwishlistSetting)
         let   isHeaderRequire=true
        let BookId = values.bookId
     console.log("add wishlist id",BookId)
        storeservice.addToWishLists(BookId,isHeaderRequire).then((Response)=>{
            console.log("add to wishlist succefull",Response)
        }).then((err)=>{
            console.log("add to wishlist reject",err)
        })
      //  this.props.changemyBookDetail(values)
    }
    
    SortLowToHigh=()=>{
       let isHeaderRequire = true
        storeservice.SortByAscending("Price","ascending",isHeaderRequire).then((Response)=>{
            console.log("ascending",Response.data.data)
            this.setState({bookDetail:Response.data.data})
        }).catch((err)=>{
            console.log("err",err)
        })
    } 
    SortHighToLow=()=>{
        let isHeaderRequire = true
        storeservice.SortByDescending("Price","descending",isHeaderRequire).then((Response)=>{
            console.log("ascending",Response.data.data)
            this.setState({bookDetail:Response.data.data})
        }).catch((err)=>{
            console.log("err",err)
        })
    }
    searchbook(){
    this.setState({ bookDetail: this.props.mySearchData })
    }
    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const id = open ? 'no-transition-popper' : null;
      
        
        const bookCard = ((this.props.mysearchEnable)?(this.props.mySearchData):(this.state.bookDetail)).map((values, index) => {
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
            </div>);
    }
}
DisplayBook.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
//className="Buttons"
const mapStateToProps=(state)=>{
    return{
        myBookDetail:state.BookDetail,
        mySearchData:state.SearchData,
        mysearchEnable:state.searchEnable
    }
    } 
    const mapDispatrchToProps =(dispatch)=>{
      return{
        changemyBookDetail:(BookDetail)=>{(dispatch({type:'BOOK_DETAIL',payload:BookDetail}))},
   
    }
    }
   
    export default connect(mapStateToProps,mapDispatrchToProps)(withStyles(styles)(DisplayBook));
    