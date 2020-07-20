import IconButton from '@material-ui/core/IconButton';
import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import "../../stylepage/addNote.scss"
import { TextField, Button } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
export default class AddBooks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageUrl: "",
            Title: "",
            Auther: "",
            Description: "",
            prize: "",
            Quantity: ""

        }
      
    }
    handleAutherChange= (e) => {
        this.setState({Auther:e.target.value})
    } 
    handleTitleChange = (e) => {
        this.setState({Title:e.target.value}) 
    } 
     handleQuantityChange = (e) => {
        this.setState({Quantity:e.target.value})
     } 
      handleprizeChange= (e) => {
        this.setState({prize:e.target.value})
      } 
       handleDescriptionChange= (e) => {
        this.setState({Description:e.target.value})
       } 

       
    // handleChange = (e) => {
       
    //     this.setState({ [e.target.name]: e.target.value })
    //     { console.log("output",this.state)}
    // }
    ImageHandler = (e) => {
        e.preventDefault();
        this.setState({
            image: e.target.files[0],
            imageUrl: URL.createObjectURL(e.target.files[0])
        });
        console.log("imageUrl", this.state.imageUrl)
    }
    AddBook = () =>{
       let requestData={
        Title:this.state.Title,
         Auther:this.state.Auther,
          Quantity:this.state.Quantity,
           prize:this.state.prize,
            Description:this.state.Description,
            imageUrl: this.state.imageUrl
       }  
       console.log("req Data",requestData)
     
    }
  
    render() {
        return (
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
                        {(this.state.imageUrl !== null && this.state.imageUrl !== undefined) ?
                            <img src={this.state.imageUrl}
                                className='BookImageAdmin'
                                alt="BookImage"
                                onClick={() =>
                                    this.fileUpload.click()
                                }
                            />
                            : <div onClick={() =>
                                this.fileUpload.click()
                            }>
                                <Button style={{ textTransform: 'none' }}><ImageIcon />BookImage</Button>
                            </div>
                        }
                        <input
                            type="file"
                            style={{ display: "none" }}
                            onChange={this.ImageHandler}
                            ref={(fileUpload) =>
                                (this.fileUpload = fileUpload)
                            }
                        ></input>

                        <div className="textFields"><TextField
                            id="outlined-Title" label="Title"
                            type="text" variant="outlined"
                           // value={this.state.Title}
                            onChange={this.handleTitleChange}
                            size="small" fullWidth>Title</TextField><br /></div>
                        <div className="textFields">
                            <TextField id="outlined-Auther"
                                label="Auther" type="text"
                                variant="outlined"
                              //  value={this.state.Auther}
                                onChange={this.handleAutherChange}
                                size="small" fullWidth>Auther</TextField><br /></div>

                        <div className="textFields"> <TextField
                            id="outlined-Description" label="Description"
                            type="text" variant="outlined"
                            value={this.state.Description}
                            onChange={this.handleDescriptionChange} 
                                                 size="small" fullWidth>Description</TextField><br /></div>
                        <div className="textFields"><TextField
                            id="outlined-prize" label="prize"
                            type="number" variant="outlined"
                            value={this.state.prize}
                            onChange={this.handleprizeChange}
                            size="small" fullWidth>prize</TextField><br /></div>
                        <div className="textFields"><TextField
                            id="outlined-prize" label="Quantity"
                            type="number" variant="outlined"
                            value={this.state.Quantity}
                            onChange={this.handleQuantityChange}
                            size="small" fullWidth>Quantity</TextField><br /></div>
                            <div>
                                <button label="Add" onClick={this.AddBook}>
                                    Add
                                </button>
                            </div>
                    </div>
                </div>
            </Dialog>
        );
    }
} 