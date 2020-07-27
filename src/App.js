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
function App() {
  return (
    <div >
      <Router>
      <Route exact path="/" component={Login}/>
    <Route exact path="/registration" component={Registration}/> 
    <Route exact path="/adminDashbord" component={AdminDashboard}/> 
    <Route  path="/updateBook" component={UpdateBooks}/>
    <Route exact path="/store" component={Store}/> 
    <Route exact path="/addCart" component={AddInCart}/>
    <Route exact path="/displayCard" component={DisplayBook}/> 
    <Route exact path="/wishlist" component={AddInWishLIst}/> 
    
    </Router>
    </div>
  );
}
export default App;