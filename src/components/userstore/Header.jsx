import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import { TextField } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import "../../stylepage/adminDashbord.scss"
import "../../stylepage/logo.scss"
import DisplayBook from "./displayCard"
import getAllBookList from "../adminDashbord/getAllBookList";
import AddInCart from "./addCart"
import adminService from "../../services/adminServices";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { connect } from 'react-redux'
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import { withRouter } from 'react-router';
import "../../stylepage/profile.scss"
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
const service = new adminService();
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "100px",
  },
  appBar: {
    width: "100%",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up('md')]: {
      check: 1,
    },
    check: 0,
  },
 
 
 
}));
 function Headers(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [Search, setSearch] = useState('');
  const[popperopen,setpopperopen] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
const search=(e)=>{
  console.log("search")
   setSearch(e.target.value)
  service.SearchBook(Search).then((Response)=>{
    console.log("search",Response.data.data)
    props.searchedData(Response.data.data)
    props.searchedEnable(true)
  }).catch((err)=>{
    console.log("err",err)
  })
}
const OpenCartPage=()=>{
props.history.push("/addCart")
}
const handleClick = (event) => {
  setAnchorEl(anchorEl ? null : event.currentTarget);
};

const logout = () => {
  localStorage.removeItem("Token");
  localStorage.removeItem("Name");
  localStorage.removeItem("email");
  localStorage.removeItem("User Role");
  localStorage.removeItem("Address");
  localStorage.removeItem("city");
  localStorage.removeItem("phoneNumber");
  this.props.history.push("/");
}
const WishlistItom = () => {
  props.history.push("/wishlist");
}
const open = Boolean(anchorEl);
const id = open ? 'simple-popper' : undefined;
  return (
   

    <div  >
      
      <div className="{classes.root}">
       
        <AppBar position="fixed" style={{backgroundColor: "#A03037"}} className={clsx(classes.appBar)} >
          <Toolbar style={{backgroundColor: "#A03037"}}>
             
              <div className="iconimage" />  
              <div className="name" >Bookstore</div>
            <div className="searchBar" >
              <div>
                <IconButton><SearchIcon /></IconButton>
              </div>
              <div>
                <TextField className="inputText" placeholder="Search" onChange={search}
                  InputProps={{ disableUnderline: true, }}  fullWidth>search</TextField>
              </div>
            </div>
            <div className="shopingcart">
             <span className="cart">cart </span>
            <ShoppingCartOutlinedIcon  onClick={OpenCartPage} />
                     <div className="account">
            <AccountCircleIcon  onClick={handleClick} />
            </div>
             </div>
           
          </Toolbar>
        </AppBar>
      </div>
  
      <Popper  id={id} open={open} anchorEl={anchorEl} >
              
            <Card  className="CardContainer">
               
               <div >

                   <div className="profileDetail">
                   <div className="profileImage"></div>
                       
                       <div className="columnSetting">
                       <div className="lable">
                           <div> Name</div><br />
                           <div > Email</div><br />
                           <div > Address</div><br />
                           <div > City</div><br />
                           <div > Phone_Number</div><br />
                       </div>
                       <div className="info">
                           <div > {localStorage.getItem("Name")}</div><br />
                           <div >{localStorage.getItem("email")}</div><br />
                           <div > {localStorage.getItem("Address")}</div><br />
                           <div > {localStorage.getItem("city")}</div><br />
                           <div> {localStorage.getItem("phoneNumber")}</div><br />
                       </div>
                       </div>
                       <div className="profileButtonSetting">
                         
                           <div className="buttonpossition">
                               <div className="spacing">
                                   <Button variant="contained" color="primary" onClick={logout} >
                                       logout
                                    </Button>
                                   </div>
                                   <div>
                                   <Button variant="contained" color="primary" onClick={WishlistItom}>
                                       wishlist
                                    </Button>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </Card>        
      </Popper>
    </div>
  );
}
const mapStateToProps=(state)=>{
  return{
      mySearchData:state.SearchData,
      mysearchEnable:state.searchEnable
  }
  } 
 
  const mapDispatrchToProps =(dispatch)=>{
    return{
      searchedData:(SearchData,)=>{(dispatch({type:'SEARCH_BOOKS',payload:SearchData, }))},
      searchedEnable:(searchEnable,)=>{(dispatch({type:'SEARCH_ENABLE',payload:searchEnable, }))}
 
  }
  }
  export default connect(mapStateToProps,mapDispatrchToProps)(withRouter(Headers));
  


