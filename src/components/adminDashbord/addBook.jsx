import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import "../../stylepage/addNote.scss"
import { TextField, Button } from '@material-ui/core';

export default class AddBooks extends Component {
    constructor(props) {
        super(props)
        this.state = {


        }

    }
    render(){
        return(
        <Dialog 
        open={this.props.openBook}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
          <div className="dilogContainer">
          <div className="dilogHederContainer">
       <div className="dilogicon" />  
              <div className="dilogname" >AddBooks</div>
              </div>
                <div > 
                 <div className="textFields"><TextField  id="outlined-Title" label="Title" type="text" variant="outlined" 
                   size="small" fullWidth>Title</TextField><br /></div>
                  <div className="textFields"> <TextField  id="outlined-Auther" label="Auther" type="text" variant="outlined" 
                    size="small" fullWidth>Auther</TextField><br /></div>
                  <div className="textFields"> <TextField  id="outlined-Description" label="Description" type="text" variant="outlined" 
                     size="small" fullWidth>Description</TextField><br /></div>
                  <div className="textFields"><TextField  id="outlined-prize" label="prize" type="number" variant="outlined" 
                    size="small" fullWidth>prize</TextField><br /></div>
                   <div className="textFields"><TextField  id="outlined-prize" label="Quantity" type="number" variant="outlined" 
                    size="small" fullWidth>Quantity</TextField><br /></div>
                </div>
                </div>
      </Dialog>
        );
    }
} 