import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';   
import  Registration from "./components/registration"
import Login from "./components/login"
import AdminDashboard from "./components/adminDashbord/adminDashbord";
import UpdateBooks from "./components/adminDashbord/updateBook"
function App() {
  return (
    <div >
      <Router>
      <Route exact path="/" component={Login}/>
    <Route exact path="/registration" component={Registration}/> 
    <Route exact path="/adminDashbord" component={AdminDashboard}/> 
    <Route  path="/updateBook" component={UpdateBooks}/> 
    </Router>
    </div>
  );
}
export default App;