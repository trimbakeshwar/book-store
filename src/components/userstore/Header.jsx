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
import { connect } from 'react-redux'

import { withRouter } from 'react-router';
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
  return (
  
    <div  >
      
      <div className="{classes.root}">
       
        <AppBar position="fixed" style={{backgroundColor: "rgba(160, 48, 55, 0.925)"}} className={clsx(classes.appBar)} >
          <Toolbar color="rgb(192, 14, 14)">
             
              <div className="iconimage" />  
              <div className="name" >Bookstore</div>
            <div className="searchBar" >
              <div>
                <IconButton><SearchIcon /></IconButton>
              </div>
              <div  >
                <TextField className="inputText" placeholder="Search" onChange={search}
                  InputProps={{ disableUnderline: true, }}  fullWidth>search</TextField>
              </div>
            </div>
            <div className="shopingcart">
             <span className="cart">cart </span>
            <ShoppingCartOutlinedIcon onClick={OpenCartPage} />
             </div>
           
          </Toolbar>
        </AppBar>
      </div>
  
      
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
  


