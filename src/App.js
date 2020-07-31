import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';   
import  Registration from "./components/registration"
import Login from "./components/login"
import AdminDashboard from "./components/adminDashbord/adminDashbord";
import UpdateBooks from "./components/adminDashbord/updateBook"
import Store from "./components/userstore/store"
import DisplayBook from "./components/userstore/displayCard"
import AddInCart from "./components/userstore/addCart"
import AddInWishLIst from "./components/userstore/wishlist"
import OrderSummary from "./components/userstore/orderSummary"
import { Switch  } from "react-router-dom";
import { CustomerRoute, AdminRoute, PublicRoute } from "./services/authgard";
function App() {
  return (
    <Router>
      <Switch>
      <PublicRoute exact path="/registration" component={Registration}/> 
      <PublicRoute exact path="/" component={Login}/>
   
    <AdminRoute  path="/adminDashbord/updateBook" component={UpdateBooks}/>
    <AdminRoute exact path="/adminDashbord" component={AdminDashboard}/> 
   
    <Route exact path="/store" component={Store}/> 
    <CustomerRoute exact path="/addCart" component={AddInCart}/>
    <Route exact path="/displayCard" component={DisplayBook}/> 
    <CustomerRoute exact path="/wishlist" component={AddInWishLIst}/> 
    <CustomerRoute exact path="/orderSummary" component={OrderSummary}/>
    </Switch>
   </Router>
  );
}
export default App;