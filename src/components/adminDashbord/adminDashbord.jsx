import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import { TextField } from '@material-ui/core';
import AddBooks from "./addBook" 
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import "../../stylepage/adminDashbord.scss"
import "../../stylepage/logo.scss"
import AddCircleIcon from '@material-ui/icons/AddCircle';
 import MenuBookSharpIcon from '@material-ui/icons/MenuBookSharp';
 import GetAllBook from "./getAllBookList"
 import {connect} from 'react-redux'
 import adminService from "../../services/adminServices";
 const service = new adminService();
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "100px",
  },
  appBar: {
    width: "100%",
   // zIndex: theme.zIndex.drawer + 1,
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
function AdminDashboard(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [searchtextField, setsearchtextField] = React.useState(false)
  const [openaddBook, setopenaddBook] = React.useState(false)
  const [Search, setSearch] = React.useState('');
  const searchClick = () => {
    setsearchtextField(true)
  }
  const addBook =()=>{
  
    props.changeopenBook(!openaddBook)
  }
  const search=(e)=>{
    console.log("search")
     setSearch(e.target.value)
     service.SearchBook(Search).then((Response)=>{
      console.log("search",Response.data.data)
      props.changeadminSearch(Response.data.data,true)
     
    }).catch((err)=>{
      console.log("err",err)
    })
  }
  return (
  
    <div  >
        {  console.log("openbook",openaddBook)}
      <div className="{classes.root}">
       
        <AppBar position="fixed" style={{backgroundColor: "rgba(160, 48, 55, 0.925)"}} className={clsx(classes.appBar)} >
          <Toolbar color="rgb(192, 14, 14)">
             
              <div className="iconimage" />  
              <div className="name" >Bookstore</div>
            <div className="searchBar" onClick={searchClick}>
              <div>
                <IconButton><SearchIcon /></IconButton>
              </div>
              <div  >
                <TextField className="inputText" placeholder="Search"
                  InputProps={{ disableUnderline: true, }} onChange={search} fullWidth>search</TextField>
              </div>
            </div>
            <div className="bookIcon">
             <AddCircleIcon onClick={addBook}/>
             < MenuBookSharpIcon />
             <AddBooks  />
             </div>
           
          </Toolbar>
        </AppBar>
      </div>
     <GetAllBook />
    
    </div>
  );
}

const mapStateToProps=(state)=>{
  return{
    openBook:state.openBook,
   myadminSearchEnable:state.adminSearchEnable,
   myadminsearchData:state.adminsearchData
  }
  } 
  const mapDispatrchToProps =(dispatch)=>{
    return{
  changeopenBook:(openBook)=>{(dispatch({type:'OPEN_ADD_BOOK_DILOGBOX',payload:openBook}))},
  changeadminSearch:(adminsearchData,adminSearchEnable)=>{(dispatch({type:'ADMIN_SEARCH',payload:adminSearchEnable,info:adminsearchData}))},

   }
  }
  export default connect(mapStateToProps,mapDispatrchToProps)(AdminDashboard);
  