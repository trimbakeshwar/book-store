import IconButton from '@material-ui/core/IconButton';
import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import "../../stylepage/addNote.scss"
import { TextField, Button } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import adminService from "../../services/adminServices";
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import {connect} from 'react-redux'
const service = new adminService();
class UpdateBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: "",
            image:null,
            Title: "",
            Author: "",
            Description: "",
            price: null,
            booksAvailable: null,
            closeDilog: false,

        }

    }
    handleTitleChange = (e) => {
        this.setState({ Title: e.target.value })
    }
    handleDescriptionChange = (e) => {
        this.setState({ Description: e.target.value })
    }
    handleAutherChange = (e) => {
        this.setState({ Author: e.target.value })
    }
   
    handleQuantityChange = (e) => {
        this.setState({ booksAvailable: e.target.value })
    }
    handleprizeChange = (e) => {
        this.setState({ price: e.target.value })
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
    cancle = () => {
        this.setState({ closeDilog: true })
        console.log("closeDilog", this.state.closeDilog)
    }
    editbook = () => {
        let requestData = {
            Title: this.state.Title,
            Description: this.state.Description,
            Author: this.state.Author,
            BooksAvailable: this.state.booksAvailable,
            Price: this.state.price,
           
        }
        console.log("req Data", requestData)
        service.updateBooksDetail(requestData,this.props.myupdateBookData.bookId).then((Response) => {
            console.log("Response", Response);
            this.props.changeopenupdateBook(false)
            this.props.history.push('./')
        }).catch((err) => {
            console.log(err);
        })
        const BookImage=this.state.imageUrl
        
        service.uploadImage(BookImage,this.state.BookId).then((Response)=>{
            console.log("image upload ",Response)
        }).catch((err)=>{
             console.log("image upload ",Response)
        })
    }
   async componentDidMount(){
      
           this.setState({ Title :this.props.myupdateBookData.title,     
            Description :this.props.myupdateBookData.description,
                            Author :this.props.myupdateBookData.author,
                            imageUrl :this.props.myupdateBookData.imageUrl,
                            price : this.props.myupdateBookData.price,
                            booksAvailable :this.props.myupdateBookData.booksAvailable,
                            BookId :this.props.myupdateBookData.bookId,
           
                        })
           
        console.log("comp did mount",this.state)
    }
    CloseBook=()=>{
        this.props.changeopenupdateBook(false)
        this.props.history.push('./')
    }

    render() {
       // console.log(" dilog open ",this.props.openBook)
        console.log(" update book",this.props.myopenupdateBook)
        return (
            <Dialog
                open={this.props.myopenupdateBook}
               // onClose={this.CloseBook}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className="dilogContainer">
                    <div className="dilogHederContainer">
                        <div className="dilogicon" />
                        <div className="dilogname" >AddBooks</div>
                    </div>
                    <div className="imageContainer">
                        {(this.state.imageUrl !== null && this.state.imageUrl !== undefined) ?
                            <img src={this.state.imageUrl}
                                className='BookImageAdmin'
                                alt="BookImage"
                                width="100px"
                                height="100px"
                                onClick={() =>this.fileUpload.click()}

                            />
                            :
                            <div onClick={() =>this.fileUpload.click() }>
                        <ImageOutlinedIcon/>
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
                    </div>
                    <div className="textFields"><TextField
                        id="outlined-Title" label="Title"
                        type="text" variant="outlined"
                        value={this.state.Title}
                       // defaultValue={this.props.book.Title}
                        onChange={this.handleTitleChange}
                        size="small" fullWidth>Title</TextField><br /></div>
                    <div className="textFields">
                        <TextField id="outlined-Auther"
                            label="Auther" type="text"
                            variant="outlined"
                              value={this.state.Author}
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
                        value={this.state.price}
                        onChange={this.handleprizeChange}
                        size="small" fullWidth>prize</TextField><br /></div>
                    <div className="textFields"><TextField
                        id="outlined-prize" label="Quantity"
                        type="number" variant="outlined"
                        value={this.state.booksAvailable}
                        onChange={this.handleQuantityChange}
                        size="small" fullWidth>Quantity</TextField><br /></div>
                    <div className="buttonContainer">

                        <Button variant="contained" color="primary" onClick={this.editbook}>
                            edit
                        </Button>
                        <Button className="buttons" variant="contained" color="secondary" onClick={this.CloseBook}>
                            cancle
                        </Button>
                    </div>
                </div>

            </Dialog>
        );
    }
} 
const mapStateToProps=(state)=>{
    return{
      myopenupdateBook:state.openupdateBook,
     myupdateBookData:state.updateBookData
    }
    } 
    const mapDispatrchToProps =(dispatch)=>{
      return{
    changeopenupdateBook:(openupdateBook)=>{(dispatch({type:'OPEN_UPDATE_BOOK_DILOGBOX',payload:openupdateBook}))},
    sendDataForUpdateBook:(updateBookData)=>{(dispatch({type:'OPEN_UPDATE_BOOK_DATA',payload:updateBookData}))}
      }
    }
    export default connect(mapStateToProps,mapDispatrchToProps)(UpdateBooks);
    