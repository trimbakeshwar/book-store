import React from "react";
import "../../stylepage/orderSummary.scss";
import Card from "@material-ui/core/Card";
import CheckoutMessage from "../../images/orderSummaryimg.jpg";
import { Button } from "@material-ui/core";
import { connect } from 'react-redux'

 function OrderSummary(props) {
const goToStore = () => {
  props.history.push("/");
};
    return (
      <div className="ordersummaryPage">
     
        <div className="summary">
          <div className="ordersummaryimage">
            <img
              src={CheckoutMessage}
              className="summaryimage"
              alt="summary img"
            />z
          </div>
          <br />
          <div className="Comfirmation">
            Hurray!!!your order is confirmed 
             the order id is #{props.myorderID} save order id for 
             further communication.. 
          </div>

         
          <div style={{position: "relative",
    bottom: "70px"}}>
            <Card className="table">

              <div className="flexSetting">
                <div className="Column">
                  <div className="header"> Email Id</div><br/>
                  <div className="header">admin@bookstore.com</div>
                </div>
                <div className="Column">
                  <div className="header">Contact us </div> <br/>
                  <div className="header">+919607610044 </div>
                </div>
                <div className="Column">
                  <div className="header">Address</div>
                  <br/>
                  <div className="header">
                     42, 14th Main, 15th Cross,Sector 4,opp to BDA complex,
                      near Kumarakom restraurant,HSR Layout,Banglore 560034
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div style={{position: "relative",bottom: "60px"}}>

            <Button
              className="button-Login"
              variant="contained"
              color="primary"
              onClick={()=>props.history.push("/store")}
            >
              CONTINUE SHOPPING
            </Button>
          </div>
        </div>
        <br />

        
        <div>
        
        </div>
      </div>
    );
}
const mapStateToProps = (state) => {
  return {
    
      myorderID: state.orderID
  }
}


export default connect(mapStateToProps)(OrderSummary);
