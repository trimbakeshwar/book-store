
import IconButton from '@material-ui/core/IconButton';
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Masonry from 'react-masonry-css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

import { withRouter } from 'react-router';

import adminService from "../../services/adminServices";
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import { TextareaAutosize } from '@material-ui/core';
const service = new adminService();


export default class DisplayBook extends Component {

  constructor(props){
    super(props);
    this.state={
      bookDetail:[],
   
      open:false  ,
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
  getBooksList=()=>{
   service.getbook().then((Response)=>{
     console.log("geting",Response.data.data)
     this.setState({ bookDetail: Response.data.data })
  }).catch((err)=>{

   console.log("err",err)
  })
 }
 
render(){
   const bookCard = this.state.bookDetail.reverse().map((values, index) => {
        return (
            <Card>
                <div>
                    {values.title}
                </div>
                <div>
                    {values.author}
                </div>
                <div>
                    {values.price}
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