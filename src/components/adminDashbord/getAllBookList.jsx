import IconButton from '@material-ui/core/IconButton';
 import React, { Component } from 'react';
 import Table from '@material-ui/core/Table';
 import TableBody from '@material-ui/core/TableBody';
 import TableCell from '@material-ui/core/TableCell';
 import TableContainer from '@material-ui/core/TableContainer';
 import TableHead from '@material-ui/core/TableHead';
 import TableRow from '@material-ui/core/TableRow';
 import Paper from '@material-ui/core/Paper';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';



 class GetAllBook extends Component {
  
   constructor(props){
     super(props);
     this.state={
       bookDetail:[],
       tempBooksArry:[]
     }
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
 
  EditData=()=>{

  }
  DeleteData=()=>{

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
           
            this.state.tempBooksArry.map((book, index) => {
              return <TableRow key={index}>
                 
                    
              
               <TableCell  align="left">  {index + 1}</TableCell>
               <TableCell align="left">{book.Title}</TableCell>
               <TableCell align="left">{book.author}</TableCell>
               <TableCell align="left">{book.price}</TableCell>
               <TableCell align="left">{book.quantity}</TableCell>
               <TableCell align="left"> <IconButton><EditOutlinedIcon onClick={this.editData(book)}  />  </IconButton> </TableCell>
                <TableCell align="left"> <IconButton><DeleteOutlineOutlinedIcon onClick={this.DeleteData()} /></IconButton> </TableCell>
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

 export default GetAllBook;

  
   
    