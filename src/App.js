import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';   
import  Registration from "./components/registration"
import Login from "./components/login"
import AdminDashboard from "./components/adminDashbord/adminDashbord";
import UpdateBooks from "./components/adminDashbord/updateBook"
import { CustomerRoute, AdminRoute, PublicRoute } from "./services/authgard";
import { Switch  } from "react-router-dom";
import Loader from 'react-loader-spinner'
//import Store from "./components/userstore/store"
const Store =  lazy(() => import("./components/userstore/store"));
//import DisplayBook from "./components/userstore/displayCard"
const DisplayBook =  lazy(() => import( "./components/userstore/displayCard"));
//import AddInCart from "./components/userstore/addCart"
const AddInCart =  lazy(() => import("./components/userstore/addCart"));
//import AddInWishLIst from "./components/userstore/wishlist"
const AddInWishLIst =  lazy(() => import("./components/userstore/wishlist"));
//import OrderSummary from "./components/userstore/orderSummary"
const OrderSummary =  lazy(() => import("./components/userstore/orderSummary"));
//import Profile from "./components/userstore/profile"
const Profile =  lazy(() => import("./components/userstore/profile"));
//const Store =  lazy(() => import("./components/userstore/store"));
function App() {
  return (
    <Router>
     
      <Switch>
      <PublicRoute exact path="/registration" component={Registration}/> 
      <PublicRoute exact path="/" component={Login}/>
   
    <AdminRoute  path="/adminDashbord/updateBook" component={UpdateBooks}/>
    <AdminRoute exact path="/adminDashbord" component={AdminDashboard}/> 
    <Suspense fallback={<div>  <Loader
         type="TailSpin"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={30000} //3 secs
 
      /></div>}>
    <Route exact path="/store" component={Store}/> 
    </Suspense>
    <CustomerRoute exact path="/addCart" component={AddInCart}/>
    <Route exact path="/displayCard" component={DisplayBook}/> 
    <CustomerRoute exact path="/wishlist" component={AddInWishLIst}/> 
    <CustomerRoute exact path="/orderSummary" component={OrderSummary}/>
    <Route exact path="/profile" component={Profile}/>
    </Switch>
   
   </Router>
  );
}
export default App;