import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import { TextField } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import "../../stylepage/adminDashbord.scss"
import "../../stylepage/logo.scss"
import AddCircleIcon from '@material-ui/icons/AddCircle';
 import MenuBookSharpIcon from '@material-ui/icons/MenuBookSharp';
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
export default function AdminDashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const [searchtextField, setsearchtextField] = React.useState(false)
  
  const searchClick = () => {
    setsearchtextField(true)
  }
  return (
    <div  >
      <div className="{classes.root}">
       
        <AppBar position="fixed" style={{backgroundColor: "rgb(192, 14, 14)"}} className={clsx(classes.appBar)} >
          <Toolbar color="rgb(192, 14, 14)">
             
              <div className="iconimage" />  
              <div className="name" >Bookstore</div>
            <div className="searchBar" onClick={searchClick}>
              <div>
                <IconButton><SearchIcon /></IconButton>
              </div>
              <div  >
                <TextField className="inputText" placeholder="Search"
                  InputProps={{ disableUnderline: true, }}  fullWidth>search</TextField>
              </div>
            </div>
            <div className="bookIcon">
           <AddCircleIcon/>
             < MenuBookSharpIcon />
             </div>
           
          </Toolbar>
        </AppBar>
      </div>
      
    
    </div>
  );
}