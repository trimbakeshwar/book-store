import React, { Component } from 'react';
import Card from "@material-ui/core/Card";
import "../../stylepage/profile.scss"
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router';
 class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    logout = () => {
        localStorage.removeItem("Token");
        localStorage.removeItem("Name");
        localStorage.removeItem("email");
        localStorage.removeItem("User Role");
        localStorage.removeItem("Address");
        localStorage.removeItem("city");
        localStorage.removeItem("phoneNumber");
        this.props.history.push("/");
    }
    WishlistItom = () => {
        this.props.history.push("/wishlist");
    }
    render() {
        return (

            <Card  className="CardContainer">
               
               <div >

                   <div className="profileDetail">
                   <div className="profileImage"></div>
                       
                       <div className="columnSetting">
                       <div className="lable">
                           <div> Name</div><br />
                           <div > Email</div><br />
                           <div > Address</div><br />
                           <div > City</div><br />
                           <div > Phone_Number</div><br />
                       </div>
                       <div className="info">
                           <div > {localStorage.getItem("Name")}</div><br />
                           <div >{localStorage.getItem("email")}</div><br />
                           <div > {localStorage.getItem("Address")}</div><br />
                           <div > {localStorage.getItem("city")}</div><br />
                           <div> {localStorage.getItem("phoneNumber")}</div><br />
                       </div>
                       </div>
                       <div className="profileButtonSetting">
                         
                           <div className="buttonpossition">
                               <div className="spacing">
                                   <Button variant="contained" color="primary" onClick={this.logout} >
                                       logout
                                    </Button>
                                   </div>
                                   <div>
                                       {(localStorage.getItem("User Role") === "Customer")?
                                   (<Button variant="contained" color="primary" onClick={this.WishlistItom}>
                                       wishlist
                                    </Button>):(undefined)
                                     }
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </Card>        
        )
    }
}

export default  withRouter(Profile)