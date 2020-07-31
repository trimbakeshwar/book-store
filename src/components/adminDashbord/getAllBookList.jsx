
import IconButton from '@material-ui/core/IconButton';
 import React, { Component } from 'react';
 import Table from '@material-ui/core/Table';
 import TableBody from '@material-ui/core/TableBody';
 import TableCell from '@material-ui/core/TableCell';
 import TableContainer from '@material-ui/core/TableContainer';
 import TableHead from '@material-ui/core/TableHead';
 import TableRow from '@material-ui/core/TableRow';
 import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Pagination from "@material-ui/lab/Pagination";
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import UpdateBooks from './updateBook';
import { withRouter } from 'react-router';
import "../../stylepage/getAll.scss"
import adminService from "../../services/adminServices";
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import { TextareaAutosize } from '@material-ui/core';
import {connect} from 'react-redux'
import { makeStyles, useTheme,withStyles } from '@material-ui/core/styles';
const service = new adminService();
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.text.secondary,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


 class GetAllBook extends Component {

   constructor(props){
     super(props);
     this.state={
       bookDetail:[],
      page: 1,
      itemsPerPage: 5,
       open:false  
         }
         this.getBooksList()
   }
   getBooksList=()=>{
    service.getbook().then((Response)=>{
      console.log("get",Response.data.data)
      this.setState({ bookDetail: Response.data.data })
   }).catch((err)=>{

    console.log("err",err)
   })
  }
  

EditData=(updateBookData)=>{
  console.log("book",updateBookData);
  this.props.changeopenupdateBook(true)
  this.props.sendDataForUpdateBook(updateBookData)
  this.props.history.push('/adminDashbord/updateBook');
}
  DeleteData=(id)=>{
  service.deletebook(id).then((Response)=>{
    console.log("delete",Response)

  }).catch((err)=>{
    console.log("err",err)
  })
  this.getBooksList()
  }
  openDilog=()=>{
this.setState({open:true})
  }
  changePage = (event, value) => {
    this.setState({ page: value });
  };


   render() { 
   let data=this.state.bookDetail
   .filter((item) => item.isDeleted === false)
   console.log("data",data)
     return ( 
     
      <div className="getAllcontainer">
       <div className="table" >        
       <TableContainer  component={Paper} >    
       <Table  >
       <TableHead id="tableHead" >
        <StyledTableRow id="tableRow" >

        
             <StyledTableCell align="right">sr_no</StyledTableCell>
             <StyledTableCell align="left">bookImage</StyledTableCell>
             <StyledTableCell align="left">Title</StyledTableCell>
            <StyledTableCell align="left">Auther</StyledTableCell>
            <StyledTableCell align="left">Price</StyledTableCell>
            <StyledTableCell align="left">Quantity</StyledTableCell>
             <StyledTableCell align="left">Edit</StyledTableCell>
            <StyledTableCell align="left">Remove</StyledTableCell>

           </StyledTableRow>
         </TableHead>
         <TableBody>
        
         {
           

((this.props.myadminSearchEnable)?(this.props.myadminsearchData):(this.state.bookDetail))
.filter((item) => item.isDeleted === false).slice(
  (this.state.page - 1) * this.state.itemsPerPage,
  this.state.page * this.state.itemsPerPage
)
.map((book, index) => {
              return <StyledTableRow id="tableRow" key={index}>



               <StyledTableCell  align="center">  {index + 1}</StyledTableCell>
               <StyledTableCell  align="left">  <img src={book.bookImage} width="80px" height="100px"/> </StyledTableCell>
               <StyledTableCell align="left">{book.title}</StyledTableCell>
               <StyledTableCell align="left">{book.author}</StyledTableCell>
               <StyledTableCell align="left">{book.price}</StyledTableCell>
               <StyledTableCell align="left">{book.booksAvailable}</StyledTableCell>
            <StyledTableCell align="left"><Link to={{ pathname: '/adminDashbord/updateBook',  }}>
               <IconButton><EditOutlinedIcon onClick={()=>this.EditData(book)}  />  </IconButton></Link > </StyledTableCell>
                <StyledTableCell align="left"> <IconButton><DeleteOutlineOutlinedIcon onClick={()=>this.DeleteData(book.bookId)} /></IconButton> </StyledTableCell>
             </StyledTableRow>
           })
          }

         </TableBody>
        
       </Table>
     </TableContainer>
    
    </div>
    <div className="pagination">
 <Pagination
                count={Math.ceil(
               
((this.props.myadminSearchEnable)?(this.props.myadminsearchData):(this.state.bookDetail)).length / this.state.itemsPerPage
                )}
                page={this.state.page}
                onChange={(event, value) => this.changePage(event, value)}
                defaultPage={1}
                variant="outlined" shape="rounded" color="secondary"
              />
    </div>
   </div>
     );    

  }
 }
 const mapStateToProps=(state)=>{
  return{
    myopenupdateBook:state.openupdateBook,
    myadminSearchEnable:state.adminSearchEnable,
       myadminsearchData:state.adminsearchData
  }
  } 
  const mapDispatrchToProps =(dispatch)=>{
    return{
  changeopenupdateBook:(openupdateBook)=>{(dispatch({type:'OPEN_UPDATE_BOOK_DILOGBOX',payload:openupdateBook}))},
  sendDataForUpdateBook:(updateBookData)=>{(dispatch({type:'OPEN_UPDATE_BOOK_DATA',payload:updateBookData}))},
  changeadminSearch:(adminSearchEnable,adminsearchData)=>{(dispatch({type:'ADMIN_SEARCH',payload:adminSearchEnable,info:adminsearchData}))},
  
}
  }
  export default connect(mapStateToProps,mapDispatrchToProps)(withRouter(GetAllBook));
  






// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import "react-table/react-table.css";
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: [],
//       firstName: "",
//       lastName: ""
//     };
//   }
//   handleChange = event => {
//     if (event.target.name === "firstName")
//       this.setState({ firstName: event.target.value });
//     if (event.target.name === "lastName")
//       this.setState({ lastName: event.target.value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//   };


//   renderEditable = cellInfo => {
//     return (
//       <div style={{ backgroundColor: "#fafafa" }}
//         contentEditable
//         suppressContentEditableWarning
//         onBlur={e => {
//           const data = [...this.state.data];
//           data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
//           this.setState({ data });
//         }}
//         dangerouslySetInnerHTML={{ __html: this.state.data[cellInfo.index][cellInfo.column.id] }} />
//     );
//   };

//   render() {
//     const { data } = this.state;
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           <form onSubmit={this.handleSubmit}>
//             <h3>Add new record</h3>
//             <label>              FirstName:
//     <input type="text" name="firstName"
//                 value={this.state.firstName} onChange={this.handleChange} />
//             </label>{" "}
//             <label>              LastName:
//       <input type="text" name="lastName"
//                 value={this.state.lastName} onChange={this.handleChange} />
//             </label>
//             <input type="submit" value="Add" />
//           </form>
//         </p>
//         <div>
//           <ReactTable
//             data={data}
//             columns={[
//               {
//                 Header: "First Name",
//                 accessor: "firstName", Cell: this.renderEditable
//               },
//               { Header: "Last Name", accessor: "lastName", Cell: this.renderEditable }, { Header: "Full Name", id: "full", accessor: d => (<div dangerouslySetInnerHTML={{ __html: d.firstName + " " + d.lastName }} />) }]} defaultPageSize={10} className="-striped -highlight" />        </div>      </div>);
//   }
// }
// export default App;
