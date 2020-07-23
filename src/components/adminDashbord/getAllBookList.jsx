
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
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import UpdateBooks from './updateBook';
import { withRouter } from 'react-router';
import "../../stylepage/getAll.scss"
import adminService from "../../services/adminServices";
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import { TextareaAutosize } from '@material-ui/core';
const service = new adminService();


 class GetAllBook extends Component {

   constructor(props){
     super(props);
     this.state={
       bookDetail:[],
       tempBooksArry:[],
       open:false  
         }
         this.getBooksList()
   }
   getBooksList=()=>{
    service.getbook().then((Response)=>{
      console.log("get",Response.data.data)
      this.setState({ bookDetail: Response.data.data })
   }).then((err)=>{


   })
  }
   componentDidMount(){
    let tempBooksArry=[];
    for(var i=0;i<20;i++){
        tempBooksArry.push({
            title : 'StructureAnalysis',
            decription : 'Structural analysis is the determination of the effects of loads on physical structures and their components. Structures subject to this type of analysis include all that must withstand loads, such as buildings, bridges, aircraft and ships.',
            author : 'mrutunjay',
           // imageUrl : 'https://panchayatrajengineers.files.wordpress.com/2019/02/11820192337156313445039947930760.jpg?w=640',
            price : '250',
            quantity : '25',
            })

    }
   this.setState({tempBooksArry:tempBooksArry})
 }

EditData=(obj)=>{
  console.log("book",obj);
  this.setState=({openBook:true})

  this.props.history.push('./updateBook'+obj);
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



   render() { 
     return ( 
       <div>

       <div className="table">        
       <TableContainer  className="table" component={Paper} >    
       <Table id="tabledata" >
       <TableHead >
        <TableRow >


             <TableCell align="right">sr no</TableCell>
             <TableCell align="left">Title</TableCell>
            <TableCell align="left">Auther</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Quantity</TableCell>
             <TableCell align="left">Edit</TableCell>
            <TableCell align="left">Remove</TableCell>

           </TableRow>
         </TableHead>
         <TableBody>
         {

            this.state.bookDetail.map((book, index) => {
              return <TableRow key={index}>



               <TableCell  align="left">  {index + 1}</TableCell>
               <TableCell align="left">{book.Title}</TableCell>
               <TableCell align="left">{book.author}</TableCell>
               <TableCell align="left">{book.price}</TableCell>
               <TableCell align="left">{book.quantity}</TableCell>
            <TableCell align="left"><Link to={{ pathname: '/updateBook', aboutProps: { myObj: book ,openBook:true } }}>
               <IconButton><EditOutlinedIcon onClick={()=>this.EditData(book)}  />  </IconButton></Link > </TableCell>
                <TableCell align="left"> <IconButton><DeleteOutlineOutlinedIcon onClick={()=>this.DeleteData(book.bookId)} /></IconButton> </TableCell>
             </TableRow>
           })
          }

         </TableBody>
       </Table>
     </TableContainer>
    </div>
    </div>
     );    

  }
 }
 export default withRouter(GetAllBook);





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
